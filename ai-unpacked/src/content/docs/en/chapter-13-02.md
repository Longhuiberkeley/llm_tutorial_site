---
title: "13.2 Project Management 101"
description: "A practical PM crash course for builders using LLMs — phases, gates, and why structure beats speed."
chapter: "Chapter 13"
pageId: "13-02"
---

## 🎯 Core Goals
- Give non-technical readers the minimum viable PM knowledge for LLM-assisted projects.
- Introduce requirements, the V-model, and Agile at a practical level.
- Establish phase gates as the concrete mechanism for maintaining discipline.

<div class="not-prose callout callout-tldr">

Most people who use LLMs to build things aren't project managers — and that's fine. But skipping PM basics is how projects fail. You don't need a certification. You need to know: what am I building, for whom, how will I know it's done, and how do I check my work before moving on.

</div>

## 📋 What Are Requirements?

Before you build anything, you need to know what "done" looks like.

A **requirement** is a statement of what the system must do, for whom, and under what constraints. It's the answer to the question: "What are we actually trying to accomplish here?"

Without requirements, you build what's interesting. With requirements, you build what's needed.

Good requirements answer four things:
- **Who** is doing this? (the user or role)
- **What** do they need to be able to do?
- **What counts as success?** (a measurable outcome, not a feeling)
- **What are the constraints?** (what must it never do, what limits apply)

The difference between a weak and strong requirement is specificity:

| Weak | Strong |
|------|--------|
| Users can log in | Users can log in via email or Google OAuth, with password reset, on mobile and desktop |
| The report is good | The report answers the three research questions defined in the brief, fits 20 pages, and can be understood by a non-technical executive |
| The chatbot is helpful | The chatbot resolves tier-1 support issues without human escalation 80% of the time |

Requirements don't describe the technology. They describe the need. The technology can change — the need defines success.

## 🔁 The V-Model — Structure Without Bureaucracy

The V-model is a way of thinking about how building and checking relate to each other. You don't need to use it formally — but the logic behind it applies to every project.

The idea is a V shape:

- **Left side (going down):** You start broad and get specific. Requirements → Design → Implementation.
- **Bottom of the V:** The actual work — writing code, generating content, building the thing.
- **Right side (going up):** You check each level against what you defined on the way down. Unit checks → Integration checks → Acceptance checks.

The key insight is **symmetry**: every phase going down has a corresponding check going up.

- Requirements get checked at acceptance: "Did we build what was asked for?"
- Design gets checked at integration: "Do the parts fit together as designed?"
- Implementation gets checked immediately: "Does this piece do what it was supposed to do?"

You don't need formal notation. The practical version of the V-model is simpler: **for every decision you make going in, have a way to check it on the way out.** Define what success looks like before you build, and verify against it when you're done.

<div class="not-prose callout callout-dyk">

Good professionals in any field use this logic without thinking about it. A lawyer drafts a section, reviews it against the brief, then moves to the next. A chef tastes before serving. An editor checks a chapter against the outline. Phases and checks are how careful work gets done — not a software invention.

