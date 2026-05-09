#!/usr/bin/env python3
"""send-recovery-welcomes.py — Fire source-aware welcome emails to subscribers
recovered from STORAGE FAILED inbox dump.

Built 2026-05-08 (Session 26d) as the post-recovery counterpart to
recover-storage-failed.py. The recovery flow is two-step:

    1. recover-storage-failed.py parse <emails> --out recovered.json
    2. recover-storage-failed.py merge --in recovered.json --apply
    3. send-recovery-welcomes.py --in recovered.json --dry-run | --apply  ← THIS

Without step 3, recovered subs sit dormant in the gist — they signed up days
ago, expected something, got radio silence. This script delivers what they
signed up for, source-by-source.

Idempotent: logs every successful send to .founder/state/recovery-welcomes-sent.json
and skips already-sent emails on re-runs. Safe to re-run after partial failures.

Usage:
    python3 .founder/tools/send-recovery-welcomes.py --in recovered.json --dry-run
    python3 .founder/tools/send-recovery-welcomes.py --in recovered.json --apply

Source variants are inlined below (see TEMPLATE_BY_SOURCE) — keep in sync with
.founder/sales/recovery-welcome-template.md (the canonical doc).
"""
from __future__ import annotations

import argparse
import json
import os
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional

ROOT = Path(__file__).resolve().parent.parent
LOG_PATH = ROOT / 'state' / 'recovery-welcomes-sent.json'
RESEND_KEY_FILE = ROOT / '.resend_key'

KIT_MAP = {
    'claude-code-kit': ('Claude Code Kit', 80, '$39'),
    'email-marketing-kit': ('Email Marketing Kit', 90, '$29'),
    'saas-founder-kit': ('SaaS Founder Kit', 100, '$39'),
    'resume-career-kit': ('Resume Career Kit', 125, '$29'),
    'presentation-kit': ('Presentation Kit', 75, '$29'),
    'social-media-kit': ('Social Media Kit', 110, '$29'),
    'small-business-kit': ('Small Business Kit', 90, '$29'),
    'freelancer-kit': ('Freelancer Kit', 80, '$29'),
    'real-estate-kit': ('Real Estate Kit', 70, '$29'),
    'content-creator-kit': ('Content Creator Kit', 95, '$29'),
}


def load_resend_key() -> str:
    env = (os.environ.get('RESEND_API_KEY') or '').strip()
    file_key = RESEND_KEY_FILE.read_text().strip() if RESEND_KEY_FILE.exists() else ''
    if file_key and env and file_key != env:
        sys.stderr.write(f'⚠ env disagrees with file; using FILE ({file_key[:7]}...)\n')
        return file_key
    return file_key or env or sys.exit('no Resend key in .founder/.resend_key or RESEND_API_KEY')


def load_log() -> dict:
    if LOG_PATH.exists():
        return json.loads(LOG_PATH.read_text())
    return {'sent': {}}  # email -> {id, ts, source}


def save_log(log: dict) -> None:
    LOG_PATH.parent.mkdir(parents=True, exist_ok=True)
    LOG_PATH.write_text(json.dumps(log, indent=2))


def classify(source: str) -> str:
    """Map any subscribe source string to a template variant key."""
    s = (source or '').lower().strip()
    if not s:
        return 'fallback'
    if any(k in s for k in ('audit-template', 'ai-audit', 'clarity-assessment')):
        return 'audit'
    if any(k in s for k in ('finance-club', 'boucher', 'cfo-accelerator', 'cfo-club', 'cfo-connect', 'cross-promo', 'partner')):
        return 'finance'
    if s.startswith('q-') or s == 'quiz' or s.startswith('quiz'):
        return 'quiz'
    if s.endswith('-lead'):
        return 'kit-lead'
    if any(k in s for k in ('prompt-enhancer', 'prompt-generator', 'tool', 'buyer-intent', 'image-prompt')):
        return 'free-tool'
    return 'fallback'


