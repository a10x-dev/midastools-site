// Shared client-side subscribe helper.
//
// Why this exists: most kit-page and generator subscribe forms historically
// POSTed only { email, source } to /api/subscribe, dropping the visitor's
// captured first-touch attribution (utm_source, landing_slug, referrer_host).
// The backend (pages/api/subscribe.js) persists those fields onto the
// subscriber record — but only what the client sends. So every kit/generator
// signup was landing on the list channel-blind, even when the attribution had
// been captured on page load. This helper attaches getAttribution() to every
// subscribe call so the whole funnel is channel-attributable at the list level.
//
// Caller fields (email, source, business, name) override the attribution
// defaults via the trailing spread. Returns the fetch promise so both
// fire-and-forget (`await submitSubscribe(...)`) and response-reading
// (`const res = await submitSubscribe(...)`) call sites keep working.
import { getAttribution, captureAttribution } from './stripe-attribution';

export async function submitSubscribe(body) {
  let attr = {};
  let liveReferrer = '';
  if (typeof window !== 'undefined') {
    attr = getAttribution() || captureAttribution() || {};
    liveReferrer = (typeof document !== 'undefined' && document.referrer) || '';
  }
  const merged = {
    referrer: liveReferrer || attr.referrer_host || '',
    landing_slug: attr.landing_slug || '',
    utm_source: attr.utm_source || '',
    utm_medium: attr.utm_medium || '',
    utm_campaign: attr.utm_campaign || '',
    utm_term: attr.utm_term || '',
    utm_content: attr.utm_content || '',
    attribution: attr,
    ...body,
  };
  return fetch('/api/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(merged),
  });
}
