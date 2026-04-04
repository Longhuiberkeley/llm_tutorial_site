---
title: "10.2 Model Tiers & Costs — Bigger Isn't Always Better"
description: "Every provider has flagship, mid-tier, and fast models. Knowing which to use saves money and time."
chapter: "Chapter 10"
pageId: "10-02"
---

<div class="not-prose callout callout-tldr">

You don't always need the most powerful model. Almost every provider offers three tiers — and picking the right one is more important than picking the right brand.

</div>

## The Three Tiers

Almost every major provider offers roughly three tiers. The names change, but the pattern is universal. Click to explore each:


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-6 mb-8 max-w-3xl mx-auto shadow-sm">
<h3 class="text-lg font-bold font-headline text-center mb-5">Pick a tier to explore</h3>
<!-- Tab buttons -->
<div class="flex gap-2 mb-6" id="tier-tabs">
<button onclick="selectTier(0)" id="tier-btn-0"
class="flex-1 py-2.5 px-3 rounded-lg text-sm font-bold border-2 transition-all cursor-pointer">
🚀 Flagship
</button>
<button onclick="selectTier(1)" id="tier-btn-1"
class="flex-1 py-2.5 px-3 rounded-lg text-sm font-bold border-2 transition-all cursor-pointer">
⚖️ Mid-Tier
</button>
<button onclick="selectTier(2)" id="tier-btn-2"
class="flex-1 py-2.5 px-3 rounded-lg text-sm font-bold border-2 transition-all cursor-pointer">
⚡ Fast
</button>
</div>
<!-- Content panel -->
<div id="tier-panel" class="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant min-h-[240px] transition-all">
<!-- Populated by JS -->
</div>
</div>
<script>
(function() {
var tiers = [
{
label: '🚀 Flagship',
tagline: 'Best quality. Highest cost.',
cost: '💰💰💰',
costLabel: 'Most expensive',
color: 'var(--primary)',
examples: [
'Legal document analysis',
'Complex multi-step reasoning',
'Nuanced long-form writing',
'Intricate code generation'
],
when: 'Quality is critical and you can\'t afford mistakes. Cost and speed are secondary.',
models: 'Often labelled: Ultra, Max, Opus, Pro (top tier)'
},
{
label: '⚖️ Mid-Tier',
tagline: 'Excellent quality. Smart price.',
cost: '💰💰',
costLabel: 'Sweet spot',
color: 'var(--accent)',
examples: [
'Summarizing reports and documents',
'Drafting emails and content',
'Customer support responses',
'General Q&A and analysis'
],
when: 'The vast majority of business tasks. Start here. Upgrade to flagship only if quality falls short.',
models: 'Often labelled: Pro, Standard, Sonnet, Balanced'
},
{
label: '⚡ Fast',
tagline: 'Fastest. Cheapest. Simpler tasks only.',
cost: '💰',
costLabel: 'Lowest cost',
color: '#5B8DB8',
examples: [
'Classifying support tickets',
'Tagging or routing items',
'Simple yes/no decisions',
'Very high-volume simple tasks'
],
when: 'The task is simple AND volume is high. Makes more mistakes on complex tasks — test carefully before using for anything important.',
models: 'Often labelled: Lite, Mini, Flash, Haiku, Nano'
}
];
function render(idx) {
var t = tiers[idx];
var panel = document.getElementById('tier-panel');
panel.innerHTML =
'<div class="flex items-start justify-between mb-3">' +
'<div>' +
'<div class="text-xl font-bold mb-0.5">' + t.label + '</div>' +
'<div class="text-sm text-on-surface/70">' + t.tagline + '</div>' +
'</div>' +
'<div class="text-right shrink-0 ml-4">' +
'<div class="text-xl">' + t.cost + '</div>' +
'<div class="text-xs text-on-surface/50 mt-0.5">' + t.costLabel + '</div>' +
'</div>' +
'</div>' +
'<div class="border-t border-outline-variant pt-3 mt-3">' +
'<div class="text-xs font-bold uppercase tracking-widest text-on-surface/50 mb-2">Typical use cases</div>' +
'<ul class="text-sm space-y-1">' +
t.examples.map(function(e) {
return '<li class="flex items-start gap-2"><span class="mt-0.5 shrink-0" style="color:' + t.color + '">▸</span>' + e + '</li>';
}).join('') +
'</ul>' +
'</div>' +
'<div class="border-t border-outline-variant pt-3 mt-3">' +
'<div class="text-xs font-bold uppercase tracking-widest text-on-surface/50 mb-1">Pick this when...</div>' +
'<p class="text-sm">' + t.when + '</p>' +
'</div>' +
'<div class="mt-3 text-xs text-on-surface/40 italic">e.g. ' + t.models + '</div>';
// Update tab styles
for (var i = 0; i < 3; i++) {
var btn = document.getElementById('tier-btn-' + i);
if (i === idx) {
btn.style.borderColor = tiers[i].color;
btn.style.color = tiers[i].color;
btn.style.backgroundColor = 'color-mix(in srgb, ' + tiers[i].color + ' 10%, var(--surface-container-lowest))';
} else {
btn.style.borderColor = 'var(--outline-variant)';
btn.style.color = 'var(--on-surface)';
btn.style.backgroundColor = 'var(--surface-container-lowest)';
}
}
}
window.selectTier = function(idx) { render(idx); };
render(1); // default to mid-tier
})();
</script>