def render(variant: str, source: str) -> tuple[str, str]:
    """Return (subject, body_text) for a variant."""
    if variant == 'audit':
        subject = 'Your AI Audit Checklist (delayed delivery)'
        deliverable = (
            'The 14-Question AI Audit Checklist:\n'
            'https://www.midastools.co/blog/ai-audit-checklist-coaches-consultants-2026?utm_source=recovery&utm_medium=email&utm_campaign=storage-recovery-2026-05\n\n'
            'If you want me to run the checklist on your business directly, the full $997 Clarity Assessment is at:\n'
            'https://www.midastools.co/ai-audit?utm_source=recovery'
        )
        intent = ' for the AI Audit Checklist'
        next_line = 'Reply to this email if you want to talk through any of the 14 questions — I read every reply.'
    elif variant == 'finance':
        subject = 'Your AI Prompt Mega Pack — direct link'
        deliverable = (
            'Your AI Prompt Mega Pack (200+ prompts across 6 categories):\n'
            'https://www.midastools.co/ai-prompt-mega-pack.zip\n\n'
            'Finance-specific samples to start with:\n'
            '- Board Narrative Builder (Business Operations track)\n'
            '- Scenario Model 3 Cases (Business Operations track)\n'
            '- Investor Update — MRR edition (SaaS Founder track)'
        )
        intent = ' through our finance partner channel'
        next_line = 'If the bundle is useful and you want the full set of 7 specialized kits ($97 → $29/kit avg), it\'s at midastools.co/all-kits-bundle.'
    elif variant == 'quiz':
        subject = 'Your prompt recommendations from MidasTools'
        deliverable = (
            'Take the quiz again so I can send the right recommendations:\n'
            'https://www.midastools.co/quiz?utm_source=recovery\n\n'
            'The quiz takes 60 seconds and outputs the 3 prompts (out of 200+) that match your role and use case.'
        )
        intent = ' after the prompt-recommendation quiz'
        next_line = 'If you already know what you want, the full Mega Pack is midastools.co/ai-prompt-mega-pack ($29).'
    elif variant == 'kit-lead':
        slug = (source or '').lower().replace('-lead', '').strip()
        display, count, price = KIT_MAP.get(slug, (slug.replace('-', ' ').title(), 'many', '$29'))
        subject = f'Your {display} sample (delayed delivery)'
        deliverable = (
            f'Your free {display} sample:\n'
            f'https://www.midastools.co/{slug}?utm_source=recovery#preview\n\n'
            f'Inside you\'ll find 3 ready-to-use prompts from the full kit. Copy-paste into Claude or ChatGPT — they\'re plug-and-play.\n\n'
            f'If you want the complete kit ({count}+ prompts), it\'s at midastools.co/{slug} ({price}).'
        )
        intent = f' for the {display} sample'
        next_line = 'Reply if any of the 3 samples don\'t work for your specific use case — I\'ll send you a custom variant.'
    elif variant == 'free-tool':
        subject = 'You\'re on the list — and one quick note'
        deliverable = (
            'You\'re already using the free tools — no asset to deliver.\n\n'
            'But here\'s what you missed in the gap: a curated list of our 22 free tools, sorted by use case.\n'
            'https://www.midastools.co/tools?utm_source=recovery\n\n'
            'Most-used by our existing list:\n'
            '- Prompt Enhancer (turns rough prompts into precise ones): /prompt-enhancer\n'
            '- Buyer Intent Generator (B2B sales prompts): /buyer-intent-generator\n'
            '- Image Prompt Pack preview: /ai-image-prompt-pack'
        )
        intent = ' after using one of our free tools'
        next_line = 'If you want the paid Mega Pack (200+ prompts, $29), it\'s at midastools.co/ai-prompt-mega-pack.'
    else:  # fallback
        subject = 'You\'re on the MidasTools list — welcome (delayed)'
        deliverable = (
            'Since I\'m not sure exactly what you signed up for, here\'s our most-requested asset:\n\n'
            'Free 14-Question AI Audit Checklist:\n'
            'https://www.midastools.co/blog/ai-audit-checklist-coaches-consultants-2026?utm_source=recovery\n\n'
            'And the full 22 free tools list:\n'
            'https://www.midastools.co/tools?utm_source=recovery\n\n'
            'If there\'s a specific tool or kit you signed up for, reply with its name and I\'ll send the direct link.'
        )
        intent = ''
        next_line = 'Replies go straight to my inbox.'

    body = (
        f'Hi —\n\n'
        f'A few days ago you signed up for MidasTools{intent}. A storage hiccup on our side delayed the confirmation email — sorry about that.\n\n'
        f'You\'re properly on the list now. Here\'s what you came for:\n\n'
        f'{deliverable}\n\n'
        f'{next_line}\n\n'
        f'If this isn\'t useful or you didn\'t mean to sign up, just reply "remove" — no questions, no follow-ups.\n\n'
        f'— Armando\n'
        f'MidasTools\n'
        f'midastools.co'
    )
    return subject, body


