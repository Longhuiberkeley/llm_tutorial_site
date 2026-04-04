---
title: "12.4 Choosing Your Automation Approach"
description: "Hybrid automation patterns, the implementation spectrum, and how to pick the right tool for the job."
chapter: "Chapter 12"
pageId: "12-04"
---

## 🎯 Core Goals
- Introduce hybrid automation patterns that combine RPA and agentic AI.
- Establish the principle: pick the right tool for the task — not every problem needs an LLM.
- Present the spectrum from simple chat widgets to full agentic platforms.
- Address security and adversarial concerns for automated systems.

<div class="not-prose callout callout-tldr">

Not every problem needs an LLM. The best automation strategy picks the right tool for the job — sometimes that's RPA, sometimes agentic AI, sometimes a purpose-built app, and sometimes just a well-organized human. The smartest teams mix approaches.

</div>

## 🔀 The Hybrid Approach in Practice

Most real-world automation isn't purely RPA or purely agentic — it combines both. There are two common patterns for this.

### Pattern 1: LLM as a Pipeline Step

In this pattern, the LLM handles **one judgment step** inside an existing automated workflow. Everything else stays the same — the LLM just plugs into the part that requires understanding or classification.

**Example — Customer Feedback Pipeline:**

<div class="space-y-3 my-6">
<div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-xl">📥</span>
<div>
<div class="font-bold text-sm mb-1">Step 1: Feedback arrives</div>
<p class="text-sm text-on-surface/80">Customer fills out a form or sends an email. This is collected automatically (RPA or simple integration).</p>
</div>
</div>
</div>
<div class="bg-surface-container-low rounded-xl p-4 border border-accent/40 ring-1 ring-accent/20">
<div class="flex items-start gap-3">
<span class="text-xl">🧠</span>
<div>
<div class="font-bold text-sm mb-1 text-primary">Step 2: LLM classifies the feedback</div>
<p class="text-sm text-on-surface/80">The LLM reads the message and classifies it: positive, negative, or urgent. This is the only step the LLM handles.</p>
</div>
</div>
</div>
<div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-xl">⚡</span>
<div>
<div class="font-bold text-sm mb-1">Step 3: Automated follow-up</div>
<p class="text-sm text-on-surface/80">If negative → RPA sends a follow-up email with a discount coupon. If urgent → routes to a human agent. If positive → logs it and moves on.</p>
</div>
</div>
</div>
</div>

The LLM doesn't control the entire flow — it just handles the fuzzy classification step that RPA can't do. The rest of the pipeline stays simple and rule-based.

### Pattern 2: LLM with Tool Access

In this pattern, the LLM has **direct access to existing systems** — it can read databases, call APIs, send emails, or update records. Instead of just classifying, it can decide what to do and take action.

This is also how an LLM can **monitor RPA processes**: the RPA runs as usual, but when it encounters something unexpected, it hands off to an LLM that can reason about the exception and decide how to handle it.

<div class="bg-surface-container-low rounded-xl p-5 border border-outline-variant my-6">
<div class="flex items-start gap-3">
<span class="text-2xl">🔧</span>
<div>
<div class="font-bold text-base mb-1">Pattern 2 in action</div>
<p class="text-sm text-on-surface/80 mb-2">An LLM-powered agent monitors an order processing pipeline. When an order comes in with a shipping address the RPA system can't parse (unusual format, international address, PO box), the LLM reads it, looks up the customer's history in the CRM, corrects the address, and pushes the order through — or flags it for human review if confidence is low.</p>
</div>
</div>
</div>

<div class="not-prose callout callout-dyk">

Many companies that rushed to build fully agentic workflows are now moving toward hybrid models. Full autonomy sounds appealing until one unexpected input causes a cascade of wrong decisions. The most resilient systems combine rigid reliability for known cases with flexible intelligence for unknown ones.

</div>

## 🎯 Find the Best Tool for the Task

Before reaching for an LLM, ask: **is an LLM actually the best tool here?**

Consider McDonald's self-ordering kiosks. They display big, appealing photos of food. They suggest add-ons ("Would you like fries with that?"). They guide you through the menu in a way that naturally encourages you to order more. They are excellent at what they do.

They don't use an LLM. They don't need one.

The kiosk is a purpose-built solution optimized for a specific task. It's cheaper, faster, more reliable, and more predictable than any LLM-powered system would be for the same job. An LLM would add cost and complexity without improving the outcome.

**The lesson:** Always ask whether a simpler, purpose-built solution would work better and cost less. LLMs are powerful — but power isn't always what you need.

<div class="space-y-3 my-6">
<div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-xl">✅</span>
<div>
<div class="font-bold text-sm mb-1">Good fit for LLMs</div>
<p class="text-sm text-on-surface/80">Reading variable-format customer emails, interpreting ambiguous requests, drafting personalized responses, summarizing documents</p>
</div>
</div>
</div>
<div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-xl">⛔</span>
<div>
<div class="font-bold text-sm mb-1">Probably overkill for LLMs</div>
<p class="text-sm text-on-surface/80">Displaying a menu, routing a known set of options, calculating totals, sending templated notifications, simple data entry</p>
</div>
</div>
</div>
</div>

<div class="not-prose callout callout-tip">

Before jumping to any technical solution, identify what problem you're actually solving. Is it really a technology problem? It might be a management issue, a communication gap, or a training problem. McDonald's kiosk worked because they deeply understood their bottleneck. Be creative about solutions: gamification, better incentive structures, clearer SOPs, or improved training sometimes outperform any AI implementation — and cost far less.

</div>

<div class="not-prose callout callout-tip">

The end-user experience matters enormously. Most people already dislike calling customer support. Many now find LLM-powered support even more frustrating — especially when the LLM confidently attempts to help but can't actually solve the problem. If you're building something customer-facing, invest in the experience. A simple, well-designed system that knows its limits beats an overconfident one that wastes people's time. Bad AI UX can damage your brand more than no AI at all.

</div>

## 📏 The Implementation Spectrum

Not every AI project needs to be a full agentic system. There's a wide spectrum of implementation complexity, and most companies should start on the simpler end.


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-8">
<h3 class="text-xl font-bold font-headline mb-2">The Implementation Spectrum</h3>
<p class="text-sm text-on-surface-variant">From simple FAQ bots to full agentic platforms. Click a stage to explore.</p>
</div>
<!-- Spectrum Bar -->
<div class="relative mb-8">
<!-- Gradient Track -->
<div class="h-3 rounded-full w-full" style="background: linear-gradient(to right, #4CAF50, #8BC34A, #FFC107, #FF9800, #F44336);"></div>
<!-- Clickable Nodes -->
<div class="flex justify-between -mt-5">
<button onclick="selectStage(0)" id="stage-btn-0" class="stage-btn flex flex-col items-center gap-2 group" style="width: 18%;">
<div id="stage-dot-0" class="w-7 h-7 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-xs transition-all" style="background: #4CAF50;">
</div>
<span class="text-[10px] font-bold text-center leading-tight hidden sm:block">📋 FAQ Bot</span>
</button>
<button onclick="selectStage(1)" id="stage-btn-1" class="stage-btn flex flex-col items-center gap-2 group" style="width: 18%;">
<div id="stage-dot-1" class="w-7 h-7 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-xs transition-all" style="background: #8BC34A;">
</div>
<span class="text-[10px] font-bold text-center leading-tight hidden sm:block">💬 Chat Widget</span>
</button>
<button onclick="selectStage(2)" id="stage-btn-2" class="stage-btn flex flex-col items-center gap-2 group" style="width: 18%;">
<div id="stage-dot-2" class="w-7 h-7 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-xs transition-all" style="background: #FFC107;">
</div>
<span class="text-[10px] font-bold text-center leading-tight hidden sm:block">⚙️ Workflow</span>
</button>
<button onclick="selectStage(3)" id="stage-btn-3" class="stage-btn flex flex-col items-center gap-2 group" style="width: 18%;">
<div id="stage-dot-3" class="w-7 h-7 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-xs transition-all" style="background: #FF9800;">
</div>
<span class="text-[10px] font-bold text-center leading-tight hidden sm:block">🤖 Agent</span>
</button>
<button onclick="selectStage(4)" id="stage-btn-4" class="stage-btn flex flex-col items-center gap-2 group" style="width: 18%;">
<div id="stage-dot-4" class="w-7 h-7 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-xs transition-all" style="background: #F44336;">
</div>
<span class="text-[10px] font-bold text-center leading-tight hidden sm:block">🏢 Platform</span>
</button>
</div>
</div>
<!-- Detail Panel -->
<div id="spectrum-panel" class="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant min-h-[220px] transition-all">
<!-- Populated by JS -->
</div>
</div>
<script>
(function() {
var stages = [
{
emoji: '📋',
name: 'FAQ Bot',
desc: 'Simple Q&A from predefined answers. Lowest cost, lowest risk.',
cost: '💰',
costLabel: 'Minimal',
color: '#4CAF50',
complexity: 'Very Low',
useCase: 'Support page that answers common questions like store hours, return policy, or pricing — using a fixed knowledge base.',
risk: 'Almost none. Answers are pre-approved. The only risk is missing questions the bot cannot handle.'
},
{
emoji: '💬',
name: 'Chat Widget',
desc: 'LLM-powered chat on your existing site. Moderate cost and risk.',
cost: '💰💰',
costLabel: 'Low-Moderate',
color: '#8BC34A',
complexity: 'Low',
useCase: 'A customer-facing chatbot that can answer questions about your product docs, help articles, or knowledge base in natural language.',
risk: 'May hallucinate answers or misinterpret questions. Needs clear guardrails and fallback to human support.'
},
{
emoji: '⚙️',
name: 'Workflow Assistant',
desc: 'LLM integrated into existing business processes. Needs human-in-the-loop.',
cost: '💰💰💰',
costLabel: 'Moderate',
color: '#FFC107',
complexity: 'Medium',
useCase: 'An assistant that drafts emails, summarizes meeting notes, or pre-fills forms — with a human reviewing before anything is sent.',
risk: 'Errors in drafts could slip through if reviewers get complacent. Requires clear review checkpoints.'
},
{
emoji: '🤖',
name: 'Autonomous Agent',
desc: 'Full agentic system with tool access and decision-making. Requires monitoring.',
cost: '💰💰💰💰',
costLabel: 'Significant',
color: '#FF9800',
complexity: 'High',
useCase: 'An agent that monitors your inbox, triages support tickets, looks up customer history, drafts responses, and escalates complex issues.',
risk: 'Can take wrong actions with real consequences. Needs robust logging, spending limits, and human escalation paths.'
},
{
emoji: '🏢',
name: 'Full Agentic Platform',
desc: 'Multi-agent system running core business processes. Enterprise investment.',
cost: '💰💰💰💰💰',
costLabel: 'Enterprise',
color: '#F44336',
complexity: 'Very High',
useCase: 'Multiple specialized agents coordinating to run end-to-end processes — e.g., procurement, vendor management, and invoice processing as a unified system.',
risk: 'Compounding errors across agents. Requires dedicated engineering team, extensive testing, and governance framework.'
}
];
function render(idx) {
var s = stages[idx];
var panel = document.getElementById('spectrum-panel');
// Update dots
for (var i = 0; i < 5; i++) {
var dot = document.getElementById('stage-dot-' + i);
if (i === idx) {
dot.style.transform = 'scale(1.4)';
dot.style.borderColor = stages[i].color;
dot.style.boxShadow = '0 0 0 4px ' + stages[i].color + '33';
} else {
dot.style.transform = 'scale(1)';
dot.style.borderColor = 'white';
dot.style.boxShadow = '0 1px 3px rgba(0,0,0,0.2)';
}
}
panel.innerHTML =
'<div class="flex items-start justify-between mb-4">' +
'<div>' +
'<div class="text-xl font-bold mb-1">' + s.emoji + ' ' + s.name + '</div>' +
'<p class="text-sm text-on-surface-variant">' + s.desc + '</p>' +
'</div>' +
'<div class="text-right shrink-0 ml-4">' +
'<div class="text-xl">' + s.cost + '</div>' +
'<div class="text-xs text-on-surface/50 mt-0.5">' + s.costLabel + '</div>' +
'</div>' +
'</div>' +
'<div class="flex items-center gap-3 mb-4">' +
'<div class="text-xs font-bold uppercase tracking-widest text-on-surface/50">Complexity</div>' +
'<div class="flex-1 bg-surface-container rounded-full h-2.5 overflow-hidden">' +
'<div class="h-full rounded-full transition-all" style="width: ' + ((idx + 1) * 20) + '%; background: ' + s.color + ';"></div>' +
'</div>' +
'<div class="text-xs font-bold" style="color: ' + s.color + ';">' + s.complexity + '</div>' +
'</div>' +
'<div class="grid sm:grid-cols-2 gap-4">' +
'<div class="bg-surface-container rounded-xl p-4">' +
'<div class="text-xs font-bold uppercase tracking-widest text-on-surface/50 mb-2">📌 Typical use case</div>' +
'<p class="text-sm leading-relaxed">' + s.useCase + '</p>' +
'</div>' +
'<div class="bg-surface-container rounded-xl p-4">' +
'<div class="text-xs font-bold uppercase tracking-widest mb-2" style="color: ' + s.color + ';">⚠️ Key risk</div>' +
'<p class="text-sm leading-relaxed">' + s.risk + '</p>' +
'</div>' +
'</div>';
}
window.selectStage = function(idx) { render(idx); };
render(0); // Default to first position
})();
</script>

