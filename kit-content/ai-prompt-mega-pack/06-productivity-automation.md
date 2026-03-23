# Midas Tools — AI Prompt Mega Pack
# 06: Productivity & Automation Prompts

Work smarter, not harder. These prompts help you plan your week, make better decisions, automate repetitive tasks, learn faster, and get more done in less time. Your AI-powered chief of staff.

---

## Variables Reference

```
[TASK] — What you need to accomplish
[GOAL] — Your objective
[DEADLINE] — When it's due
[TOOL] — Software/platform you use
[ROLE] — Your job title
[INDUSTRY] — Your field
[CHALLENGE] — What's blocking you
[TIME AVAILABLE] — How much time you have
[SKILL] — What you want to learn
```

---

## Prompt 1: Weekly Planning — CEO-Level

### Prompt

```
Help me plan my week like a CEO.

Context:
- My role: [ROLE]
- My top 3 priorities this quarter: [LIST THEM]
- Meetings already scheduled: [LIST WITH TIMES]
- Deadlines this week: [LIST]
- Unfinished from last week: [LIST]
- Energy pattern: [WHEN AM I MOST FOCUSED — morning/afternoon/evening]

Create:
1. **Weekly theme**: One sentence — what does a successful week look like?
2. **Top 3 outcomes**: The 3 things that would make this week a win (not tasks — outcomes)
3. **Daily plan** (Mon-Fri):
   - Morning block (highest energy): What deep work to tackle
   - Midday: Meetings, calls, collaborative work
   - Afternoon: Admin, email, planning
   - One "non-negotiable" per day (the thing that MUST happen)
4. **Time blocks**: Suggest specific time slots for each activity
5. **Buffer time**: Build in 2 hours of unscheduled time for the unexpected
6. **Weekly review prompt**: Questions to answer on Friday afternoon

Rules:
- Protect the first 2 hours of each day for deep work (no meetings)
- Batch similar tasks (all calls in one block, all emails in one block)
- Include transition time between different types of work
- No more than 5 priorities per day (cognitive limit)
```

---

## Prompt 2: Decision-Making Framework

### Prompt

```
Help me make a decision about [DECISION].

Context:
- What I need to decide: [DESCRIBE THE DECISION]
- Options I'm considering: [OPTION A, OPTION B, OPTION C]
- Timeline: [WHEN DOES THIS NEED TO BE DECIDED]
- Stakeholders affected: [WHO CARES ABOUT THIS DECISION]
- What's at stake: [CONSEQUENCES OF GETTING IT WRONG]
- My gut feeling: [WHAT DO I INSTINCTIVELY WANT TO DO]

Analyze using these frameworks:
1. **10/10/10**: How will I feel about this decision in 10 minutes? 10 months? 10 years?
2. **Reversibility**: Is this a one-way door or two-way door? (Two-way = decide fast. One-way = be careful.)
3. **Opportunity cost**: What am I giving up by choosing each option?
4. **Pre-mortem**: Imagine each option failed. What would be the most likely reason?
5. **Second-order effects**: What happens AFTER the immediate outcome?

Output:
- Comparison matrix (options × criteria, scored 1-5)
- Recommendation with confidence level (low/medium/high)
- What additional information would change the recommendation
- The ONE question I should answer before deciding
```

---

## Prompt 3: Email Management — Batch Responses

### Prompt

```
Help me clear my inbox efficiently. Here are the emails I need to respond to:

[PASTE EMAIL 1 SUBJECT + KEY CONTENT]
[PASTE EMAIL 2 SUBJECT + KEY CONTENT]
[PASTE EMAIL 3 SUBJECT + KEY CONTENT]
[PASTE EMAIL 4 SUBJECT + KEY CONTENT]
[PASTE EMAIL 5 SUBJECT + KEY CONTENT]

For each email, provide:
1. **Priority**: 🔴 Urgent / 🟡 Important / 🟢 Can wait / ⚫ Delegate or delete
2. **Reply** (under 50 words): Direct, actionable, professional
3. **Next step**: What action this email creates (if any)
4. **Time needed**: How long the action will take

Rules:
- Keep replies SHORT. Respect everyone's time.
- If a meeting would be more efficient than an email thread, suggest it
- If the email doesn't require a response, say so
- If it should be delegated, suggest who and draft the forwarding message

Goal: Process all emails in under 15 minutes.
```

---

## Prompt 4: Learning Accelerator — New Skill

### Prompt

