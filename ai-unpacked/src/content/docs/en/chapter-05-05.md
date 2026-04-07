---
title: "5.5 Privacy — What Never to Paste"
description: "Protecting your data when using LLMs."
chapter: "Chapter 5"
pageId: "05-05"
---

## 🎯 Core Goals
- Understand why LLMs create a stronger temptation to share sensitive data — and why that matters.
- Apply a simple mental model for deciding what is safe to share.

<div class="not-prose callout callout-tldr">

LLMs are remarkably useful, and that usefulness is exactly what makes privacy harder. The easier it is to get help, the easier it is to paste something you shouldn't. At its core, the rule is the same as it's always been: don't hand sensitive data to external services you don't fully control.

</div>

## 👁️ Visuals & Interactives


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-8">
<h3 class="text-xl font-bold font-headline mb-2">The AI Privacy Filter</h3>
<p class="text-sm text-on-surface-variant">Which of these are safe to paste into a chat with an LLM?</p>
</div>
<div class="grid sm:grid-cols-2 gap-4">
<button onclick="checkPrivacy(false, this)" class="p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-red-500 transition-all text-left flex items-center gap-4 group active:scale-95">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-xl group-hover:scale-110 transition-transform">🔑</div>
<div class="flex-grow">
<div class="font-bold text-sm">Internal API Keys</div>
<div class="text-[10px] opacity-60 uppercase tracking-widest">Technical Data</div>
</div>
<span class="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity text-red-500">cancel</span>
</button>
<button onclick="checkPrivacy(true, this)" class="p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-green-500 transition-all text-left flex items-center gap-4 group active:scale-95">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-xl group-hover:scale-110 transition-transform">📝</div>
<div class="flex-grow">
<div class="font-bold text-sm">Draft Blog Post</div>
<div class="text-[10px] opacity-60 uppercase tracking-widest">Public Content</div>
</div>
<span class="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity text-green-500">check_circle</span>
</button>
<button onclick="checkPrivacy(false, this)" class="p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-red-500 transition-all text-left flex items-center gap-4 group active:scale-95">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-xl group-hover:scale-110 transition-transform">🏥</div>
<div class="flex-grow">
<div class="font-bold text-sm">Medical Records</div>
<div class="text-[10px] opacity-60 uppercase tracking-widest">Personal Info</div>
</div>
<span class="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity text-red-500">cancel</span>
</button>
<button onclick="checkPrivacy(true, this)" class="p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-green-500 transition-all text-left flex items-center gap-4 group active:scale-95">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-xl group-hover:scale-110 transition-transform">💻</div>
<div class="flex-grow">
<div class="font-bold text-sm">Generic Code Snippet</div>
<div class="text-[10px] opacity-60 uppercase tracking-widest">Open Source</div>
</div>
<span class="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity text-green-500">check_circle</span>
</button>
<button onclick="checkPrivacy(false, this)" class="p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-red-500 transition-all text-left flex items-center gap-4 group active:scale-95">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-xl group-hover:scale-110 transition-transform">💳</div>
<div class="flex-grow">
<div class="font-bold text-sm">Customer Credit Cards</div>
<div class="text-[10px] opacity-60 uppercase tracking-widest">Financial Data</div>
</div>
<span class="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity text-red-500">cancel</span>
</button>
<button onclick="checkPrivacy(false, this)" class="p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-red-500 transition-all text-left flex items-center gap-4 group active:scale-95">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-xl group-hover:scale-110 transition-transform">🏗️</div>
<div class="flex-grow">
<div class="font-bold text-sm">Unreleased Blueprint</div>
<div class="text-[10px] opacity-60 uppercase tracking-widest">Trade Secret</div>
</div>
<span class="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity text-red-500">cancel</span>
</button>
</div>
<div id="privacy-feedback" class="mt-8 p-4 rounded-xl text-center font-bold text-sm opacity-0 transition-all duration-300">
<!-- Feedback here -->
</div>
</div>
<script type="module">
import { init } from '/js/interactives/privacy-filter.js';
init({
  safeMessage: "\u2705 Correct! Public or generic information is generally safe to share.",
  dangerMessage: "\u274C DANGER! Never paste sensitive, private, or proprietary data into an LLM."
});
</script>

</div>


## 📝 Key Concepts

- **A new temptation:** Unlike a search engine where you type a query, an LLM conversation flows naturally — it feels like talking to a knowledgeable colleague. That friction-free experience makes it tempting to paste in a client email, a patient record, or internal financials "just to get help." The helpfulness is real, but so is the risk.
- **Same old rule, new context:** The underlying principle hasn't changed. You wouldn't email patient data to a random consultant or share trade secrets with a stranger on the phone. Pasting that same data into an LLM chat is equivalent — your data leaves your environment and lands on someone else's infrastructure.
- **The Email Heuristic:** Before pasting anything into an LLM, ask yourself: *"Would I be comfortable including this in a work email sent to someone I don't fully trust?"* If the answer is no — don't paste it.
- **NEVER Paste:** Passwords, API keys, private keys, credit card numbers, SSNs, medical records, trade secrets, internal financial data, or client/patient personally identifiable information (PII).
- **OK to Paste:** Public information, your own non-confidential writing, general questions, anonymized or sanitized data, code that doesn't contain secrets.
- **Sanitize Before Sharing:** If you need help with a real document, remove the sensitive parts first. Replace names with "Person A", figures with "X", and internal references with generic labels. The LLM can still help with structure and language.

<div class="not-prose callout callout-error">

**The Samsung Incident:** Samsung engineers pasted proprietary source code into ChatGPT for help debugging. That code was potentially used in training data. Samsung had to ban the use of external LLMs company-wide shortly after. LLMs introduce a new vector for accidental data leakage — apply good cybersecurity hygiene.

</div>

<div class="not-prose callout callout-dyk">

Even "Enterprise" plans that promise data privacy and opt-out from training aren't foolproof. Your data still travels over the internet, is processed on external infrastructure, and is subject to that provider's security posture. Treat LLMs like a trusted but external contractor — give them what they need to do the job, not your house keys.

</div>

<div class="not-prose my-12">
<!--
Quiz Box Component
Generated by build.js from :::quiz blocks in markdown.
-->
<div id="quiz-05-05" class="quiz-container bg-surface-container border border-outline-variant rounded-xl p-6 mt-10">
    <div class="font-bold mb-4 flex items-center gap-2">
        <span>🧠</span>
        <span>QUIZ</span>
    </div>
    <p class="mb-4">Which of these is safe to paste into a public LLM chat?</p>
    <div class="space-y-2">
                <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            A customer's email containing their personal details
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            Your company's API keys for a quick debugging session
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="true">
            A publicly available article you want summarized
        </div>
    </div>
    <div class="quiz-feedback hidden mt-4 p-4 rounded-lg"></div>
</div>

</div>
