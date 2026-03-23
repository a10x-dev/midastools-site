# Midas Tools — Freelancer AI Kit
# 02: Invoice & Payment Chaser

Stop chasing payments manually. These AI-powered templates handle the awkward conversations so you can focus on billable work.

---

## Variables Reference

```
[YOUR NAME] — Your name or business name
[YOUR COMPANY] — Your business name
[CLIENT NAME] — Client's first name
[CLIENT COMPANY] — Client's business name
[INVOICE NUMBER] — The invoice ID/number
[INVOICE AMOUNT] — Total amount due
[INVOICE DATE] — Date the invoice was issued
[DUE DATE] — Original payment due date
[PROJECT NAME] — Name or description of the project
[DAYS OVERDUE] — Number of days past due
[PAYMENT LINK] — URL or instructions to pay
[PAYMENT METHODS] — Accepted payment methods
[LATE FEE PERCENTAGE] — Your late fee rate (e.g., "1.5% per month")
[YOUR EMAIL] — Your email address
[YOUR PHONE] — Your phone number (optional)
```

---

## Prompt 1: Invoice Creation

### Prompt

```
Generate a professional freelance invoice in a clean text format that I can transfer to my invoicing tool.

FROM:
[YOUR NAME]
[YOUR COMPANY]
[Your address or "Remote"]

BILL TO:
[CLIENT NAME]
[CLIENT COMPANY]

INVOICE DETAILS:
- Invoice Number: [INVOICE NUMBER]
- Invoice Date: [INVOICE DATE]
- Due Date: [DUE DATE]
- Payment Terms: [e.g., "Net 15", "Net 30", "Due on receipt"]

LINE ITEMS:
[List each deliverable or service with its amount, e.g.:
- Website design and development: $3,500
- Content migration: $500
- Training session (2 hours): $300]

Generate the invoice with:
- A clear header with all identifying information
- A line items table: | Description | Quantity | Rate | Amount |
- Subtotal, any applicable tax, and total due
- Payment instructions section with accepted methods
- A professional "Thank you for your business" closing note
- Terms and conditions (late payment policy, dispute window)

FORMAT: Clean, structured text ready to paste into Google Docs, FreshBooks, or any invoicing tool.
```

### How to Use
Use this to draft invoices quickly before entering them into your invoicing software. Adjust line items to match your actual deliverables.

---

## Prompt 2: 7-Day Payment Reminder (Friendly)

### Prompt

```
Write a friendly payment reminder email for an overdue freelance invoice.

CONTEXT:
- My name: [YOUR NAME]
- Client: [CLIENT NAME] at [CLIENT COMPANY]
- Invoice: #[INVOICE NUMBER] for [INVOICE AMOUNT]
- Project: [PROJECT NAME]
- Due date: [DUE DATE] (now 7 days overdue)
- Payment link: [PAYMENT LINK]

Write a short, warm email that:
- Has a subject line like "Quick reminder — Invoice #[INVOICE NUMBER]"
- Opens casually — assume this is a simple oversight
- Mentions the invoice number, amount, and original due date
- Provides the payment link or instructions directly in the email
- Asks if they have any questions about the invoice
- Keeps the tone genuinely friendly — this is a good client who probably just forgot
- Is under 120 words in the body

Do NOT:
- Mention late fees yet
- Sound passive-aggressive
- Use phrases like "as per our agreement" or "please be advised"
- Make them feel guilty
```

### How to Use
Send this exactly 7 days after the due date. Most late payments are simply forgotten invoices — this gentle nudge resolves 60-70% of them.

---

## Prompt 3: 14-Day Payment Follow-Up (Firm)

### Prompt

```
Write a firm but professional payment follow-up email for a freelance invoice that is now 14 days overdue.

CONTEXT:
- My name: [YOUR NAME] at [YOUR COMPANY]
- Client: [CLIENT NAME] at [CLIENT COMPANY]
- Invoice: #[INVOICE NUMBER] for [INVOICE AMOUNT]
- Project: [PROJECT NAME]
- Original due date: [DUE DATE]
- Days overdue: 14
- Previous reminder sent: 7 days ago (no response)
- Payment link: [PAYMENT LINK]
- Late fee policy: [LATE FEE PERCENTAGE] per month after 30 days

Write an email that:
- Has a clear subject line referencing the overdue invoice
- Acknowledges this is a second notice
- States the facts plainly: invoice number, amount, due date, days overdue
- Mentions that late fees will apply after 30 days (reference your contract terms)
- Provides the payment link prominently
- Offers to discuss if there's a billing issue or question
- Requests a reply within 3 business days, even if they can't pay immediately
- Keeps a professional, business-like tone — not angry, but not casual either
- Is under 180 words

TONE: Direct and professional. You're a business, not a friend asking for a favor.
```

