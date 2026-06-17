// Coloring Book Machine — poll job status after returning from Stripe.
// The webhook flips paid=true a few seconds after checkout; the page polls here.

import { readKV } from '../../../lib/kv-store';

export default async function handler(req, res) {
  const token = String(req.query.token || '').trim();
  if (!/^cbk_[a-f0-9]{28}$/.test(token)) return res.status(400).json({ error: 'bad token' });

  let job = null;
  try { job = await readKV(`cbook:${token}`); } catch { /* fail closed below */ }
  if (!job) return res.status(404).json({ error: 'not_found', message: 'This book session expired (jobs last 48h). Start a new one.' });

  return res.status(200).json({
    paid: !!job.paid,
    theme: job.theme,
    title: job.title,
    subtitle: job.subtitle || '',
    style: job.style,
    trim: job.trim,
    pageCount: job.pageCount,
  });
}
