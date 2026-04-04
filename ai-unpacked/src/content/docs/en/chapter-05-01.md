---
title: "5.1 Know When to Trust It"
description: "The Spectrum of Reliability."
chapter: "Chapter 5"
pageId: "05-01"
---

## 🎯 Core Goals
- Understand when to trust an LLM and when to verify it.
- Learn that LLMs CAN be used in production — with the right engineering.

<div class="not-prose callout callout-tldr">

LLMs aren't "all or nothing." Their reliability depends entirely on the task. Knowing where your task sits on the **Trust Spectrum** is the single most important judgment call you can make before using an LLM.

</div>

## 👁️ Visuals & Interactives


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-10">
<h3 class="text-xl font-bold font-headline mb-2">The AI Trust Spectrum</h3>
<p class="text-sm text-on-surface-variant">Click each zone to see which tasks belong there.</p>
</div>
<div class="relative pt-10 pb-16">
<!-- Spectrum Line -->
<div class="h-4 w-full rounded-full bg-gradient-to-right flex justify-between items-center px-1" 
style="background: linear-gradient(to right, #4CAF50, #FFC107, #FF9800, #F44336);">
</div>
<!-- Markers and Cards -->
<div class="grid grid-cols-4 gap-4 mt-8">
<!-- Zone 1: Ready to Use -->
<button onclick="showZone(0, this)" class="zone-btn active group flex flex-col items-center gap-3 p-4 rounded-xl border-2 border-transparent hover:bg-surface-container transition-all">
<div class="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined">check_circle</span>
</div>
<div class="text-center">
<div class="font-bold text-sm">Ready</div>
<div class="text-[10px] uppercase tracking-tighter opacity-60">High Trust</div>
</div>
</button>
<!-- Zone 2: Review Needed -->
<button onclick="showZone(1, this)" class="zone-btn group flex flex-col items-center gap-3 p-4 rounded-xl border-2 border-transparent hover:bg-surface-container transition-all">
<div class="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined">visibility</span>
</div>
<div class="text-center">
<div class="font-bold text-sm">Review</div>
<div class="text-[10px] uppercase tracking-tighter opacity-60">Medium Trust</div>
</div>
</button>
<!-- Zone 3: Heavy Verify -->
<button onclick="showZone(2, this)" class="zone-btn group flex flex-col items-center gap-3 p-4 rounded-xl border-2 border-transparent hover:bg-surface-container transition-all">
<div class="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined">rule</span>
</div>
<div class="text-center">
<div class="font-bold text-sm">Verify</div>
<div class="text-[10px] uppercase tracking-tighter opacity-60">Low Trust</div>
</div>
</button>
<!-- Zone 4: Don't Trust -->
<button onclick="showZone(3, this)" class="zone-btn group flex flex-col items-center gap-3 p-4 rounded-xl border-2 border-transparent hover:bg-surface-container transition-all">
<div class="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined">error</span>
</div>
<div class="text-center">
<div class="font-bold text-sm">Avoid</div>
<div class="text-[10px] uppercase tracking-tighter opacity-60">Zero Trust</div>
</div>
</button>
</div>
</div>
<!-- Info Display -->
<div id="zone-display" class="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 min-h-[160px] animate-fade-in">
<h4 id="zone-title" class="text-lg font-bold mb-3 flex items-center gap-2">
<span id="zone-icon" class="material-symbols-outlined text-green-500">check_circle</span>
Ready to Use
</h4>
<p id="zone-desc" class="text-sm text-on-surface-variant leading-relaxed mb-4">
Creative tasks where variety is a feature, not a bug. The AI excels here.
</p>
<div class="flex flex-wrap gap-2">
<span class="px-3 py-1 bg-surface-container rounded-full text-[11px] font-bold">Creative Writing</span>
<span class="px-3 py-1 bg-surface-container rounded-full text-[11px] font-bold">Brainstorming</span>
<span class="px-3 py-1 bg-surface-container rounded-full text-[11px] font-bold">Email Drafts</span>
</div>
</div>
</div>
<script>
const zones = [
{
title: "Ready to Use",
icon: "check_circle",
color: "text-green-500",
desc: "Creative tasks where variety is a feature, not a bug. The AI excels here because there is no single 'correct' answer.",
tags: ["Creative Writing", "Brainstorming", "Email Drafts", "Summarizing"]
},
{
title: "Review Before Using",
icon: "visibility",
color: "text-yellow-500",
desc: "AI does the heavy lifting, but a human must check the logic and tone. Great for productivity.",
tags: ["Coding", "Business Reports", "Product Descriptions", "Social Media"]
},
{
title: "Heavy Verification Needed",
icon: "rule",
color: "text-orange-500",
desc: "AI can assist with research, but every claim and citation must be cross-checked against authoritative sources.",
tags: ["Legal Research", "Medical Info", "Financial Math", "History Facts"]
},
{
title: "Don't Trust (Yet)",
icon: "error",
color: "text-red-500",
desc: "Critical operations where a single hallucination causes immediate harm or security breaches.",
tags: ["Live Security", "Autonomous Banking", "Critical Math", "Legal Filings"]
}
];
function showZone(index, btn) {
const zone = zones[index];
document.querySelectorAll('.zone-btn').forEach(b => b.classList.remove('border-primary', 'bg-surface-container'));
btn.classList.add('border-primary', 'bg-surface-container');
const display = document.getElementById('zone-display');
display.classList.remove('animate-fade-in');
void display.offsetWidth; // trigger reflow
display.classList.add('animate-fade-in');
document.getElementById('zone-title').innerHTML = `<span class="material-symbols-outlined ${zone.color}">${zone.icon}</span> ${zone.title}`;
document.getElementById('zone-desc').textContent = zone.desc;
const tagsHtml = zone.tags.map(t => `<span class="px-3 py-1 bg-surface-container rounded-full text-[11px] font-bold">${t}</span>`).join('');
display.querySelector('.flex-wrap').innerHTML = tagsHtml;
}
// Init first zone
document.addEventListener('DOMContentLoaded', () => {
showZone(0, document.querySelector('.zone-btn'));
});
</script>

</div>


## 📝 Key Concepts

- Can you identify whether your task is **Ready to use**, **Review before using**, **Heavy verification needed**, or **Don't trust without engineering**?
- A better question: which parts of your project could benefit from LLM use?

<div class="not-prose callout callout-error">

**LLMs are production-ready — but not for everything.** With proper engineering (retrieval, testing, human review), LLMs power systems handling millions of real decisions daily. The risk isn't that they're too unreliable to use in serious contexts — it's using them in serious contexts *without* the right engineering. Know your zone, and design accordingly.

</div>

<div class="not-prose callout callout-dyk">

A useful question before any LLM task: *"What's the worst thing that happens if this response is wrong?"* If the answer is "nothing" or "I'd catch it" — go ahead. If the answer is "someone gets hurt" or "we face legal liability" — add engineering before shipping.

</div>

<div id="quiz-05-01" class="not-prose quiz-container my-12" data-quiz="05-01"></div>