### How to Use
This is your escalation email. The shift from friendly to firm signals that you take your business seriously. If you have a contract, reference the relevant payment terms.

---

## Prompt 4: 30-Day Final Notice (Professional)

### Prompt

```
Write a final payment notice for a freelance invoice that is 30 days overdue.

CONTEXT:
- My name: [YOUR NAME] at [YOUR COMPANY]
- Client: [CLIENT NAME] at [CLIENT COMPANY]
- Invoice: #[INVOICE NUMBER] for [INVOICE AMOUNT]
- Project: [PROJECT NAME]
- Original due date: [DUE DATE]
- Days overdue: 30
- Previous reminders sent: Day 7 (friendly), Day 14 (firm) — no response or payment
- Late fee policy: [LATE FEE PERCENTAGE] per month
- Current amount with late fees: [Calculate or state total]
- Payment link: [PAYMENT LINK]

Write an email that:
- Has a subject line clearly marked as "Final Notice" with the invoice number
- States this is the third and final reminder before further action
- Summarizes the complete payment history (invoice date, reminders sent, no response)
- States the total now due including any applicable late fees
- Outlines the next steps if payment is not received within 7 business days (pause on future work, referral to collections, small claims, etc. — keep it factual, not threatening)
- Offers one final opportunity to discuss payment arrangements
- Provides all payment details and methods
- Closes professionally — leave the door open for resolution

TONE: Formal and measured. Every sentence should be factual. No emotion, no accusations. This email may be referenced in a legal or collections context, so keep it clean.

LENGTH: Under 250 words.
```

### How to Use
This is your last direct attempt. After this, follow through on whatever next steps you outlined. Never make threats you won't act on — it damages your credibility.

---

## Prompt 5: Payment Plan Offer

### Prompt

```
Write an email offering a payment plan to a client with an overdue freelance invoice.

CONTEXT:
- My name: [YOUR NAME]
- Client: [CLIENT NAME] at [CLIENT COMPANY]
- Invoice: #[INVOICE NUMBER] for [INVOICE AMOUNT]
- Days overdue: [DAYS OVERDUE]
- Client situation: [Brief context, e.g., "Client mentioned cash flow issues" or "Small startup with limited budget"]

Generate an email that:
- Acknowledges that cash flow challenges happen (without being condescending)
- States you'd like to find a workable solution for both parties
- Proposes a specific payment plan:
  - Option A: 2 equal payments over 2 months
  - Option B: 3 equal payments over 3 months
  - Calculate the exact amounts for each option based on [INVOICE AMOUNT]
- States that work will continue/resume once the first payment is received
- Requests they choose an option and confirm within 5 business days
- Notes that the full amount remains due and late fees are paused during the plan
- Keeps the tone understanding but businesslike

After the email, generate a brief "Payment Plan Agreement" template with:
- Client and freelancer details
- Original invoice reference
- Agreed payment schedule with specific dates and amounts
- Signature lines for both parties
- Note that failure to make a scheduled payment voids the plan and the full balance becomes due

LENGTH: Email under 200 words. Agreement under 150 words.
```

### How to Use
Offering a payment plan shows professionalism and often recovers money you'd otherwise write off. Only offer this to clients you believe will follow through.

---

## Prompt 6: Late Fee Discussion Script

### Prompt