</div>


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-6">
<h3 class="text-xl font-bold font-headline mb-2">The V-Model at a Glance</h3>
<p class="text-sm text-on-surface-variant">Click any phase to see what it produces, the gate to pass, and a real-world example.</p>
</div>
<!-- V-Model Layout -->
<div class="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 max-w-2xl mx-auto" id="pm-nodes">
<!-- Row 1: Requirements + Acceptance -->
<button onclick="selectPhase(0, this)" class="pm-node rounded-xl p-3 border-2 border-outline-variant bg-surface-container-lowest text-center hover:border-primary transition-all group">
<div class="text-2xl mb-1">📋</div>
<div class="text-[11px] font-black uppercase tracking-wide text-on-surface group-hover:text-primary transition-colors">Requirements</div>
</button>
<div class="hidden sm:flex items-center justify-center">
<div class="text-xs text-on-surface-variant font-bold text-center">⟷<br><span class="text-[9px]">verified by</span></div>
</div>
<button onclick="selectPhase(5, this)" class="pm-node rounded-xl p-3 border-2 border-outline-variant bg-surface-container-lowest text-center hover:border-primary transition-all group">
<div class="text-2xl mb-1">🎯</div>
<div class="text-[11px] font-black uppercase tracking-wide text-on-surface group-hover:text-primary transition-colors">Acceptance</div>
</button>
<!-- Row 2: Design + Integration -->
<button onclick="selectPhase(1, this)" class="pm-node rounded-xl p-3 border-2 border-outline-variant bg-surface-container-lowest text-center hover:border-primary transition-all group ml-4">
<div class="text-2xl mb-1">🗺️</div>
<div class="text-[11px] font-black uppercase tracking-wide text-on-surface group-hover:text-primary transition-colors">Design</div>
</button>
<div class="hidden sm:flex items-center justify-center">
<div class="text-xs text-on-surface-variant font-bold text-center">⟷<br><span class="text-[9px]">verified by</span></div>
</div>
<button onclick="selectPhase(4, this)" class="pm-node rounded-xl p-3 border-2 border-outline-variant bg-surface-container-lowest text-center hover:border-primary transition-all group mr-4">
<div class="text-2xl mb-1">🔗</div>
<div class="text-[11px] font-black uppercase tracking-wide text-on-surface group-hover:text-primary transition-colors">Integration</div>
</button>
<!-- Row 3: Implementation + Unit -->
<button onclick="selectPhase(2, this)" class="pm-node rounded-xl p-3 border-2 border-outline-variant bg-surface-container-lowest text-center hover:border-primary transition-all group ml-8">
<div class="text-2xl mb-1">⚙️</div>
<div class="text-[11px] font-black uppercase tracking-wide text-on-surface group-hover:text-primary transition-colors">Implement</div>
</button>
<div class="hidden sm:flex items-center justify-center">
<div class="text-xs text-on-surface-variant font-bold text-center">⟷<br><span class="text-[9px]">verified by</span></div>
</div>
<button onclick="selectPhase(3, this)" class="pm-node rounded-xl p-3 border-2 border-outline-variant bg-surface-container-lowest text-center hover:border-primary transition-all group mr-8">
<div class="text-2xl mb-1">🧪</div>
<div class="text-[11px] font-black uppercase tracking-wide text-on-surface group-hover:text-primary transition-colors">Unit Check</div>
</button>
</div>
<div class="flex justify-center mb-6 gap-8 text-xs text-on-surface-variant font-bold">
<span>← Build phase (left side)</span>
<span>Verify phase (right side) →</span>
</div>
<!-- Detail Panel -->
<div id="pm-detail" class="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-6 min-h-[150px] flex items-center justify-center transition-all duration-300">
<p class="text-sm text-on-surface-variant italic text-center">Click a phase above to learn what it involves.</p>
</div>
</div>
<script>
(function() {
const phases = [
{
name: 'Requirements',
emoji: '📋',
side: 'Build',
what: 'Define what the system must do — for whom, under what constraints, with what success criteria. Write it down before building anything.',
gate: 'Can you describe what "done" looks like in measurable terms? If no, you are not ready to design.',
example: '💻 Software: "Users can log in via email or Google OAuth, with password reset, on mobile and desktop." 📄 Report: "Answers 3 defined research questions for a non-technical executive audience, max 20 pages."'
},
{
name: 'Design',
emoji: '🗺️',
side: 'Build',
what: 'Define the architecture, structure, and approach. For software: module breakdown, patterns, data model. For documents: outline, argument structure, section plan.',
gate: 'Could someone else build or write this from your design? If no, the design is not complete.',
example: '💻 Software: System architecture diagram, module list, API contracts. 📄 Report: Detailed outline with section purpose, argument flow, evidence sources per section.'
},
{
name: 'Implementation',
emoji: '⚙️',
side: 'Build',
what: 'Generate content or code in small, bounded chunks — one module, one section at a time. This is where you use the LLM.',
gate: 'Has this chunk been reviewed and approved before proceeding to the next? If no, stop and review.',
example: '💻 Software: Write one function or one component, review it, then the next. 📄 Report: Write one section, review it against the outline and requirements, then the next.'
},
{
name: 'Unit Check',
emoji: '🧪',
side: 'Verify',
what: 'Verify that each individual piece works as specified. Does this function do what it says? Does this section argue what the outline specified?',
gate: 'Does this piece meet the acceptance criteria for this specific deliverable?',
example: '💻 Software: Run tests on this function. Does it return the right values for edge cases? 📄 Report: Does this section answer its assigned research question clearly?'
},
{
name: 'Integration',
emoji: '🔗',
side: 'Verify',
what: 'Verify that the pieces work together. Does the system hold together? Does the argument flow coherently across sections?',
gate: 'Do the parts fit together as designed? Are there contradictions or gaps between pieces?',
example: '💻 Software: Do modules communicate correctly? Are there unexpected dependencies? 📄 Report: Does section 5 contradict section 2? Does the argument build coherently?'
},
{
name: 'Acceptance',
emoji: '🎯',
side: 'Verify',
what: 'Verify the final output against the original requirements. Did we build what was asked for? Does it meet the success criteria from phase 1?',
gate: 'Does the complete output pass the acceptance criteria defined in the Requirements phase?',
example: '💻 Software: Does the login work on mobile and desktop via both methods? Can users reset passwords? 📄 Report: Does it answer all 3 research questions? Is it within 20 pages? Is it readable by a non-technical executive?'
}
];
window.selectPhase = function(index, btn) {
const phase = phases[index];
document.querySelectorAll('.pm-node').forEach(n => {
n.classList.remove('border-primary', 'bg-primary/10');
n.classList.add('border-outline-variant', 'bg-surface-container-lowest');
});
btn.classList.remove('border-outline-variant', 'bg-surface-container-lowest');
btn.classList.add('border-primary', 'bg-primary/10');
const detail = document.getElementById('pm-detail');
detail.className = 'border-2 border-primary bg-primary/5 rounded-xl p-6 min-h-[150px] transition-all duration-300';
let html = '<div class="w-full">';
html += '<div class="flex items-center gap-2 mb-3">';
html += '<span class="text-2xl">' + phase.emoji + '</span>';
html += '<div>';
html += '<div class="font-bold text-sm text-on-surface">' + phase.name + '</div>';
html += '<div class="text-[10px] font-bold uppercase tracking-wide text-on-surface-variant">' + phase.side + ' phase</div>';
html += '</div></div>';
html += '<div class="grid gap-2 sm:grid-cols-3 text-[11px]">';
html += '<div class="bg-surface-container-lowest rounded-lg p-3 border border-outline-variant">';
html += '<div class="font-black text-[9px] uppercase tracking-wider text-on-surface-variant mb-1">WHAT YOU DO</div>';
html += '<div class="text-on-surface leading-relaxed">' + phase.what + '</div></div>';
html += '<div class="bg-amber-50 rounded-lg p-3 border border-amber-200">';
html += '<div class="font-black text-[9px] uppercase tracking-wider text-amber-600 mb-1">GATE — BEFORE PROCEEDING</div>';
html += '<div class="text-on-surface leading-relaxed">' + phase.gate + '</div></div>';
html += '<div class="bg-surface-container-lowest rounded-lg p-3 border border-outline-variant">';
html += '<div class="font-black text-[9px] uppercase tracking-wider text-on-surface-variant mb-1">EXAMPLES</div>';
html += '<div class="text-on-surface leading-relaxed">' + phase.example + '</div></div>';
html += '</div></div>';
detail.innerHTML = html;
};
})();
</script>

</div>


## 🔄 Agile in Plain English

Agile is a reaction to the limits of planning everything upfront. It says: build in small iterations, get feedback early, adjust as you go.

The core idea is a **sprint** — a short work cycle, typically one to two weeks. Each sprint produces something reviewable: a working feature, a completed section, a testable prototype. You review what was built, decide what's next, and adjust.

This maps naturally to LLM-assisted work:
- Generate a chunk
- Review it against your requirements
- Decide what to add or change
- Move to the next chunk

The tension between Agile and the V-model is productive: **Agile gives you iteration speed; the V-model gives you verification discipline.** Use both. Iterate quickly, but verify at each iteration rather than accumulating unreviewed output.


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-6">
<h3 class="text-xl font-bold font-headline mb-2">The Agile Sprint Cycle</h3>
<p class="text-sm text-on-surface-variant">Click each step to see what it means for LLM-assisted work — whether you're building software or writing a document.</p>
</div>
<!-- Sprint Steps -->
<div class="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 mb-6">
<button onclick="selectSprint(0, this)" class="sprint-node w-full sm:w-auto flex sm:flex-col items-center gap-3 sm:gap-2 px-5 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-none sm:first:rounded-l-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all group text-left sm:text-center">
<div class="text-2xl">📌</div>
<div>
<div class="font-black text-xs uppercase tracking-wide group-hover:text-primary transition-colors">Plan</div>
<div class="text-[10px] text-on-surface-variant hidden sm:block">What to build next</div>
</div>
</button>
<div class="hidden sm:flex items-center text-on-surface-variant font-bold text-lg px-1">→</div>
<div class="text-on-surface-variant font-bold text-lg sm:hidden">↓</div>
<button onclick="selectSprint(1, this)" class="sprint-node w-full sm:w-auto flex sm:flex-col items-center gap-3 sm:gap-2 px-5 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-none border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all group text-left sm:text-center">
<div class="text-2xl">🔨</div>
<div>
<div class="font-black text-xs uppercase tracking-wide group-hover:text-primary transition-colors">Build</div>
<div class="text-[10px] text-on-surface-variant hidden sm:block">Generate in chunks</div>
</div>
</button>
<div class="hidden sm:flex items-center text-on-surface-variant font-bold text-lg px-1">→</div>
<div class="text-on-surface-variant font-bold text-lg sm:hidden">↓</div>
<button onclick="selectSprint(2, this)" class="sprint-node w-full sm:w-auto flex sm:flex-col items-center gap-3 sm:gap-2 px-5 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-none border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all group text-left sm:text-center">
<div class="text-2xl">🔍</div>
<div>
<div class="font-black text-xs uppercase tracking-wide group-hover:text-primary transition-colors">Review</div>
<div class="text-[10px] text-on-surface-variant hidden sm:block">Check against requirements</div>
</div>
</button>
<div class="hidden sm:flex items-center text-on-surface-variant font-bold text-lg px-1">→</div>
<div class="text-on-surface-variant font-bold text-lg sm:hidden">↓</div>
<button onclick="selectSprint(3, this)" class="sprint-node w-full sm:w-auto flex sm:flex-col items-center gap-3 sm:gap-2 px-5 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-none sm:last:rounded-r-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all group text-left sm:text-center">
<div class="text-2xl">🔁</div>
<div>
<div class="font-black text-xs uppercase tracking-wide group-hover:text-primary transition-colors">Adjust</div>
<div class="text-[10px] text-on-surface-variant hidden sm:block">Update plan, repeat</div>
</div>
</button>
</div>
<!-- Detail Panel -->
<div id="sprint-detail" class="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-6 min-h-[140px] flex items-center justify-center transition-all duration-300">
<p class="text-sm text-on-surface-variant italic text-center">Click a step above to see how it applies.</p>
</div>
<p class="text-[11px] text-on-surface-variant text-center mt-4 italic">Each iteration is one sprint. Agile says: don't plan everything upfront — build a slice, learn, adjust, and repeat.</p>
</div>
<script>
(function() {
const steps = [
{
emoji: '📌',
label: 'Plan',
color: 'border-primary',
bg: 'bg-primary/5',
what: 'Decide what to produce in this session. Write a clear brief: what role is the LLM playing, what is the deliverable, what are the success criteria for this chunk?',
software: '💻 Software: "This session: write the authentication module. It must handle email login and Google OAuth. Success: both login flows work end-to-end in the test environment."',
document: '📄 Report: "This session: write Section 3 — Market Analysis. It must answer research question R2 (market size and growth rate). Success: cites at least 3 sources and stays under 600 words."',
trap: '⚠️ Skip this step and you\'ll generate output in the wrong direction, for the wrong purpose, or at the wrong level of detail — and only find out at the end.'
},
{
emoji: '🔨',
label: 'Build',
color: 'border-primary',
bg: 'bg-primary/5',
what: 'Generate the deliverable. Keep the scope bounded — one module, one section, one component at a time. Give the LLM the context it needs for this specific task, not the entire project history.',
software: '💻 Software: Prompt the LLM with the auth module spec. Generate the implementation. Run it. If it fails, fix that specific thing before moving on.',
document: '📄 Report: Prompt the LLM with the section brief, your research notes, and the argument direction. Generate the section. Read it. If something\'s wrong, fix it now.',
trap: '⚠️ Building too large a chunk in one go makes review harder and correction more expensive. If you can\'t review it in 5 minutes, the chunk is too big.'
},
{
emoji: '🔍',
label: 'Review',
color: 'border-primary',
bg: 'bg-primary/5',
what: 'Check the output against the Plan brief you wrote. Does it meet the success criteria? Does it connect to a stated requirement? Look for the failure patterns — duplicates, inconsistencies, false-passing checks.',
software: '💻 Software: Does the auth module handle both login methods? Does it validate inputs? Are there hardcoded values that should be configurable? Do the tests actually fail when the code is broken?',
document: '📄 Report: Does the section answer R2? Are the sources cited correctly? Does the argument flow from the previous section? Does anything contradict section 1?',
trap: '⚠️ Skipping review at this step means problems compound into the next sprint. What would take 5 minutes to fix now may take 3 hours to fix in sprint 4.'
},
{
emoji: '🔁',
label: 'Adjust',
color: 'border-primary',
bg: 'bg-primary/5',
what: 'Based on the review, update your plan for the next sprint. Did you learn something that changes a requirement? Did the output reveal a gap in the design? Adjust the plan before starting the next build.',
software: '💻 Software: The auth module revealed that the session token approach needs updating in the design doc. Update the design, then plan the next module.',
document: '📄 Report: Writing section 3 revealed that the intro needs to mention market segmentation. Note that adjustment, then plan section 4.',
trap: '⚠️ Adjusting only at the very end turns Agile into a waterfall with extra steps. The value of Agile is that each iteration informs the next one — not that you produce all the output then review.'
}
];
window.selectSprint = function(index, btn) {
const step = steps[index];
document.querySelectorAll('.sprint-node').forEach(n => {
n.classList.remove('border-primary', 'bg-primary/10');
n.classList.add('border-outline-variant', 'bg-surface-container-lowest');
});
btn.classList.remove('border-outline-variant', 'bg-surface-container-lowest');
btn.classList.add('border-primary', 'bg-primary/10');
const detail = document.getElementById('sprint-detail');
detail.className = 'border-2 rounded-xl p-6 min-h-[140px] transition-all duration-300 ' + step.color + ' ' + step.bg;
let html = '<div class="w-full">';
html += '<div class="flex items-center gap-2 mb-3">';
html += '<span class="text-2xl">' + step.emoji + '</span>';
html += '<div class="font-bold text-sm">' + step.label + '</div></div>';
html += '<p class="text-[12px] text-on-surface leading-relaxed mb-3">' + step.what + '</p>';
html += '<div class="grid gap-2 sm:grid-cols-2 text-[11px] mb-2">';
html += '<div class="bg-surface-container-lowest rounded-lg p-3 border border-outline-variant leading-relaxed">' + step.software + '</div>';
html += '<div class="bg-surface-container-lowest rounded-lg p-3 border border-outline-variant leading-relaxed">' + step.document + '</div>';
html += '</div>';
html += '<p class="text-[10px] text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">' + step.trap + '</p>';
html += '</div>';
detail.innerHTML = html;
};
})();
</script>

