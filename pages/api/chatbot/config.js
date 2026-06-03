// Public bot metadata for the embedded widget (name, greeting, plan, accent).
// Never returns the knowledge sheet — only what the widget needs to render.
import { readKV } from '../../../lib/kv-store';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const id = String(req.query?.id || '').trim();
  if (!/^cb_[a-f0-9]{12}$/.test(id)) return res.status(400).json({ error: 'bad_id' });

  const bot = await readKV(`chatbot:${id}`);
  if (!bot) return res.status(404).json({ error: 'not_found' });

  return res.status(200).json({
    id: bot.id,
    name: bot.name,
    greeting: bot.greeting || `Hi! 👋 How can I help you?`,
    plan: bot.plan === 'pro' ? 'pro' : 'free',
    accent: bot.accent || '#2563EB',
  });
}
