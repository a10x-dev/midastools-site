// Client-side event tracking helper.
//
// Fires events to /api/track with the visitor's current attribution attached.
// Fire-and-forget (never blocks the UI). Used by Layout for auto page_view +
// can be called from any component for cta_click, custom events, etc.

import { useEffect, useRef } from 'react';
import { getAttribution, captureAttribution } from './stripe-attribution';

const SESSION_ID_KEY = 'mt_session_id';

// Stable per-browser session ID so analysis can group raw page_view events
// into unique sessions. Persists across reloads (localStorage) — closer to
// "unique browser" than "unique pageview." Closes the S27 capability gap that
// blocked accurate citation-traffic uniqueness counting.
function getSessionId() {
  if (typeof window === 'undefined') return null;
  try {
    let id = window.localStorage.getItem(SESSION_ID_KEY);
    if (!id) {
      id =
        (window.crypto && typeof window.crypto.randomUUID === 'function')
          ? window.crypto.randomUUID()
          : `s_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
      window.localStorage.setItem(SESSION_ID_KEY, id);
    }
    return id;
  } catch {
    return null;
  }
}

export function trackEvent(eventType, payload = {}) {
  if (typeof window === 'undefined') return;
  try {
    const attr = getAttribution() || captureAttribution();
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: eventType,
        page_path: window.location.pathname + window.location.search,
        payload,
        attribution: attr,
        session_id: getSessionId(),
      }),
      keepalive: true,
    }).catch(() => {});
  } catch {}
}

// Hook: fire a single page_view event when component mounts on a new page.
export function usePageViewTracking(pagePath) {
  const fired = useRef(false);
  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    trackEvent('page_view', { path: pagePath || (typeof window !== 'undefined' ? window.location.pathname : '') });
  }, [pagePath]);
}

// Hook: fire scroll-depth events at 50% / 75% / 100%.
export function useScrollDepthTracking() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const fired = { 50: false, 75: false, 100: false };
    const handler = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      const pct = Math.round((scrolled / total) * 100);
      for (const milestone of [50, 75, 100]) {
        if (!fired[milestone] && pct >= milestone) {
          fired[milestone] = true;
          trackEvent('scroll_depth', { milestone });
        }
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
}