</div>


## 🚦 Phase Gates — The Practical Tool

A **phase gate** is a checkpoint you must pass before moving to the next phase. It's a question you ask yourself: "Do I actually have what I need to proceed?"

Here are four gates that apply to any LLM-assisted project — whether you're building software, writing a 40-page report, or producing a research document:

**Phase 1 — Define**
*What you do:* Articulate the purpose, the users, the inputs and outputs, the constraints, and the success criteria.
*Gate question:* Can I describe what "done" looks like in measurable terms? If the answer is no, you're not ready to move on.

**Phase 2 — Design**
*What you do:* Define the structure, the approach, the components, and how tasks break down.
*Gate question:* Could someone else build or write this from what I've specified? If the answer is no, the design isn't done.

**Phase 3 — Build**
*What you do:* Generate content or code in small, reviewable chunks — one section or module at a time.
*Gate question:* Has this chunk been reviewed and approved before I move to the next? If the answer is no, stop and review first.

**Phase 4 — Verify**
*What you do:* Check the output against the success criteria from Phase 1.
*Gate question:* Does this output meet what was defined in the Define phase? If the answer is no, correct before delivering.

<div class="not-prose callout callout-error">

The most expensive mistake in any project is starting Phase 3 (Build) before Phase 1 (Define) is complete. When requirements become clear after substantial work is done, features get rebuilt. The cost of late requirement discovery is proportional to how much was built before it.

