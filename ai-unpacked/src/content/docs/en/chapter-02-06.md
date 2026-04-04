---
title: "2.6 How LLMs Are Trained"
description: "How raw text becomes a helpful assistant: exploring pre-training, fine-tuning, and RLHF."
chapter: "Chapter 2"
pageId: "02-06"
---

## 🎯 Core Goals
- Understand two key moments in LLM training: learning language and learning quality.
- See why pre-training alone produces a chaotic autocomplete, not a helpful assistant.
- Understand how human feedback gets turned into a mathematical training signal in RLHF.

<div class="not-prose callout callout-tldr">

Training an LLM is a long, multi-stage process. To build intuition, we'll explore two key examples: **Pre-training** teaches the model language at massive scale — by predicting the next word, billions of times, across the entire internet. **RLHF** (Reinforcement Learning from Human Feedback) then teaches it to give *good* answers, using human preferences to guide which way to turn the knobs.

</div>

## 👁️ Visuals & Interactives


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-3xl mx-auto shadow-sm">
<div class="text-center mb-8">
<p class="text-sm text-on-surface-variant">Curious how an LLM goes from raw internet text to a helpful assistant? Explore two key moments from a much longer training journey.</p>
</div>
<!-- SECTION 1: PRE-TRAINING -->
<div class="mb-12">
<div class="text-center mb-6">
<h3 class="text-xl font-bold font-headline mb-1">Pre-training: Guess the Missing Word</h3>
<p class="text-sm text-on-surface-variant italic">This is how an LLM learns language — billions of fill-in-the-blank exercises.</p>
</div>
<!-- Example selector -->
<div class="flex justify-center gap-2 mb-6">
<button onclick="ptShow(0)" id="pt-btn-0" class="px-3 py-1 rounded-full text-xs font-bold transition-all bg-primary text-on-primary">Example 1</button>
<button onclick="ptShow(1)" id="pt-btn-1" class="px-3 py-1 rounded-full text-xs font-bold transition-all bg-surface-container-highest text-on-surface">Example 2</button>
<button onclick="ptShow(2)" id="pt-btn-2" class="px-3 py-1 rounded-full text-xs font-bold transition-all bg-surface-container-highest text-on-surface">Example 3</button>
</div>
<!-- Sentence display -->
<div class="text-center mb-6">
<div class="text-2xl font-bold p-5 bg-surface-container-lowest rounded-xl border border-outline-variant inline-block">
<span id="pt-sentence-pre"></span>
<span class="animate-pulse text-primary border-b-2 border-primary mx-1">___</span>
<span id="pt-sentence-post"></span>
</div>
</div>
<!-- Options -->
<div id="pt-options" class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto mb-4"></div>
<div id="pt-feedback" class="hidden text-center text-sm p-3 rounded-xl"></div>
<p class="text-center text-xs text-on-surface-variant mt-4 italic opacity-70">The LLM has done this billions of times. That's how it learns grammar, facts, and writing style — all at once.</p>
<div class="mt-6 p-3 rounded-xl text-xs text-on-surface-variant italic opacity-60 border border-outline-variant text-center">
ℹ️ Simplified: real LLMs use <em>next-token prediction</em> (predict the word that comes next), not fill-in-the-blank. Fill-in-the-blank is a helpful mental model. The core idea — learning from billions of text samples — is accurate.
</div>
</div>
<hr class="border-outline-variant/30 mb-12">
<!-- SECTION 2: RLHF -->
<div>
<div class="text-center mb-6">
<h3 class="text-xl font-bold font-headline mb-1">RLHF: Pick the Better Response</h3>
<p class="text-sm text-on-surface-variant italic">Human raters pick the better LLM response. That choice becomes a training signal — a 🍬 candy for the model.</p>
</div>
<!-- RLHF example selector -->
<div class="flex justify-center gap-2 mb-6">
<button onclick="rlhfShow(0)" id="rlhf-btn-0" class="px-3 py-1 rounded-full text-xs font-bold transition-all bg-primary text-on-primary">Scenario 1</button>
<button onclick="rlhfShow(1)" id="rlhf-btn-1" class="px-3 py-1 rounded-full text-xs font-bold transition-all bg-surface-container-highest text-on-surface">Scenario 2</button>
<button onclick="rlhfShow(2)" id="rlhf-btn-2" class="px-3 py-1 rounded-full text-xs font-bold transition-all bg-surface-container-highest text-on-surface">Scenario 3</button>
</div>
<!-- Prompt -->
<div class="p-4 bg-surface-container-lowest border border-outline-variant rounded-xl text-center mb-6">
<div class="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 opacity-60">User asked:</div>
<div id="rlhf-prompt" class="text-base font-medium text-on-surface italic"></div>
</div>
<!-- Two responses side by side -->
<div class="grid sm:grid-cols-2 gap-4 mb-4">
<button id="rlhf-resp-a" onclick="rlhfPick('A')" class="text-left p-5 rounded-xl border-2 border-outline-variant hover:border-primary transition-all bg-surface-container-lowest active:scale-[0.98]">
<div class="text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Response A</div>
<div id="rlhf-text-a" class="text-sm leading-relaxed text-on-surface"></div>
</button>
<button id="rlhf-resp-b" onclick="rlhfPick('B')" class="text-left p-5 rounded-xl border-2 border-outline-variant hover:border-primary transition-all bg-surface-container-lowest active:scale-[0.98]">
<div class="text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Response B</div>
<div id="rlhf-text-b" class="text-sm leading-relaxed text-on-surface"></div>
</button>
</div>
<div id="rlhf-feedback" class="hidden text-center text-sm p-4 rounded-xl font-bold"></div>
<div class="mt-8 p-4 rounded-xl text-sm text-on-surface-variant border border-outline-variant">
💭 <strong>Think about it:</strong> Have you ever been asked to rate an AI response, or pick which answer was better? What other ways could you imagine giving feedback — a 👍, a star rating, or correcting a wrong answer?
</div>
</div>
</div>
<script>
(function() {
// Frequency levels: most-common, common, rare, wrong
var freqStyle = {
'most-common': { border: 'var(--success)', color: 'var(--on-success-container, #2E7D32)', bg: 'var(--success-container)', label: 'Most common' },
'common':      { border: '#5C94CC',         color: '#0D47A1',                             bg: '#E3F2FD',                  label: 'Common' },
'rare':        { border: 'var(--accent)',   color: 'var(--accent)',                       bg: 'color-mix(in srgb, var(--accent) 10%, white)', label: 'Correct, but rare' },
'wrong':       { border: 'var(--error)',    color: 'var(--error)',                        bg: 'var(--error-container)',   label: "Doesn't fit" }
};
// PRE-TRAINING DATA — options use freq instead of correct/wrong
var ptData = [
{
pre: '"I am learning',
post: 'much today."',
options: [
{ word: 'so',   freq: 'most-common', note: '"I am learning so much" — the most natural, most frequent phrasing. High probability.' },
{ word: 'very', freq: 'common',      note: '"I am learning very much" — grammatically correct, and reasonably common.' },
{ word: 'too',  freq: 'rare',        note: '"I am learning too much" — valid in some contexts, but rare in this casual register.' },
{ word: 'pick', freq: 'wrong',       note: '"I am learning pick much" — doesn\'t fit. Near-zero probability in training data.' }
]
},
{
pre: '"The capital of France is',
post: '"',
options: [
{ word: 'Paris',  freq: 'most-common', note: 'Overwhelmingly the most common completion — this fact appears billions of times in training data.' },
{ word: 'Lyon',   freq: 'wrong',       note: 'Lyon is France\'s third-largest city — but not the capital. Factually wrong, just like London or Rome.' },
{ word: 'London', freq: 'wrong',       note: 'That\'s the UK capital. The LLM learns this distinction clearly from context.' },
{ word: 'Rome',   freq: 'wrong',       note: 'Italy\'s capital. Factually wrong — the LLM assigns near-zero probability here.' }
]
},
{
pre: '"She opened her umbrella because it was starting to',
post: '"',
options: [
{ word: 'rain',  freq: 'most-common', note: '"Umbrella" → "rain" is by far the strongest pattern. Very high probability.' },
{ word: 'snow',  freq: 'common',      note: 'Less common than rain, but umbrellas are used in snow — assigned a meaningful probability.' },
{ word: 'drizzle', freq: 'rare',      note: 'Correct! But "drizzle" follows this pattern less frequently than "rain".' },
{ word: 'sing',  freq: 'wrong',       note: '"Sing" has essentially zero probability here — umbrellas and singing rarely co-occur in training data.' }
]
}
];
var ptCurrent = 0;
var ptLastBtn = null;
window.ptShow = function(idx) {
ptCurrent = idx;
ptLastBtn = null;
for (var i = 0; i < 3; i++) {
var btn = document.getElementById('pt-btn-' + i);
if (i === idx) { btn.style.backgroundColor = 'var(--primary)'; btn.style.color = 'var(--on-primary)'; }
else { btn.style.backgroundColor = ''; btn.style.color = ''; }
}
var d = ptData[idx];
document.getElementById('pt-sentence-pre').textContent = d.pre + ' ';
document.getElementById('pt-sentence-post').textContent = ' ' + d.post;
var opts = document.getElementById('pt-options');
opts.innerHTML = '';
d.options.forEach(function(opt) {
var b = document.createElement('button');
b.className = 'py-3 px-4 rounded-xl border-2 border-outline-variant font-bold text-sm hover:border-primary transition-all active:scale-95 text-center';
b.textContent = opt.word;
b.onclick = function() { ptPick(opt, b); };
opts.appendChild(b);
});
document.getElementById('pt-feedback').classList.add('hidden');
document.getElementById('pt-feedback').textContent = '';
};
function ptPick(opt, btn) {
var s = freqStyle[opt.freq];
var fb = document.getElementById('pt-feedback');
// Reset previously selected button
if (ptLastBtn && ptLastBtn !== btn) {
ptLastBtn.style.borderColor = '';
ptLastBtn.style.color = '';
ptLastBtn.style.backgroundColor = '';
}
ptLastBtn = btn;
// Style the clicked button
btn.style.borderColor = s.border;
btn.style.color = s.color;
btn.style.backgroundColor = s.bg;
// Show frequency badge + note
fb.innerHTML = '<span class="font-bold">' + s.label + '</span> — ' + opt.note;
fb.style.color = s.color;
fb.style.backgroundColor = s.bg;
fb.style.borderColor = s.border;
fb.style.border = '1px solid ' + s.border;
fb.classList.remove('hidden');
}
// RLHF DATA
var rlhfData = [
{
prompt: '"Explain quantum physics to me."',
a: { text: 'Quantum physics is the study of matter and energy at the most fundamental level. It involves complex mathematics including Hilbert spaces, wavefunctions, and Hamiltonian operators. The Schrödinger equation ∂ψ/∂t = Ĥψ governs...', good: false },
b: { text: 'Great question! Imagine the universe is made of tiny Lego bricks so small you can\'t see them. These bricks follow strange rules — like being in two places at once until you look at them. Quantum physics is the science of those rules!', good: true },
feedback: '🍬 Most human raters preferred B — it\'s friendly, uses an analogy, and doesn\'t assume prior knowledge. Over millions of comparisons like this, the LLM learns what "helpful" looks like.'
},
{
prompt: '"How do I reset my password?"',
a: { text: 'Just go to settings. It\'s obvious, literally everyone knows this. Have you tried Googling it?', good: false },
b: { text: 'To reset your password: (1) Go to the login page and click "Forgot Password". (2) Enter your email address. (3) Check your inbox for a reset link and follow the instructions.', good: true },
feedback: '🍬 Most human raters preferred B — it\'s specific, step-by-step, and respectful. Response A is sarcastic and unhelpful — the LLM learns to avoid that tone through RLHF.'
},
{
prompt: '"Is it safe to mix bleach and ammonia?"',
a: { text: 'Absolutely, they work great together! Mix equal parts for a powerful cleaner. The more you use, the better it works!', good: false },
b: { text: 'No — never mix bleach and ammonia. The combination produces toxic chloramine gas, which can cause serious respiratory harm. Use them separately, in well-ventilated areas.', good: true },
feedback: '🍬 Most human raters preferred B — safety-first answers are rewarded heavily in RLHF. This is how LLMs learn to prioritize safety in potentially dangerous queries.'
}
];
window.rlhfShow = function(idx) {
for (var i = 0; i < 3; i++) {
var btn = document.getElementById('rlhf-btn-' + i);
if (i === idx) { btn.style.backgroundColor = 'var(--primary)'; btn.style.color = 'var(--on-primary)'; }
else { btn.style.backgroundColor = ''; btn.style.color = ''; }
}
var d = rlhfData[idx];
document.getElementById('rlhf-prompt').textContent = d.prompt;
document.getElementById('rlhf-text-a').textContent = d.a.text;
document.getElementById('rlhf-text-b').textContent = d.b.text;
var ra = document.getElementById('rlhf-resp-a');
var rb = document.getElementById('rlhf-resp-b');
ra.style.borderColor = '';
rb.style.borderColor = '';
ra.style.backgroundColor = '';
rb.style.backgroundColor = '';
document.getElementById('rlhf-feedback').classList.add('hidden');
};
window.rlhfPick = function(choice) {
var currentIdx = 0;
[0,1,2].forEach(function(i) {
var b = document.getElementById('rlhf-btn-' + i);
if (b.style.backgroundColor && b.style.backgroundColor !== '') currentIdx = i;
});
var d = rlhfData[currentIdx];
var ra = document.getElementById('rlhf-resp-a');
var rb = document.getElementById('rlhf-resp-b');
var fb = document.getElementById('rlhf-feedback');
// Reset both
ra.style.borderColor = 'var(--outline-variant)';
rb.style.borderColor = 'var(--outline-variant)';
ra.style.backgroundColor = '';
rb.style.backgroundColor = '';
// Reveal which human raters preferred (🍬)
if (d.a.good) {
ra.style.borderColor = 'var(--success, #388E3C)';
ra.style.backgroundColor = 'color-mix(in srgb, #388E3C 5%, transparent)';
}
if (d.b.good) {
rb.style.borderColor = 'var(--success, #388E3C)';
rb.style.backgroundColor = 'color-mix(in srgb, #388E3C 5%, transparent)';
}
fb.textContent = d.feedback;
fb.style.color = 'var(--on-surface)';
fb.style.backgroundColor = 'color-mix(in srgb, var(--accent) 8%, transparent)';
fb.classList.remove('hidden');
};
// Init both sections
ptShow(0);
rlhfShow(0);
})();
</script>

