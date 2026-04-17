import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const STRIPE_BUNDLE = 'https://buy.stripe.com/00g5xY2WM04Ncyw9AH';
const IMAGE_PACK_LINK = '/ai-image-prompt-pack';

export default function BestMidjourneyPrompts2026() {
  const title = '40+ Best Midjourney Prompts for Stunning AI Art in 2026 (Copy & Paste)';
  const description = 'The best Midjourney prompts for 2026. 40+ copy-paste prompts for photorealistic portraits, product photography, cinematic art, anime, architecture, and abstract design. Includes v7 parameters, --ar, --style raw, --niji, and multi-prompt syntax.';
  const url = 'https://www.midastools.co/blog/best-midjourney-prompts-2026';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    datePublished: '2026-03-26',
    dateModified: '2026-03-26',
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
        name: 'What is the best Midjourney version to use in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Midjourney v7 is the current default and best version for most use cases in 2026 (v8 Alpha is also available in preview). V7 became default in June 2025 and features Omni Reference, model personalization turned on by default, and significantly improved realism, prompt interpretation, and generation speed. For anime and manga styles, use the --niji parameter which activates a specialized model tuned for Japanese art styles.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do I write better Midjourney prompts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Great Midjourney prompts follow a structure: subject first, then style/medium, then lighting and atmosphere, then technical parameters. Use multi-prompt syntax (::) to weight different elements. Add parameters like --ar for aspect ratio, --s for stylization (0-1000), --c for chaos/variation (0-100), and --style raw for less opinionated results. Be specific about what you want but leave room for Midjourney\'s creativity — it excels when you give it artistic direction rather than pixel-perfect instructions.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I use Midjourney images commercially?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, if you have a paid Midjourney subscription. All paid subscribers own the rights to images they generate, including for commercial use. Free trial users do not get commercial rights. You can use Midjourney images for products, marketing, social media, print-on-demand, and more. However, avoid generating images of real people, trademarked characters, or content that closely mimics the style of a living artist.'
        }
      },
      {
        '@type': 'Question',
        name: 'What does --style raw do in Midjourney?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The --style raw parameter tells Midjourney to apply less of its default aesthetic "beautification" to your image. By default, Midjourney adds its own artistic interpretation — making images more vibrant, polished, and stylized. With --style raw, the output sticks closer to your literal prompt description. This is especially useful for photorealistic work, documentary-style images, and when you want more control over the exact look. It produces more neutral, less "Midjourney-looking" results.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the difference between Midjourney and ChatGPT for image generation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Midjourney and ChatGPT (DALL-E) have different strengths. Midjourney excels at artistic, cinematic, and editorial imagery — it produces more visually stunning and stylized results by default. It also offers fine-grained control through parameters like --ar, --s, --c, and multi-prompt weighting. ChatGPT is better at following complex instructions, generating images with accurate text, and iterating through conversation. Many professional creators use both: Midjourney for hero visuals and artistic work, ChatGPT for precise compositions and text-heavy designs.'
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
        <title>{`${title} | Midas Tools`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="best Midjourney prompts 2026, Midjourney prompts, Midjourney v7 prompts, AI art prompts, Midjourney photography prompts, Midjourney anime prompts, Midjourney architecture prompts, Midjourney parameters, --style raw, --niji, Midjourney prompt guide" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
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
          40+ Best Midjourney Prompts for Stunning AI Art in 2026
        </h1>
        <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '40px' }}>Mar 26, 2026 &middot; Rey Midas</p>

        <p>Midjourney remains the undisputed king of AI-generated art in 2026. While other tools have caught up in certain areas, nothing matches Midjourney&rsquo;s ability to produce visually breathtaking, editorially polished images with a single prompt.</p>
        <p>The secret is that Midjourney is not just a prompt-in, image-out tool. It has its own <strong>parameter system</strong> that gives you fine-grained control over aspect ratio, stylization, chaos, quality, and more. The people getting jaw-dropping results are not writing better descriptions &mdash; they are using Midjourney&rsquo;s parameters like a professional photographer uses camera settings.</p>
        <p>Every prompt below is designed for <strong>Midjourney v7</strong> (the current default). Paste them into the <code>/imagine</code> command in Discord or the Midjourney web app. I have included the exact parameters that produce the best results for each style.</p>
        <p>If you are looking for ChatGPT/DALL-E versions of image prompts, check out our <Link href="/blog/chatgpt-image-prompts-2026" style={{ color: '#3B5FFF' }}>50 Viral ChatGPT Image Prompts guide</Link>.</p>

        <p style={{ marginTop: '16px' }}><strong>Quick parameter reference:</strong></p>
        <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
          <li><code>--ar 16:9</code> &mdash; Aspect ratio (width:height)</li>
          <li><code>--v 6.1</code> &mdash; Midjourney version</li>
          <li><code>--s 250</code> &mdash; Stylize (0&ndash;1000, higher = more artistic)</li>
          <li><code>--c 20</code> &mdash; Chaos (0&ndash;100, higher = more variation)</li>
          <li><code>--q 2</code> &mdash; Quality (higher = more detail, slower)</li>
          <li><code>--style raw</code> &mdash; Less Midjourney &ldquo;beautification,&rdquo; closer to your prompt</li>
          <li><code>--no</code> &mdash; Negative prompt (what to exclude)</li>
          <li><code>--niji</code> &mdash; Anime/manga specialized model</li>
          <li><code>::weight</code> &mdash; Multi-prompt weighting (e.g., <code>landscape::2 flowers::1</code>)</li>
        </ul>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 1: PHOTOREALISTIC & PORTRAIT PROMPTS */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Section 1: Photorealistic &amp; Portrait Prompts</h2>
        <p>Midjourney&rsquo;s photorealism is unmatched. These prompts exploit v7&rsquo;s understanding of camera systems, lighting physics, and film stocks to generate images that are indistinguishable from photographs shot on real cameras.</p>

        {/* PROMPT 1 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>1. The Executive Headshot</h3>
        <p>A studio-quality corporate headshot that replaces a $400 photographer session. The <code>--style raw</code> keeps skin tones natural instead of over-processed.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: professional corporate headshot of a [man/woman] in their [30s/40s/50s], wearing a tailored [navy blazer/charcoal suit], shot on Canon EOS R5 85mm f/1.4, soft diffused studio lighting with subtle warm fill, clean neutral gray background with gentle gradient, sharp focus on the eyes, shallow depth of field, natural skin texture, confident approachable expression, upper body framing turned slightly 3/4 to camera --ar 4:5 --s 100 --style raw --v 6.1`}
        </div>
        <p><strong>Pro tip:</strong> Use <code>--s 100</code> or lower for headshots. Higher stylization makes portraits look painterly, which is the opposite of what you want for professional use.</p>

        {/* PROMPT 2 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>2. Editorial Fashion Portrait</h3>
        <p>The kind of portrait you see in Vogue or Harper&rsquo;s Bazaar. Midjourney absolutely nails editorial lighting and composition when you give it the right references.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: editorial fashion portrait of a [woman/man] with striking features, wearing [designer outfit description], dramatic Rembrandt lighting with a single key light from upper left, deep black background, shot on Hasselblad medium format 80mm lens, rich contrast, desaturated color grade with deep shadows, editorial magazine quality, intense commanding gaze, cinematic color grading --ar 3:4 --s 250 --v 6.1`}
        </div>

        {/* PROMPT 3 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>3. Street Photography Candid</h3>
        <p>Captures the raw, documentary feel of classic street photography. The multi-prompt syntax weights the street atmosphere higher than the subject.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: candid street photography::2 a person walking through a rain-soaked Tokyo alley at night::1 neon signs reflecting off wet pavement, shot on Leica M11 35mm f/1.4 Summilux, natural ambient light from neon signs and streetlamps, slight motion blur on passersby, grain and texture of pushed Tri-X 400 film, documentary style, Henri Cartier-Bresson decisive moment --ar 3:2 --s 150 --style raw --v 6.1`}
        </div>
        <p><strong>Pro tip:</strong> The <code>::2</code> and <code>::1</code> weights tell Midjourney to prioritize the street photography feel over the specific subject description. This produces more authentic-looking candid shots.</p>

        {/* PROMPT 4 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>4. Kodak Film Photography Portrait</h3>
        <p>Replicates the warm, organic look of analog film. The slight imperfections &mdash; grain, soft focus, light leaks &mdash; are what make it feel real.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: portrait photograph shot on expired Kodak Portra 800, 35mm film, a [describe person] sitting in a sunlit cafe, soft hazy natural light from a nearby window, slight overexposure with lifted shadows and muted warm tones, visible film grain throughout, relaxed candid expression not looking at camera, shallow depth of field with slightly soft focus, vintage color palette of faded oranges soft greens dusty pinks, light leak on the right edge --ar 3:2 --s 200 --style raw --v 6.1`}
        </div>

        {/* PROMPT 5 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>5. Golden Hour Environmental Portrait</h3>
        <p>The magic hour shot that every photographer chases. Midjourney v7 handles golden hour light with stunning accuracy.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: environmental portrait of a [describe person] standing in an open field at golden hour, warm backlight creating a glowing rim light around hair and shoulders, lens flare from the low sun, shot on Sony A7IV 85mm f/1.8, bokeh of wildflowers in the foreground, vast sky with soft clouds painted in warm oranges and pinks, relaxed natural pose, earth-toned clothing, the kind of photograph that wins portrait awards --ar 16:9 --s 300 --v 6.1`}
        </div>

        {/* PROMPT 6 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>6. Dramatic Low-Key Studio Portrait</h3>
        <p>Pure shadow and light. This produces the kind of moody, high-contrast portraits that fine art photographers spend hours setting up in a studio.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: dramatic low-key studio portrait, a [man/woman] with [describe features], single harsh side light from the right casting deep shadows across half the face, black background, eyes catching a single catchlight, visible skin pores and texture, shot on Phase One IQ4 150mm, extreme detail, black and white photograph, high contrast with crushed blacks, Peter Lindbergh aesthetic --ar 4:5 --s 100 --style raw --v 6.1 --no color`}
        </div>
        <p><strong>Pro tip:</strong> Use <code>--no color</code> to force Midjourney into true black and white rather than a desaturated color image. The results are dramatically better for monochrome work.</p>

        {/* PROMPT 7 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>7. Double Exposure Creative Portrait</h3>
        <p>The double exposure effect that is extremely difficult to achieve in-camera but Midjourney handles beautifully.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: double exposure portrait::2 silhouette of a woman's profile merged with a dense forest landscape::1.5 pine trees and misty mountains visible within the head and shoulders, ethereal soft light, cool blue and green tones, the forest fills the figure while the face edges are crisp, fine art photography, surreal and dreamlike, printed on matte paper --ar 4:5 --s 400 --v 6.1`}
        </div>

        {/* PROMPT 8 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>8. High Fashion Beauty Close-Up</h3>
        <p>The extreme close-up beauty shot used in cosmetics advertising. Midjourney renders skin texture and makeup detail at an extraordinary level.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: extreme close-up beauty photograph of a woman's face, flawless dewy skin with visible pores, editorial makeup with metallic gold eyeshadow and bold wine lip, shot on Canon EOS R5 100mm macro f/2.8, ring light creating circular catchlights in the eyes, every eyelash individually visible, soft skin with a natural luminosity, beauty dish lighting from above, Glossier campaign aesthetic, 8K skin detail --ar 1:1 --s 150 --style raw --v 6.1`}
        </div>

        {/* CTA AFTER SECTION 1 */}
        <div style={{ marginTop: '32px', marginBottom: '32px', padding: '24px', background: '#F0F4FF', border: '1px solid #93B4FF', borderRadius: '8px', textAlign: 'center' }}>
          <p style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: '700' }}>Want 200+ image prompts pre-built with parameters and style variations?</p>
          <p style={{ margin: '0 0 16px', color: '#6B7280', fontSize: '15px' }}>Every prompt includes Midjourney parameters, lighting setups, and composition details. Copy, paste into /imagine, generate. Works with Midjourney, ChatGPT, and any AI image tool.</p>
          <a href={IMAGE_PACK_LINK} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Get the AI Image Prompt Pack &mdash; $29
          </a>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 2: PRODUCT & BRAND PHOTOGRAPHY       */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Section 2: Product &amp; Brand Photography</h2>
        <p>Midjourney has become a secret weapon for e-commerce brands. These prompts generate product shots that would cost $500&ndash;$2,000 from a professional studio. The key is using <code>--style raw</code> to keep the lighting and colors realistic rather than overly artistic.</p>

        {/* PROMPT 9 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>9. Hero Product Flat Lay</h3>
        <p>The overhead flat lay that dominates Instagram and e-commerce hero images. Midjourney renders surface textures &mdash; marble, wood, linen &mdash; with stunning realism.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: professional flat lay product photography::2 a [describe product] shot from directly above on a white marble surface::1 surrounded by carefully arranged props: dried eucalyptus sprig, vintage brass pen, cup of black coffee, scattered coffee beans, soft even natural light from a large window, no harsh shadows, clean minimal composition with intentional negative space, warm neutral earth tones, shot on Canon 5D Mark IV 50mm macro --ar 1:1 --s 100 --style raw --v 6.1 --no text watermark`}
        </div>
        <p><strong>Pro tip:</strong> Always add <code>--no text watermark</code> for product shots. Midjourney sometimes adds fake brand names or labels that ruin an otherwise perfect image.</p>

        {/* PROMPT 10 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>10. Lifestyle Product in Context</h3>
        <p>Show your product being used in an aspirational setting. This style of photography converts 3x better than white-background shots on e-commerce platforms.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: lifestyle product photograph of a [describe product] being held by a person in a beautiful modern apartment, warm golden hour light streaming through large windows, the product is the clear focal point, shallow depth of field with tasteful interior design in the soft background, shot on Sony A7III 35mm f/1.8, warm slightly desaturated color grade, Kinfolk magazine aesthetic, aspirational but authentic --ar 4:5 --s 150 --style raw --v 6.1`}
        </div>

        {/* PROMPT 11 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>11. Luxury Cosmetics Product Shot</h3>
        <p>The high-end beauty product photography used by brands like Glossier, Fenty, and Drunk Elephant. Midjourney captures reflections and glass textures beautifully.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: luxury beauty product photography::2 a [serum bottle with glass dropper / matte lipstick in gold tube / skincare jar] floating against a soft gradient background in blush pink to champagne gold::1 surrounded by floating rose petals and honey drips, products casting subtle reflections on a glossy surface, soft diffused beauty lighting, dewy water droplets on the product surface, ultra-sharp focus, Sephora advertising campaign quality --ar 4:5 --s 250 --v 6.1 --no text label`}
        </div>

        {/* PROMPT 12 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>12. Moody Food Photography</h3>
        <p>Restaurant-quality food shots with that dark, dramatic editorial look. The multi-prompt weighting emphasizes the food styling over the environment.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: professional food photography::2 [describe dish: ingredients, plating, garnishes]::1 served on a handmade ceramic plate on a dark aged wood table, overhead 45-degree angle, dramatic side lighting from the left creating depth and highlighting textures, visible glisten on sauce, crisp edges, steam rising, scattered herbs and ingredients around the plate, shallow depth of field, rich warm color grade, shot on Nikon Z8 60mm macro, Bon Appetit magazine quality --ar 4:5 --s 200 --style raw --v 6.1`}
        </div>

        {/* PROMPT 13 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>13. Tech Product on Minimal Desk</h3>
        <p>The clean desk setup shot that tech brands and SaaS companies use for hero images. This is Midjourney&rsquo;s bread and butter.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: clean minimal desk setup photograph featuring a [describe tech product] as the centerpiece, sitting on a white oak desk, complementary items with intentional spacing: single potted monstera plant, concrete pen holder, ceramic mug, wireless earbuds, overhead soft panel lighting with warm tone, everything perfectly aligned and organized, whites warm grays and one accent color in sage green, shot from slight elevated angle, MKBHD desk aesthetic --ar 16:9 --s 100 --style raw --v 6.1 --no clutter mess`}
        </div>

        {/* PROMPT 14 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>14. Packaging Mockup (Premium)</h3>
        <p>Visualize your packaging before spending money on production. Midjourney renders material textures &mdash; matte paper, embossed foil, kraft stock &mdash; with incredible fidelity.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: minimalist product packaging mockup::2 a [matte black box with embossed gold logo / frosted glass bottle with kraft paper label / minimal white tube with sans-serif typography]::1 sitting on a clean concrete surface, single dramatic directional light from upper right casting a long clean shadow, solid warm off-white background, no other objects, ultra-clean Apple-level product photography aesthetic, sharp focus across entire product, 8K detail on textures showing paper grain and matte finish --ar 4:5 --s 100 --style raw --v 6.1 --no text`}
        </div>

        {/* PROMPT 15 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>15. Candle &amp; Home Fragrance Scene</h3>
        <p>The cozy atmospheric shot that sells home goods on Instagram and Pinterest. Midjourney handles warm candlelight perfectly.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: moody atmospheric product photograph of a soy candle in an amber glass jar with minimalist white label, lit and glowing warmly on a bedroom nightstand, the flame as the primary light source casting a warm golden glow on surrounding surfaces, wisps of smoke, subtle bokeh of fairy lights in background, nearby props: folded linen towel small stack of books dried lavender sprigs, rich warm shadows, cozy hygge aesthetic, shot on 50mm f/1.4 at ISO 800 for natural grain --ar 4:5 --s 300 --v 6.1`}
        </div>

        {/* CTA AFTER SECTION 2 */}
        <div style={{ marginTop: '32px', marginBottom: '32px', padding: '24px', background: '#F0F4FF', border: '1px solid #93B4FF', borderRadius: '8px', textAlign: 'center' }}>
          <p style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: '700' }}>Stop writing prompts from scratch every time.</p>
          <p style={{ margin: '0 0 16px', color: '#6B7280', fontSize: '15px' }}>The AI Image Prompt Pack has 200+ pre-built prompts with parameters for Midjourney, ChatGPT, and every major AI image tool. Organized by category. Copy, paste, generate.</p>
          <a href={IMAGE_PACK_LINK} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Get the AI Image Prompt Pack &mdash; $29
          </a>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 3: CINEMATIC & MOVIE POSTER ART      */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Section 3: Cinematic &amp; Movie Poster Art</h2>
        <p>This is where Midjourney truly shines above every other AI tool. Its ability to generate cinematic compositions with proper film-grade lighting, color grading, and aspect ratios is unmatched. These prompts produce images that look like they were pulled from a movie.</p>

        {/* PROMPT 16 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>16. Film Noir Detective Scene</h3>
        <p>Classic 1940s noir with hard shadows, venetian blind patterns, and that unmistakable black-and-white tension.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: film noir scene::2 a detective in a fedora and trench coat standing in a dimly lit office::1 hard shadows from venetian blinds cutting across the walls and floor, cigarette smoke curling through a single shaft of light, black and white high contrast photography, wet streets visible through the window, dramatic chiaroscuro lighting, 1940s set design and wardrobe, shot on 35mm film, grain and texture of classic Hollywood noir, Humphrey Bogart era aesthetic --ar 2.39:1 --s 200 --v 6.1 --no color`}
        </div>

        {/* PROMPT 17 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>17. Blade Runner Sci-Fi Cityscape</h3>
        <p>The neon-drenched dystopian future that never gets old. Midjourney generates sci-fi environments with extraordinary depth and atmosphere.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: cinematic establishing shot of a massive cyberpunk city at night::2 towering skyscrapers with holographic advertisements in Japanese and English::1 flying vehicles leaving light trails between buildings, rain falling through neon light creating a haze, street level far below with crowds of people under umbrellas, Blade Runner 2049 color palette of deep oranges teals and magentas, volumetric fog and god rays, shot on anamorphic lens with horizontal lens flares, Roger Deakins cinematography --ar 2.39:1 --s 350 --v 6.1 --q 2`}
        </div>
        <p><strong>Pro tip:</strong> Use <code>--ar 2.39:1</code> for true cinematic widescreen. This is the actual aspect ratio used in most modern blockbuster films, and it instantly makes any image feel more cinematic than 16:9.</p>

        {/* PROMPT 18 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>18. Epic Fantasy Landscape</h3>
        <p>Lord of the Rings-scale environments that work as desktop wallpapers, book covers, or concept art for worldbuilding projects.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: epic fantasy landscape::2 a lone traveler on horseback approaching a vast ancient city carved into the side of a mountain::1 golden hour light illuminating the stone architecture, waterfalls cascading from the cliffs, lush green valley below with a winding river, dramatic cloud formations in a vast sky, birds circling distant towers, sense of enormous scale and wonder, matte painting quality, Lord of the Rings meets Zelda Breath of the Wild --ar 21:9 --s 400 --v 6.1 --q 2`}
        </div>

        {/* PROMPT 19 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>19. Wes Anderson Symmetrical Scene</h3>
        <p>The perfectly symmetrical, pastel-drenched aesthetic of Wes Anderson is one of the most popular Midjourney styles. The results are instantly recognizable.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: a perfectly symmetrical Wes Anderson film still::2 a grand hotel lobby in pastel pink and mint green with geometric Art Deco details::1 a concierge standing centered at the front desk in a perfectly pressed uniform, perfectly balanced composition, frontal camera angle, flat lighting with soft pastel color palette, every object placed with obsessive precision, The Grand Budapest Hotel aesthetic, 35mm film grain, centered one-point perspective --ar 16:9 --s 350 --v 6.1`}
        </div>

        {/* PROMPT 20 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>20. Horror Movie Still</h3>
        <p>Atmospheric horror that relies on tension and shadow rather than gore. Midjourney excels at creating dread through lighting and composition.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: cinematic horror movie still::2 a long dark hallway in an abandoned hospital, a single flickering fluorescent light at the far end::1 peeling paint on the walls, wheelchair overturned in the foreground slightly out of focus, a shadowy figure barely visible at the end of the hallway, desaturated teal and sickly yellow color grade, wet floor reflecting the light, shot on wide angle 24mm lens creating distorted perspective, The Shining meets Silent Hill atmosphere --ar 2.39:1 --s 200 --style raw --v 6.1 --c 15`}
        </div>
        <p><strong>Pro tip:</strong> Add <code>--c 15</code> (chaos) for horror prompts. A little unpredictability in the output often creates more genuinely unsettling results than a perfectly controlled composition.</p>

        {/* PROMPT 21 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>21. Vintage Movie Poster</h3>
        <p>Classic hand-painted movie poster art from the golden age of cinema. These work beautifully as prints, social content, or creative projects.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: vintage 1970s hand-painted movie poster for an action adventure film, a rugged hero in the center holding a torch, surrounded by supporting characters in smaller vignettes, ancient temple ruins and jungle in the background, bold hand-lettered title text at the top, painted in gouache and airbrush technique, warm adventure color palette of golds reds and deep greens, Drew Struzan Indiana Jones poster style, visible brushstroke texture, aged paper with slight foxing --ar 2:3 --s 300 --v 6.1`}
        </div>

        {/* PROMPT 22 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>22. Underwater Cinematic Scene</h3>
        <p>Midjourney&rsquo;s handling of light through water is gorgeous. This produces the kind of shot that would require a specialized underwater cinematography crew.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: cinematic underwater scene::2 a free diver descending into a deep blue ocean cenote::1 shafts of sunlight piercing through the water surface above, creating god rays in the crystal clear water, ancient rock formations and cave walls surrounding the diver, tiny particles floating in the water catching the light, the diver silhouetted against the light above, deep blues and teals with warm golden light shafts, shot on RED Komodo in 6K with underwater housing, James Cameron The Abyss atmosphere --ar 9:16 --s 350 --v 6.1 --q 2`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 4: ANIME, ILLUSTRATION & DIGITAL ART */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Section 4: Anime, Illustration &amp; Digital Art</h2>
        <p>Midjourney&rsquo;s <code>--niji</code> parameter activates a specialized model trained on anime and manga art. It produces results that feel like they came from a professional Japanese animation studio. For non-anime illustration, the standard model with high stylization creates beautiful digital art. Also check out our <Link href="/blog/chatgpt-action-figure-prompt-2026" style={{ color: '#3B5FFF' }}>viral action figure prompt guide</Link> for another trending AI art style.</p>

        {/* PROMPT 23 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>23. Studio Ghibli Landscape</h3>
        <p>The dreamy, hand-painted Miyazaki aesthetic. The <code>--niji</code> model is specifically tuned for this style and the results are breathtaking.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: Studio Ghibli anime landscape, a small cottage on a hillside covered in wildflowers overlooking a vast green valley, fluffy cumulus clouds in a bright blue sky, a gentle breeze moving the tall grass, warm golden afternoon light, hand-painted watercolor textures, soft greens sky blues and golden hour tones, a cat sleeping on the porch, laundry drying on a line, Hayao Miyazaki aesthetic, My Neighbor Totoro atmosphere, peaceful and nostalgic --ar 16:9 --niji --s 400`}
        </div>
        <p><strong>Pro tip:</strong> The <code>--niji</code> parameter replaces <code>--v 6.1</code>. You cannot use both at the same time. Niji is the anime specialist; use it for any Japanese animation or manga style.</p>

        {/* PROMPT 24 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>24. Manga Panel Action Scene</h3>
        <p>Dynamic manga-style art with speed lines, dramatic angles, and that signature black-and-white ink aesthetic.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: dynamic manga panel of a samurai mid-sword slash, extreme dramatic low angle perspective, speed lines radiating from the point of impact, ink splatter effects, high contrast black and white with screen tone shading, wind blowing hair and clothing, intense focused expression, katana catching a glint of light, action manga style with bold linework, Vagabond by Takehiko Inoue aesthetic --ar 3:4 --niji --s 300`}
        </div>

        {/* PROMPT 25 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>25. Anime Character Portrait</h3>
        <p>A detailed character design that could pass for a real anime production. Perfect for OCs, profile pictures, or creative projects.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: anime character portrait of a young woman with silver-white hair and heterochromia eyes one blue one gold, wearing a dark military-style coat with gold epaulettes, confident smirk, cherry blossom petals floating around her, soft pink and blue gradient background, detailed shading and highlights on hair, sparkle in the eyes, clean crisp linework, high quality anime key visual, Violet Evergarden character design quality --ar 3:4 --niji --s 350`}
        </div>

        {/* PROMPT 26 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>26. Retro Comic Book Cover</h3>
        <p>Classic American comic book art with halftone dots, bold outlines, and that unmistakable Silver Age energy. Use the standard model (not niji) for Western comics.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: vintage 1960s Marvel comic book cover, a superhero in a dynamic flying pose bursting through the page, bold black outlines, Ben-Day dot halftone shading in primary colors red blue and yellow, dramatic foreshortening, action lines and explosive sound effect lettering, aged newsprint paper texture with slight yellowing, Jack Kirby dynamic composition and anatomy, Silver Age comic aesthetic --ar 2:3 --s 300 --v 6.1`}
        </div>

        {/* PROMPT 27 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>27. Vector Illustration (Flat Design)</h3>
        <p>Clean, modern vector illustration style perfect for websites, apps, and marketing materials. Midjourney can replicate the flat design aesthetic that dominates tech branding.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: flat vector illustration of a person working at a cozy home office desk with a laptop and coffee, clean geometric shapes, limited color palette of 5 complementary colors: warm coral soft teal cream charcoal and golden yellow, no gradients, bold clean shapes with smooth edges, subtle shadow layers for depth, modern tech company illustration style, Slack or Notion marketing illustration aesthetic, white background --ar 16:9 --s 200 --v 6.1 --no photorealistic texture gradient`}
        </div>

        {/* PROMPT 28 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>28. Digital Concept Art (Game Environment)</h3>
        <p>The kind of environment concept art that AAA game studios commission. Midjourney produces portfolio-quality results that rival human concept artists for exploration and ideation.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: concept art environment painting::2 a forgotten overgrown space station partially reclaimed by nature::1 massive vines and trees growing through broken hull plates, bioluminescent plants casting soft blue and green light, a small explorer figure for scale standing at the entrance, dramatic volumetric lighting from a crack in the ceiling, painterly digital art technique with visible brushstrokes, color keys in teals greens and warm amber accents, AAA game concept art quality, Naughty Dog The Last of Us art direction --ar 16:9 --s 350 --v 6.1 --q 2`}
        </div>

        {/* PROMPT 29 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>29. Children&rsquo;s Book Illustration</h3>
        <p>Warm, whimsical illustration style perfect for children&rsquo;s books, nursery art, and educational content.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: charming children's book illustration of a little fox wearing a scarf and boots walking through an enchanted autumn forest, whimsical hand-painted style with soft watercolor textures, warm fall color palette of oranges golds reds and warm browns, friendly woodland creatures peeking from behind trees, falling leaves, mushrooms with tiny doors, soft dappled sunlight through the canopy, gentle and inviting atmosphere, Oliver Jeffers meets Beatrix Potter aesthetic --ar 4:3 --s 400 --v 6.1`}
        </div>

        {/* CTA AFTER SECTION 4 */}
        <div style={{ marginTop: '32px', marginBottom: '32px', padding: '24px', background: '#F0F4FF', border: '1px solid #93B4FF', borderRadius: '8px', textAlign: 'center' }}>
          <p style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: '700' }}>200+ prompts. Every style. Every AI tool. One pack.</p>
          <p style={{ margin: '0 0 16px', color: '#6B7280', fontSize: '15px' }}>Portraits, products, cinematic, anime, architecture, abstract &mdash; all pre-built with parameters and variations. Works with Midjourney, ChatGPT, Leonardo, and more.</p>
          <a href={IMAGE_PACK_LINK} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Get the AI Image Prompt Pack &mdash; $29
          </a>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 5: ARCHITECTURE & INTERIOR DESIGN     */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Section 5: Architecture &amp; Interior Design</h2>
        <p>Architects, interior designers, and real estate professionals have adopted Midjourney as a rapid visualization tool. It generates photorealistic architectural renders in seconds that would take a 3D artist days in Blender or V-Ray. These prompts demonstrate Midjourney&rsquo;s spatial intelligence.</p>

        {/* PROMPT 30 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>30. Modern Minimalist Home Exterior</h3>
        <p>The clean, contemporary home that dominates architecture Instagram. Midjourney renders glass, concrete, and wood textures with photographic accuracy.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: architectural photograph of a modern minimalist home exterior::2 clean geometric forms in white concrete and natural wood cladding::1 floor-to-ceiling glass walls revealing a warmly lit interior, flat roof with a subtle green roof garden, infinity pool reflecting the house and sky, mature landscaping with native grasses and olive trees, golden hour light casting long warm shadows, shot on a tilt-shift lens for architectural precision, ArchDaily featured project quality --ar 16:9 --s 200 --style raw --v 6.1`}
        </div>

        {/* PROMPT 31 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>31. Cozy Scandinavian Living Room</h3>
        <p>The hygge interior that Pinterest was built for. Interior designers use these as mood boards and client presentation visuals.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: interior design photograph of a cozy Scandinavian living room, soft natural light from large windows with sheer linen curtains, light oak hardwood floors, a deep comfortable linen sofa in warm oatmeal, wool throw blankets and textured cushions, a round marble coffee table with a ceramic vase of dried pampas grass, built-in bookshelves painted in soft sage green, a lit fireplace with a simple white surround, warm neutral color palette with touches of terracotta and forest green, hygge atmosphere, Kinfolk magazine interior --ar 16:9 --s 250 --style raw --v 6.1`}
        </div>

        {/* PROMPT 32 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>32. Futuristic Skyscraper Concept</h3>
        <p>Visionary architecture that pushes the boundaries of what buildings could look like. Perfect for concept work, sci-fi worldbuilding, or inspiration boards.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: futuristic skyscraper concept::2 a twisting organic tower covered in vertical gardens and bio-integrated solar panels::1 the building spirals upward like a DNA helix, sky bridges connecting to neighboring towers, drone landing pads at various levels, the facade is a living breathing ecosystem with trees growing from terraced balconies, set against a clean blue sky with wispy clouds, sustainable utopian city visible in the background, architectural visualization render quality, Zaha Hadid meets Bjarke Ingels --ar 9:16 --s 300 --v 6.1 --q 2`}
        </div>
        <p><strong>Pro tip:</strong> Use <code>--ar 9:16</code> (vertical) for skyscraper and tower concepts. The tall format lets Midjourney show the full height and vertical drama of the building.</p>

        {/* PROMPT 33 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>33. Japanese Zen Garden Courtyard</h3>
        <p>A serene architectural space that blends structure with nature. Midjourney handles the interplay of natural materials and landscaping beautifully.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: architectural photograph of a Japanese-inspired zen garden courtyard enclosed by a modern home, raked white gravel with carefully placed moss-covered stones, a single perfectly shaped pine tree, wooden engawa veranda with clean lines, shoji screen doors partially open revealing a minimal interior, soft overcast light creating even illumination with no harsh shadows, water feature with a stone basin, bamboo fence detail, wabi-sabi aesthetic meeting contemporary architecture, Tadao Ando serenity --ar 16:9 --s 200 --style raw --v 6.1`}
        </div>

        {/* PROMPT 34 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>34. Moody Restaurant Interior</h3>
        <p>The dark, atmospheric restaurant design that has taken over hospitality. Owners use these renders to pitch concepts to investors before building.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: interior design photograph of a moody upscale restaurant, dark walls in deep charcoal with warm brass fixtures and exposed Edison bulbs, long marble bar with leather stools, banquette seating in rich emerald green velvet, arched doorways and textured plaster walls, warm intimate candlelight and strategic accent lighting, an open kitchen visible in the background with soft warm glow, fresh flowers on each table, the kind of restaurant that has a three-month waitlist, Soho House meets Copenhagen Noma aesthetic --ar 16:9 --s 300 --v 6.1`}
        </div>

        {/* PROMPT 35 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>35. Landscape Architecture &mdash; Public Park</h3>
        <p>Urban landscape design that shows the future of public spaces. Useful for landscape architects, urban planners, and civic presentations.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: landscape architecture visualization of a modern urban public park, winding pathways through native wildflower meadows, a central reflecting pool surrounded by stepped seating, mature trees providing dappled shade, children's play area with natural wood structures, a small amphitheater built into a gentle slope, cyclists and pedestrians enjoying the space, city skyline visible in the background, late afternoon golden light, rendered in photorealistic architectural visualization style, High Line New York meets Superkilen Copenhagen --ar 16:9 --s 200 --style raw --v 6.1`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 6: ABSTRACT, TEXTURE & PATTERN       */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Section 6: Abstract, Texture &amp; Pattern Design</h2>
        <p>Designers, print-on-demand sellers, and textile artists use Midjourney to generate patterns, textures, and abstract compositions. These prompts are designed to produce assets that can be directly used in products &mdash; phone cases, fabric prints, wall art, stationery, and more.</p>

        {/* PROMPT 36 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>36. Seamless Botanical Pattern</h3>
        <p>A tileable pattern for textiles, stationery, or print-on-demand products. The <code>--tile</code> parameter is the secret weapon here.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: seamless repeating botanical pattern, delicate hand-drawn wildflowers and herbs including lavender chamomile and eucalyptus, fine ink linework with soft watercolor washes in muted sage green dusty pink and warm cream, vintage botanical illustration style, arranged in an organic flowing layout, off-white linen textured background, William Morris meets modern minimalism --ar 1:1 --tile --s 250 --v 6.1`}
        </div>
        <p><strong>Pro tip:</strong> The <code>--tile</code> parameter makes the image seamlessly tileable. This is essential for patterns that need to repeat on fabric, wallpaper, or wrapping paper. Not enough people know about this parameter.</p>

        {/* PROMPT 37 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>37. Terrazzo Surface Texture</h3>
        <p>A high-resolution material texture that can be used as a background for product mockups, website designs, or physical products.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: terrazzo surface texture, large and small chips of marble in warm pink coral sage green and cream embedded in a white cement base, overhead view, even flat lighting with no shadows, highly detailed showing individual stone chips and subtle surface variations, 8K texture resolution, clean and modern color palette, ready to use as a seamless material texture --ar 1:1 --tile --s 100 --style raw --v 6.1`}
        </div>

        {/* PROMPT 38 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>38. Abstract Fluid Art</h3>
        <p>The kind of abstract art that sells as prints, phone cases, and wall art. Midjourney generates unique color combinations that are surprisingly sellable on print-on-demand platforms.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: abstract fluid art painting::2 swirling organic forms in deep navy midnight blue and liquid gold::1 marbled effect with fine veining and cellular structures, areas of white space creating breathing room, metallic gold accents catching light, resin pour art aesthetic with depth and glossy surface, rich saturated colors with luminous quality, museum-quality contemporary abstract art, could hang in a luxury hotel lobby --ar 3:4 --s 500 --v 6.1`}
        </div>

        {/* PROMPT 39 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>39. Geometric Gradient Composition</h3>
        <p>Modern graphic design compositions that work as backgrounds, poster art, or social media visuals. The clean geometry makes them versatile.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: abstract geometric composition, overlapping translucent shapes including circles triangles and arcs, smooth gradient fills transitioning from warm sunset orange to cool lavender to deep indigo, floating in a clean white space, subtle grain texture overlay, shapes casting soft colored shadows on each other, modern graphic design aesthetic, Bauhaus meets vaporwave, clean crisp edges, suitable as a premium wallpaper or poster print --ar 3:4 --s 300 --v 6.1 --no photorealistic`}
        </div>

        {/* PROMPT 40 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>40. Art Deco Ornamental Pattern</h3>
        <p>Classic Art Deco geometric elegance. This style is consistently popular for invitations, packaging, and luxury branding materials.</p>
        <div style={promptBlockStyle}>
{`/imagine prompt: seamless Art Deco geometric pattern, symmetrical fan shapes and sunburst motifs with parallel lines, gold metallic linework on a deep navy blue background, elegant and luxurious, 1920s Gatsby-era decorative style, precise geometric construction, the gold lines have a subtle shine and dimension, sophisticated and timeless, suitable for luxury packaging or invitation design --ar 1:1 --tile --s 200 --v 6.1`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* MIDJOURNEY PROMPT FORMULA                     */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>The Midjourney Prompt Formula: Anatomy of a Perfect Prompt</h2>
        <p>Every great Midjourney prompt follows the same structure. Once you understand the formula, you can write your own prompts for any style.</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Step 1: Subject &amp; Core Description</h3>
        <p>Start with what you want to see. Be specific but not overly verbose. <strong>&ldquo;A woman standing in a field&rdquo;</strong> is too vague. <strong>&ldquo;A woman in a flowing white dress standing in a golden wheat field at sunset&rdquo;</strong> gives Midjourney enough to work with.</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Step 2: Style &amp; Medium</h3>
        <p>Tell Midjourney what kind of image this is. <strong>Photography</strong> (and what camera/lens), <strong>illustration</strong> (and what technique), <strong>3D render</strong>, <strong>oil painting</strong>, <strong>watercolor</strong>, <strong>concept art</strong>, etc. This single choice changes the entire output more than anything else in your prompt.</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Step 3: Lighting &amp; Atmosphere</h3>
        <p>This is the difference between amateur and professional results. Describe the light: <strong>golden hour, overcast diffused, dramatic side light, neon glow, candlelight, Rembrandt lighting</strong>. Then describe the mood: <strong>serene, tense, nostalgic, energetic, eerie</strong>.</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Step 4: Multi-Prompt Weighting (Advanced)</h3>
        <p>Use <code>::</code> to separate concepts and assign weights. <code>portrait of a woman::2 surrounded by flowers::1</code> tells Midjourney the portrait is twice as important as the flowers. This is unique to Midjourney and gives you control that no other AI image tool offers.</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Step 5: Parameters</h3>
        <p>Always end your prompt with parameters. At minimum, include:</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li><code>--ar</code> &mdash; Aspect ratio that matches your use case</li>
          <li><code>--s</code> &mdash; Stylization level (low for realistic, high for artistic)</li>
          <li><code>--v 6.1</code> or <code>--niji</code> &mdash; Model version</li>
          <li><code>--style raw</code> &mdash; When you want realistic, unembellished results</li>
          <li><code>--no</code> &mdash; Exclude unwanted elements (text, watermarks, blur, etc.)</li>
        </ul>

        <div style={promptBlockStyle}>
{`Formula:
/imagine prompt: [subject + details]::[weight] [style/medium] [lighting + atmosphere] [reference artists or films] [additional details]::[weight] --ar [ratio] --s [0-1000] --style raw --v 6.1 --no [unwanted elements]

Example:
/imagine prompt: portrait of an elderly fisherman with weathered skin and kind eyes::2 editorial photography shot on Hasselblad 80mm::1 dramatic golden hour side light on a wooden dock, National Geographic cover quality --ar 3:4 --s 150 --style raw --v 6.1 --no blur softness`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* FAQ SECTION                                  */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Frequently Asked Questions</h2>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>What is the best Midjourney version to use in 2026?</h3>
        <p>Midjourney v7 is the current default and best version for most use cases (v8 Alpha is in preview). V7 became default in June 2025 and features Omni Reference, model personalization on by default, and significantly improved realism and prompt interpretation vs v6.1. For anime and manga styles, use the <code>--niji</code> parameter which activates a specialized model tuned for Japanese art styles.</p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>How do I write better Midjourney prompts?</h3>
        <p>Follow the formula: <strong>subject</strong> first, then <strong>style/medium</strong>, then <strong>lighting and atmosphere</strong>, then <strong>parameters</strong>. Use multi-prompt syntax (<code>::</code>) to weight different elements. Add parameters like <code>--ar</code> for aspect ratio, <code>--s</code> for stylization, and <code>--style raw</code> for less opinionated results. Be specific about what you want, but leave room for Midjourney&rsquo;s creativity.</p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>Can I use Midjourney images commercially?</h3>
        <p>Yes, if you have a paid subscription. All paid Midjourney subscribers own the rights to images they generate, including for commercial use. Free trial users do not get commercial rights. You can use Midjourney images for products, marketing, social media, and print-on-demand. Avoid generating images of real people, trademarked characters, or content that closely mimics the style of a living artist.</p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>What does --style raw do in Midjourney?</h3>
        <p>The <code>--style raw</code> parameter tells Midjourney to apply less of its default aesthetic beautification. Without it, Midjourney adds its own artistic interpretation &mdash; making images more vibrant, polished, and stylized. With <code>--style raw</code>, the output sticks closer to your literal prompt. This is especially useful for photorealistic work, documentary-style images, and when you want more control over the exact look.</p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>What is the difference between Midjourney and ChatGPT for image generation?</h3>
        <p>Midjourney excels at artistic, cinematic, and editorial imagery &mdash; it produces more visually stunning results by default and offers fine-grained control through parameters. ChatGPT (DALL-E) is better at following complex instructions, generating accurate text in images, and iterating through conversation. Many creators use both: Midjourney for hero visuals and artistic work, ChatGPT for precise compositions and text-heavy designs. See our <Link href="/blog/chatgpt-image-prompts-2026" style={{ color: '#3B5FFF' }}>ChatGPT image prompts guide</Link> for the DALL-E side.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* FREE TOOL CTA */}
        <div style={{ marginTop: '32px', padding: '24px', background: '#ECFDF5', border: '1px solid #6EE7B7', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 8px', fontSize: '1.1rem' }}>🎨 Try Our Free AI Image Prompt Builder</h3>
          <p style={{ margin: '0 0 12px', color: '#6B7280', fontSize: '15px' }}>Build perfect Midjourney prompts visually — pick from 12 art styles, set mood &amp; lighting, get optimized prompts with parameters. No login required.</p>
          <a href="/image-prompt-builder" style={{ display: 'inline-block', background: '#059669', color: '#fff', padding: '10px 24px', borderRadius: '100px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>
            Build Your Image Prompt Free →
          </a>
        </div>

        {/* FINAL CTA */}
        <div style={{ marginTop: '24px', padding: '32px', background: '#F0F4FF', border: '1px solid #93B4FF', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 8px', fontSize: '1.1rem' }}>Ready to generate stunning AI art on demand?</h3>
          <p style={{ margin: '0 0 16px', color: '#6B7280', fontSize: '15px' }}>The <strong>AI Image Prompt Pack</strong> includes 200+ battle-tested image prompts organized by use case &mdash; portraits, products, cinematic, anime, architecture, abstract, and more. Every prompt is pre-built with Midjourney parameters, lighting, composition, and mood details. Copy, paste into /imagine, generate. $29 one-time.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            <a href={IMAGE_PACK_LINK} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
              Get the Image Prompt Pack &mdash; $29
            </a>
            <a href={STRIPE_BUNDLE} style={{ display: 'inline-block', background: '#111827', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
              All Kits Bundle &mdash; $97
            </a>
          </div>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* RELATED POSTS                                */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Related Posts</h2>
        <p>If you found these Midjourney prompts useful, check out these related guides:</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li><Link href="/blog/chatgpt-image-prompts-2026" style={{ color: '#3B5FFF' }}>50 Viral ChatGPT Image Prompts That Broke the Internet in 2026</Link></li>
          <li><Link href="/blog/chatgpt-action-figure-prompt-2026" style={{ color: '#3B5FFF' }}>The Viral ChatGPT Action Figure Prompt Everyone Is Using</Link></li>
          <li><Link href="/ai-image-prompt-pack" style={{ color: '#3B5FFF' }}>AI Image Prompt Pack &mdash; 200+ Ready-to-Use Prompts</Link></li>
          <li><Link href="/bundle" style={{ color: '#3B5FFF' }}>Midas Tools Complete Bundle &mdash; All Kits, One Price</Link></li>
          <li><Link href="/blog/ai-video-prompts-sora-runway-2026" style={{ color: '#3B5FFF' }}>30+ Best AI Video Prompts for Sora, Runway &amp; Pika 2026</Link></li>
        </ul>

      </div>
    </Layout>
  );
}