```
Create a learning plan to help me get proficient at [SKILL] in [TIME AVAILABLE].

Context:
- What I want to learn: [SKILL]
- Why: [GOAL — career, project, curiosity]
- Current level: [BEGINNER / SOME EXPERIENCE / INTERMEDIATE]
- Time I can dedicate: [HOURS PER WEEK]
- Learning style preference: [READING / VIDEO / HANDS-ON / MIXED]
- Budget for learning: [AMOUNT]

Create:
1. **The 80/20**: What 20% of this skill drives 80% of the results? Start there.
2. **Learning path** (week by week):
   - Week topic
   - Key concepts to understand
   - Resource recommendation (be specific — course name, book chapter, tutorial)
   - Practice exercise (apply immediately)
   - Milestone: "By end of week X, you should be able to..."
3. **Common beginner mistakes**: Top 5 things people get wrong and how to avoid them
4. **Practice projects**: 3 progressively harder projects to build competence
5. **How to know you've "got it"**: Specific competency test or challenge

Rules:
- Prioritize DOING over STUDYING — active practice > passive consumption
- Suggest one resource per week max (too many = paralysis)
- Include accountability: how to track progress and stay motivated
```

---

## Prompt 5: Delegation Brief

### Prompt

```
Help me delegate [TASK] effectively.

Context:
- Task: [DESCRIBE WHAT NEEDS TO BE DONE]
- Currently done by: [ME / SOMEONE ELSE]
- Delegating to: [TEAM MEMBER / VA / CONTRACTOR / AI TOOL]
- Quality standard: [WHAT "GOOD" LOOKS LIKE]
- Frequency: [ONE-TIME / RECURRING]
- Deadline: [WHEN]

Create a delegation brief with:
1. **Task description**: Clear, specific, unambiguous (no "take care of X")
2. **Expected output**: Exactly what the deliverable should look like (with example if possible)
3. **Context they need**: Background information to make good decisions
4. **Constraints**: Budget, time, tools, approval requirements
5. **Quality criteria**: Checklist of what "done well" looks like
6. **Decision authority**: What they can decide on their own vs. what needs my approval
7. **Check-in points**: When to update me (not micromanage — just milestones)
8. **Common mistakes**: Things I've seen go wrong with this task before
9. **Resources**: Links, logins, files they'll need
10. **Success metric**: How we'll know this was done well

The brief should be detailed enough that they can complete it WITHOUT asking me questions.
```

---

## Prompt 6: Problem Solving — Root Cause Analysis

### Prompt

```
Help me diagnose and solve this problem: [DESCRIBE THE PROBLEM].

Context:
- When it started: [WHEN]
- What changed: [ANY RECENT CHANGES]
- Who's affected: [STAKEHOLDERS]
- What I've already tried: [PREVIOUS ATTEMPTS]
- Impact: [WHAT HAPPENS IF THIS ISN'T FIXED]

Walk me through:
1. **5 Whys**: Ask "why?" 5 times to find the root cause
2. **Fishbone diagram**: Map possible causes across categories:
   - People
   - Process
   - Technology
   - External factors
3. **Impact vs. Effort matrix**: For each potential solution:
   - Impact: How much will this fix the problem? (Low/Medium/High)
   - Effort: How hard is it to implement? (Low/Medium/High)
4. **Top 3 solutions**: Ranked by impact-to-effort ratio
5. **Action plan for #1**: Step-by-step implementation with owner and timeline
6. **Prevention**: How to stop this from happening again

Be specific. Don't give me generic advice like "improve communication" — tell me exactly what to do.
```

---

## Prompt 7: Meeting Prep — 10-Minute Briefing

### Prompt

```
I have a meeting in 10 minutes. Prepare me.

Meeting details:
- Who I'm meeting with: [PERSON/PEOPLE AND THEIR ROLES]
- Purpose: [WHAT THE MEETING IS ABOUT]
- What I want to get from this meeting: [MY GOAL/OUTCOME]
- Background: [ANY RELEVANT CONTEXT]
- Previous interactions: [LAST TIME WE SPOKE AND WHAT WAS DISCUSSED]

Give me:
1. **3 key points to make** (the things I must communicate)
2. **2 questions to ask** (shows engagement and advances my goal)
3. **1 potential objection** and how to handle it
4. **Opening line** (not "how are you" — something relevant and specific)
5. **Closing move** (how to end with a clear next step)
6. **Body language reminder**: Be present, maintain eye contact, listen more than you speak

Keep it to 1 page. I need to scan this in 2 minutes.
```

---

## Prompt 8: Automation Workflow Builder

### Prompt

