import Head from 'next/head';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import ChatbotBuildWidget from '../components/ChatbotBuildWidget';

export default function ChatbotBuilder() {
  const [upgraded, setUpgraded] = useState(false);

  useEffect(() => {
    try { if (new URLSearchParams(window.location.search).get('upgraded') === '1') setUpgraded(true); } catch {}
  }, []);

  return (
    <Layout>
      <Head>
        <title>Chatbot Builder — Build a Lead-Capturing AI Chatbot for Any Business in 60 Seconds | MidasTools</title>
        <meta name="description" content="Paste a business website, get a working AI chatbot that answers customer questions and captures leads 24/7. Embed it with one line. Resell it to local businesses for $300/mo. Free to build." />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.midastools.co/chatbot-builder" />
        <meta property="og:title" content="Chatbot Builder — Lead-Capturing AI Chatbot in 60 Seconds" />
        <meta property="og:description" content="Build a working AI chatbot from any business website. Answers questions, captures leads, embeds with one line. Resell it for $300/mo." />
      </Head>

      <div style={{ maxWidth: 920, margin: '0 auto', padding: '40px 20px 60px' }}>
        {upgraded && (
          <div style={{ background: '#ECFDF5', border: '1px solid #6EE7B7', borderRadius: 14, padding: '14px 18px', marginBottom: 24 }}>
            <strong style={{ color: '#065F46' }}>🎉 You're live & Pro!</strong>
            <span style={{ color: '#047857', fontSize: 14 }}> Your bot is white-labeled and captured leads now land in your inbox. Build more bots below — each new client is more recurring income.</span>
          </div>
        )}

        {/* Hero */}
        <span style={{ display: 'inline-block', background: '#EFF6FF', color: '#2563EB', fontWeight: 700, fontSize: 13, padding: '5px 12px', borderRadius: 100, marginBottom: 16 }}>💰 Money Tool</span>
        <h1 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 900, lineHeight: 1.12, margin: '0 0 16px', color: '#111827' }}>
          Build a lead-capturing AI chatbot for any business in 60 seconds
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: '#374151', margin: '0 0 8px' }}>
          Paste a business website. Get a working AI chatbot that answers customer questions and <strong>captures leads 24/7</strong> — then drop it on any site with one line of code.
        </p>
        <p style={{ fontSize: 15, color: '#6B7280', margin: '0 0 32px' }}>
          Local businesses pay <strong>$300+/mo</strong> for this. Build yours free, then put it live for <strong>$39/mo</strong> and resell as many as you want.
        </p>

        <ChatbotBuildWidget source="chatbot-builder" />

        {/* How it works */}
        <div style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16 }}>How people make money with this</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16 }}>
            {[
              ['1. Build', 'Paste a local business\'s website. The bot trains itself on their services, hours, and FAQs in seconds.'],
              ['2. Sell', 'Pitch the dentist, plumber, or salon down the street: “a 24/7 receptionist that books you leads.” They pay $300+/mo.'],
              ['3. Profit', 'You pay $39/mo, they pay $300+/mo. Each bot is recurring margin. Stack as many clients as you want.'],
            ].map(([h, p]) => (
              <div key={h} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12, padding: 20 }}>
                <h3 style={{ fontSize: 16, fontWeight: 800, margin: '0 0 8px', color: '#2563EB' }}>{h}</h3>
                <p style={{ fontSize: 14, color: '#374151', margin: 0, lineHeight: 1.6 }}>{p}</p>
              </div>
            ))}
          </div>
        </div>

        <p style={{ marginTop: 36, color: '#6B7280', fontSize: 14 }}>
          Part of <Link href="/tools" style={{ color: '#2563EB' }}>MidasTools</Link> — AI tools that make you money. Questions? <a href="mailto:hello@midastools.co" style={{ color: '#2563EB' }}>hello@midastools.co</a>.
        </p>
      </div>
    </Layout>
  );
}
