import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const DESIGN = {
  gold: '#F5C842',
  black: '#0A0A0A',
  gray900: '#111',
  gray800: '#1A1A1A',
  gray700: '#2A2A2A',
  gray400: '#888',
  gray200: '#CCC',
  white: '#FFF',
};

export const globalStyles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --gold: #F5C842; --black: #0A0A0A; --gray-900: #111; --gray-800: #1A1A1A;
    --gray-700: #2A2A2A; --gray-400: #888; --gray-200: #CCC; --white: #FFF;
    --gold-glow: rgba(245,200,66,0.15);
  }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--black); color: var(--white);
    line-height: 1.6; -webkit-font-smoothing: antialiased;
  }
  a { transition: opacity 0.15s ease; }

  /* Layout: Nav */
  .site-nav {
    display: flex; justify-content: space-between; align-items: center;
    padding: 0 40px; height: 64px;
    border-bottom: 1px solid var(--gray-800);
    position: sticky; top: 0;
    background: rgba(10,10,10,0.97); backdrop-filter: blur(12px);
    z-index: 100;
  }
  .site-logo {
    font-size: 18px; font-weight: 900; text-decoration: none;
    letter-spacing: -0.5px; display: flex; align-items: center; gap: 2px;
  }
  .site-logo .logo-midas { color: var(--gold); }
  .site-logo .logo-tools { color: var(--white); font-weight: 600; }
  .site-logo .logo-dot { color: var(--gold); }
  .nav-links { display: flex; gap: 28px; align-items: center; }
  .nav-link {
    color: var(--gray-400); text-decoration: none; font-size: 14px; font-weight: 500;
    transition: color 0.15s ease;
  }
  .nav-link:hover, .nav-link.active { color: var(--white); }
  .nav-cta {
    background: var(--gold); color: var(--black);
    padding: 8px 20px; border-radius: 8px;
    font-weight: 700; font-size: 13px; text-decoration: none;
    letter-spacing: -0.2px;
  }
  .nav-cta:hover { opacity: 0.9; }

  /* Mobile menu */
  .hamburger {
    display: none; background: none; border: none; cursor: pointer;
    width: 36px; height: 36px; padding: 6px;
    flex-direction: column; justify-content: center; align-items: center; gap: 5px;
  }
  .hamburger span {
    display: block; width: 20px; height: 2px; background: var(--white);
    border-radius: 2px; transition: all 0.3s ease;
  }
  .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(2.5px, 2.5px); }
  .hamburger.open span:nth-child(2) { opacity: 0; }
  .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(2.5px, -2.5px); }

  .mobile-menu {
    display: none; position: fixed; top: 64px; left: 0; right: 0; bottom: 0;
    background: rgba(10,10,10,0.98); backdrop-filter: blur(20px);
    z-index: 99; padding: 32px 24px;
    flex-direction: column; gap: 0;
    animation: menuFadeIn 0.2s ease;
  }
  .mobile-menu.open { display: flex; }
  .mobile-menu a {
    display: block; color: var(--white); text-decoration: none;
    font-size: 18px; font-weight: 600; padding: 16px 0;
    border-bottom: 1px solid var(--gray-800);
  }
  .mobile-menu a:first-child { border-top: none; }
  .mobile-menu .mobile-cta {
    display: block; background: var(--gold); color: var(--black);
    text-align: center; padding: 16px; border-radius: 10px;
    font-weight: 800; font-size: 16px; text-decoration: none;
    margin-top: 24px;
  }

  @keyframes menuFadeIn {
    from { opacity: 0; transform: translateY(-8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Layout: Footer */
  .site-footer {
    border-top: 1px solid var(--gray-800);
    padding: 64px 40px 40px;
    max-width: 1100px; margin: 0 auto;
  }
  .footer-grid {
    display: grid; grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 48px; margin-bottom: 48px;
  }
  .footer-brand p { color: var(--gray-400); font-size: 14px; line-height: 1.7; margin-top: 16px; max-width: 280px; }
  .footer-col h4 {
    font-size: 12px; font-weight: 700; color: var(--gray-400);
    text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 16px;
  }
  .footer-col a {
    display: block; color: var(--gray-400); text-decoration: none;
    font-size: 14px; padding: 4px 0;
    transition: color 0.15s ease;
  }
  .footer-col a:hover { color: var(--white); }
  .footer-bottom {
    border-top: 1px solid var(--gray-800);
    padding-top: 24px; display: flex;
    justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: 16px;
  }
  .footer-bottom p { color: var(--gray-400); font-size: 13px; }
  .footer-bottom a { color: var(--gray-400); text-decoration: none; font-size: 13px; }
  .footer-bottom a:hover { color: var(--white); }

  /* Common components */
  .section-label {
    font-size: 12px; font-weight: 700; color: var(--gold);
    letter-spacing: 2px; text-transform: uppercase; margin-bottom: 16px;
  }
  .btn-primary {
    display: inline-block; background: var(--gold); color: var(--black);
    padding: 16px 36px; border-radius: 10px;
    font-size: 16px; font-weight: 800; text-decoration: none;
    letter-spacing: -0.3px; transition: transform 0.15s ease, box-shadow 0.15s ease;
  }
  .btn-primary:hover { transform: translateY(-1px); box-shadow: 0 4px 24px rgba(245,200,66,0.25); }
  .btn-outline {
    display: inline-block; border: 1.5px solid var(--gold); color: var(--gold);
    padding: 14px 32px; border-radius: 10px;
    font-size: 15px; font-weight: 700; text-decoration: none;
    transition: background 0.15s ease;
  }
  .btn-outline:hover { background: rgba(245,200,66,0.08); }
  .badge {
    display: inline-block;
    background: rgba(245,200,66,0.08); border: 1px solid rgba(245,200,66,0.2);
    color: var(--gold); padding: 6px 16px; border-radius: 100px;
    font-size: 12px; font-weight: 600; letter-spacing: 0.5px;
  }

  /* Mobile */
  @media(max-width:700px) {
    .site-nav { padding: 0 20px; height: 56px; }
    .nav-links { display: none; }
    .hamburger { display: flex; }
    .mobile-menu { top: 56px; }
    .site-footer { padding: 48px 20px 32px; }
    .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
    .footer-bottom { flex-direction: column; align-items: flex-start; }
  }
  @media(max-width:480px) {
    .footer-grid { grid-template-columns: 1fr; gap: 28px; }
  }
`;

export default function Layout({ children }) {
  const router = useRouter();
  const path = router.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{globalStyles}</style>

      <nav className="site-nav">
        <Link href="/" className="site-logo">
          <span className="logo-midas">MIDAS</span>
          <span className="logo-dot">&middot;</span>
          <span className="logo-tools">TOOLS</span>
        </Link>
        <div className="nav-links">
          <Link href="/services" className={`nav-link${path === '/services' ? ' active' : ''}`}>Services</Link>
          <Link href="/blog" className={`nav-link${path.startsWith('/blog') ? ' active' : ''}`}>Blog</Link>
          <Link href="/receptionist" className={`nav-link${path === '/receptionist' ? ' active' : ''}`}>AI Receptionist</Link>
          <Link href="/done-for-you" className={`nav-link${path === '/done-for-you' ? ' active' : ''}`}>Done For You</Link>
          <Link href="/bundle" className="nav-cta">All Kits — $97</Link>
        </div>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(false)}>
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/receptionist">AI Receptionist</Link>
        <Link href="/done-for-you">Done For You</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/real-estate-kit">Real Estate Kit</Link>
        <Link href="/content-creator-kit">Content Creator Kit</Link>
        <Link href="/bundle" className="mobile-cta">Get All Kits — $97</Link>
      </div>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="site-logo" style={{ fontSize: 16 }}>
              <span className="logo-midas">MIDAS</span>
              <span className="logo-dot">&middot;</span>
              <span className="logo-tools">TOOLS</span>
            </Link>
            <p>AI automation tools and services for entrepreneurs and small businesses. Deploy AI that works 24/7 — so you can focus on what matters.</p>
          </div>
          <div className="footer-col">
            <h4>Products</h4>
            <Link href="/">Starter Kit</Link>
            <Link href="/real-estate-kit">Real Estate Kit</Link>
            <Link href="/content-creator-kit">Creator Kit</Link>
            <Link href="/bundle">All Kits Bundle</Link>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <Link href="/receptionist">AI Receptionist</Link>
            <Link href="/services">AI Sales Agent</Link>
            <Link href="/done-for-you">Done For You</Link>
            <a href="https://cal.com/manduks/midastools" target="_blank" rel="noopener">Book a Call</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link href="/blog">Blog</Link>
            <a href="mailto:iam@armando.mx">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Midas Tools. All rights reserved.</p>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="mailto:iam@armando.mx">iam@armando.mx</a>
          </div>
        </div>
      </footer>
    </>
  );
}
