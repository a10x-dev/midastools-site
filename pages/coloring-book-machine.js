import { useState, useEffect, useRef, useCallback } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

const ORANGE = '#EA580C';
const STYLES = [
  { id: 'bold-easy', label: 'Bold & Easy', hint: 'Thick simple lines — toddlers, seniors, beginners' },
  { id: 'kids', label: 'Kids / Fun', hint: 'Playful cartoon scenes for ages 4–10' },
  { id: 'detailed', label: 'Detailed (Adult)', hint: 'Intricate relaxing line art for adults' },
  { id: 'mandala', label: 'Mandala / Pattern', hint: 'Symmetrical patterns for adults' },
];
const PAGE_OPTIONS = [10, 15, 20, 25, 30];
const TRIMS = [
  { id: '8.5x11', label: '8.5 × 11"', hint: 'Standard — kids & value' },
  { id: '8.5x8.5', label: '8.5 × 8.5"', hint: 'Square — adult & gift' },
];

function dataUrlToBytes(dataUrl) {
  const b64 = dataUrl.split(',')[1];
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

export default function ColoringBookMachine() {
  const [theme, setTheme] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [style, setStyle] = useState('bold-easy');
  const [pageCount, setPageCount] = useState(20);
  const [trim, setTrim] = useState('8.5x11');

  const [preview, setPreview] = useState(null);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [previewMsg, setPreviewMsg] = useState('');

  const [starting, setStarting] = useState(false);
  const [startErr, setStartErr] = useState('');

  // phase: 'config' | 'confirming' | 'generating' | 'done'
  const [phase, setPhase] = useState('config');
  const [progress, setProgress] = useState({ done: 0, total: 0, label: '' });
  const [genErr, setGenErr] = useState('');
  const [book, setBook] = useState({ title: '', subtitle: '', trim: '8.5x11', pages: [], cover: null });
  const [pdfUrl, setPdfUrl] = useState(null);       // KDP interior (title + pages, no cover)
  const [bookPdfUrl, setBookPdfUrl] = useState(null); // print-at-home book (cover + title + pages)
  const startedRef = useRef(false);

  const runPreview = async () => {
    if (theme.trim().length < 3) { setPreviewMsg('Describe your theme first (a few words).'); return; }
    setPreviewLoading(true); setPreviewMsg(''); setPreview(null);
    try {
      const r = await fetch('/api/coloring-book/generate', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode: 'preview', theme, style }),
      });
      const d = await r.json();
      if (d.image) setPreview(d.image);
      else setPreviewMsg(d.message || 'Preview hiccuped — try again.');
    } catch { setPreviewMsg('Network blip — try again.'); }
    setPreviewLoading(false);
  };

  const startCheckout = async () => {
    if (theme.trim().length < 3) { setStartErr('Describe your theme first.'); return; }
    setStarting(true); setStartErr('');
    try {
      const r = await fetch('/api/coloring-book/start', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ theme, title, subtitle, style, pageCount, trim }),
      });
      const d = await r.json();
      if (d.token && d.checkoutUrl) {
        try { localStorage.setItem('cbk_token', d.token); } catch { /* ignore */ }
        window.location.href = d.checkoutUrl;
      } else {
        setStartErr(d.error || 'Could not start — try again.');
        setStarting(false);
      }
    } catch { setStartErr('Network blip — try again.'); setStarting(false); }
  };

  const genOne = async (body, tries = 2) => {
    for (let t = 0; t <= tries; t++) {
      try {
        const r = await fetch('/api/coloring-book/generate', {
          method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body),
        });
        const d = await r.json();
        if (d.image) return d.image;
        if (r.status === 402 || d.error === 'unpaid') throw new Error('unpaid');
      } catch (e) { if (e.message === 'unpaid') throw e; }
      await new Promise((res) => setTimeout(res, 1200));
    }
    return null;
  };

  // Build a PDF. includeCover=true → print-at-home book (full-bleed cover + title + pages);
  // includeCover=false → KDP interior (title page + pages only, cover uploaded separately).
  const buildPdf = useCallback(async ({ pages, cover, title, subtitle, trimId, includeCover }) => {
    const { PDFDocument, StandardFonts, rgb } = await import('pdf-lib');
    const [Wpt, Hpt] = trimId === '8.5x8.5' ? [612, 612] : [612, 792];
    const imgPt = 489.6; // 6.8" — square image placed at ~300 DPI from 2048px source
    const x = (Wpt - imgPt) / 2;
    const y = (Hpt - imgPt) / 2;
    const pdf = await PDFDocument.create();
    const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
    const reg = await pdf.embedFont(StandardFonts.Helvetica);

    // Full-bleed cover (home book only)
    if (includeCover && cover) {
      const cj = await pdf.embedJpg(dataUrlToBytes(cover));
      const cp = pdf.addPage([Wpt, Hpt]);
      cp.drawImage(cj, { x: 0, y: 0, width: Wpt, height: Hpt });
    }

    // Title page
    const tp = pdf.addPage([Wpt, Hpt]);
    let ts = 30;
    const t = (title || 'Coloring Book').slice(0, 60);
    while (ts > 12 && bold.widthOfTextAtSize(t, ts) > Wpt - 80) ts -= 1;
    tp.drawText(t, { x: (Wpt - bold.widthOfTextAtSize(t, ts)) / 2, y: Hpt * 0.6, size: ts, font: bold, color: rgb(0.1, 0.1, 0.1) });
    if (subtitle) {
      const ss = 14, st = subtitle.slice(0, 80);
      tp.drawText(st, { x: (Wpt - reg.widthOfTextAtSize(st, ss)) / 2, y: Hpt * 0.6 - 28, size: ss, font: reg, color: rgb(0.35, 0.35, 0.35) });
    }
    const belongs = 'This book belongs to:';
    tp.drawText(belongs, { x: (Wpt - reg.widthOfTextAtSize(belongs, 13)) / 2, y: Hpt * 0.4, size: 13, font: reg, color: rgb(0.4, 0.4, 0.4) });
    tp.drawLine({ start: { x: Wpt * 0.28, y: Hpt * 0.4 - 24 }, end: { x: Wpt * 0.72, y: Hpt * 0.4 - 24 }, thickness: 1, color: rgb(0.6, 0.6, 0.6) });

    // Interior pages
    for (const dataUrl of pages) {
      if (!dataUrl) continue;
      const jpg = await pdf.embedJpg(dataUrlToBytes(dataUrl));
      const page = pdf.addPage([Wpt, Hpt]);
      page.drawImage(jpg, { x, y, width: imgPt, height: imgPt });
    }
    const bytes = await pdf.save();
    return URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
  }, []);

  const generateBook = useCallback(async (token, job) => {
    setPhase('generating');
    setGenErr('');
    const total = job.pageCount;
    setProgress({ done: 0, total, label: 'Designing your cover…' });
    setBook({ title: job.title, subtitle: job.subtitle, trim: job.trim, pages: [], cover: null });

    // Cover first (nice early visual)
    let cover = null;
    try { cover = await genOne({ mode: 'cover', token }); } catch { /* unpaid handled below */ }
    setBook((b) => ({ ...b, cover }));

    const pages = [];
    for (let i = 0; i < total; i++) {
      setProgress({ done: i, total, label: `Drawing page ${i + 1} of ${total}…` });
      let img;
      try { img = await genOne({ mode: 'page', token, index: i }); }
      catch (e) {
        if (e.message === 'unpaid') { setGenErr('Payment not confirmed yet — refresh in a few seconds.'); return; }
        img = null;
      }
      pages.push(img);
      setBook((b) => ({ ...b, pages: [...pages] }));
    }

    setProgress({ done: total, total, label: 'Assembling your print-ready files…' });
    try {
      const common = { pages, cover, title: job.title, subtitle: job.subtitle, trimId: job.trim };
      const homeUrl = await buildPdf({ ...common, includeCover: true });
      setBookPdfUrl(homeUrl);
      const kdpUrl = await buildPdf({ ...common, includeCover: false });
      setPdfUrl(kdpUrl);
    } catch (e) {
      setGenErr('Could not assemble the PDF — your pages are shown below; reply to your receipt email and we’ll send the file.');
    }
    setPhase('done');
  }, [buildPdf]);

  // Post-payment entry: resolve token, poll status, generate.
  useEffect(() => {
    if (startedRef.current) return;
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const paid = params.get('paid');
    let token = params.get('token');
    if (!token) { try { token = localStorage.getItem('cbk_token'); } catch { /* ignore */ } }
    if (!token || (!paid && !params.get('token'))) return;
    startedRef.current = true;
    setPhase('confirming');

    let cancelled = false;
    (async () => {
      for (let i = 0; i < 40 && !cancelled; i++) { // poll up to ~80s for webhook
        try {
          const r = await fetch(`/api/coloring-book/status?token=${token}`);
          const d = await r.json();
          if (d.error === 'not_found') { setGenErr('This book session expired (48h). Please start a new one.'); setPhase('config'); return; }
          if (d.paid) { await generateBook(token, d); return; }
        } catch { /* keep polling */ }
        await new Promise((res) => setTimeout(res, 2000));
      }
      if (!cancelled) { setGenErr('Still confirming your payment. Refresh this page in a moment — your book is saved for 48h.'); setPhase('config'); }
    })();
    return () => { cancelled = true; };
  }, [generateBook]);

  const pct = progress.total ? Math.round((progress.done / progress.total) * 100) : 0;

  return (
    <Layout>
      <Head>
        <title>The Coloring Book Machine — Make a Custom Coloring Book to Gift or Sell | Midas Tools</title>
        <meta name="description" content="Describe a theme and get a complete, print-ready coloring book — themed line-art pages, a cover, and a title page. Print &amp; staple it at home as a personalized gift for your kids, or sell it on Amazon KDP. $9.99 per book." />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.midastools.co/coloring-book-machine" />
        <meta property="og:title" content="The Coloring Book Machine — Make a Custom Coloring Book to Gift or Sell" />
        <meta property="og:description" content="Type a theme → get a finished, print-ready coloring book PDF + cover. Print &amp; gift it to your kids, or sell it on Amazon KDP. $9.99 per book." />
        <meta property="og:url" content="https://www.midastools.co/coloring-book-machine" />
      </Head>

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '40px 20px', fontFamily: 'Inter, system-ui, sans-serif', color: '#111827' }}>

        {/* HERO */}
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{ display: 'inline-block', background: '#FFF7ED', color: ORANGE, fontWeight: 700, fontSize: 13, padding: '6px 14px', borderRadius: 999, marginBottom: 16 }}>
            🎁 Gift it to your kids · 💸 or sell it on Amazon KDP
          </div>
          <h1 style={{ fontSize: 38, fontWeight: 900, lineHeight: 1.1, margin: '0 0 14px' }}>The Coloring Book Machine</h1>
          <p style={{ fontSize: 18, color: '#4B5563', maxWidth: 580, margin: '0 auto', lineHeight: 1.6 }}>
            Describe a theme and get a <strong>complete, print-ready coloring book</strong> — themed line-art pages, a cover, and a title page. <strong>Print &amp; staple it at home</strong> as a personalized gift for your kids, sobrinos, or a birthday — or <strong>upload it to Amazon KDP and sell it</strong>. <strong>$9.99 a book.</strong>
          </p>
        </div>

        {/* CONFIRMING / GENERATING / DONE PANEL */}
        {phase === 'confirming' && (
          <div style={panel}>
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={spinner} />
              <p style={{ fontWeight: 700, fontSize: 18, margin: '16px 0 4px' }}>Confirming your payment…</p>
              <p style={{ color: '#6B7280' }}>This takes a few seconds. Keep this tab open.</p>
            </div>
          </div>
        )}

        {phase === 'generating' && (
          <div style={panel}>
            <p style={{ fontWeight: 800, fontSize: 20, margin: '0 0 6px' }}>Building your book 🎨</p>
            <p style={{ color: '#6B7280', margin: '0 0 16px' }}>{progress.label} <strong>Keep this tab open</strong> — about 2–3 minutes.</p>
            <div style={{ background: '#F3F4F6', borderRadius: 999, height: 14, overflow: 'hidden', marginBottom: 16 }}>
              <div style={{ width: `${pct}%`, height: '100%', background: ORANGE, transition: 'width .4s' }} />
            </div>
            {genErr && <p style={{ color: '#B91C1C', fontWeight: 600 }}>{genErr}</p>}
            {(book.cover || book.pages.length > 0) && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(90px,1fr))', gap: 8, marginTop: 12 }}>
                {book.cover && <img src={book.cover} alt="cover" style={thumb} />}
                {book.pages.filter(Boolean).map((p, i) => <img key={i} src={p} alt={`page ${i + 1}`} style={thumb} />)}
              </div>
            )}
          </div>
        )}

        {phase === 'done' && (
          <div style={panel}>
            <p style={{ fontWeight: 900, fontSize: 24, margin: '0 0 6px', color: ORANGE }}>Your book is ready! 🎉</p>
            <p style={{ color: '#374151', margin: '0 0 20px' }}>You can <strong>print &amp; gift it at home</strong> — or <strong>sell it on Amazon KDP</strong>. Both files are below, print-ready at {book.trim.replace('x', ' × ')}".</p>
            {genErr && <p style={{ color: '#B91C1C', fontWeight: 600, marginBottom: 12 }}>{genErr}</p>}

            {/* PATH A — print & gift at home */}
            <div style={{ background: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: 12, padding: 18, marginBottom: 16 }}>
              <p style={{ fontWeight: 800, fontSize: 17, margin: '0 0 6px' }}>🎁 Print it &amp; gift it at home</p>
              <p style={{ color: '#7C2D12', fontSize: 14, margin: '0 0 14px' }}>One file with the cover, a title page (“This book belongs to…”), and all the pages — ready to print and staple into a real book for your kids, sobrinos, or a birthday gift.</p>
              {bookPdfUrl && (
                <a href={bookPdfUrl} download={`${(book.title || 'coloring-book').replace(/[^a-z0-9]+/gi, '-').toLowerCase()}-book.pdf`}
                   style={{ ...cta, background: ORANGE, marginBottom: 12 }}>⬇ Download the full book (PDF)</a>
              )}
              <ol style={{ margin: '8px 0 0', paddingLeft: 18, fontSize: 14, color: '#7C2D12', lineHeight: 1.7 }}>
                <li>Print <strong>single-sided</strong> on letter (8.5 × 11") paper — use thicker cardstock for the cover page if you have it.</li>
                <li>Stack the pages in order, cover on top.</li>
                <li>Bind it: <strong>staple twice down the left edge</strong>, or 3-hole-punch and tie with ribbon, or pop it in a binder.</li>
                <li>Write the child’s name on the title page and gift it. 🖍️</li>
              </ol>
            </div>

            {/* PATH B — sell on KDP */}
            <div style={{ background: '#F0F4FF', border: '1px solid #93B4FF', borderRadius: 12, padding: 18, marginBottom: 16 }}>
              <p style={{ fontWeight: 800, fontSize: 17, margin: '0 0 6px' }}>💸 Sell it on Amazon KDP</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, margin: '0 0 12px' }}>
                {pdfUrl && (
                  <a href={pdfUrl} download={`${(book.title || 'coloring-book').replace(/[^a-z0-9]+/gi, '-').toLowerCase()}-kdp-interior.pdf`}
                     style={{ ...cta, background: '#3B5FFF' }}>⬇ KDP interior PDF</a>
                )}
                {book.cover && (
                  <a href={book.cover} download={`${(book.title || 'coloring-book').replace(/[^a-z0-9]+/gi, '-').toLowerCase()}-cover.jpg`}
                     style={{ ...cta, background: '#111827' }}>⬇ Cover image</a>
                )}
              </div>
              <p style={{ color: '#1E3A8A', fontSize: 14, margin: 0 }}>
                New Paperback → trim <strong>{book.trim.replace('x', ' × ')}"</strong>, B&amp;W interior, white paper → upload the interior PDF → KDP Cover Creator with the cover image → answer “yes” to the AI question → price ~$6.99 → publish.{' '}
                <a href="/blog/sell-ai-coloring-books-amazon-kdp-2026" style={{ color: '#3B5FFF', fontWeight: 700 }}>Full KDP guide →</a>
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(90px,1fr))', gap: 8 }}>
              {book.cover && <img src={book.cover} alt="cover" style={thumb} />}
              {book.pages.filter(Boolean).map((p, i) => <img key={i} src={p} alt={`page ${i + 1}`} style={thumb} />)}
            </div>
          </div>
        )}

        {/* CONFIGURATOR */}
        {phase === 'config' && (
          <>
            {genErr && <div style={{ ...panel, borderColor: '#FCA5A5', background: '#FEF2F2', color: '#B91C1C', fontWeight: 600 }}>{genErr}</div>}
            <div style={panel}>
              <label style={lbl}>1. What's your book about?</label>
              <input value={theme} onChange={(e) => setTheme(e.target.value)} placeholder="e.g. cute baby dinosaurs for toddlers"
                     style={input} maxLength={120} />

              <label style={lbl}>2. Style</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px,1fr))', gap: 10, marginBottom: 20 }}>
                {STYLES.map((s) => (
                  <button key={s.id} onClick={() => setStyle(s.id)} type="button"
                          style={{ ...chip, ...(style === s.id ? chipOn : {}) }}>
                    <span style={{ fontWeight: 700, display: 'block' }}>{s.label}</span>
                    <span style={{ fontSize: 12, color: style === s.id ? '#FFEDD5' : '#6B7280' }}>{s.hint}</span>
                  </button>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
                <div>
                  <label style={lbl}>3. Pages</label>
                  <select value={pageCount} onChange={(e) => setPageCount(parseInt(e.target.value, 10))} style={input}>
                    {PAGE_OPTIONS.map((n) => <option key={n} value={n}>{n} pages</option>)}
                  </select>
                </div>
                <div>
                  <label style={lbl}>4. Size</label>
                  <select value={trim} onChange={(e) => setTrim(e.target.value)} style={input}>
                    {TRIMS.map((t) => <option key={t.id} value={t.id}>{t.label} — {t.hint}</option>)}
                  </select>
                </div>
              </div>

              <label style={lbl}>5. Cover title <span style={{ color: '#9CA3AF', fontWeight: 400 }}>(optional)</span></label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Dino Friends Coloring Book" style={input} maxLength={120} />
              <input value={subtitle} onChange={(e) => setSubtitle(e.target.value)} placeholder="Subtitle (optional) — e.g. 20 Bold & Easy Pages for Toddlers" style={input} maxLength={120} />

              {/* PREVIEW */}
              <div style={{ marginTop: 8, marginBottom: 8 }}>
                <button onClick={runPreview} disabled={previewLoading} type="button" style={ghostBtn}>
                  {previewLoading ? 'Drawing a sample…' : '✨ See a free sample page'}
                </button>
                {previewMsg && <p style={{ color: '#B91C1C', fontSize: 14, marginTop: 8 }}>{previewMsg}</p>}
                {preview && (
                  <div style={{ textAlign: 'center', marginTop: 16 }}>
                    <img src={preview} alt="sample coloring page" style={{ maxWidth: 320, width: '100%', border: '1px solid #E5E7EB', borderRadius: 8 }} />
                    <p style={{ fontSize: 13, color: '#6B7280', marginTop: 8 }}>Your full book gets {pageCount} pages like this — at print resolution, no watermark.</p>
                  </div>
                )}
              </div>
            </div>

            {/* BUY */}
            <div style={{ ...panel, textAlign: 'center', background: '#FFF7ED', borderColor: '#FDBA74' }}>
              <p style={{ fontSize: 28, fontWeight: 900, margin: '0 0 4px' }}>$9.99</p>
              <p style={{ color: '#7C2D12', margin: '0 0 16px' }}>A complete {pageCount}-page print-ready book + cover. Print &amp; gift it at home, or sell it on KDP — it’s yours.</p>
              <button onClick={startCheckout} disabled={starting} type="button"
                      style={{ ...cta, background: ORANGE, fontSize: 18, padding: '16px 36px', width: '100%', maxWidth: 380, border: 'none', cursor: 'pointer' }}>
                {starting ? 'Preparing your book…' : 'Make my coloring book →'}
              </button>
              {startErr && <p style={{ color: '#B91C1C', fontWeight: 600, marginTop: 10 }}>{startErr}</p>}
              <p style={{ fontSize: 12, color: '#9CA3AF', marginTop: 12 }}>Secure checkout via Stripe. Files generate right after payment (~2–3 min). 48h to download. Best on a desktop.</p>
            </div>

            {/* TRUST / HOW */}
            <div style={{ ...panel, fontSize: 15, color: '#374151' }}>
              <p style={{ fontWeight: 800, fontSize: 17, margin: '0 0 12px' }}>How it works</p>
              <ol style={{ paddingLeft: 18, lineHeight: 1.8, margin: 0 }}>
                <li>Describe your theme, pick a style, pages, and size.</li>
                <li>We generate {pageCount} distinct, clean line-art pages + a cover + a title page.</li>
                <li>Download two files: a <strong>print-at-home book</strong> (cover + pages, ready to staple) and a <strong>KDP interior PDF</strong>.</li>
                <li><strong>Gift it:</strong> print single-sided, staple, write the child’s name on the title page. <strong>Or sell it:</strong> upload to Amazon KDP — Amazon prints &amp; ships on demand.</li>
              </ol>
              <p style={{ marginTop: 14, fontSize: 14, color: '#6B7280' }}>
                Want to sell? Start with our{' '}
                <a href="/blog/sell-ai-coloring-books-amazon-kdp-2026" style={{ color: ORANGE, fontWeight: 700 }}>full guide to selling AI coloring books on KDP →</a>
              </p>
            </div>
          </>
        )}
      </div>

      <style jsx>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </Layout>
  );
}