</div>


## Understanding Token Pricing

Every provider charges per **million tokens**. A token is roughly ¾ of a word — so 1 million tokens ≈ 750,000 words.

Pricing has two separate rates:
- **Input tokens** — what you send to the model (your prompt, documents, context)
- **Output tokens** — what the model generates back (usually 3–4× more expensive than input)

Two additional details that matter once you're building:

**Reasoning tokens** — some models spend tokens internally working through a problem before producing an answer. These count as output tokens and add to your bill.

**Cache hits** — if you're sending the same large context repeatedly (e.g. a system prompt or document), providers cache it. A cache hit typically costs only **~10% of standard input prices** — a big saving at scale.

<div class="not-prose callout callout-dyk">

Subscription plans are **heavily subsidized** by providers to drive adoption. The same usage billed through the API can cost significantly more at low to moderate volumes. Great if you're an individual user — but know the difference when you're building a product.

</div>

## How to Read LLM Benchmarks

Benchmarks are standardized tests that score models on specific tasks. You'll see them quoted everywhere in reviews and announcements. A few you'll encounter:

- **MMLU** — tests general knowledge across 57 subjects (law, medicine, history, math...)
- **HumanEval / MBPP** — measures coding ability: can the model write correct programs?
- **GPQA** — graduate-level science questions designed to be hard even with Google
- **MATH** — competition-level math problem solving
- **Chatbot Arena (LMSYS)** — real humans compare two model responses and vote; the ELO score reflects actual human preference at scale

<div class="not-prose callout callout-error">

**Benchmarks are a starting point, not a verdict.** Models are increasingly trained on benchmark-adjacent data, inflating scores. More importantly, a model that tops the MMLU leaderboard may still fumble your specific task. The best evaluation is always your own: take 10–20 real examples from your use case and run them through competing models. What you observe beats any published number.

</div>

<div class="not-prose my-12">
<!--
Quiz Box Component
Generated by build.js from :::quiz blocks in markdown.
-->
<div id="quiz-10-02" class="quiz-container bg-[#F9F9F9] border border-outline-variant rounded-xl p-6 mt-10">
    <div class="font-bold mb-4 flex items-center gap-2">
        <span>🧠</span>
        <span>QUIZ</span>
    </div>
    <p class="mb-4">What's the most reliable way to evaluate which LLM is best for your task?</p>
    <div class="space-y-2">
                <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            Check the published benchmark leaderboards and pick the top scorer
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            Always choose the most expensive tier available
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="true">
            Test 10-20 of your own real examples across competing models and compare the outputs
        </div>
    </div>
    <div class="quiz-feedback hidden mt-4 p-4 rounded-lg"></div>
</div>

</div>
