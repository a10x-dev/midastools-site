// One-off: create the Chatbot Builder Pro $39/mo subscription product + payment link.
// Uses STRIPE_SECRET_KEY from env. Idempotent-ish: reuses an existing product by name.
const Stripe = require('stripe');
const key = process.env.STRIPE_SECRET_KEY;
if (!key) { console.error('NO STRIPE_SECRET_KEY in env'); process.exit(1); }
const stripe = new Stripe(key);

(async () => {
  const acct = await stripe.accounts.retrieve().catch(() => null);
  console.log('livemode key:', key.startsWith('sk_live_'));

  const PRODUCT_NAME = 'MidasTools Chatbot Builder — Live + Leads';

  // Reuse existing product if present.
  let product;
  const existing = await stripe.products.search({ query: `name:'${PRODUCT_NAME}'` }).catch(() => ({ data: [] }));
  if (existing.data && existing.data.length) {
    product = existing.data[0];
    console.log('reusing product:', product.id);
  } else {
    product = await stripe.products.create({
      name: PRODUCT_NAME,
      description: 'Put your AI chatbot live on any website, white-label it, and get captured leads emailed to you. Build unlimited bots and resell to local businesses.',
      metadata: { kit_type: 'chatbot-pro' },
    });
    console.log('created product:', product.id);
  }

  // Find or create the $39/mo recurring price.
  let price;
  const prices = await stripe.prices.list({ product: product.id, active: true, limit: 10 });
  price = (prices.data || []).find(p => p.unit_amount === 3900 && p.recurring && p.recurring.interval === 'month');
  if (price) {
    console.log('reusing price:', price.id);
  } else {
    price = await stripe.prices.create({
      product: product.id,
      unit_amount: 3900,
      currency: 'usd',
      recurring: { interval: 'month' },
      metadata: { kit_type: 'chatbot-pro' },
    });
    console.log('created price:', price.id);
  }

  // Create the payment link (subscription mode is implied by recurring price).
  const link = await stripe.paymentLinks.create({
    line_items: [{ price: price.id, quantity: 1 }],
    allow_promotion_codes: true,
    metadata: { kit_type: 'chatbot-pro' },
    after_completion: {
      type: 'redirect',
      redirect: { url: 'https://www.midastools.co/chatbot-builder?upgraded=1' },
    },
  });

  console.log('PAYMENT_LINK_ID:', link.id);
  console.log('PAYMENT_LINK_URL:', link.url);
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });
