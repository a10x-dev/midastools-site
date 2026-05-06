// Client-side attribution capture + Stripe link rewriting.
//
// What we track:
//  - UTM params from URL (utm_source, utm_medium, utm_campaign, utm_term, utm_content)
//  - document.referrer host (first non-internal referrer wins for first-touch)
//  - landing page path (first page they hit on this device)
//  - first_touch timestamp + last_touch timestamp + session_count
//
// Persistence:
//  - localStorage (90 days, persists across sessions) holds first-touch + last-touch
//  - sessionStorage holds the current-session breadcrumb
//
// Stripe link rewriting:
//  When a Stripe link is clicked we encode the compact attribution into the
//  client_reference_id query param (Stripe accepts up to 200 chars and stores
//  it on the resulting Charge). The webhook decodes it server-side and ties
//  the attribution to the customer's email.
//
// Format: pipe-delimited string under 200 chars, parseable by webhook.
//   att|s=<source>|m=<medium>|c=<campaign>|t=<term>|x=<content>|r=<ref-host>|p=<landing-slug>|f=<first-touch-ms>|n=<session-count>
//
// Example: att|s=gist|c=opus47|r=github.com|p=blog-claude|f=1777800000|n=2
//
// Reading the webhook log will give us the FIRST channel that drove a paying
// customer for the first time — the only attribution model that matters at
// our scale.

import { useEffect } from 'react';

const STORAGE_KEY = 'mt_attr_v2';
const SESSION_KEY = 'mt_attr_session';
const STRIPE_DOMAIN = 'buy.stripe.com';
const NINETY_DAYS_MS = 90 * 24 * 60 * 60 * 1000;
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

function safeRead(storage, key) {
  try {
    const raw = storage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function safeWrite(storage, key, val) {
  try {
    storage.setItem(key, JSON.stringify(val));
  } catch {}
}

function getReferrerHost() {
  if (typeof document === 'undefined') return '';
  const ref = document.referrer || '';
  if (!ref) return '';
  try {
    const url = new URL(ref);
    if (url.hostname.endsWith('midastools.co')) return ''; // internal
    return url.hostname;
  } catch {
    return '';
  }
}

function getLandingSlug() {
  if (typeof window === 'undefined') return '';
  return window.location.pathname.replace(/^\/+/, '').slice(0, 60);
}

function readAttribution() {
  if (typeof window === 'undefined') return null;
  const stored = safeRead(window.localStorage, STORAGE_KEY);
  if (!stored) return null;
  // Expire after 90 days
  if (stored.first_touch_ms && Date.now() - stored.first_touch_ms > NINETY_DAYS_MS) {
    return null;
  }
  return stored;
}

export function captureAttribution() {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  const incoming = {};
  for (const k of UTM_KEYS) {
    const v = params.get(k);
    if (v) incoming[k] = v.slice(0, 60);
  }
  const referrerHost = getReferrerHost();
  if (referrerHost) incoming.referrer_host = referrerHost;
  const landingSlug = getLandingSlug();
  if (landingSlug) incoming.landing_slug = landingSlug;

  const existing = readAttribution();
  const now = Date.now();

  // Mark new session if last_touch is more than 30 min ago OR no existing record
  const sessionState = safeRead(window.sessionStorage, SESSION_KEY) || { stamped: false };
  let sessionCount = existing?.session_count || 0;
  if (!sessionState.stamped) {
    sessionCount += 1;
    safeWrite(window.sessionStorage, SESSION_KEY, { stamped: true });
  }

  const merged = {
    // First-touch fields — only set if missing (preserve original capture)
    utm_source: existing?.utm_source || incoming.utm_source || '',
    utm_medium: existing?.utm_medium || incoming.utm_medium || '',
    utm_campaign: existing?.utm_campaign || incoming.utm_campaign || '',
    utm_term: existing?.utm_term || incoming.utm_term || '',
    utm_content: existing?.utm_content || incoming.utm_content || '',
    referrer_host: existing?.referrer_host || incoming.referrer_host || '',
    landing_slug: existing?.landing_slug || incoming.landing_slug || '',
    first_touch_ms: existing?.first_touch_ms || now,
    // Last-touch fields — overwritten each capture
    last_touch_ms: now,
    last_landing_slug: incoming.landing_slug || '',
    last_referrer_host: incoming.referrer_host || '',
    last_utm_source: incoming.utm_source || existing?.utm_source || '',
    last_utm_campaign: incoming.utm_campaign || existing?.utm_campaign || '',
    session_count: sessionCount,
  };

  safeWrite(window.localStorage, STORAGE_KEY, merged);
  return merged;
}

export function getAttribution() {
  return readAttribution();
}

function sanitize(value) {
  return String(value || '').replace(/[|=]/g, '_').slice(0, 50);
}

function packAttribution(attr) {
  if (!attr) return null;
  const parts = ['att'];
  if (attr.utm_source) parts.push('s=' + sanitize(attr.utm_source));
  if (attr.utm_medium) parts.push('m=' + sanitize(attr.utm_medium));
  if (attr.utm_campaign) parts.push('c=' + sanitize(attr.utm_campaign));
  if (attr.utm_term) parts.push('t=' + sanitize(attr.utm_term));
  if (attr.utm_content) parts.push('x=' + sanitize(attr.utm_content));
  if (attr.referrer_host) parts.push('r=' + sanitize(attr.referrer_host));
  if (attr.landing_slug) parts.push('p=' + sanitize(attr.landing_slug));
  if (attr.first_touch_ms) parts.push('f=' + Math.floor(attr.first_touch_ms / 1000));
  if (attr.session_count) parts.push('n=' + attr.session_count);
  // Cap at 195 chars to leave headroom under Stripe's 200-char limit
  return parts.join('|').slice(0, 195);
}

function attributeStripeHref(href) {
  try {
    const url = new URL(href, window.location.href);
    if (!url.hostname.endsWith(STRIPE_DOMAIN)) return href;
    if (url.searchParams.has('client_reference_id')) return url.toString();
    const attr = readAttribution();
    const packed = packAttribution(attr);
    if (!packed) return href;
    url.searchParams.set('client_reference_id', packed);
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
    captureAttribution();
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);
}

// Server-side decoder (used by webhook). Pure function, no DOM access.
export function decodeAttributionFromClientRef(clientRef) {
  if (!clientRef || typeof clientRef !== 'string') return null;
  if (!clientRef.startsWith('att|')) return null;
  const result = {};
  const parts = clientRef.split('|').slice(1);
  for (const p of parts) {
    const [k, ...rest] = p.split('=');
    const v = rest.join('=');
    if (!k || !v) continue;
    switch (k) {
      case 's': result.utm_source = v; break;
      case 'm': result.utm_medium = v; break;
      case 'c': result.utm_campaign = v; break;
      case 't': result.utm_term = v; break;
      case 'x': result.utm_content = v; break;
      case 'r': result.referrer_host = v; break;
      case 'p': result.landing_slug = v; break;
      case 'f': result.first_touch_at = new Date(parseInt(v, 10) * 1000).toISOString(); break;
      case 'n': result.session_count = parseInt(v, 10); break;
    }
  }
  return result;
}
