import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const STRIPE_MEGA_PACK = 'https://buy.stripe.com/6oE8Aa1SIgRFgOQ5kD';
const STRIPE_BUNDLE = 'https://buy.stripe.com/00g5xY2WM04Ncyw9AH';
const IMAGE_PACK_LINK = '/ai-image-prompt-pack';

export default function ChatGPTImagePrompts2026() {
  const title = '50 Viral ChatGPT Image Prompts That Broke the Internet in 2026';
  const description = 'The best ChatGPT image prompts for 2026. 50 copy-paste prompts for portraits, product shots, social media graphics, cinematic art, brand visuals, and viral memes. Tested with DALL-E and ChatGPT image generation.';
  const url = 'https://www.midastools.co/blog/chatgpt-image-prompts-2026';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    datePublished: '2026-03-25',
    dateModified: '2026-03-25',
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
        name: 'Can ChatGPT generate images for free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, ChatGPT can generate images on the free tier using DALL-E, but with daily limits. Free users typically get a small number of image generations per day. ChatGPT Plus ($20/month) and Pro ($200/month) users get significantly higher limits. For most people doing serious image work, the Plus plan is worth it for the increased generation allowance and faster processing times.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the best way to write ChatGPT image prompts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best ChatGPT image prompts follow a specific structure: start with the subject, then describe the style or medium (photography, illustration, 3D render), add lighting details (soft natural light, dramatic studio lighting), specify the composition (close-up, wide angle, bird\'s eye view), and include mood or atmosphere keywords. Being specific about what you want produces dramatically better results than vague descriptions. Include details about colors, textures, and background elements for the most control over the output.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I use ChatGPT-generated images commercially?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, OpenAI grants users full rights to the images they create with DALL-E through ChatGPT, including commercial use. You can use them for social media, marketing materials, products, and more. However, you should be aware of potential issues: do not generate images of real people without consent, avoid creating images that closely mimic copyrighted characters or styles of living artists, and always disclose AI-generated content when required by platform policies or regulations.'
        }
      },
      {
        '@type': 'Question',
        name: 'What image styles work best with ChatGPT in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In 2026, ChatGPT excels at photorealistic portraits and product photography, Studio Ghibli and anime-style illustrations, cinematic movie poster compositions, flat lay and lifestyle product shots, minimalist brand graphics, and retro or nostalgic aesthetics. The model handles realistic lighting and textures particularly well. For best results, reference specific photography or art styles in your prompt rather than describing the look from scratch.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do I make ChatGPT image prompts more consistent?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To get consistent results across multiple image generations, create a "style anchor" — a set of parameters you reuse in every prompt. Include the same camera type, lighting setup, color palette, and art style keywords. For example, always starting with "professional product photography, Canon EOS R5, 85mm lens, soft diffused natural light, white marble surface" will give you a cohesive set of images. Save your best-performing prompts as templates and modify only the subject while keeping the style parameters identical.'
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
        <meta name="keywords" content="ChatGPT image prompts, AI image generation, DALL-E prompts, viral AI images, AI art prompts 2026, ChatGPT image generation, AI image prompts, best AI image prompts, DALL-E 3 prompts, ChatGPT art" />
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
          50 Viral ChatGPT Image Prompts That Broke the Internet in 2026
        </h1>
        <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '40px' }}>Mar 25, 2026 &middot; Rey Midas</p>

        <p>ChatGPT image generation went from a novelty to a cultural phenomenon in 2026. People are creating Studio Ghibli portraits, hyper-realistic product mockups, viral meme templates, and professional brand visuals &mdash; all from a text prompt.</p>
        <p>The problem? Most people type &ldquo;a cat sitting on a chair&rdquo; and wonder why the output looks mediocre. Meanwhile, creators who know how to write specific, detailed prompts are generating images that rack up millions of views, replace expensive photoshoots, and sell products.</p>
        <p>These are not theoretical prompts. These are the <strong>50 prompts people are actually using</strong> to create viral images right now. Every single one is copy-paste ready. I have organized them by use case so you can jump straight to the category you need.</p>
        <p>Paste any of these into ChatGPT (Plus or Pro for best results) and watch what happens.</p>
        <p><strong>Using Midjourney instead?</strong> Check out our <Link href="/blog/best-midjourney-prompts-2026" style={{ color: '#3B5FFF' }}>40+ Best Midjourney Prompts for 2026</Link> with v6.1 parameters, --ar ratios, and multi-prompt syntax.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 1: PORTRAIT & HEADSHOT PROMPTS       */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Section 1: Portrait &amp; Headshot Prompts</h2>
        <p>These are the prompts driving the portrait trend that took over every social platform. From professional headshots to anime transformations, portrait prompts are the single most shared category of AI-generated images.</p>

        {/* PROMPT 1 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>1. The Professional LinkedIn Headshot</h3>
        <p>Skip the $300 photographer. This prompt generates a studio-quality corporate headshot that looks like it was taken with a Canon EOS R5.</p>
        <div style={promptBlockStyle}>
{`Professional corporate headshot of a [man/woman] in their [age range], wearing a [navy blazer/charcoal suit/white blouse]. Shot on a Canon EOS R5, 85mm f/1.4 lens. Soft, diffused studio lighting with a subtle warm fill light. Clean neutral gray background with slight gradient. Sharp focus on the eyes, shallow depth of field. Natural skin texture, minimal retouching look. Expression: confident, approachable, slight smile. Upper body framing, slightly turned 3/4 to camera.`}
        </div>

        {/* PROMPT 2 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>2. Studio Ghibli Character Portrait</h3>
        <p>The trend that broke the internet. This prompt transforms any description into a Miyazaki-worthy character illustration.</p>
        <div style={promptBlockStyle}>
{`Studio Ghibli anime style portrait of a [describe person: age, hair color, features]. Soft watercolor textures, warm natural lighting as if in a scene from Spirited Away. Gentle expression, wind slightly moving their hair. Wearing [describe outfit]. Background: [a hillside covered in wildflowers / a cozy Japanese countryside kitchen / a magical forest with floating lights]. Hand-painted feel, slightly grainy paper texture. Hayao Miyazaki aesthetic. Warm color palette with soft greens, sky blues, and golden hour tones.`}
        </div>

        {/* PROMPT 3 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>3. The &ldquo;CEO Magazine Cover&rdquo; Portrait</h3>
        <p>Make anyone look like they just landed a Forbes cover. This prompt nails the editorial portrait style that screams authority.</p>
        <div style={promptBlockStyle}>
{`Editorial magazine cover portrait of a [describe person], shot for a Forbes or Bloomberg Businessweek cover story. Dramatic Rembrandt lighting with a single key light from the upper left. Deep black background. Subject wearing a perfectly tailored [dark suit / designer outfit]. Arms crossed or hands clasped. Expression: intense, commanding, thoughtful. Shot on medium format Hasselblad, 80mm lens. Rich contrast, desaturated color grade with deep shadows. Text space left at the top for a magazine masthead.`}
        </div>

        {/* PROMPT 4 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>4. Pixar-Style 3D Character</h3>
        <p>Turn yourself (or anyone) into a Pixar character. This went massively viral for profile pictures and gifts.</p>
        <div style={promptBlockStyle}>
{`3D Pixar-style character portrait of a [describe person: age, hair, distinguishing features]. Exaggerated proportions with a slightly oversized head and expressive eyes. Wearing [describe outfit]. Standing in [a cozy coffee shop / a modern office / a colorful city street]. Warm, cinematic Pixar lighting with soft ambient occlusion. Smooth plastic-like skin texture. Cheerful, slightly mischievous expression. Background is softly blurred with rich saturated colors. Rendered in the style of a Pixar movie poster. 4K detail.`}
        </div>

        {/* PROMPT 5 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>5. Vintage Film Photography Portrait</h3>
        <p>For the analog aesthetic crowd. This prompt replicates the look of expired Kodak Portra film stock.</p>
        <div style={promptBlockStyle}>
{`Portrait photograph of a [describe person] shot on expired Kodak Portra 400 film, 35mm. Soft, hazy natural light from a nearby window. Slight overexposure with lifted shadows and muted warm tones. Visible film grain throughout. Subject is [sitting in a sunlit cafe / leaning against a doorframe / standing in a field at golden hour]. Relaxed, candid expression — not looking directly at the camera. Shallow depth of field, slightly soft focus. Vintage 1990s color palette: faded oranges, soft greens, dusty pinks. No digital sharpening.`}
        </div>

        {/* PROMPT 6 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>6. Watercolor Fashion Illustration</h3>
        <p>Perfect for fashion brands, Etsy sellers, or anyone who wants that editorial illustration look without hiring an illustrator.</p>
        <div style={promptBlockStyle}>
{`Elegant watercolor fashion illustration of a [woman/man] wearing [describe outfit in detail]. Loose, expressive brushstrokes with paint bleeding outside the lines. Minimal background — just a few splashes of color suggesting [a Parisian street / a garden / an abstract space]. Muted earth tones with one accent color in [coral / electric blue / emerald green]. Tall, elongated figure proportions typical of high fashion illustration. Visible paper texture. Inspired by the style of David Downton or Rene Gruau. No digital effects — should look hand-painted.`}
        </div>

        {/* PROMPT 7 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>7. Renaissance Painting Self-Portrait</h3>
        <p>The &ldquo;paint me like a Renaissance noble&rdquo; trend has not slowed down. This prompt delivers museum-quality results.</p>
        <div style={promptBlockStyle}>
{`Classical Renaissance oil painting portrait of a [describe person], in the style of Raphael or Vermeer. Wearing elaborate 16th-century [nobleman's velvet doublet with gold embroidery / noblewoman's silk gown with pearl accessories]. Chiaroscuro lighting — dramatic contrast between light and shadow. Rich, warm color palette: deep burgundies, golds, and forest greens. Detailed fabric textures showing individual threads and folds. Background: dark, painterly, with a distant landscape visible through an arched window. Visible brushstroke texture. Oil on canvas. Ornate gilded frame border around the image.`}
        </div>

        {/* PROMPT 8 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>8. Cyberpunk Neon Portrait</h3>
        <p>For the sci-fi and gaming audience. This prompt creates the kind of neon-drenched portraits that dominate gaming communities and tech Twitter.</p>
        <div style={promptBlockStyle}>
{`Cyberpunk portrait of a [describe person] in a rain-soaked neon-lit alley in a futuristic Tokyo-inspired city. Wearing a sleek black techwear jacket with glowing circuit-line accents. Neon signs in Japanese and English reflect off wet pavement in pinks, blues, and purples. Dramatic split lighting — one side of the face lit in electric cyan, the other in hot magenta. Slight lens flare. Rain droplets caught mid-air. Shot on a Sony A7IV, 50mm f/1.2. Blade Runner 2049 color grade. Cinematic 2.39:1 aspect ratio.`}
        </div>

        {/* CTA AFTER SECTION 1 */}
        <div style={{ marginTop: '32px', marginBottom: '32px', padding: '24px', background: '#F0F4FF', border: '1px solid #93B4FF', borderRadius: '8px', textAlign: 'center' }}>
          <p style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: '700' }}>Want 200+ image prompts with style variations and parameters pre-built?</p>
          <p style={{ margin: '0 0 16px', color: '#6B7280', fontSize: '15px' }}>Every prompt includes lighting, camera, composition, and mood details. Copy, paste, generate. Works with ChatGPT, Midjourney, and any AI image tool.</p>
          <a href={IMAGE_PACK_LINK} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Get the AI Image Prompt Pack &mdash; $29
          </a>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 2: PRODUCT & E-COMMERCE PROMPTS      */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Section 2: Product &amp; E-commerce Prompts</h2>
        <p>These prompts are replacing expensive product photography for thousands of e-commerce sellers. A professional product shoot costs $500&ndash;$2,000. These prompts cost nothing and take 30 seconds.</p>

        {/* PROMPT 9 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>9. Flat Lay Product Photography</h3>
        <p>The Instagram-perfect overhead shot. This is the most requested style for e-commerce and lifestyle brands.</p>
        <div style={promptBlockStyle}>
{`Professional flat lay product photography of a [describe product: e.g., "leather journal with brass clasp"]. Shot from directly above on a [white marble / light wood / linen fabric] surface. Surrounded by carefully arranged props: [a sprig of dried eucalyptus, a vintage brass pen, a cup of black coffee, scattered coffee beans]. Soft, even natural light from a large window to the left. No harsh shadows. Clean, minimal composition with intentional negative space. Color palette: [warm neutrals and earth tones / crisp whites and pastels]. Shot on a Canon 5D Mark IV, 50mm macro lens. Instagram-ready square crop.`}
        </div>

        {/* PROMPT 10 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>10. Lifestyle Product in Context</h3>
        <p>Show your product being used in a beautiful, aspirational setting. This style outsells plain white-background shots by 3x on average.</p>
        <div style={promptBlockStyle}>
{`Lifestyle product photograph of a [describe product] being used by a [describe person] in a [beautiful modern apartment / cozy cabin / sunlit outdoor patio]. The product is the clear focal point but feels natural in the scene. Person is [holding it / using it / reaching for it] with a relaxed, authentic expression. Warm, golden hour natural light streaming through large windows. Background is softly out of focus with tasteful interior design elements. Shot on a Sony A7III, 35mm f/1.8. Warm, slightly desaturated color grade similar to Kinfolk magazine. Aspirational but not sterile.`}
        </div>

        {/* PROMPT 11 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>11. Minimalist Packaging Mockup</h3>
        <p>Perfect for visualizing packaging designs before spending money on production. Works for boxes, bottles, pouches, and tubes.</p>
        <div style={promptBlockStyle}>
{`Minimalist product packaging mockup of a [describe package: e.g., "matte black box with embossed gold logo" / "frosted glass bottle with kraft paper label"]. Sitting on a clean [concrete / marble / light oak] surface. Single dramatic directional light from the upper right casting a long, clean shadow. Background: solid [warm off-white / soft gray / deep charcoal]. No other objects in frame — just the product and its shadow. Ultra-clean, Apple-level product photography aesthetic. Sharp focus across entire product. 8K detail on textures — you can see the grain of the paper, the matte finish, individual fibers.`}
        </div>

        {/* PROMPT 12 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>12. Food Photography (Restaurant Quality)</h3>
        <p>Restaurant owners and food bloggers are using this to create menu-worthy shots without a food stylist.</p>
        <div style={promptBlockStyle}>
{`Professional food photography of [describe dish in detail: ingredients, plating style, garnishes]. Served on a [handmade ceramic plate / rustic wooden board / sleek black slate]. Overhead 45-degree angle shot. Dramatic side lighting from the left creating depth and highlighting textures — you can see the glisten on the sauce, the crisp edges, the steam rising. Dark moody background with [aged wood table / dark stone surface]. Scattered ingredients and herbs around the plate for context. Shallow depth of field. Rich, warm color grade. Shot on a Nikon Z8, 60mm macro lens. Bon Appetit magazine quality.`}
        </div>

        {/* PROMPT 13 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>13. Cosmetics &amp; Beauty Product Shot</h3>
        <p>High-end beauty photography that would cost thousands from a studio. This prompt nails the luxury cosmetics aesthetic.</p>
        <div style={promptBlockStyle}>
{`Luxury beauty product photography of a [describe product: e.g., "matte lipstick in a gold tube" / "serum bottle with dropper"]. Floating against a [soft gradient background in blush pink to champagne gold / clean white]. Surrounded by ingredients that suggest the formula: [rose petals, honey drips, vitamin C slices, gold leaf flakes]. Products casting subtle reflections on a glossy surface beneath them. Soft, diffused beauty lighting with no harsh shadows. Dewy water droplets on the product surface suggesting freshness. Ultra-sharp focus. Sephora or Glossier advertising campaign quality. 4K.`}
        </div>

        {/* PROMPT 14 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>14. Tech Product on Desk Setup</h3>
        <p>The minimal desk setup shot that tech reviewers and SaaS companies use for hero images and social media.</p>
        <div style={promptBlockStyle}>
{`Clean minimal desk setup photograph featuring a [describe tech product: laptop, gadget, accessory] as the centerpiece. Sitting on a [white oak / walnut / matte white] desk. Complementary items arranged with intentional spacing: [a single potted monstera plant, a concrete pen holder, a ceramic mug, wireless earbuds in their case]. Large monitor or window in the soft background. Overhead soft panel lighting with warm tone. Everything perfectly aligned and organized. Color palette: whites, warm grays, and one accent color in [sage green / muted terracotta / black]. Shot from a slight elevated angle. MKBHD or Minimalist Baker desk aesthetic.`}
        </div>

        {/* PROMPT 15 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>15. Jewelry on Model Close-Up</h3>
        <p>Etsy sellers and jewelry brands are using this to create editorial-quality close-ups that convert browsers into buyers.</p>
        <div style={promptBlockStyle}>
{`Close-up editorial jewelry photograph of a [describe piece: gold chain necklace / diamond stud earrings / stacked rings]. Worn by a model — only showing the [neck and collarbone / hand and wrist / ear and jawline]. Skin is natural with visible texture, dewy finish. Soft natural window light catching the metallic surfaces and creating subtle sparkle. Extremely shallow depth of field — only the jewelry is in sharp focus. Background is a soft, warm blur of [neutral fabric / bare skin tones]. No distracting elements. Shot on a macro lens at f/2.0. Vogue or Mejuri campaign quality. The metal should look like you can feel its weight.`}
        </div>

        {/* PROMPT 16 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>16. Candle or Home Fragrance Scene</h3>
        <p>The cozy, atmospheric product shot that dominates the home goods market on Instagram and Pinterest.</p>
        <div style={promptBlockStyle}>
{`Moody atmospheric product photograph of a [describe candle or diffuser: e.g., "soy candle in an amber glass jar with a minimalist white label"]. Lit and glowing warmly in a [dimly lit bathroom / cozy bedroom nightstand / rustic wooden shelf] scene. The flame is the primary light source, casting a warm golden glow on surrounding surfaces. Wisps of smoke or a subtle bokeh of fairy lights in the background. Nearby props: [a folded linen towel, a small stack of books, dried lavender sprigs]. Rich, warm shadows. Extremely cozy and inviting mood. Shot on a 50mm f/1.4 at ISO 800 for natural grain. Hygge aesthetic.`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 3: SOCIAL MEDIA CONTENT PROMPTS      */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Section 3: Social Media Content Prompts</h2>
        <p>Content creators are spending zero dollars on graphic designers by generating scroll-stopping visuals with these prompts. From carousel templates to YouTube thumbnails, this is where AI image generation saves the most time.</p>

        {/* PROMPT 17 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>17. Instagram Carousel Cover Slide</h3>
        <p>The opening slide of a carousel determines whether someone swipes. This prompt creates the kind of bold, clean designs that get saved and shared.</p>
        <div style={promptBlockStyle}>
{`Clean, modern Instagram carousel cover slide design. Bold sans-serif typography reading "[YOUR HEADLINE TEXT]" in [white / black] against a [deep navy / warm terracotta / sage green] background. Subtle geometric shapes or abstract elements in the background at 10% opacity for visual interest. One small accent graphic element: [a simple line drawing icon / a minimal illustration / an arrow]. Layout has generous whitespace and feels premium, not cluttered. Square format (1080x1080). The text is large enough to read on a phone screen. Inspired by the design aesthetic of @thefutur or @visualizevalue. No photos, purely graphic.`}
        </div>

        {/* PROMPT 18 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>18. YouTube Thumbnail (High-CTR Style)</h3>
        <p>YouTube thumbnails are a science. This prompt generates the bold, expressive style used by channels with millions of subscribers.</p>
        <div style={promptBlockStyle}>
{`High-CTR YouTube thumbnail design in 16:9 aspect ratio. A [person with an exaggerated shocked/excited expression] on the left side taking up 40% of the frame. Right side has bold, chunky text in [yellow with black outline] reading "[2-3 WORDS]". Background is a vibrant gradient in [orange to red / blue to purple / green to teal] with subtle radial zoom blur for energy. A large [arrow / circle / emoji] pointing at the key element. Everything is oversaturated and high contrast — this needs to pop at thumbnail size. MrBeast / Ali Abdaal thumbnail energy. No small text, no subtle details.`}
        </div>

        {/* PROMPT 19 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>19. TikTok / Reels Cover Image</h3>
        <p>That polished cover image that makes a profile grid look intentional instead of random. Creators use these to brand their content series.</p>
        <div style={promptBlockStyle}>
{`Vertical 9:16 TikTok/Reels cover image design. Clean, branded feel with a [soft gradient / solid color / subtle texture] background in [your brand color]. Large, bold text centered reading "[SERIES NAME or HOOK]" in a modern sans-serif font. Below in smaller text: "[subtitle or episode number]". A small, simple icon or emoji above the text. Minimal design — no clutter, no photos, just clean typography and color. The design should look cohesive when tiled next to 8 similar covers in a profile grid. Mobile-first design. Inspired by the aesthetic of top creator profiles on TikTok and Instagram.`}
        </div>

        {/* PROMPT 20 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>20. Pinterest Pin Graphic (Tall Format)</h3>
        <p>Pinterest rewards tall, text-heavy pins. This prompt creates the save-worthy graphics that drive traffic for months.</p>
        <div style={promptBlockStyle}>
{`Tall Pinterest pin graphic in 2:3 aspect ratio (1000x1500px feel). Top 40%: a beautiful lifestyle photograph of [describe scene related to your topic]. Bottom 60%: clean text overlay area with a [cream / white / soft pastel] background. Bold headline text: "[YOUR PIN TITLE - make it specific and searchable]" in an elegant serif font. Smaller subtext below. Thin line border around the entire pin. Color palette: [warm neutrals / soft pastels / earth tones]. Clean, editorial, feminine aesthetic popular on Pinterest. The image and text should feel like one cohesive design, not a photo with text slapped on top.`}
        </div>

        {/* PROMPT 21 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>21. Twitter/X Thread Header Image</h3>
        <p>A strong visual at the top of a thread increases engagement dramatically. This creates the clean, bold headers that signal &ldquo;this thread is worth reading.&rdquo;</p>
        <div style={promptBlockStyle}>
{`Clean header image for a Twitter/X thread. 16:9 aspect ratio. Minimalist design with a [dark navy / charcoal / deep forest green] background. Large, clean white text reading "[THREAD TOPIC]" in a premium sans-serif font. Below in smaller gold or accent-colored text: "A thread." or "[number] lessons" or a subtitle. One simple visual element: [a subtle grid pattern / a single thin gold line / a minimal icon]. No photos, no clutter, no gradients. The design should feel like a slide from a premium keynote presentation. High contrast for readability in a Twitter feed.`}
        </div>

        {/* PROMPT 22 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>22. LinkedIn Post Visual</h3>
        <p>A text-only LinkedIn post gets decent reach. A post with a sharp custom visual gets 2&ndash;3x more impressions. This prompt generates professional visuals that match LinkedIn&rsquo;s tone.</p>
        <div style={promptBlockStyle}>
{`Professional LinkedIn post image. 1200x627px landscape format. Clean corporate design with a [light gradient from white to soft blue / warm off-white background]. A simple data visualization, chart concept, or framework diagram illustrating [YOUR CONCEPT: e.g., "the 3 pillars of effective leadership"]. Clean sans-serif labels and text. Subtle use of [blue / navy / teal] as the accent color. No stock photo cliches. Feels like a slide from a McKinsey presentation — minimal, smart, credible. Small logo or watermark in the bottom corner reading "[YOUR NAME or BRAND]". Professional and shareable.`}
        </div>

        {/* PROMPT 23 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>23. Quote Card for Instagram Stories</h3>
        <p>Quote cards are the easiest content to produce and they consistently get shared to stories. This prompt creates ones that actually look designed.</p>
        <div style={promptBlockStyle}>
{`Elegant quote card for Instagram Stories. 9:16 vertical format. Background: [a soft, dreamy photograph of clouds at sunset / an abstract watercolor wash in muted pastels / a textured paper in warm cream]. Centered text in an elegant serif font reading: "[YOUR QUOTE HERE]". Attribution below in a smaller, lighter font: "— [AUTHOR NAME]". Generous whitespace around the text. The overall mood is [calm and reflective / bold and inspiring / warm and intimate]. Subtle film grain or noise texture overlay at 5% opacity. The design should make someone pause mid-scroll and screenshot it. No logos, no heavy design elements.`}
        </div>

        {/* PROMPT 24 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>24. Newsletter Header Illustration</h3>
        <p>Stand out in the inbox. This prompt creates unique, editorial-style header illustrations for Substack, Beehiiv, or any email newsletter.</p>
        <div style={promptBlockStyle}>
{`Editorial newsletter header illustration in a wide 3:1 aspect ratio. [Describe the concept related to your newsletter topic: e.g., "a person sitting at a desk surrounded by floating books, charts, and lightbulbs"]. Illustration style: [flat vector with limited color palette / hand-drawn ink sketch with watercolor wash / isometric 3D with soft shadows]. Color palette limited to 3-4 colors: [list your brand colors or preferred palette]. Clean, modern, slightly whimsical. Should communicate "[your newsletter's theme]" at a glance without any text. White or transparent background so it works in any email template. Inspired by the illustration style of The New Yorker or Monocle magazine.`}
        </div>

        {/* CTA AFTER SECTION 3 */}
        <div style={{ marginTop: '32px', marginBottom: '32px', padding: '24px', background: '#F0F4FF', border: '1px solid #93B4FF', borderRadius: '8px', textAlign: 'center' }}>
          <p style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: '700' }}>Creating content every day? Stop writing prompts from scratch.</p>
          <p style={{ margin: '0 0 16px', color: '#6B7280', fontSize: '15px' }}>The AI Image Prompt Pack has 200+ prompts organized by platform and use case. The Mega Pack adds 200+ text prompts for captions, scripts, emails, and more.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            <a href={IMAGE_PACK_LINK} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
              Image Prompt Pack &mdash; $29
            </a>
            <a href={STRIPE_MEGA_PACK} style={{ display: 'inline-block', background: '#111827', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
              Text Prompt Mega Pack &mdash; $29
            </a>
          </div>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 4: CINEMATIC & ART PROMPTS           */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Section 4: Cinematic &amp; Art Prompts</h2>
        <p>These prompts produce gallery-worthy images. Whether you want photorealistic scenes, movie poster compositions, or fantasy landscapes, this section pushes ChatGPT&rsquo;s image generation to its creative limits.</p>

        {/* PROMPT 25 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>25. Cinematic Movie Poster</h3>
        <p>Create a movie poster for a film that does not exist. These go viral because people love imagining themselves as the protagonist of their own story.</p>
        <div style={promptBlockStyle}>
{`Cinematic movie poster for a film called "[YOUR TITLE]". Genre: [thriller / sci-fi / drama / adventure]. A [describe main character] standing in [dramatic location: a rain-soaked city rooftop at night / a vast desert under a blood-red sky / a neon-lit Tokyo alley]. Shot from a low angle looking up for a heroic, powerful feel. Dramatic lighting: strong backlight creating a silhouette edge, with key light illuminating the face. Color grade: [teal and orange blockbuster look / muted desaturated indie film / high contrast noir]. Film title in bold cinematic typography at the bottom. Tagline in smaller italic text: "[Your tagline]". Lens flare. Atmospheric haze or fog. 2:3 movie poster aspect ratio.`}
        </div>

        {/* PROMPT 26 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>26. Hyperrealistic Nature Photography</h3>
        <p>Images so realistic people will argue they are photographs. Perfect for wallpapers, prints, and nature content accounts.</p>
        <div style={promptBlockStyle}>
{`Hyperrealistic nature photograph of [describe scene: a lone wolf standing on a snow-covered ridge at dawn / a hummingbird mid-flight next to a vibrant red flower / a lightning bolt striking a solitary tree on an open plain]. National Geographic quality. Shot on a Nikon D850, 200-500mm telephoto lens. Tack-sharp subject with a perfectly blurred background. Natural, unprocessed color. You can see individual [fur hairs / feather details / bark textures]. The lighting is [golden hour / dramatic storm light / soft overcast]. Composition follows the rule of thirds. No filters, no oversaturation — this should look like a $50,000 wildlife photography expedition compressed into one frame.`}
        </div>

        {/* PROMPT 27 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>27. Fantasy Epic Landscape</h3>
        <p>The kind of world-building art that dominates DeviantArt, ArtStation, and fantasy subreddits. These images inspire entire stories.</p>
        <div style={promptBlockStyle}>
{`Epic fantasy landscape painting. A massive [ancient floating city / dragon perched on a crumbling mountain fortress / enchanted forest with glowing rivers]. Vast sense of scale — tiny human figures in the foreground for size reference. Dramatic cloud formations with volumetric god rays breaking through. Color palette: [deep purples and golds / ethereal blues and silvers / warm ambers and crimsons]. Painted in a detailed digital matte painting style, inspired by the concept art of Lord of the Rings or Elden Ring. Wide cinematic composition, 21:9 aspect ratio. Extreme detail in the far background suggesting an entire world beyond the frame. Epic, awe-inspiring mood.`}
        </div>

        {/* PROMPT 28 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>28. Wes Anderson Symmetrical Scene</h3>
        <p>The perfectly symmetrical, pastel-colored aesthetic of Wes Anderson films has become its own art movement. This prompt nails it.</p>
        <div style={promptBlockStyle}>
{`A perfectly symmetrical Wes Anderson-style photograph of a [describe location: a grand hotel lobby / a train compartment / a bakery storefront / a library reading room]. Every element is meticulously arranged with bilateral symmetry. Color palette: [pastel pink and mint / mustard yellow and powder blue / peach and lavender]. Centered framing, shot from straight on with no angle. Retro 1960s-70s set design and furniture. Flat, even lighting with no dramatic shadows. Actors/figures (if present) stand perfectly still in the center, wearing coordinated outfits. Typography on any signs is in Futura Bold. Shot on 35mm film. The entire image feels like a precisely designed dollhouse.`}
        </div>

        {/* PROMPT 29 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>29. Aerial Drone Photography</h3>
        <p>Top-down perspectives that reveal patterns invisible from the ground. These are print-worthy and wildly shareable on social media.</p>
        <div style={promptBlockStyle}>
{`Aerial drone photograph shot from 500 feet directly above, looking straight down. Subject: [a winding turquoise river cutting through a red desert canyon / geometric agricultural fields in different shades of green and gold / a single boat leaving a white wake trail on deep blue ocean / a dense city grid at night with glowing street lights]. The image reveals a pattern or contrast only visible from above. Colors are vivid but natural — no artificial filters. Shot on a DJI Mavic 3, Hasselblad camera. Tack sharp. The scale creates an abstract, almost painterly quality. No horizon line visible — pure top-down perspective. National Geographic Aerial Photography contest quality.`}
        </div>

        {/* PROMPT 30 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>30. Double Exposure Portrait</h3>
        <p>The classic double exposure technique, digitally perfected. These are stunning for album covers, poetry books, and artistic social posts.</p>
        <div style={promptBlockStyle}>
{`Artistic double exposure photograph. A profile silhouette portrait of a [man/woman] merged with [a mountain forest landscape / an ocean wave / a city skyline at night / a starfield galaxy]. The landscape fills the silhouette seamlessly, with trees or buildings forming the texture of the hair and shoulders. The edges of the portrait dissolve into the scene. High contrast — the silhouette is clearly defined against a clean [white / black] background. One accent color bleeds through: [golden sunset tones / deep ocean blue / violet nebula]. Shot in the style of photographer Dan Mountford. Moody, contemplative, and deeply personal feeling. Film grain texture.`}
        </div>

        {/* PROMPT 31 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>31. Miniature Tilt-Shift City</h3>
        <p>The optical illusion that makes real-world scenes look like toy models. These go viral every single time because the brain cannot stop staring at them.</p>
        <div style={promptBlockStyle}>
{`Tilt-shift photograph of a [bustling city intersection / harbor with boats / train station / construction site] that makes everything look like a miniature toy model. Shot from a high elevated position looking down at a 30-degree angle. Extreme selective focus — only a narrow horizontal band in the center is sharp, everything above and below is dramatically blurred. Oversaturated, punchy colors that enhance the toy-like effect. Tiny people and vehicles look like painted figurines. Bright, midday sunlight with crisp shadows. The scene should look exactly like a meticulously crafted diorama. Shot on a Lensbaby tilt-shift lens.`}
        </div>

        {/* PROMPT 32 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>32. Underwater Photography Scene</h3>
        <p>Underwater imagery is inherently arresting. This prompt creates the kind of shots that win photography awards.</p>
        <div style={promptBlockStyle}>
{`Breathtaking underwater photograph. [Describe scene: a freediver descending along a coral wall into deep blue / a sea turtle gliding through beams of sunlight filtering from the surface / a school of silver fish forming a vortex around a diver]. Crystal clear water with visible light rays penetrating from above. Color palette shifts from warm turquoise near the surface to deep cobalt blue in the depths. Air bubbles frozen mid-rise, catching the light like tiny diamonds. Sharp detail on the subject, with the deep background fading into mysterious blue-black. Shot on a Nikon Z8 in an Ikelite underwater housing, 14-30mm wide angle. National Geographic Ocean Photography quality. Serene, otherworldly mood.`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 5: BRAND & BUSINESS PROMPTS          */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Section 5: Brand &amp; Business Prompts</h2>
        <p>Startups and small businesses are using these prompts to create professional brand assets that would normally require a design agency. Logo concepts, hero images, pitch deck visuals &mdash; all generated in minutes.</p>

        {/* PROMPT 33 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>33. Logo Concept Exploration</h3>
        <p>Not for your final logo (hire a designer for that), but perfect for exploring directions before you brief a designer or start a project.</p>
        <div style={promptBlockStyle}>
{`Logo concept for a [type of business] called "[BRAND NAME]". The brand personality is [modern and minimal / bold and energetic / elegant and luxurious / playful and friendly]. Design a logomark (icon only, no text) that communicates [core concept: trust, speed, creativity, nature, technology]. Style: [clean geometric shapes / hand-drawn organic feel / abstract minimal / lettermark using the initials]. Single color on a white background — the mark should work in [black, your brand color, and reversed on dark]. Inspired by the simplicity of the Apple, Airbnb, or Nike logo — something that can be recognized at 16x16px. Show the logo centered with plenty of whitespace around it.`}
        </div>

        {/* PROMPT 34 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>34. Website Hero Image</h3>
        <p>The first thing visitors see when they land on your site. This prompt creates hero images that look custom-made by a design studio.</p>
        <div style={promptBlockStyle}>
{`Website hero image for a [describe business: SaaS company / wellness brand / financial advisory firm / creative agency]. Wide cinematic 3:1 aspect ratio. [Describe the scene or concept: a diverse team collaborating in a bright modern office / an abstract representation of data flowing through a network / a serene landscape suggesting clarity and calm / a creative workspace with inspiration everywhere]. The mood is [aspirational and professional / warm and inviting / innovative and forward-looking]. Soft, premium lighting. Color palette aligns with brand colors: [list 2-3 colors]. The left or right third should have a clean, uncluttered area for overlaying text and a CTA button. No text in the image itself. Apple or Stripe website quality.`}
        </div>

        {/* PROMPT 35 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>35. Presentation / Pitch Deck Background</h3>
        <p>Stop using those default PowerPoint templates. This prompt creates custom slide backgrounds that make your deck look like it was designed by IDEO.</p>
        <div style={promptBlockStyle}>
{`Clean, minimal presentation slide background. 16:9 aspect ratio. [Choose a style]:

Option A: Subtle abstract — soft gradient from [color 1] to [color 2] with faint geometric line patterns at 5% opacity. Clean and corporate.

Option B: Atmospheric photo — a slightly blurred, darkened photograph of [a modern city skyline at dusk / an abstract architectural detail / a textured natural surface] with a dark overlay for text readability.

Option C: Flat color block — solid [dark navy / charcoal / deep green] with a single thin accent line in [gold / coral / white] at the bottom.

The background must leave 80% of the space clean for text and charts. No busy patterns, no distracting elements. This should make a McKinsey or Apple Keynote deck designer nod in approval.`}
        </div>

        {/* PROMPT 36 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>36. App Store Screenshot Mockup</h3>
        <p>For indie developers and startups who need polished App Store screenshots without a design team.</p>
        <div style={promptBlockStyle}>
{`App Store screenshot mockup showing a smartphone (latest iPhone, realistic 3D render) floating at a slight angle against a [clean gradient / solid color] background in [your brand color]. The phone screen displays [describe your app screen: a clean dashboard with charts / a messaging interface / a beautiful photo grid / a settings page]. Below the phone, bold marketing text reads: "[YOUR APP'S KEY BENEFIT IN 5 WORDS]". Clean sans-serif typography. The overall design follows Apple App Store best practices — device is prominent, message is clear, background is not distracting. Premium, polished, trustworthy. Portrait orientation to fit App Store screenshot dimensions.`}
        </div>

        {/* PROMPT 37 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>37. Business Card Design Concept</h3>
        <p>Visualize business card designs before sending them to print. Especially useful for exploring unconventional materials and finishes.</p>
        <div style={promptBlockStyle}>
{`Photorealistic mockup of a premium business card design. The card is [matte black with gold foil lettering / thick white cotton stock with embossed logo / kraft paper with minimalist black ink / frosted transparent plastic]. Showing both front and back sides. Front: [logo centered, name and title below in a clean font]. Back: [contact details aligned to the left, a subtle pattern or texture filling the right side]. The card sits on a [dark slate / marble / wooden] surface with dramatic directional lighting creating a soft shadow. You can see the texture of the card stock — the weight, the finish, the edge quality. One card laying flat, another propped against it at an angle. Close-up detail shot that makes you want to reach out and pick it up.`}
        </div>

        {/* PROMPT 38 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>38. Social Proof / Testimonial Graphic</h3>
        <p>Turn your best customer quotes into shareable, branded graphics for social media and your website.</p>
        <div style={promptBlockStyle}>
{`Clean testimonial graphic design. Square format (1080x1080). Background: [soft, warm off-white / light brand color at 10% opacity / subtle paper texture]. Large opening quotation mark in [your brand color] at 10% opacity as a decorative element in the upper left. Customer quote text centered in an elegant serif font: "[YOUR CUSTOMER QUOTE]". Below the quote: customer name in bold, title/company in lighter text. A thin horizontal line separating the quote from the attribution. Small 5-star rating icons above the quote. Your brand logo small in the bottom corner. Minimal, editorial, trustworthy. Looks like a pull quote from Harvard Business Review, not a Canva template.`}
        </div>

        {/* PROMPT 39 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>39. Event or Webinar Promotional Banner</h3>
        <p>Drive registrations with a professional event graphic that stands out in crowded feeds and email inboxes.</p>
        <div style={promptBlockStyle}>
{`Professional event promotional banner in 16:9 landscape format. Bold headline text: "[EVENT NAME]" in large, modern typography. Below: date, time, and "[Register Free]" in a contrasting accent color. Background: [a dynamic abstract composition with overlapping geometric shapes in brand colors / a darkened, atmospheric photograph related to the event topic with text overlay]. Speaker headshots area on the right (show placeholder circles with "Speaker 1", "Speaker 2" labels). Color scheme: [dark background with bright accent colors for energy / clean white with bold brand color accents]. The design should communicate [professional credibility / creative energy / exclusive access]. Works as both a social media post and email header. No generic clip art.`}
        </div>

        {/* PROMPT 40 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>40. Infographic Section Header</h3>
        <p>Infographics still drive massive traffic from Pinterest and LinkedIn. This prompt creates the visual section headers that make infographics look polished.</p>
        <div style={promptBlockStyle}>
{`Infographic section header illustration. A small, clean icon-style illustration representing [YOUR TOPIC: e.g., "email marketing" / "time management" / "financial planning" / "team collaboration"]. Style: flat vector design with a limited palette of 3 colors: [list colors]. The illustration sits inside a [circle / rounded square / hexagon] container with a subtle shadow. Below the icon, space for a section title. The illustration should communicate the concept instantly without any text — like a well-designed app icon. Clean lines, no gradients, no photorealism. Consistent with modern SaaS design systems like Material Design or IBM Carbon. White background.`}
        </div>

        {/* CTA AFTER SECTION 5 */}
        <div style={{ marginTop: '32px', marginBottom: '32px', padding: '24px', background: '#111827', borderRadius: '8px', textAlign: 'center' }}>
          <p style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: '700', color: '#fff' }}>Need image prompts AND text prompts? Get everything.</p>
          <p style={{ margin: '0 0 16px', color: '#9CA3AF', fontSize: '15px' }}>The All Kits Bundle includes 500+ prompts across 8 specialized kits &mdash; images, sales, marketing, content, operations, freelancing, and more.</p>
          <a href="https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b" style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Get the All Kits Bundle &mdash; $97
          </a>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* SECTION 6: VIRAL MEME & TREND PROMPTS        */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Section 6: Viral Meme &amp; Trend Prompts</h2>
        <p>These are the prompts behind the images you have been seeing everywhere &mdash; your group chats, your feeds, your coworkers&rsquo; Slack channels. Trends move fast, and these prompts let you ride any wave while it is still cresting.</p>

        {/* PROMPT 41 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>41. Action Figure in Blister Pack</h3>
        <p>The &ldquo;make me an action figure&rdquo; trend has been one of the biggest viral moments of 2026. This prompt captures the look perfectly.</p>
        <div style={promptBlockStyle}>
{`A hyper-realistic product photograph of an action figure toy in a sealed blister pack (clear plastic bubble on printed cardboard backing). The action figure looks exactly like a [describe person or character: age, hair, outfit, accessories]. The figure is 6 inches tall with realistic proportions and visible joint articulation. They are holding [a tiny laptop / a miniature coffee cup / a small briefcase / a weapon]. Accessories displayed below the figure in the packaging: [list 3-4 tiny accessories relevant to the character]. The cardboard backing has a bold, colorful design with the character's name "[NAME]" at the top and "[COLLECTION NAME] SERIES" branding. Toy aisle shelf lighting. Shot straight-on. The packaging has that authentic Hasbro/Mattel energy.`}
        </div>

        {/* PROMPT 42 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>42. &ldquo;Instagram vs. Reality&rdquo; Split Image</h3>
        <p>The side-by-side comparison format that thrives on humor and relatability. Perfect for engagement bait and brand personality.</p>
        <div style={promptBlockStyle}>
{`A split-screen comparison image divided cleanly down the middle. Left side labeled "EXPECTATION" at the top: [describe the idealized, perfect version of a scene — e.g., a perfectly organized minimalist home office with a MacBook, latte art, and a monstera plant, bathed in golden light]. Right side labeled "REALITY": [describe the messy, chaotic, funny version — e.g., the same desk but covered in crumbs, tangled cables, a half-eaten sandwich, a cat sitting on the keyboard, coffee stain on papers, sticky notes everywhere]. Both sides should be photographed in the same style and angle so the comparison is immediate. Warm, realistic lighting in both. The humor comes from recognition, not exaggeration.`}
        </div>

        {/* PROMPT 43 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>43. 1980s Retro VHS Cover</h3>
        <p>The nostalgia trend never dies. This prompt creates the kind of retro-styled images that dominate Reddit&rsquo;s design communities.</p>
        <div style={promptBlockStyle}>
{`A 1980s VHS tape cover design for a movie called "[YOUR TITLE]". Painted illustration style typical of 80s video store rentals — slightly dramatic, slightly cheesy, full of character. The main character [describe: appearance, pose, outfit] dominates the center in a heroic stance. Background scene: [a neon-lit city / a tropical jungle / a space station / a haunted mansion]. Bright, saturated colors: electric blues, hot pinks, deep oranges. Hand-painted typography for the title in a bold, metallic-effect chrome or gold font. A tagline in italic: "[YOUR TAGLINE]". VHS rating box in the corner. Worn, slightly faded look with subtle scan lines and VHS tracking artifacts at the edges. 80s Cannon Films or Vestron Video energy.`}
        </div>

        {/* PROMPT 44 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>44. &ldquo;Day in the Life&rdquo; Aesthetic Collage</h3>
        <p>The curated photo dump aesthetic that defines modern Instagram. This prompt creates a cohesive visual story in a single image.</p>
        <div style={promptBlockStyle}>
{`Aesthetic photo collage showing "a day in the life" — 6 photographs arranged in an asymmetric grid layout with thin white borders between them. All photos share the same warm, slightly faded color grade (Kodak Portra film look). The 6 scenes: (1) a close-up of hands wrapping around a ceramic coffee mug, morning light; (2) an open notebook with handwritten notes next to a laptop; (3) a street scene shot through a cafe window; (4) a plated lunch — simple, beautiful; (5) golden hour light through a window casting shadows on a wall; (6) a nightstand with a book, candle, and reading glasses. Every photo feels candid, not posed. The overall mood is [calm, intentional, warm]. The layout feels like a curated Instagram carousel or a Kinfolk magazine spread.`}
        </div>

        {/* PROMPT 45 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>45. Vaporwave / Synthwave Aesthetic</h3>
        <p>The retro-futuristic aesthetic that refuses to go out of style. This is pure visual comfort food for the internet.</p>
        <div style={promptBlockStyle}>
{`Synthwave / vaporwave aesthetic scene. A [DeLorean / Lamborghini Countach / retro sports car] driving on a straight highway toward a massive neon sunset. The road stretches into an infinite perspective grid (classic Tron-style grid lines on the ground glowing in pink and blue). Palm trees silhouetted on both sides. The sky is a gradient from deep purple at the top through hot pink to orange at the horizon. A massive chrome sun sits on the horizon reflecting on the road surface. Neon grid mountains in the background. Everything glows. Color palette: electric pink, deep purple, cyan, chrome. 80s retrofuturism meets Miami Vice. Scanline texture overlay. 16:9 widescreen.`}
        </div>

        {/* PROMPT 46 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>46. Miniature World (Tiny People, Big Object)</h3>
        <p>The &ldquo;small people in a big world&rdquo; concept art style that always stops scrollers. These images mess with your sense of scale in the most satisfying way.</p>
        <div style={promptBlockStyle}>
{`A macro photograph of a miniature scene: tiny realistic human figures (1-2cm tall) interacting with a [normal-sized everyday object used as their landscape]. Example concepts:
- Tiny people hiking across a stack of books like a mountain range
- A miniature construction crew working on a half-eaten sandwich
- Tiny surfers riding the curved edge of a coffee cup
- Miniature office workers having a meeting on a computer keyboard

The tiny people are hyper-detailed with realistic clothing and shadows. The everyday object is shot in extreme macro, showing its texture at massive scale. Tilt-shift depth of field with only the tiny figures in sharp focus. Natural lighting as if the scene is on a desk near a window. The image should make you do a double-take — is it real or miniature? Inspired by the work of Slinkachu or Tatsuya Tanaka.`}
        </div>

        {/* PROMPT 47 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>47. Album Cover Art</h3>
        <p>Musicians and playlist curators use this to create cover art that competes with major-label releases. These are also wildly popular as phone wallpapers.</p>
        <div style={promptBlockStyle}>
{`Album cover art for a [genre: lo-fi hip hop / indie folk / electronic / R&B / punk] album called "[ALBUM TITLE]". Square 1:1 format. [Choose a direction]:

Direction A (Photographic): A moody, atmospheric photograph of [describe scene]. Shot on film with visible grain. Muted, desaturated color palette with one dominant tone in [blue / amber / green]. Album title in small, understated lowercase text in the bottom corner.

Direction B (Illustrated): A bold, graphic illustration in the style of [a Japanese woodblock print / a Basquiat painting / a minimal line drawing / a psychedelic 70s poster]. Limited color palette: [3-4 colors]. The art is striking and would look iconic at small sizes on Spotify.

Direction C (Abstract): A pure abstract composition — [flowing paint pours / cracked and peeling textures / geometric shapes / light leaks and color bleed]. No recognizable objects. The texture and color create a mood that matches [describe the feeling of the music]. Album title barely visible, integrated into the texture.`}
        </div>

        {/* PROMPT 48 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>48. Claymation / Stop-Motion Style</h3>
        <p>The handmade, tactile look that brands like Aardman (Wallace &amp; Gromit) made famous. This aesthetic is trending hard for its warmth and charm.</p>
        <div style={promptBlockStyle}>
{`A claymation stop-motion style scene of [describe: a tiny clay character sitting at a miniature desk working on a clay laptop / a clay bakery with a clay baker pulling bread from a tiny oven / a clay band performing on a tiny stage]. Everything is made of colorful modeling clay or plasticine with visible fingerprint textures and slight imperfections in the sculpting. The set is a miniature diorama with handmade details — tiny clay props, painted cardboard backgrounds, miniature lighting rigs. Warm, soft studio lighting as if photographed on a real stop-motion set. Shallow depth of field. The characters have simple, charming expressions — two dots for eyes, a curved line for a smile. Aardman Studios quality. Shot on a macro lens.`}
        </div>

        {/* PROMPT 49 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>49. &ldquo;Starter Pack&rdquo; Meme Template</h3>
        <p>The starter pack format has been a meme staple for years. This prompt creates a polished, shareable version instead of a janky MS Paint collage.</p>
        <div style={promptBlockStyle}>
{`A clean, polished "starter pack" meme image. Title at the top in bold sans-serif text: "THE [TOPIC] STARTER PACK" (e.g., "The Remote Worker Starter Pack" / "The Coffee Snob Starter Pack" / "The First-Time Founder Starter Pack"). Below: a 2x3 grid of 6 photorealistic objects on a clean white background, each representing a stereotype of [your topic]. Objects should be: (1) [describe item], (2) [describe item], (3) [describe item], (4) [describe item], (5) [describe item], (6) [describe item]. Each item is photographed in a flat lay product style with consistent soft lighting and small drop shadows. Clean, minimal, shareable. The humor comes from the accuracy of the items chosen, not from messy design. Instagram-ready quality.`}
        </div>

        {/* PROMPT 50 */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>50. Retro Travel Poster</h3>
        <p>The vintage travel poster style is evergreen. People frame these, sell them as prints, and use them to decorate their spaces. Always viral, always in demand.</p>
        <div style={promptBlockStyle}>
{`Vintage retro travel poster for [DESTINATION: a real city, a fictional place, or a funny concept like "My Couch" or "The Office Kitchen"]. 1930s-1950s WPA / Art Deco travel poster style. Bold, flat geometric shapes and simplified landscapes. Limited color palette: 4-5 colors with [warm earth tones / bold primary colors / muted pastels]. A striking, iconic landmark or scene from the destination dominates the composition. Bold serif or art deco typography at the top: "[DESTINATION NAME]". Smaller tagline below: "[A witty or classic travel slogan]". Slight paper texture and faded edges to suggest age. The design should look like a collectible poster you would frame and hang on a wall. Inspired by the work of the WPA Federal Art Project or vintage airline posters.`}
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* PRO TIPS SECTION                             */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>5 Pro Tips for Better AI Image Results</h2>
        <p>You now have 50 prompts, but the people who get truly exceptional results understand a few principles that apply to every single prompt.</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Tip 1: Specify the Camera and Lens</h3>
        <p>For photorealistic images, always include a camera body and lens in your prompt. &ldquo;Shot on a Canon EOS R5, 85mm f/1.4&rdquo; produces dramatically different (and better) results than just describing a scene. The model understands how different lenses compress perspective, control depth of field, and render bokeh. A 24mm wide angle feels expansive and environmental. An 85mm feels intimate and flattering. A 200mm telephoto feels compressed and voyeuristic. Use this to your advantage.</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Tip 2: Describe the Lighting, Not Just the Subject</h3>
        <p>Lighting is what separates amateur images from professional ones &mdash; in real photography and in AI generation. Instead of just describing what is in the image, describe <strong>how it is lit</strong>. &ldquo;Soft diffused natural light from a large window on the left&rdquo; is infinitely more useful than &ldquo;well-lit.&rdquo; Learn a few lighting terms: Rembrandt lighting, split lighting, butterfly lighting, rim light, backlighting, golden hour, overcast diffused. Each one produces a completely different mood.</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Tip 3: Reference Real Artists, Films, or Magazines</h3>
        <p>The fastest way to communicate a style is to reference something specific. &ldquo;In the style of Wes Anderson&rdquo; communicates more in five words than a paragraph of description. &ldquo;Shot for National Geographic,&rdquo; &ldquo;Vogue editorial quality,&rdquo; &ldquo;Pixar rendering style&rdquo; &mdash; these references activate specific aesthetic patterns that produce far more cohesive results than trying to describe a style from scratch.</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Tip 4: Include Negative Instructions</h3>
        <p>Tell the AI what you <strong>do not</strong> want. &ldquo;No text in the image,&rdquo; &ldquo;no watermarks,&rdquo; &ldquo;no overly saturated colors,&rdquo; &ldquo;no people in the background,&rdquo; &ldquo;no digital sharpening artifacts.&rdquo; Negative instructions prevent the most common problems before they happen. This is especially useful for avoiding the &ldquo;AI look&rdquo; &mdash; that overly smooth, hyper-saturated aesthetic that screams artificial.</p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '32px' }}>Tip 5: Iterate, Do Not Regenerate</h3>
        <p>When you get a result that is 70% right, do not start over. Tell ChatGPT what to change: &ldquo;Same image but make the lighting warmer,&rdquo; &ldquo;zoom in closer on the face,&rdquo; &ldquo;remove the background element on the right,&rdquo; &ldquo;make the color palette more muted.&rdquo; Iterating on a good result is faster and more predictable than regenerating from scratch. Treat it like directing a photographer: give specific feedback on what to adjust.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* RELATED READING                              */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Keep Learning</h2>
        <p>If you found these image prompts useful, you will get a lot out of these related guides:</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li><Link href="/blog/chatgpt-tips-tricks-2026" style={{ color: '#3B5FFF' }}>25 ChatGPT Tips and Tricks Most People Don&rsquo;t Know in 2026</Link></li>
          <li><Link href="/blog/best-ai-prompts-business-2026" style={{ color: '#3B5FFF' }}>50 AI Prompts That Are Actually Making People Money in 2026</Link></li>
          <li><Link href="/blog/chatgpt-side-hustle-2026" style={{ color: '#3B5FFF' }}>7 ChatGPT Side Hustles Actually Making Money in 2026</Link></li>
          <li><Link href="/blog/ai-second-income-2026" style={{ color: '#3B5FFF' }}>How to Build a Second Income with AI Tools in 2026</Link></li>
          <li><Link href="/blog/ai-video-prompts-sora-runway-2026" style={{ color: '#3B5FFF' }}>30+ Best AI Video Prompts for Sora, Runway &amp; Pika 2026</Link></li>
        </ul>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* ============================================ */}
        {/* FAQ SECTION                                  */}
        {/* ============================================ */}

        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '40px' }}>Frequently Asked Questions</h2>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>Can ChatGPT generate images for free?</h3>
        <p>Yes, ChatGPT can generate images on the free tier using DALL-E, but with daily limits. Free users typically get a small number of generations per day. ChatGPT Plus ($20/month) and Pro ($200/month) users get significantly higher limits. For anyone doing serious image work &mdash; product photography, brand assets, content creation &mdash; the Plus plan is worth it for the increased generation allowance and faster processing.</p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>What is the best way to write ChatGPT image prompts?</h3>
        <p>Follow this structure: <strong>subject</strong> first, then <strong>style/medium</strong> (photography, illustration, 3D render), then <strong>lighting</strong> (soft natural, dramatic studio), then <strong>composition</strong> (close-up, wide angle, overhead), and finally <strong>mood/atmosphere</strong>. Be specific about colors, textures, and background elements. Include camera and lens details for photorealistic shots. The more specific your prompt, the less you need to regenerate.</p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>Can I use ChatGPT-generated images commercially?</h3>
        <p>Yes. OpenAI grants users full rights to images created with DALL-E through ChatGPT, including commercial use. You can use them for social media, marketing, products, and more. Avoid generating images of real people without consent, do not closely mimic copyrighted characters or styles of living artists, and disclose AI-generated content when required by platform policies.</p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>What image styles work best with ChatGPT in 2026?</h3>
        <p>ChatGPT excels at photorealistic portraits and product photography, Studio Ghibli and anime-style illustrations, cinematic compositions, flat lay product shots, minimalist brand graphics, and retro aesthetics. The model handles realistic lighting and textures particularly well. For best results, reference specific photography or art styles rather than describing the look from scratch.</p>

        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '24px' }}>How do I make my image prompts more consistent?</h3>
        <p>Create a &ldquo;style anchor&rdquo; &mdash; a set of parameters you reuse across prompts. Include the same camera, lighting setup, color palette, and art style keywords every time. Save your best-performing prompts as templates and only change the subject while keeping style parameters identical. This produces a cohesive visual library instead of random one-offs.</p>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        {/* FINAL CTA */}
        <div style={{ marginTop: '32px', padding: '24px', background: '#ECFDF5', border: '1px solid #6EE7B7', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 8px', fontSize: '1.1rem' }}>🎨 Try Our Free AI Image Prompt Builder</h3>
          <p style={{ margin: '0 0 12px', color: '#6B7280', fontSize: '15px' }}>Don&apos;t want to write prompts from scratch? Use our <strong>free visual tool</strong> to pick a style (Ghibli, Cyberpunk, Hyperrealistic + 9 more), set mood &amp; lighting, and get a perfect prompt for ChatGPT, Midjourney, or DALL·E in seconds.</p>
          <a href="/image-prompt-builder" style={{ display: 'inline-block', background: '#059669', color: '#fff', padding: '10px 24px', borderRadius: '100px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>
            Build Your Image Prompt Free →
          </a>
        </div>

        <div style={{ marginTop: '24px', padding: '32px', background: '#F0F4FF', border: '1px solid #93B4FF', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 8px', fontSize: '1.1rem' }}>Ready to create scroll-stopping visuals on demand?</h3>
          <p style={{ margin: '0 0 16px', color: '#6B7280', fontSize: '15px' }}>The <strong>AI Image Prompt Pack</strong> includes 200+ battle-tested image prompts organized by use case &mdash; portraits, products, social media, branding, art, and viral trends. Every prompt is pre-built with camera, lighting, composition, and mood details. Copy, paste, generate. $29 one-time.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            <a href={IMAGE_PACK_LINK} style={{ display: 'inline-block', background: '#3B5FFF', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
              Get the Image Prompt Pack &mdash; $29
            </a>
            <a href={STRIPE_MEGA_PACK} style={{ display: 'inline-block', background: '#111827', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
              Text Prompt Mega Pack &mdash; $29
            </a>
            <a href="https://buy.stripe.com/bJe7sK0tNdLjgle0pscMM0b" style={{ display: 'inline-block', background: '#fff', color: '#111827', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '15px', border: '1px solid #D1D5DB' }}>
              All Kits Bundle &mdash; $97
            </a>
          </div>
          <p style={{ margin: '12px 0 0', color: '#6B7280', fontSize: '13px' }}>The Bundle includes the Image Pack plus 7 more specialized kits &mdash; best value if you want everything.</p>
        </div>

        <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

        <p style={{ color: '#6B7280', fontSize: '14px' }}>
          <em>Rey Midas builds <a href="https://www.midastools.co" style={{ color: '#3B5FFF' }}>Midas Tools</a> &mdash; AI-powered toolkits for entrepreneurs, creators, and professionals. Questions? <a href="mailto:iam@armando.mx" style={{ color: '#3B5FFF' }}>iam@armando.mx</a>.</em>
        </p>
      </div>
    </Layout>
  );
}