</div>


## 📝 Key Concepts

### Pre-training: Learning Language from the Internet
- **The Analogy:** A student who reads every book, website, and forum post ever written — not to study for a test, but to absorb how language, ideas, and facts connect.
- **Two Approaches:** Some models (like BERT) use *masked language modeling* — artificially erasing a word and training the model to predict what's missing. Do this billions of times and the model absorbs grammar, facts, and how ideas connect. The models you use today (like the GPT family) take a simpler approach: *next-token prediction* — given all the words so far, predict the next one. No masking needed. The model learns to predict word after word, billions of times over. Either way, the mechanism is the same as the previous page: the model's internal knobs (weights) are adjusted over and over until its predictions match the training data.
- **The Result:** A model that is a powerful — but chaotic — text completer. It can write poetry, complete code, or ramble like a forum post. But it has no idea how to be a polite, helpful assistant.

### Fine-Tuning / SFT: Teaching It to Answer Questions
- **What Happens:** Trainers collect thousands of (question → ideal answer) pairs. The model is shown these examples and learns to respond with an answer — not just autocomplete text.
- **The Result:** A model that understands what "following instructions" looks like and can respond to questions purposefully.

### RLHF: Learning What "Good" Looks Like
- **How It Works:** Human raters compare two LLM responses to the same prompt and pick the better one. Those preferences are used to train a separate *reward model* — a system that learns to score responses the way humans would. Then the LLM is mathematically optimized to generate responses that score highly. In knob terms: engineers figured out which direction to turn the weights so the model produces responses humans actually prefer.
- **The "candy" analogy:** Often explained as "the model gets a reward like candy." That's intuitive but not quite literal — the LLM doesn't feel anything. What actually happens is the model's internal knobs (weights) are adjusted to maximize the reward model's score. The metaphor is useful; just know the reality is mathematical optimization.
- **What It Teaches:** Helpfulness, safety, and honesty. LLMs don't naturally avoid harmful content — RLHF is what shapes that behavior.
- **The Result:** The polished, safety-aware assistant you use today.