```
Help me automate [PROCESS/TASK] that I currently do manually.

Current manual process:
- What I do: [DESCRIBE STEP BY STEP]
- How often: [FREQUENCY]
- Time it takes: [HOURS PER WEEK/MONTH]
- Tools I already use: [LIST YOUR TOOLS — Gmail, Slack, Notion, Zapier, etc.]
- Budget for automation: [AMOUNT]

Design an automation:
1. **Trigger**: What starts the workflow (new email, form submission, scheduled time, etc.)
2. **Steps**: Each action in the automation chain:
   - Step description
   - Tool/integration used
   - Input → Output
   - Error handling: What happens if this step fails?
3. **Human checkpoints**: Where a human should review before proceeding
4. **Tools needed**: Specific platforms (Zapier, Make, n8n, native integrations)
5. **Setup instructions**: Step-by-step guide to build this automation
6. **Estimated setup time**: How long to build it
7. **ROI calculation**: Time saved per week × hourly rate = money saved

Consider: Is there a way to do this with NO tools — just AI + email rules + templates?
```

---

## Prompt 9: Daily Journaling / Reflection

### Prompt

```
I want to build a daily reflection practice. Create a journaling template.

Context:
- My goal: [WHAT I'M WORKING TOWARD]
- My role: [WHAT I DO]
- Time available for journaling: [5 / 10 / 15 MINUTES]
- What I struggle with: [COMMON CHALLENGE — focus, confidence, decisions, etc.]

Create:
1. **Morning Journal** (5 min):
   - What's the ONE thing that would make today a win?
   - What am I grateful for? (1 specific thing)
   - What might get in my way today, and how will I handle it?
   - Energy rating (1-10) and what affects it

2. **Evening Journal** (5 min):
   - Did I accomplish my ONE thing? Why or why not?
   - What did I learn today?
   - What would I do differently?
   - Score the day (1-10)
   - One thing to carry into tomorrow

3. **Weekly Review** (15 min, Sunday):
   - Top 3 wins this week
   - Biggest lesson or insight
   - What drained my energy vs. what fueled it
   - Progress toward [GOAL]
   - Top 3 priorities for next week

4. **Monthly Review** (30 min, last day of month):
   - Track trends across weekly reviews
   - What habits are serving me? What needs to change?
   - Am I still on the right path toward [GOAL]?
```

---

## Prompt 10: Brainstorming / Ideation Session

### Prompt

```
I need to brainstorm ideas for [CHALLENGE/OPPORTUNITY].

Context:
- The problem/opportunity: [DESCRIBE]
- Constraints: [BUDGET, TIME, RESOURCES, etc.]
- Target audience: [WHO THIS IS FOR]
- What's already been tried: [PREVIOUS APPROACHES]
- Wild card: Something unusual about this situation: [ANYTHING UNIQUE]

Run me through:
1. **Divergent thinking** (quantity over quality):
   - Generate 20 ideas. Don't judge. Go fast.
   - Include 5 that are deliberately absurd or impractical
2. **Categorize**: Group the 20 ideas into themes
3. **Convergent thinking** (narrow to the best):
   - Score each on: Feasibility (1-5), Impact (1-5), Novelty (1-5)
   - Identify the top 5
4. **Stress test the top 3**:
   - What could go wrong?
   - What assumption does this rely on?
   - What would make this 10x better?
5. **The recommendation**: Which idea to pursue first and why
6. **Quick experiment**: How to test this idea in under a week with under $100

The best idea is often a combination of two mediocre ones. Look for mashups.
```

---

## Prompt 11: Habit Builder — 30-Day System

### Prompt

```
Help me build a habit of [HABIT] over the next 30 days.

Context:
- Habit I want to build: [SPECIFIC BEHAVIOR]
- Why: [MOTIVATION]
- Current attempts: [WHAT I'VE TRIED BEFORE AND WHY IT FAILED]
- Biggest obstacle: [WHAT USUALLY DERAILS ME]
- Best time of day: [WHEN I'M MOST LIKELY TO DO THIS]
- Time required per session: [DURATION]

Create:
1. **The "stupid small" start**: Make the habit so tiny I can't fail (Day 1-7)
2. **Gradual increase**: Ramp up intensity/duration (Day 8-14)
3. **Full habit**: Target behavior (Day 15-30)
4. **Trigger design**: What existing habit can I attach this to? ("After I [existing habit], I will [new habit]")
5. **Environment design**: How to set up my space so the habit is easier
6. **Accountability system**: How to track (app, journal, partner)
7. **Recovery plan**: What to do when I miss a day (because I will)
8. **Reward system**: Small rewards at Day 7, 14, 21, 30

Include a simple daily tracker table (Day 1-30 with checkbox).
```

