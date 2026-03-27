import { useState, useEffect } from 'react';

const PURCHASES = [
  { kit: 'All Kits Bundle', location: 'Austin, TX', time: '2 minutes ago' },
  { kit: 'AI Prompt Mega Pack', location: 'London, UK', time: '5 minutes ago' },
  { kit: 'Content Creator Kit', location: 'Toronto, CA', time: '8 minutes ago' },
  { kit: 'Real Estate AI Kit', location: 'Miami, FL', time: '12 minutes ago' },
  { kit: 'All Kits Bundle', location: 'Sydney, AU', time: '15 minutes ago' },
  { kit: 'Freelancer Kit', location: 'Berlin, DE', time: '18 minutes ago' },
  { kit: 'SaaS Founder Kit', location: 'San Francisco, CA', time: '22 minutes ago' },
  { kit: 'AI Image Prompt Pack', location: 'New York, NY', time: '25 minutes ago' },
  { kit: 'Small Business Kit', location: 'Chicago, IL', time: '30 minutes ago' },
  { kit: 'All Kits Bundle', location: 'Singapore', time: '33 minutes ago' },
  { kit: 'Notion Templates Kit', location: 'Portland, OR', time: '38 minutes ago' },
  { kit: 'E-commerce Kit', location: 'Amsterdam, NL', time: '41 minutes ago' },
  { kit: 'AI Video Prompt Pack', location: 'Los Angeles, CA', time: '45 minutes ago' },
  { kit: 'Resume & Career Kit', location: 'Dublin, IE', time: '48 minutes ago' },
  { kit: 'All Kits Bundle', location: 'Seattle, WA', time: '52 minutes ago' },
];

export default function SocialProofToast() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Show first toast after 8 seconds
    const initialDelay = setTimeout(() => {
      setVisible(true);
    }, 8000);

    return () => clearTimeout(initialDelay);
  }, [dismissed]);

  useEffect(() => {
    if (dismissed) return;
    if (!visible) return;

    // Hide after 5 seconds, then show next after 25-45 seconds
    const hideTimer = setTimeout(() => {
      setVisible(false);
      const nextDelay = 25000 + Math.random() * 20000;
      const showTimer = setTimeout(() => {
        setCurrent(prev => (prev + 1) % PURCHASES.length);
        setVisible(true);
      }, nextDelay);
      return () => clearTimeout(showTimer);
    }, 5000);

    return () => clearTimeout(hideTimer);
  }, [visible, dismissed, current]);

  if (dismissed) return null;

  const purchase = PURCHASES[current];

  return (
    <>
      <style>{`
        .social-toast {
          position: fixed;
          bottom: 24px;
          left: 24px;
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 14px;
          padding: 14px 18px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06);
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 12px;
          max-width: 340px;
          transform: translateY(${visible ? '0' : '120%'});
          opacity: ${visible ? '1' : '0'};
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
          font-family: 'Inter', -apple-system, sans-serif;
        }
        .toast-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: #ECFDF5;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 18px;
        }
        .toast-content {
          flex: 1;
          min-width: 0;
        }
        .toast-title {
          font-size: 13px;
          font-weight: 700;
          color: #111827;
          line-height: 1.3;
        }
        .toast-meta {
          font-size: 12px;
          color: #6B7280;
          margin-top: 2px;
        }
        .toast-close {
          position: absolute;
          top: 6px;
          right: 8px;
          background: none;
          border: none;
          color: #9CA3AF;
          cursor: pointer;
          font-size: 14px;
          padding: 2px;
          line-height: 1;
        }
        .toast-close:hover {
          color: #6B7280;
        }
        @media (max-width: 500px) {
          .social-toast {
            left: 12px;
            right: 12px;
            max-width: none;
            bottom: 12px;
          }
        }
      `}</style>
      <div className="social-toast">
        <button className="toast-close" onClick={() => setDismissed(true)} aria-label="Dismiss">&times;</button>
        <div className="toast-icon">&#10003;</div>
        <div className="toast-content">
          <div className="toast-title">Someone purchased {purchase.kit}</div>
          <div className="toast-meta">{purchase.location} &middot; {purchase.time}</div>
        </div>
      </div>
    </>
  );
}