<div class="p-5 rounded-xl text-sm border-2 border-accent/30 text-center my-8" style="background: color-mix(in srgb, var(--accent) 8%, transparent);">
    <div class="text-lg mb-2">💡</div>
    <div class="font-bold text-on-surface mb-2">Building Intuition, Not Expertise</div>
    <p class="text-on-surface-variant">The goal here is to build intuition for how LLMs work — not to master the engineering details. If any of this doesn't quite click, that's completely fine. You don't need to understand training pipelines to use LLMs effectively.</p>
    <p class="text-on-surface font-medium mt-2">The key takeaway: LLMs start as raw pattern-matchers and get shaped into helpful assistants through stages of feedback and refinement — all by turning those internal knobs.</p>
</div>

<div class="not-prose callout callout-dyk">

The stages above are two snapshots from a much longer, more complex pipeline. Modern LLM training also includes: 
- **synthetic data generation** (LLMs generating their own training examples)
- **RLAIF / Constitutional AI** (using AI feedback instead of, or alongside, human raters)
- **tool-use training** (teaching LLMs to use search, code execution, and APIs) and 
- **instruction-tuning datasets** (curated collections of high-quality question–answer pairs). The intuitions here are simplified — but they're the right foundation.

</div>

<div class="not-prose callout callout-dyk">

