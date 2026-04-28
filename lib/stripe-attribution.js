import { useEffect } from 'react';

const UTM_KEYS = ['utm_campaign', 'utm_source', 'utm_medium', 'utm_term', 'utm_content'];
const STORAGE_KEY = 'mt_utm';
const STRIPE_DOMAIN = 'buy.stripe.com';

function readStoredUtm() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function captureUtmFromUrl() {
  if (typeof window === 'undefined') return;
  const params = new URLSearchParams(window.location.search);
  const stored = readStoredUtm();
  let updated = false;
  for (const key of UTM_KEYS) {
    const v = params.get(key);
    if (v && stored[key] !== v) {
      stored[key] = v;
      updated = true;
    }
  }
  if (updated) {
    try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stored)); } catch {}
  }
}

function sanitizeRef(value) {
  return String(value).replace(/[^a-zA-Z0-9_\-]/g, '_').slice(0, 200);
}

function attributeStripeHref(href) {
  try {
    const url = new URL(href);
    if (!url.hostname.endsWith(STRIPE_DOMAIN)) return href;
    if (url.searchParams.has('client_reference_id')) return href;
    const stored = readStoredUtm();
    const campaign = stored.utm_campaign;
    if (!campaign) return href;
    url.searchParams.set('client_reference_id', sanitizeRef(campaign));
    return url.toString();
  } catch {
    return href;
  }
}

function pushDataLayer(eventName, payload) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...payload });
}

function handleClick(event) {
  const anchor = event.target.closest('a[href]');
  if (!anchor) return;
  const href = anchor.getAttribute('href');
  if (!href) return;

  const isStripe = href.includes(STRIPE_DOMAIN);
  const isTripwire = href === '/starter-pack' || href.startsWith('/starter-pack?') || href.startsWith('/starter-pack#');

  if (!isStripe && !isTripwire) return;

  if (isStripe) {
    const newHref = attributeStripeHref(href);
    if (newHref !== href) anchor.setAttribute('href', newHref);
  }

  // Fire GA event so we can see funnel drop-off without guessing
  pushDataLayer('checkout_click', {
    link_url: href,
    link_destination: isStripe ? 'stripe' : 'tripwire',
    cta_id: anchor.getAttribute('data-cta') || 'unspecified',
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    link_text: (anchor.textContent || '').trim().slice(0, 80),
  });
}

export function useStripeAttribution() {
  useEffect(() => {
    captureUtmFromUrl();
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);
}