</div>

## 🔪 Breaking Down Tasks for LLMs

Phase gates only work if tasks are small enough to pass through them one at a time.

Each prompt to an LLM should have:
- **One role** — "as a UX designer" or "as a technical writer"
- **One phase** — "we are in the design phase" or "we are writing section 3"
- **One deliverable** — "produce a user flow in text" or "write a 300-word analysis"
- **Relevant context only** — what's needed for this specific task, not the entire project history

Small prompts produce verifiable outputs. A 300-word section can be reviewed in two minutes. A 3,000-word section generated in one prompt is harder to evaluate — and harder to correct when something is wrong.

When tasks are broken down, every output becomes a checkpoint. When they're combined, the checkpoints disappear.

## 📝 Key Concepts

- **Requirements** describe the need, not the technology — who, what, success criteria, constraints.
- **The V-model** says: every build phase has a verification phase. Define success before building; check against it when done.
- **Agile** adds iteration speed — build small, review, adjust. Combine with V-model discipline.
- **Phase gates** are checkpoints: Define → Design → Build → Verify. Each gate is a question you must be able to answer before proceeding.
- **Small, focused prompts** — one role, one phase, one deliverable — produce output you can verify. Combined megaprompts don't.

<div id="quiz-13-02" class="not-prose quiz-container my-12" data-quiz="13-02"></div>