---

## Prompt 12: Negotiation Prep

### Prompt

```
Help me prepare for a negotiation about [WHAT YOU'RE NEGOTIATING].

Context:
- What I want: [IDEAL OUTCOME]
- What I'd accept: [MINIMUM ACCEPTABLE OUTCOME]
- The other party: [WHO THEY ARE AND WHAT THEY WANT]
- My leverage: [WHAT POWER DO I HAVE]
- Their leverage: [WHAT POWER DO THEY HAVE]
- Relationship importance: [ONE-TIME / ONGOING RELATIONSHIP]
- Deadline pressure: [WHO HAS MORE TIME PRESSURE]

Prepare:
1. **BATNA**: My Best Alternative to Negotiated Agreement (what I'll do if this fails)
2. **Their BATNA**: What they'll do if WE fail to agree
3. **Zone of Possible Agreement**: Where do our ranges overlap?
4. **Opening position**: What I should propose first (and why)
5. **Concessions plan**: What I can give up (in order of least to most costly)
6. **If they say [X]**: Pre-written responses to their likely pushbacks
7. **Power phrases**: 5 sentences that maintain strength without aggression
8. **Walk-away signals**: How to recognize when to stop negotiating
9. **Closing techniques**: How to lock in the agreement once we're aligned

Never negotiate against yourself. Make your offer, then wait. Silence is powerful.
```

---

## Prompt 13: Annual Goal Setting

### Prompt

```
Help me set clear, achievable goals for [YEAR].

Context:
- Last year's biggest wins: [LIST 3]
- Last year's biggest regrets: [LIST 2]
- Areas of life to plan: [CAREER / HEALTH / FINANCE / RELATIONSHIPS / PERSONAL GROWTH]
- Current situation: [BRIEF OVERVIEW]
- Dream scenario for end of year: [WHAT DOES IDEAL LOOK LIKE]

Create:
1. **Vision statement** (1 paragraph): What does December [YEAR] look like?
2. **Goals per area** (3-5 areas, 1-2 goals each):
   - Goal statement (specific, measurable)
   - Why this matters
   - Key milestones (quarterly)
   - Leading indicators (weekly habits that drive the result)
   - Lagging indicators (the outcome metric)
3. **The "Hell Yes" filter**: Which goals excite me most? Those get priority.
4. **Quarterly breakdown**: What to focus on in Q1, Q2, Q3, Q4
5. **Anti-goals**: Things I explicitly will NOT do this year (protects focus)
6. **Review schedule**: Monthly and quarterly check-in templates

Rules:
- No more than 7 goals total (focus > ambition)
- Every goal must have a number attached
- If I can't measure it, I can't manage it
```

---

## Prompt 14: Research Brief — Quick Deep Dive

### Prompt

```
I need to quickly get smart on [TOPIC] for [PURPOSE — meeting, project, decision].

Context:
- What I need to understand: [SPECIFIC QUESTIONS]
- Time I have: [30 MIN / 1 HOUR / HALF DAY]
- Depth needed: [SURFACE OVERVIEW / WORKING KNOWLEDGE / EXPERT LEVEL]
- How I'll use this: [MEETING PREP / PROJECT PLANNING / STRATEGIC DECISION]

Provide:
1. **TL;DR** (3 sentences): The absolute core of what I need to know
2. **Key concepts** (5-7): One paragraph each, no jargon
3. **Current state**: What's happening right now in this space
4. **Key players**: Who matters and why
5. **Trends**: Where this is heading in the next 1-3 years
6. **Common misconceptions**: What most people get wrong
7. **Useful mental models**: How experts think about this topic
8. **Conversation starters**: 3 intelligent questions I can ask to sound informed
9. **Resources**: Top 3 places to go deeper (podcast, article, book)

Be opinionated. Don't just present facts — help me understand what matters and what doesn't.
```

---

## Pro Tips

- **2-minute rule**: If a task takes under 2 minutes, do it now. Don't add it to your list.
- **Energy management > time management**: Schedule important work when you're sharpest, not just when you're free.
- **Automate → Delegate → Eliminate → Do**: In that order. Only do what only YOU can do.
- **Protect your maker schedule**: Creative work needs uninterrupted 2-4 hour blocks. Defend them aggressively.
- **Weekly review is non-negotiable**: 30 minutes on Friday/Sunday to review what worked, what didn't, and what's next. This one habit compounds more than any other.

---

**© 2026 Midas Tools — www.midastools.co**
