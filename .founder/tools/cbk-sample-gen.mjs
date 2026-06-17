import fs from 'fs';
import Jimp from 'jimp';
import { PDFDocument } from 'pdf-lib';
const KEY=fs.readFileSync('.founder/.gemini_key','utf8').trim();
const OUT='.founder/deliverables/coloring-book-sample';
const BASE='https://generativelanguage.googleapis.com/v1beta/models';
async function gen(p){const r=await fetch(`${BASE}/gemini-2.5-flash-image:generateContent?key=${KEY}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({contents:[{parts:[{text:p}]}]})});if(!r.ok)throw new Error(r.status);const d=await r.json();for(const c of d.candidates||[])for(const q of c.content?.parts||[])if(q.inlineData?.data)return Buffer.from(q.inlineData.data,'base64');return null;}
const LINE='Black and white line art coloring book page. Clean bold black outlines on a pure white background. Absolutely no shading, no grayscale, no color, and no fill — only crisp outlines to color in. Draw the subject artwork only: NO page border, NO frame, NO rectangle around the image, NO straight edge lines. Centered composition with even white margins.';
const wrap=(s)=>`A simple, bold-and-easy coloring page of ${s}. Thick clean outlines, large simple shapes, lots of open space, minimal fine detail — easy for young children, beginners and seniors. ${LINE}`;
const subjects=['a smiling baby triceratops eating a leaf','a friendly baby T-rex waving hello','a cute stegosaurus walking past a palm tree','a happy baby brontosaurus with a butterfly on its nose'];
const pages=[];let i=0;
for(const s of subjects){i++;const raw=await gen(wrap(s));if(!raw){console.log('skip',s);continue;}const img=await Jimp.read(raw);img.greyscale().contrast(0.72).resize(2048,2048);const buf=await img.quality(92).getBufferAsync(Jimp.MIME_JPEG);pages.push(buf);fs.writeFileSync(`${OUT}/page-${i}.jpg`,buf);console.log('page',i,'ok');}
const cr=await gen('A vibrant, colorful, eye-catching COVER illustration for a coloring book about "cute baby dinosaurs for toddlers". Cheerful, professional published-book cover art, full color, bright and inviting, fun and friendly for children. Keep the upper third relatively clear for a title. Highly detailed and polished. Vertical book-cover composition.');
if(cr){const cv=await Jimp.read(cr);cv.cover(2125,2750);try{const band=new Jimp(2125,520,0x00000099);const f=await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);band.print(f,80,60,{text:'DINO FRIENDS',alignmentX:Jimp.HORIZONTAL_ALIGN_CENTER},2125-160,300);cv.composite(band,0,90);}catch{}fs.writeFileSync(`${OUT}/cover.jpg`,await cv.quality(90).getBufferAsync(Jimp.MIME_JPEG));console.log('cover ok');}
const pdf=await PDFDocument.create();for(const b of pages){const j=await pdf.embedJpg(b);const pg=pdf.addPage([612,792]);const s=489.6;pg.drawImage(j,{x:(612-s)/2,y:(792-s)/2,width:s,height:s});}
fs.writeFileSync(`${OUT}/Dino-Friends-interior.pdf`,await pdf.save());
console.log('PDF ok ->',OUT);
