import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import EmailCapture from '../../components/EmailCapture';

const STRIPE_BUNDLE = 'https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b';
const IMAGE_PACK_LINK = '/ai-image-prompt-pack';

export default function SellPrintableColoringBooksEtsy2026() {
  const title = 'How to Sell Printable Coloring Books on Etsy in 2026 (Custom Books, $5–15 Each)';
  const description = 'Printable coloring books are one of Etsy’s most repeatable digital-download niches: make once, sell forever. The niches that sell, Etsy’s rules, pricing, and the free + $9.99 tools that turn a theme into a print-ready coloring book PDF in minutes. Copy-paste prompts included.';
  const url = 'https://www.midastools.co/blog/sell-printable-coloring-books-etsy-2026';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    datePublished: '2026-06-19',
    dateModified: '2026-06-19',
    author: { '@type': 'Person', name: 'Rey Midas', url: 'https://www.midastools.co' },
    publisher: { '@type': 'Organization', name: 'Midas Tools', url: 'https://www.midastools.co' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can you sell printable coloring books on Etsy in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Printable coloring books and coloring pages are one of Etsy’s most popular digital-download categories. You sell the PDF as an instant download; the buyer prints it at home. AI-generated line art is allowed as long as you disclose it where Etsy asks, you own or have rights to what you sell, and you do not copy trademarked characters or a living artist’s protected style. The product is the printable file, so you make it once and sell the same download forever.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much do printable coloring books sell for on Etsy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A single printable coloring book (15–40 pages) typically sells for $4–12 as an instant download, with themed or personalized books at the top of that range. Mega bundles (100+ pages across several themes) go for $12–25. Because it is a digital download, there is no per-sale cost — the same file sells unlimited times. Volume comes from having many themed books, each ranking for its own keywords.'
        }
      },
      {
        '@type': 'Question',
        name: 'What coloring book niches sell best on Etsy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The repeat winners are: kids’ themed books (animals, dinosaurs, trucks, princesses, space); adult relaxation (mandalas, florals, calming patterns); seasonal and holiday (Halloween, Christmas, Easter); educational and activity (alphabet, numbers, sight words, mazes); and personalized or custom books (a child’s name on the cover, or a custom theme). Personalized and seasonal books command the highest prices because buyers can’t find them anywhere else.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the fastest way to make a printable coloring book to sell?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use a tool that generates the whole book from a theme. The Coloring Book Machine turns a description (for example “friendly dinosaurs”) into a complete print-ready PDF — themed bold-line pages, a cover, and a title page — for $9.99 a book. You list that PDF on Etsy as an instant download and resell it unlimited times. Doing it by hand means prompting each page individually in Midjourney or ChatGPT and assembling the PDF yourself, which works but is far slower.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I have to disclose that a coloring book is AI-generated on Etsy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Etsy treats AI-assisted work as allowed but expects honesty. List yourself as the designer of the book, disclose the use of AI tools where Etsy asks, write an accurate description of what the buyer receives (page count, trim size, format), and never imply a famous artist drew it. Honest listings with a clear “what you get” section convert better and avoid takedowns.'
        }
      }
    ]
  };

  const promptBlockStyle = {
    background: '#f8f8f8',
    border: '1px solid #eee',
    borderRadius: '8px',
    padding: '16px',
    fontSize: '14px',
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap',
    marginBottom: '24px'
  };

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="Midas Tools" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={url} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '40px 24px', fontFamily: 'Georgia, serif', color: '#111827', lineHeight: '1.7' }}>
        <Link href="/blog" style={{ color: '#6B7280', textDecoration: 'none', fontSize: '14px' }}>&larr; All posts</Link>

        <h1 style={{ fontSize: '2rem', fontWeight: '700', marginTop: '24px', marginBottom: '8px', lineHeight: '1.2' }}>
          How to Sell Printable Coloring Books on Etsy in 2026
        </h1>
        <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '40px' }}>Jun 19, 2026 &middot; Rey Midas</p>

        <p>Printable coloring books are one of the cleanest digital-product businesses on Etsy: you make a book <em>once</em>, list it as an instant download, and sell the exact same file forever. No printing, no shipping, no inventory, no per-sale cost. A parent searches &ldquo;dinosaur coloring book printable,&rdquo; buys your PDF for $7, downloads it, and prints it at home &mdash; and you keep almost all of it. Build a shelf of themed books and each one quietly earns while you sleep.</p>
        <p>This guide is the printable-coloring-book playbook: the niches that actually sell, Etsy&rsquo;s rules for AI line art, how to price and list, and the fastest way to turn a theme into a finished, print-ready book. If you want the broader business map first, see <Link href="/blog/how-to-make-money-selling-ai-art-2026" style={{ color: '#3B5FFF' }}>how to make money selling AI art</Link> and <Link href="/blog/how-to-sell-ai-art-on-etsy-2026" style={{ color: '#3B5FFF' }}>selling AI art on Etsy</Link>. Want to sell <em>physical</em> paperbacks instead of digital downloads? That&rsquo;s <Link href="/blog/sell-ai-coloring-books-amazon-kdp-2026" style={{ color: '#3B5FFF' }}>Amazon KDP</Link> &mdash; this post is about the printable, instant-download version.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ==================== SECTION 1 ==================== */}
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '40px', marginBottom: '16px' }}>1. Why printable coloring books are a great Etsy niche</h2>

        <p>Most digital products on Etsy fight for attention against thousands of near-identical listings. Coloring books win on a few structural advantages:</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li><strong>Make once, sell forever.</strong> The product is a file. There is zero marginal cost per sale &mdash; every download after the first is pure margin.</li>
          <li><strong>Real, searchable demand.</strong> Parents, teachers, and adults looking to unwind search Etsy for coloring printables constantly, all year. It is evergreen with seasonal spikes.</li>
          <li><strong>Buyers want a <em>book</em>, not a page.</strong> A coordinated 20&ndash;40 page themed book reads as far more valuable than a single sheet &mdash; same effort to deliver, several times the price.</li>
          <li><strong>It compounds.</strong> Ten themed books reinforce each other, cross-sell, and each ranks for its own keywords. Your shop becomes a catalog, not a one-off.</li>
          <li><strong>Gift-driven and impulse-priced.</strong> At $5&ndash;12 it is an easy yes, and personalized versions make perfect last-minute birthday and rainy-day gifts.</li>
        </ul>
        <p>The whole game: <strong>pick a theme people search for, make a clean cohesive book, list it well, then do it again.</strong></p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ==================== SECTION 2 ==================== */}
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '40px', marginBottom: '16px' }}>2. The coloring-book niches that actually sell</h2>

        <p>Demand is fixed before you make a single page. These are the categories buyers reliably search and pay for:</p>

        <p><strong>1. Kids&rsquo; themed books.</strong> Animals, dinosaurs, trucks and diggers, princesses, space, under-the-sea, unicorns. The biggest, steadiest segment &mdash; parents buy a <em>book</em> per obsession their kid is going through. Bold, simple lines for little hands.</p>

        <p><strong>2. Adult relaxation.</strong> Mandalas, intricate florals, calming repeating patterns, &ldquo;color to relax&rdquo; themes. A different buyer with a real wallet who comes back for more. More detail, finer lines.</p>

        <p><strong>3. Seasonal &amp; holiday.</strong> Halloween, Christmas, Easter, Valentine&rsquo;s, back-to-school. Predictable demand spikes you can plan for &mdash; list 6&ndash;8 weeks ahead of each holiday and ride the search wave. Often the highest-converting books of the year.</p>

        <p><strong>4. Educational &amp; activity.</strong> Alphabet, numbers, sight words, shapes, plus activity pages (mazes, dot-to-dot, &ldquo;color by number&rdquo;). Teachers and homeschool parents buy these in bulk, and they pair naturally into bundles.</p>

        <p><strong>5. Personalized &amp; custom.</strong> A child&rsquo;s name on the cover and title page, or a fully custom theme on request. This is the premium tier &mdash; buyers can&rsquo;t find it anywhere else, so it commands the highest price and reads as a real gift, not a commodity download.</p>

        <p style={{ marginTop: '20px' }}>Start with <strong>one</strong> niche you can go deep on (say, kids&rsquo; animals), ship a few books, then expand to an adjacent one. Ten books in one lane beats one book in ten lanes.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ==================== SECTION 3 ==================== */}
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '40px', marginBottom: '16px' }}>3. Etsy&rsquo;s rules: AI line art + digital downloads</h2>

        <p>Selling printable coloring books on Etsy is fully allowed. Keep it clean by following the rules that actually matter:</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li><strong>You are the designer.</strong> Etsy requires the seller to be the maker. You designed and assembled the book &mdash; AI is a tool you used, the same way an illustrator uses software. List yourself as the creator.</li>
          <li><strong>Disclose AI where asked.</strong> Etsy expects honesty about AI-assisted work. Mention it in your description; don&rsquo;t imply a famous artist drew it.</li>
          <li><strong>No trademarks or protected characters.</strong> No Disney, no Pok&eacute;mon, no branded logos, no living-artist signature styles. This is the fastest way to a takedown or a ban. &ldquo;Friendly cartoon dinosaur&rdquo; is fine; a named franchise character is not.</li>
          <li><strong>Describe the digital download accurately.</strong> State page count, trim size (e.g. 8.5 &times; 11&Prime;), file format (PDF), and that it is an <em>instant download to print at home</em> &mdash; nothing physical ships.</li>
          <li><strong>Print quality matters.</strong> Pages should be clean black-and-white line art at print resolution. Gray, fuzzy, or low-res pages are the #1 cause of refunds and one-star reviews.</li>
        </ul>
        <p>Honest, clearly-described listings don&rsquo;t just stay safe &mdash; they convert better, because the buyer knows exactly what they&rsquo;re getting.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ==================== SECTION 4 ==================== */}
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '40px', marginBottom: '16px' }}>4. The fastest way to make a print-ready book</h2>

        <p>The slow way: prompt each page individually in Midjourney or ChatGPT, fight to keep the line weight consistent, then assemble 30 images into a PDF, add a cover, add a title page, and fix the trim. It works, but it&rsquo;s an evening of fiddly work per book &mdash; and consistency is hard.</p>
        <p>The fast way: describe a theme and get the whole book back. The <Link href="/coloring-book-machine" style={{ color: '#3B5FFF' }}>Coloring Book Machine</Link> turns a plain theme (&ldquo;friendly dinosaurs,&rdquo; &ldquo;under the sea,&rdquo; &ldquo;construction trucks&rdquo;) into a <strong>complete, print-ready coloring book PDF</strong> &mdash; themed bold-line pages, a cover, and a title page (&ldquo;This book belongs to: ____&rdquo;) &mdash; for <strong>$9.99 a book</strong>. You then list that PDF on Etsy as an instant download and sell it unlimited times. One $9.99 book, resold at $7 each, pays for itself on sale two.</p>

        {/* ==================== COLORING BOOK MACHINE BRIDGE (the product) ==================== */}
        <div style={{ marginTop: '32px', marginBottom: '32px', padding: '24px', background: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: '8px', textAlign: 'center' }}>
          <p style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: '700' }}>Make a print-ready coloring book &mdash; in minutes</p>
          <p style={{ margin: '0 0 16px', color: '#6B7280', fontSize: '15px' }}>Describe a theme and the Coloring Book Machine builds the whole thing: themed bold-line pages, a cover, and a title page &mdash; one print-ready PDF you can list on Etsy as an instant download (or print &amp; gift to your own kids). $9.99 a book, resold unlimited times.</p>
          <a href="/coloring-book-machine?utm_source=blog&utm_medium=cta&utm_campaign=sell_printable_coloring_books_etsy" style={{ display: 'inline-block', background: '#EA580C', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Make a Coloring Book &mdash; $9.99 &rarr;
          </a>
        </div>

        <p>Prefer to make the pages yourself? You can build them in any image tool and assemble the PDF by hand &mdash; the prompts in the next section are tuned for exactly that. Either way, the output is the same product: a clean printable book.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ==================== SECTION 5 ==================== */}
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '40px', marginBottom: '16px' }}>5. Copy-paste line-art prompts (if you DIY the pages)</h2>

        <p>The secret to printable coloring pages is the constraints: <strong>pure black-and-white line art, bold clean outlines, no shading, no gray, white background.</strong> Skip any of those and the page won&rsquo;t print as a coloring page. These prompts bake the constraints in &mdash; swap the subject and keep the rest:</p>

        <p style={{ fontWeight: '700', marginBottom: '8px' }}>Kids&rsquo; theme (simple, bold lines):</p>
        <div style={promptBlockStyle}>Coloring book page for young children, a friendly cartoon dinosaur in a simple jungle scene, pure black and white line art, bold clean outlines, thick lines, no shading, no gray, no color, plenty of large open spaces to color, white background, full page, 8.5x11 portrait</div>

        <p style={{ fontWeight: '700', marginBottom: '8px' }}>Adult relaxation (intricate, fine lines):</p>
        <div style={promptBlockStyle}>Adult coloring book page, intricate symmetrical floral mandala, fine detailed black line art, clean crisp outlines, no shading, no gray fill, pure black and white, white background, centered full-page design, 8.5x11</div>

        <p style={{ fontWeight: '700', marginBottom: '8px' }}>Seasonal / holiday:</p>
        <div style={promptBlockStyle}>Coloring book page, cute Halloween scene with a friendly pumpkin and a little ghost, bold black outline line art, no shading, no gray, pure black and white, large simple shapes for kids to color, white background, full page, 8.5x11 portrait</div>

        <p>Generate 20&ndash;40 in one theme, keep the line weight consistent, drop them into a PDF with a cover and a title page, and you have a book. (The Coloring Book Machine above does all of that for you &mdash; this section is for the hands-on route.) For a full pack of niche-ready prompts, see the Image Prompt Pack at the end.</p>

        <p>Need a different style of cover art or a hero illustration for the listing thumbnail? The free <Link href="/ai-art-generator" style={{ color: '#3B5FFF' }}>Art Machine</Link> makes finished images from a plain description &mdash; handy for a colorful cover mockup that makes your listing pop.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ==================== SECTION 6 ==================== */}
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '40px', marginBottom: '16px' }}>6. Pricing, listing &amp; getting found</h2>

        <p>The book is half the battle; the listing sells it. The pattern that works:</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li><strong>Price by depth.</strong> A single themed book (15&ndash;40 pages) at <strong>$4&ndash;12</strong>; a personalized or seasonal book toward the top; a multi-theme mega bundle (100+ pages) at <strong>$12&ndash;25</strong>. Anchor the single against the bundle to make the bundle look like the deal.</li>
          <li><strong>Title = keywords buyers type.</strong> &ldquo;Dinosaur Coloring Book Printable for Kids &mdash; 30 Pages, Instant Download PDF.&rdquo; Lead with the theme + &ldquo;coloring book printable&rdquo; + audience.</li>
          <li><strong>Use all 13 tags.</strong> Mix the theme (dinosaur coloring pages), the format (printable coloring book), the audience (kids coloring book), and the occasion (rainy day activity, party favor).</li>
          <li><strong>Show the pages.</strong> Use 5&ndash;8 listing images: a cover mockup, a grid of sample pages, and a &ldquo;what you get&rdquo; graphic (page count, size, format). Buyers want to see inside before they buy.</li>
          <li><strong>Write a clear &ldquo;what you get.&rdquo;</strong> Page count, trim size, PDF format, instant download, print-at-home, personal-use terms. Clarity converts and prevents refunds.</li>
        </ul>
        <p>Don&rsquo;t want to write all that? Describe your book and the free <Link href="/listing-machine" style={{ color: '#3B5FFF' }}>Listing Machine</Link> writes the whole listing for you &mdash; title, tags, &ldquo;what you get,&rdquo; description, and a price suggestion, tuned for Etsy.</p>

        {/* ==================== LISTING MACHINE BRIDGE (sell-path) ==================== */}
        <div style={{ marginTop: '32px', marginBottom: '32px', padding: '24px', background: '#ECFDF5', border: '1px solid #6EE7B7', borderRadius: '8px', textAlign: 'center' }}>
          <p style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: '700' }}>Write your coloring-book listing &mdash; free</p>
          <p style={{ margin: '0 0 16px', color: '#6B7280', fontSize: '15px' }}>Describe your book and the Listing Machine writes the whole Etsy listing: a keyword-rich title, a &ldquo;what you get&rdquo; list, a buyer-focused description, 13 tags, and a price suggestion. Copy, paste, publish.</p>
          <a href="/listing-machine?utm_source=blog&utm_medium=cta&utm_campaign=sell_printable_coloring_books_etsy" style={{ display: 'inline-block', background: '#059669', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Write My Listing &mdash; Free &rarr;
          </a>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ==================== SECTION 7 ==================== */}
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '40px', marginBottom: '16px' }}>7. Common mistakes to avoid</h2>
        <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
          <li><strong>Pages with gray or shading.</strong> A coloring page must be clean line art on white. If there&rsquo;s gray fill or shadow, it&rsquo;s not colorable &mdash; and it eats the buyer&rsquo;s ink. Always specify &ldquo;no shading, no gray, pure black and white.&rdquo;</li>
          <li><strong>Low resolution.</strong> Blurry, pixelated pages = refunds and bad reviews. Export at print resolution; check a test print before listing.</li>
          <li><strong>Selling a single page as a &ldquo;book.&rdquo;</strong> Buyers want a cohesive set. Ship 15+ pages with a cover and title page, or it reads as low-effort.</li>
          <li><strong>Trademarked characters.</strong> The fast lane to a takedown. Original cartoon subjects only.</li>
          <li><strong>Mismatched line weight.</strong> If page 3 is bold and page 12 is thin and detailed, the book feels inconsistent. Keep one style per book (this is where a tool that generates the whole book beats hand-prompting).</li>
          <li><strong>One book, then waiting.</strong> A single listing isn&rsquo;t a business. The shops that earn have a shelf &mdash; many themed books, each ranking for its own search.</li>
        </ul>

        {/* ==================== CTA 1 ==================== */}
        <div style={{ marginTop: '16px', marginBottom: '32px', padding: '24px', background: '#F0F4FF', border: '1px solid #93B4FF', borderRadius: '8px', textAlign: 'center' }}>
          <p style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: '700' }}>Want 150+ Ready-to-Use Image Prompts?</p>
          <p style={{ margin: '0 0 16px', color: '#6B7280', fontSize: '15px' }}>The AI Image Prompt Pack includes tested prompts for line art and printable designs &mdash; the exact base you need to fill a coloring book fast &mdash; optimized for Midjourney and ChatGPT, so you can build a whole book in an afternoon instead of prompt-wrangling.</p>
          <a href={IMAGE_PACK_LINK} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Get the AI Image Prompt Pack &mdash; $29
          </a>
          <p style={{ margin: '12px 0 0', fontSize: '14px', color: '#6B7280' }}>
            Or save with the <a href={STRIPE_BUNDLE} style={{ color: '#3B5FFF', fontWeight: '600' }}>Midas Tools Bundle</a> &mdash; every prompt pack we sell, one price.
          </p>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ==================== RELATED POSTS ==================== */}
        <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginTop: '40px', marginBottom: '16px' }}>Related Posts</h2>
        <ul style={{ paddingLeft: '20px', marginBottom: '40px' }}>
          <li style={{ marginBottom: '8px' }}><Link href="/blog/sell-ai-coloring-books-amazon-kdp-2026" style={{ color: '#3B5FFF' }}>How to Sell AI Coloring Books on Amazon KDP in 2026</Link></li>
          <li style={{ marginBottom: '8px' }}><Link href="/blog/how-to-sell-ai-art-on-etsy-2026" style={{ color: '#3B5FFF' }}>How to Sell AI Art on Etsy in 2026: The Complete Guide</Link></li>
          <li style={{ marginBottom: '8px' }}><Link href="/blog/how-to-make-money-selling-ai-art-2026" style={{ color: '#3B5FFF' }}>How to Make Money Selling AI Art in 2026: 7 Proven Methods</Link></li>
          <li style={{ marginBottom: '8px' }}><Link href="/blog/best-niches-ai-wall-art-2026" style={{ color: '#3B5FFF' }}>Best Niches for AI Wall Art to Sell in 2026</Link></li>
          <li style={{ marginBottom: '8px' }}><Link href="/blog/sell-ai-art-on-gumroad-2026" style={{ color: '#3B5FFF' }}>How to Sell AI Art on Gumroad in 2026</Link></li>
        </ul>
      </div>
        {/* EMAIL CAPTURE — feed the warm list (monetized via the weekly Memo) */}
        <div style={{ margin: '32px 0 8px', borderRadius: 8, overflow: 'hidden' }}>
          <EmailCapture />
        </div>
    </Layout>
  );
}
