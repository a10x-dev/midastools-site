// Per-company brand-color overrides for /q/[slug] pages.
// Goal: when a prospect at Hearst lands on their custom quiz, the page
// hints at Hearst's color palette (subtly — we're not reproducing logos
// or trademarks, just signaling "we noticed where you work").
//
// Themes are deliberately conservative — accent + a single highlight.
// Full brand kits are not required, and using more than this risks
// trademark concerns. Defaults fall back to the MidasTools accent.

const DEFAULT_THEME = {
  accent: '#3B5FFF',
  highlight: '#111827',
  surface: '#F9FAFB',
  motif: 'midastools',
};

export const COMPANY_THEMES = {
  'Hearst Television': { accent: '#0033A0', highlight: '#111827', surface: '#F4F6FB', motif: 'broadcast' },
  'Hearst': { accent: '#0033A0', highlight: '#111827', surface: '#F4F6FB', motif: 'magazine' },
  'Hearst Technology': { accent: '#0033A0', highlight: '#111827', surface: '#F4F6FB', motif: 'technology' },
  'Penske Media Corporation': { accent: '#000000', highlight: '#E63946', surface: '#F9F9F9', motif: 'portfolio' },
  'BuzzFeed': { accent: '#EE3322', highlight: '#FFCC00', surface: '#FFFEF5', motif: 'media' },
  'Dotdash Meredith': { accent: '#7C3AED', highlight: '#111827', surface: '#FBFAFC', motif: 'publishing' },
  'Conde Nast': { accent: '#1A1A1A', highlight: '#9F8F5E', surface: '#FAFAF7', motif: 'editorial' },
  'Vox Media': { accent: '#FFFF00', highlight: '#111827', surface: '#FFFEF5', motif: 'modern-media' },
  'Forbes': { accent: '#0067B1', highlight: '#FFFFFF', surface: '#F5F8FB', motif: 'business' },
};

export function getCompanyTheme(companyName) {
  if (!companyName) return DEFAULT_THEME;
  if (COMPANY_THEMES[companyName]) return COMPANY_THEMES[companyName];
  // Fuzzy match on company name fragments — handles "Hearst Magazines" vs "Hearst"
  const lower = companyName.toLowerCase();
  for (const [k, v] of Object.entries(COMPANY_THEMES)) {
    if (lower.includes(k.toLowerCase()) || k.toLowerCase().includes(lower.split(' ')[0])) {
      return v;
    }
  }
  return DEFAULT_THEME;
}

export { DEFAULT_THEME };
