#!/usr/bin/env node
/**
 * Idempotent creator for the "MidasTools Pro Pass" — a one-time $39 lifetime
 * unlock for the AI money-tools (starting with the Outreach Machine).
 * Reads the live Stripe secret from .founder/.stripe_key.
 * Re-running is safe: it reuses an existing product/price/link if found.
 */
const fs = require('fs');
const path = require('path');

const KEY = (process.env.STRIPE_SECRET_KEY ||
  fs.readFileSync(path.join(__dirname, '..', '.stripe_key'), 'utf8')).trim();

const AMOUNT = 3900; // $39.00 one-time
const PRODUCT_NAME = 'MidasTools Pro Pass';
const REDIRECT = 'https://www.midastools.co/thank-you?kit=pro-pass';

async function stripe(pathname, params, method = 'POST') {
  const body = params ? new URLSearchParams(params).toString() : undefined;
  const res = await fetch(`https://api.stripe.com/v1/${pathname}`, {
    method,
    headers: {
      Authorization: `Bearer ${KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });
  const json = await res.json();
  if (json.error) throw new Error(`${pathname}: ${json.error.message}`);
  return json;
}

(async () => {
  // 1. Find or create product
  const search = await stripe(`products/search?query=${encodeURIComponent(`name:'${PRODUCT_NAME}'`)}`, null, 'GET');
  let product = (search.data || []).find(p => p.active);
  if (!product) {
    product = await stripe('products', {
      name: PRODUCT_NAME,
      description: 'Lifetime unlock: unlimited AI generations, saved campaigns, bulk mode, and every MidasTools money-tool.',
    });
    console.log('created product', product.id);
  } else {
    console.log('reusing product', product.id);
  }

  // 2. Find or create a $39 one-time price
  const prices = await stripe(`prices?product=${product.id}&active=true&limit=100`, null, 'GET');
  let price = (prices.data || []).find(p => p.unit_amount === AMOUNT && p.currency === 'usd' && !p.recurring);
  if (!price) {
    price = await stripe('prices', {
      product: product.id,
      unit_amount: String(AMOUNT),
      currency: 'usd',
    });
    console.log('created price', price.id);
  } else {
    console.log('reusing price', price.id);
  }

  // 3. Find or create payment link (with kit_type metadata + thank-you redirect)
  const links = await stripe('payment_links?limit=100', null, 'GET');
  let link = (links.data || []).find(l => l.active && l.metadata && l.metadata.kit_type === 'pro-pass');
  if (!link) {
    link = await stripe('payment_links', {
      'line_items[0][price]': price.id,
      'line_items[0][quantity]': '1',
      'metadata[kit_type]': 'pro-pass',
      'after_completion[type]': 'redirect',
      'after_completion[redirect][url]': REDIRECT,
    });
    console.log('created payment link', link.id);
  } else {
    console.log('reusing payment link', link.id);
  }

  console.log('\n=== PRO PASS READY ===');
  console.log('product_id:', product.id);
  console.log('price_id:', price.id);
  console.log('plink_id:', link.id);
  console.log('URL:', link.url);
})().catch(e => { console.error('ERROR:', e.message); process.exit(1); });