def wrap_html(text: str) -> str:
    return (
        '<div style="font-family:\'Inter\',Helvetica,Arial,sans-serif;'
        'max-width:600px;margin:0 auto;padding:32px 24px;color:#111827;'
        'line-height:1.6;">'
        + text.replace('\n', '<br/>')
        + '</div>'
    )


def send_via_resend(to: str, subject: str, body: str, key: str) -> Optional[str]:
    payload = {
        'from': 'Armando from MidasTools <hello@midastools.co>',
        'to': [to],
        'reply_to': 'iam@armando.mx',
        'subject': subject,
        'html': wrap_html(body),
    }
    req = urllib.request.Request(
        'https://api.resend.com/emails',
        data=json.dumps(payload).encode(),
        headers={
            'Authorization': f'Bearer {key}',
            'Content-Type': 'application/json',
            'User-Agent': 'midastools-recovery/1.0',
        },
        method='POST',
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            return json.loads(resp.read()).get('id')
    except urllib.error.HTTPError as e:
        sys.stderr.write(f'  HTTP {e.code}: {e.read().decode()[:300]}\n')
        return None
    except Exception as e:
        sys.stderr.write(f'  {type(e).__name__}: {e}\n')
        return None


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--in', dest='input', required=True, help='JSON from recover-storage-failed.py parse')
    g = ap.add_mutually_exclusive_group(required=True)
    g.add_argument('--dry-run', action='store_true')
    g.add_argument('--apply', action='store_true')
    ap.add_argument('--rate-limit', type=float, default=0.5, help='seconds between sends (default 0.5)')
    args = ap.parse_args()

    subs = json.loads(Path(args.input).read_text())
    if not isinstance(subs, list):
        sys.exit('expected JSON array from recover-storage-failed.py')

    log = load_log()
    already_sent = set(log.get('sent', {}).keys())

    queue = []
    for s in subs:
        email = s.get('email', '').lower().strip()
        source = s.get('source', '')
        if not email or '@' not in email:
            continue
        if email in already_sent:
            sys.stderr.write(f'  skip (already sent): {email}\n')
            continue
        variant = classify(source)
        subject, body = render(variant, source)
        queue.append({'email': email, 'source': source, 'variant': variant, 'subject': subject, 'body': body})

    print(f'[plan] queued {len(queue)} sends ({len(subs)-len(queue)} skipped)', file=sys.stderr)
    by_variant: dict[str, int] = {}
    for q in queue:
        by_variant[q['variant']] = by_variant.get(q['variant'], 0) + 1
    for v, n in sorted(by_variant.items()):
        print(f'    {v:12s}  {n}', file=sys.stderr)

    if args.dry_run:
        if queue:
            sample = queue[0]
            print('\n--- sample render (first in queue) ---', file=sys.stderr)
            print(f'TO:      {sample["email"]}', file=sys.stderr)
            print(f'SUBJECT: {sample["subject"]}', file=sys.stderr)
            print(f'VARIANT: {sample["variant"]} (from source={sample["source"]!r})', file=sys.stderr)
            print('---', file=sys.stderr)
            print(sample['body'], file=sys.stderr)
            print('---', file=sys.stderr)
        print('[dry-run] re-run with --apply to send', file=sys.stderr)
        return 0

    key = load_resend_key()
    sent = 0
    failed = 0
    for q in queue:
        msg_id = send_via_resend(q['email'], q['subject'], q['body'], key)
        if msg_id:
            log['sent'][q['email']] = {
                'id': msg_id,
                'ts': datetime.now(timezone.utc).isoformat().replace('+00:00', 'Z'),
                'source': q['source'],
                'variant': q['variant'],
            }
            save_log(log)  # save after every send so partial-failure resumes cleanly
            print(f'  ✓ {q["email"]:40s} {q["variant"]:10s} id={msg_id}', file=sys.stderr)
            sent += 1
        else:
            print(f'  ✗ {q["email"]:40s} {q["variant"]:10s} FAILED', file=sys.stderr)
            failed += 1
        time.sleep(args.rate_limit)

    print(f'\n[done] sent={sent} failed={failed} log={LOG_PATH}', file=sys.stderr)
    return 0 if failed == 0 else 1


if __name__ == '__main__':
    sys.exit(main())
