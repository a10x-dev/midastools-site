// Validates a MidasTools Pro Pass unlock code (minted by the Stripe webhook on
// purchase and stored in KV at pro-code:<CODE>). No auth/login system exists, so
// the code IS the credential. The tool stores it in localStorage and sends it
// with each generation; the generation endpoint re-checks it to lift limits.
import { readKV } from '../../lib/kv-store';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const code = String(req.body?.code || '').trim().toUpperCase();
  if (!code || !/^MIDAS-[A-F0-9]{8}$/.test(code)) {
    return res.status(200).json({ valid: false });
  }

  try {
    const rec = await readKV(`pro-code:${code}`);
    if (rec && rec.email) {
      return res.status(200).json({ valid: true });
    }
  } catch (err) {
    console.error('[verify-pro] KV read failed:', err.message);
  }
  return res.status(200).json({ valid: false });
}