const panel = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 14, padding: 24, marginBottom: 20 };
const lbl = { display: 'block', fontWeight: 700, fontSize: 14, marginBottom: 8, marginTop: 4 };
const input = { width: '100%', boxSizing: 'border-box', padding: '12px 14px', fontSize: 15, border: '1px solid #D1D5DB', borderRadius: 8, marginBottom: 16, fontFamily: 'inherit' };
const chip = { textAlign: 'left', padding: '12px 14px', border: '1px solid #D1D5DB', borderRadius: 10, background: '#fff', cursor: 'pointer', fontFamily: 'inherit' };
const chipOn = { background: ORANGE, color: '#fff', borderColor: ORANGE };
const cta = { display: 'inline-block', color: '#fff', padding: '14px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 };
const ghostBtn = { background: '#fff', color: ORANGE, border: `1px solid ${ORANGE}`, padding: '12px 20px', borderRadius: 8, fontWeight: 700, fontSize: 15, cursor: 'pointer', width: '100%', fontFamily: 'inherit' };
const thumb = { width: '100%', aspectRatio: '1', objectFit: 'cover', border: '1px solid #E5E7EB', borderRadius: 6 };
const spinner = { width: 36, height: 36, border: `4px solid #FDBA74`, borderTopColor: ORANGE, borderRadius: '50%', display: 'inline-block', animation: 'spin 1s linear infinite' };