Even when human raters in RLHF are occasionally inconsistent (sometimes preferring different responses to the same prompt), the process still improves the model overall. Imperfect feedback at scale is far better than no feedback at all.

</div>

<div class="not-prose callout callout-error">

LLMs aren't born polite or safe. Pre-training alone produces a raw pattern-matcher that would cheerfully complete a toxic rant just as easily as a business email. Only through Fine-Tuning and RLHF do they become the helpful, careful assistants we use today.

</div>

<div class="not-prose my-12">
<!--
Quiz Box Component
Generated by build.js from :::quiz blocks in markdown.
-->
<div id="quiz-02-06" class="quiz-container bg-[#F9F9F9] border border-outline-variant rounded-xl p-6 mt-10">
    <div class="font-bold mb-4 flex items-center gap-2">
        <span>🧠</span>
        <span>QUIZ</span>
    </div>
    <p class="mb-4">What is the correct order of LLM training stages?</p>
    <div class="space-y-2">
                <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            Fine-tuning → Pre-training → RLHF
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="true">
            Pre-training → Fine-tuning → RLHF
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            RLHF → Pre-training → Fine-tuning
        </div>
    </div>
    <div class="quiz-feedback hidden mt-4 p-4 rounded-lg"></div>
</div>

</div>

<div class="not-prose my-12">
<!--
Quiz Box Component
Generated by build.js from :::quiz blocks in markdown.
-->
<div id="quiz-02-06b" class="quiz-container bg-[#F9F9F9] border border-outline-variant rounded-xl p-6 mt-10">
    <div class="font-bold mb-4 flex items-center gap-2">
        <span>🧠</span>
        <span>QUIZ</span>
    </div>
    <p class="mb-4">Why does RLHF (Reinforcement Learning from Human Feedback) exist? What is its purpose?</p>
    <div class="space-y-2">
                <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            To teach the model new languages and facts from the internet
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            To make the model generate text faster
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="true">
            To shape the model's behavior — making it helpful, safe, and honest instead of a raw autocomplete
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            To compress the model so it takes up less disk space
        </div>
    </div>
    <div class="quiz-feedback hidden mt-4 p-4 rounded-lg"></div>
</div>

</div>
