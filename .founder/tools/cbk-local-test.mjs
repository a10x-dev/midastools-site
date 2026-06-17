// Local end-to-end validation of the Coloring Book Machine pipeline — no Stripe,
// no prod KV. Mirrors the EXACT route logic (lib/gemini prompts + jimp processing
// + pdf-lib assembly) so we can eyeball real input→output quality before promoting.
import fs from 'fs';
import Jimp from 'jimp';
import { PDFDocument } from 'pdf-lib';

const KEY = fs.readFileSync('.founder/.gemini_key', 'utf8').trim();
const IMG_MODEL = 'gemini-2.5-flash-image';
const BASE = 'https://generativelanguage.googleapis.com/v1beta/models';

async function gen(prompt) {
  const r = await fetch(`${BASE}/${IMG_MODEL}:generateContent?key=${KEY}`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
  });
  if (!r.ok) throw new Error('http ' + r.status + ' ' + (await r.text()).slice(0, 200));
  const d = await r.json();
  for (const c of d.candidates || []) for (const p of c.content?.parts || []) if (p.inlineData?.data) return Buffer.from(p.inlineData.data, 'base64');
  return null;
}

const LINE = 'Black and white line art coloring book page. Clean bold black outlines on a pure white background. Absolutely no shading, no grayscale, no color, and no fill — only crisp outlines to color in. Centered full-page composition with even margins.';
const wrap = (s) => `A simple, bold-and-easy coloring page of ${s}. Thick clean outlines, large simple shapes, lots of open space, minimal fine detail — easy for young children, beginners and seniors. ${LINE}`;

const subjects = [
  'a smiling baby triceratops eating a leaf',
  'a friendly baby T-rex waving hello',
  'a cute stegosaurus walking past a palm tree',
  'a happy baby brontosaurus with a butterfly on its nose',
];

const pages = [];
for (const s of subjects) {
  process.stdout.write('page: ' + s + ' ... ');
  const raw = await gen(wrap(s));
  if (!raw) { console.log('NO IMAGE (safety block)'); continue; }
  const img = await Jimp.read(raw);
  img.greyscale().contrast(0.72).resize(2048, 2048);
  const buf = await img.quality(92).getBufferAsync(Jimp.MIME_JPEG);
  pages.push(buf);
  fs.writeFileSync(`.founder/tools/cbk-page-${pages.length}.jpg`, buf);
  console.log('ok ' + Math.round(buf.length / 1024) + 'KB');
}

process.stdout.write('cover ... ');
const coverRaw = await gen('A vibrant, colorful, eye-catching COVER illustration for a coloring book about "cute baby dinosaurs for toddlers". Cheerful, professional published-book cover art, full color, bright and inviting, fun and friendly for children. Keep the upper third relatively clear for a title. Highly detailed and polished. Vertical book-cover composition.');
let coverKB = 0;
if (coverRaw) {
  const cv = await Jimp.read(coverRaw);
  cv.cover(2125, 2750);
  try {
    const band = new Jimp(2125, 520, 0x00000099);
    const f = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
    band.print(f, 80, 60, { text: 'DINO FRIENDS', alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER }, 2125 - 160, 300);
    cv.composite(band, 0, 90);
    console.log('(title overlay OK) ');
  } catch (e) { console.log('(title overlay skipped: ' + e.message + ') '); }
  const cbuf = await cv.quality(90).getBufferAsync(Jimp.MIME_JPEG);
  fs.writeFileSync('.founder/tools/cbk-cover.jpg', cbuf);
  coverKB = Math.round(cbuf.length / 1024);
}

const pdf = await PDFDocument.create();
for (const b of pages) {
  const jpg = await pdf.embedJpg(b);
  const pg = pdf.addPage([612, 792]);
  const s = 489.6, x = (612 - s) / 2, y = (792 - s) / 2;
  pg.drawImage(jpg, { x, y, width: s, height: s });
}
const bytes = await pdf.save();
fs.writeFileSync('.founder/tools/cbk-interior.pdf', bytes);
console.log(`\nDONE — pages:${pages.length}  interior PDF:${Math.round(bytes.length / 1024)}KB  cover:${coverKB}KB`);