```
Write a script for discussing late fees with a freelance client, either via email or as talking points for a call.

CONTEXT:
- My name: [YOUR NAME]
- Client: [CLIENT NAME]
- Invoice: #[INVOICE NUMBER] for [INVOICE AMOUNT]
- Days overdue: [DAYS OVERDUE]
- Late fee policy: [LATE FEE PERCENTAGE] per month
- Late fee amount: [Calculated amount]
- Is this in the contract? [Yes/No]
- Client relationship: [e.g., "Long-term client, first late payment" or "New client, second late payment"]

Generate two versions:

VERSION 1 — WAIVING THE FEE (for good clients):
An email offering to waive the late fee this time as a gesture of goodwill, while reminding them of the policy for future invoices. Warm but clear.

VERSION 2 — ENFORCING THE FEE:
An email applying the late fee and explaining the calculation. Professional and factual, referencing the contract terms. Include the updated total due.

For each version, include:
- Subject line
- Email body (under 150 words)
- A brief explanation of when to use this version

ALSO generate 5 talking points for handling this conversation on a call, covering:
- How to open the conversation
- How to state the fee without apologizing
- How to respond to pushback
- How to offer a compromise if needed
- How to close the conversation with clear next steps
```

### How to Use
Choose the version that fits the situation. Long-term, reliable clients who have one late payment deserve grace. Serial late payers need the fee enforced to change behavior.

---

## Prompt 7: "Thank You for Payment" Confirmation

### Prompt

```
Write a brief, professional payment confirmation email for a freelance invoice.

CONTEXT:
- My name: [YOUR NAME]
- Client: [CLIENT NAME]
- Invoice: #[INVOICE NUMBER] for [INVOICE AMOUNT]
- Project: [PROJECT NAME]
- Was it overdue? [Yes/No — if yes, do NOT mention it]

Write a short email (under 80 words) that:
- Confirms receipt of payment
- References the invoice number and amount
- Thanks them genuinely
- Mentions next steps if applicable (e.g., next phase of the project, next invoice date for retainer clients)
- Ends warmly

IMPORTANT: If the payment was late, do NOT reference the lateness. Be gracious. The goal is to maintain a positive relationship going forward.
```

### How to Use
Always send a payment confirmation. It's professional, it closes the loop, and it's an opportunity to reinforce the relationship.

---

## Prompt 8: Invoice Dispute Response

### Prompt

```
Write a professional response to a client who is disputing a freelance invoice.

CONTEXT:
- My name: [YOUR NAME] at [YOUR COMPANY]
- Client: [CLIENT NAME] at [CLIENT COMPANY]
- Invoice: #[INVOICE NUMBER] for [INVOICE AMOUNT]
- Their dispute reason: [DESCRIBE — e.g., "Says the amount is higher than expected", "Claims deliverable wasn't completed", "Says they never approved the work"]
- The facts: [YOUR SIDE — e.g., "Scope was approved in writing on [DATE]", "Deliverable was sent and acknowledged on [DATE]"]
- Supporting evidence: [What documentation you have — emails, signed scope, approval messages]

Write an email that:
- Thanks them for raising the concern (shows you take it seriously)
- Restates their concern accurately (proves you listened)
- Presents the facts with specific dates, references, and documentation
- Proposes a resolution (full payment, partial adjustment, or a call to discuss)
- Remains strictly professional — no defensiveness, no blame
- Offers to schedule a call if they'd prefer to discuss directly
- Is under 200 words

TONE: Calm, documented, professional. Let the facts speak. If this escalates, this email is part of the paper trail.
```

### How to Use
Never respond to a dispute emotionally. Take a beat, gather your documentation, then use this prompt to draft a measured response.

---

## Payment Chaser Sequence — Quick Reference

| Day | Action | Template | Tone |
|-----|--------|----------|------|
| 0 | Invoice sent | Prompt 1 | Professional |
| Due date | Payment due | — | — |
| +7 | First reminder | Prompt 2 | Friendly |
| +14 | Second reminder | Prompt 3 | Firm |
| +30 | Final notice | Prompt 4 | Formal |
| +37 | Collections / next steps | (Your decision) | — |

---

## Pro Tips

- **Invoice immediately.** Don't wait until the end of the month. Invoice the day you deliver.
- **Net 15 > Net 30.** Shorter payment terms get you paid faster. Net 30 is a corporate convention — you're not a corporation.
- **Get deposits.** Always collect 25-50% upfront before starting work. It qualifies the client and reduces risk.
- **Automate.** Use tools like FreshBooks, Wave, or Stripe to send automatic payment reminders.
- **Document everything.** Every scope change, every approval — in writing. It makes disputes nearly impossible.

---

*Midas Tools — Freelancer AI Kit v1.0*
