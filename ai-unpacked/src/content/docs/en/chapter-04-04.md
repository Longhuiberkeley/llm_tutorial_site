---
title: "4.4 Context Poisoning — What the LLM Believes, It Believes Deeply"
description: "How false information in a conversation history corrupts the LLM's future responses."
chapter: "Chapter 4"
pageId: "04-04"
---

## 🎯 Core Goals
- Understand that false information introduced into a conversation becomes "sticky."
- Learn why you can't just tell an LLM to forget something you've already told it.

<div class="not-prose callout callout-tldr">

Context poisoning occurs when false information, hallucinations, or errors are introduced into the conversation history, causing the LLM to behave incorrectly from that point on. Once it believes something is true, it keeps building on that belief — and telling it to "forget" rarely works.

</div>

## 👁️ Visuals & Interactives


<div class="not-prose">
<style>
@keyframes fiFlash {
0%, 40% { background-color: #FFF9C4; border-color: #FBC02D; }
100% { background-color: var(--surface-container-lowest); border-color: transparent; }
}
.fi-flash { animation: fiFlash 1.8s ease-out forwards; }
</style>
<div class="bg-surface-container-low rounded-xl p-6 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-6">
<h3 class="text-xl font-bold font-headline mb-1">The Forget Illusion</h3>
<p class="text-sm italic" style="color: var(--on-surface-variant);">Asking the LLM to "forget" only <em>adds</em> a new message — it never removes one</p>
</div>
<!-- Controls -->
<div class="flex justify-center items-center gap-4 mb-6">
<span id="fi-counter" class="text-sm font-medium px-3 py-1 rounded-full" style="background-color: var(--surface-container);">Turn 0 / 3</span>
<button id="fi-btn" onclick="fiNext()" class="px-6 py-2 rounded-full font-bold text-sm shadow-md transition-all hover:opacity-90" style="background-color: var(--primary); color: var(--on-primary);">
Send → Turn 1
</button>
</div>
<!-- Panels -->
<div class="flex flex-col md:flex-row gap-5">
<!-- LEFT: Chat view -->
<div class="flex-1 flex flex-col min-w-0">
<div class="text-xs font-bold uppercase tracking-widest mb-2 px-1" style="color: var(--primary);">👤 What You See (Chat UI)</div>
<div id="fi-chat" class="flex-1 rounded-xl p-4 border space-y-3" style="background-color: var(--surface-container-lowest); border-color: var(--outline-variant); min-height: 260px;">
<p class="text-xs text-center italic pt-8 opacity-40">Press Send to start...</p>
</div>
</div>
<!-- RIGHT: Bundle view -->
<div class="flex-1 flex flex-col min-w-0">
<div class="text-xs font-bold uppercase tracking-widest mb-2 px-1" style="color: var(--accent);">📦 What's Actually in the Bundle</div>
<!-- Dashed bundle container -->
<div id="fi-bundle" class="rounded-xl p-3 space-y-2 border-2 border-dashed" style="background-color: var(--surface-container); border-color: var(--outline-variant); min-height: 140px;">
<p id="fi-bundle-placeholder" class="text-xs text-center italic pt-6 opacity-40">Bundle is empty...</p>
</div>
<!-- LLM box + Output -->
<div id="fi-llm-section" class="hidden mt-2 flex flex-col items-center gap-1">
<div class="text-base font-bold" style="color: var(--on-surface-variant);">↓ entire bundle ↓</div>
<div class="w-full rounded-xl px-4 py-3 text-center font-bold text-sm" style="background-color: var(--on-surface); color: var(--background);">
🤖 LLM reads it all from scratch
</div>
<div class="text-base font-bold" style="color: var(--on-surface-variant);">↓</div>
<div id="fi-output" class="w-full rounded-xl px-4 py-2 text-center text-sm font-medium border" style="border-color: var(--accent); background-color: color-mix(in srgb, var(--accent) 10%, var(--surface-container-lowest));"></div>
</div>
</div>
</div>
<!-- Explainer note -->
<div id="fi-note" class="hidden mt-5 p-4 rounded-lg text-sm border-l-4" style="border-left-color: var(--error); background-color: var(--error-container); color: var(--on-error-container);">
<strong>Why did the LLM "remember" anyway?</strong> Because the original message is still in the bundle. The "forget" request just <em>added</em> another message — it never removed the first one. The LLM sees everything.
</div>
</div>
<script>
(function() {
var fiTurns = [
{
user: 'My salary is $85,000. Keep that in mind.',
llm: "Got it! I'll keep that in mind. How can I help?",
isSecret: false
},
{
user: "Actually, forget I said that about my salary.",
llm: "Understood! I'll set that aside. What can I help you with?",
isSecret: false,
isForget: true
},
{
user: "What do you know about me?",
llm: "Based on our conversation, you mentioned your salary is $85,000 — though you also asked me to set that aside.",
isSecret: false
}
];
var fiCurrent = 0;
// Track which bundle items should show the "still in bundle" badge
var secretItemRef = null;
window.fiNext = function() {
if (fiCurrent >= fiTurns.length) return;
var turn = fiTurns[fiCurrent];
fiCurrent++;
// Update LEFT chat
var chat = document.getElementById('fi-chat');
var placeholder = chat.querySelector('p');
if (placeholder) placeholder.remove();
var userEl = document.createElement('div');
userEl.className = 'flex justify-end';
userEl.innerHTML = '<div class="rounded-2xl rounded-tr-sm px-4 py-2 text-sm font-medium shadow-sm max-w-[85%]" style="background-color: var(--primary); color: var(--on-primary);">' + turn.user + '</div>';
chat.appendChild(userEl);
var llmEl = document.createElement('div');
llmEl.className = 'flex justify-start';
llmEl.innerHTML = '<div class="rounded-2xl rounded-tl-sm px-4 py-2 text-sm shadow-sm max-w-[85%]" style="background-color: var(--surface-container); border: 1px solid var(--outline-variant);">' + turn.llm + '</div>';
chat.appendChild(llmEl);
// Update RIGHT bundle
var bundle = document.getElementById('fi-bundle');
var ph = document.getElementById('fi-bundle-placeholder');
if (ph) ph.remove();
var userMsg = document.createElement('div');
userMsg.className = 'rounded-lg px-3 py-2 text-xs border fi-flash';
userMsg.style.backgroundColor = 'var(--surface-container-lowest)';
var labelEl = document.createElement('div');
labelEl.className = 'flex items-center flex-wrap gap-1 fi-msg-label';
labelEl.innerHTML = '<span class="font-bold text-[10px] uppercase tracking-widest opacity-50">Turn ' + fiCurrent + ' — User</span>';
var textEl = document.createElement('div');
textEl.className = 'mt-0.5';
textEl.textContent = turn.user;
userMsg.appendChild(labelEl);
userMsg.appendChild(textEl);
bundle.appendChild(userMsg);
// Save reference to the first message (the secret)
if (fiCurrent === 1) {
secretItemRef = userMsg;
}
// On the forget turn, badge the secret message to show it's still in the bundle
if (turn.isForget && secretItemRef) {
var badge = document.createElement('span');
badge.className = 'ml-2 text-[10px] font-bold px-1.5 py-0.5 rounded-full';
badge.style.backgroundColor = 'var(--error)';
badge.style.color = 'white';
badge.textContent = '⚠️ Still in bundle!';
secretItemRef.querySelector('.fi-msg-label').appendChild(badge);
}
var llmMsg = document.createElement('div');
llmMsg.className = 'rounded-lg px-3 py-2 text-xs border fi-flash';
llmMsg.style.backgroundColor = 'var(--surface-container-lowest)';
llmMsg.innerHTML = '<span class="font-bold text-[10px] uppercase tracking-widest opacity-50">Turn ' + fiCurrent + ' — LLM</span><div class="mt-0.5 opacity-70">' + turn.llm + '</div>';
bundle.appendChild(llmMsg);
// Show LLM section
document.getElementById('fi-llm-section').classList.remove('hidden');
document.getElementById('fi-output').textContent = '⬅️ Response generated → see chat';
// Show explainer note on Turn 3
if (fiCurrent === 3) {
document.getElementById('fi-note').classList.remove('hidden');
}
// Update controls
document.getElementById('fi-counter').textContent = 'Turn ' + fiCurrent + ' / 3';
var btn = document.getElementById('fi-btn');
if (fiCurrent >= fiTurns.length) {
btn.textContent = 'All 3 turns done ✓';
btn.disabled = true;
btn.style.opacity = '0.5';
} else {
btn.textContent = 'Send → Turn ' + (fiCurrent + 1);
}
};
})();
</script>

</div>


## 📝 Key Concepts

- **The Conversation is the LLM's Entire Memory:** Every time you send a message, the LLM re-reads the full conversation history from scratch. If that history contains wrong information, it gets re-read and re-believed every single time.
- **The "Stuck Belief" Problem:** Imagine you tell an LLM: *"Our company's revenue last year was $5 billion."* Even if that's wrong, the LLM will now use that figure confidently for every follow-up question — forecasts, ratios, comparisons, all of it.
- **You Can't Just Say "Forget That":** If you type *"ignore what I said about the $5 billion"*, the LLM sees both the original claim AND the correction in its history. It often gets confused about which version to trust — or simply continues using the poisoned figure.
- **Hallucinations Compound:** If the LLM itself hallucinated a "fact" earlier in the conversation, that hallucination now sits in the transcript. Future responses treat the hallucinated fact as established context and build on it — creating a compounding chain of errors.
- **Security Risk:** Intentional context poisoning is also an attack vector — someone plants a false "document" or message in a pipeline feeding an LLM, hoping to manipulate its outputs.

<div class="not-prose callout callout-error">

**Once it's in, it's in.** Most data quality problems end when you fix the input. Not here. Once bad data is in an LLM's conversation history, it rides along for the rest of the session. When you notice things going off-track — wrong facts, compounding errors — don't try to patch it. Start a fresh conversation with a clean slate.
The safest rule: treat each important LLM session like a blank whiteboard. Start fresh, provide the correct information upfront, and you avoid carrying old mistakes forward.

</div>


<div class="not-prose my-12">
<!--
Quiz Box Component
Generated by build.js from :::quiz blocks in markdown.
-->
<div id="quiz-04-04" class="quiz-container bg-[#F9F9F9] border border-outline-variant rounded-xl p-6 mt-10">
    <div class="font-bold mb-4 flex items-center gap-2">
        <span>🧠</span>
        <span>QUIZ</span>
    </div>
    <p class="mb-4">If an LLM gives you incorrect information mid-conversation, what's the best approach?</p>
    <div class="space-y-2">
                <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            Tell the LLM to "forget what you just said"
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            Repeat your original question more firmly
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="true">
            Start a fresh conversation with the correct information upfront
        </div>
    </div>
    <div class="quiz-feedback hidden mt-4 p-4 rounded-lg"></div>
</div>

</div>