</div>


Starting simple has real advantages: lower cost, lower risk, faster deployment, and clearer ROI. You can always move further along the spectrum as you learn what works. Starting too ambitious is one of the most common reasons AI projects fail.

## 🔒 Think About Who Might Use — and Misuse — Your System

Before building any automated system, ask one critical question: **is this internal or external?**

**Internal tools** (used by your own employees) face different risks. Your employees are trained, accountable, and generally acting in good faith. The main risks are mistakes and misunderstanding, not malice.

**External-facing systems** (used by customers or the public) face a fundamentally different threat model. If your automated system talks to customers, bad actors **will** test it.

<div class="not-prose callout callout-error">

If your system is external-facing, assume people will try to trick your LLM into giving unauthorized discounts, leaking internal information, bypassing rules, or behaving in ways you didn't intend. This isn't hypothetical — it happens to every public-facing AI system. Design with adversarial use in mind from day one, not as an afterthought.

</div>

**Real cases — external misuse:**

<div class="space-y-3 my-6">
<div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-2xl">🏪</span>
<div>
<div class="font-bold text-sm mb-1">The Car Dealership Chat</div>
<p class="text-sm text-on-surface/80">A car dealership deployed an LLM-powered web chat to help customers. Within days, users discovered they could get it to agree to arbitrarily low prices, speak favorably about competitor vehicles, and even help them with unrelated tasks like homework. The dealership had to take it down. A chat widget without guardrails is a liability, not a sales tool.</p>
</div>
</div>
</div>
<div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-2xl">✈️</span>
<div>
<div class="font-bold text-sm mb-1">The Airline Chatbot Lawsuit</div>
<p class="text-sm text-on-surface/80">An airline's LLM chatbot told a grieving customer he could apply for a bereavement fare discount retroactively after his trip — contrary to actual company policy. When the airline was sued, they argued the chatbot was a "separate legal entity" responsible for its own statements. The court disagreed. The airline was held liable and had to pay. <strong>The lesson: your LLM's statements are your statements.</strong></p>
</div>
</div>
</div>
</div>

**Internal misuse — the metric trap:**

Not all adversarial behavior comes from bad actors outside your organization. Internal incentive structures can create their own problems. Some companies track **token usage** (how many LLM API calls employees make) as a KPI for AI adoption. This sounds reasonable — but it's a poor metric. It measures activity, not value or quality. An employee can generate thousands of tokens of low-quality, unhelpful AI outputs to hit a number. Metrics that measure AI usage quantity without measuring output quality create a different kind of misuse — one that's harder to spot and just as costly.

Even for internal tools, consider: who has access? Can the automation be gamed to meet a KPI? What happens if credentials are shared? The answer to "internal or external?" shapes every design decision that follows.

## 📝 Key Concepts

- **Hybrid Pattern 1 (LLM as pipeline step)** — the LLM handles one fuzzy judgment step; the rest stays rule-based.
- **Hybrid Pattern 2 (LLM with tool access)** — the LLM can reason, decide, and act across systems.
- **Not every problem needs an LLM** — purpose-built solutions are often cheaper, faster, and more reliable.
- **Start simple on the spectrum** — move toward more complexity only as you learn what works.
- **Internal vs. external** changes everything — external-facing systems must be designed for adversarial use.

<div id="quiz-12-04" class="not-prose quiz-container my-12" data-quiz="12-04"></div>
