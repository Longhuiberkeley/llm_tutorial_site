---
title: "13.5 Review, Prompting with Purpose & Common Pitfalls"
description: "How to review LLM output well, the failure patterns to watch for, and five purposeful prompting practices rooted in good software discipline — applicable to any type of project."
chapter: "Chapter 13"
pageId: "13-05"
---

## 🎯 Core Goals
- Catalogue the failure patterns that emerge from LLM-generated output across any project type.
- Introduce LLM-as-judge and the layered review framework.
- Introduce five purposeful prompting practices rooted in proven software discipline — applicable to code, reports, and any complex document.

<div class="not-prose callout callout-tldr">

LLM output always needs review — always. This page covers the failure patterns to watch for, a three-layer review framework, and five purposeful prompting practices that apply whether you're building software, writing a 50-page industry report, or producing any complex document. These aren't just LLM tips. They're proven software development discipline. The LLM just makes them more important.

</div>

## 🚨 Failure Patterns (Generalized)

When LLM-assisted projects grow large enough without structure, they develop recognizable failure patterns. These apply to code, reports, research documents, and any multi-part output:

**Phantom duplicates:** The same content exists in multiple places in slightly different forms. In code: the same function written three times in three files because the LLM regenerated rather than reusing. In a report: the same analysis appearing in two sections with slightly different conclusions — and a contradiction neither version acknowledges.

**Scattered logic:** Important content ends up in the wrong place. In code: business rules buried in the UI layer. In a report: the conclusion buried in the middle, the introduction front-loaded with detail that belongs later. Structure was never defined, so structure was never enforced.

**Incomplete coverage:** Edge cases are handled differently in different parts of the output. One section of the report addresses counterarguments; another ignores them entirely. One code module validates inputs; another module doing the same task doesn't. There's no single standard because the standard was never defined.

**False verification:** Tests that always pass. Review criteria applied in a way that validates format rather than substance. A report reviewed for grammar but not for argument consistency. Code tested for the happy path but not for edge cases. The checks exist and run clean — but they're not checking the things that matter.

<div class="not-prose callout callout-error">

Verification that always passes is worse than no verification — it creates false confidence. Before trusting any check, confirm it would actually detect a failure. A test that can't fail is not a test. A review that doesn't check requirements is not a review.

</div>

## 🔄 LLM Reviewing LLM

One LLM can review another LLM's output — and this is more useful than it sounds.

Generating and reviewing are different tasks. A model generating content is trying to satisfy a specification. A model reviewing content is asking: "What could go wrong here? What's missing? What looks inconsistent?" Fresh pattern recognition, without the original context and its blind spots.

This is called **LLM-as-judge**. In practice: after an LLM generates a section, report, or module, you prompt a second LLM to review it — looking for problems the generating model missed.

For documents: *"You are a critical editor. Review this section for: unsupported claims, gaps in the argument, contradictions with earlier sections, and unclear writing."*

For code: *"Review this module for: security holes, hardcoded values, missing input validation, disabled linting, and code that only tests the happy path."*

Why it works: each LLM call brings fresh pattern recognition. The reviewer doesn't know what the generator was "trying" to do — it only sees what was produced. That's often exactly the perspective needed to catch what the generator missed.

That said, LLM-as-judge has real limits. It's not bulletproof — just as one human proofreader doesn't guarantee an error-free document, one LLM review doesn't guarantee a correct or complete output. Both the generating and reviewing LLMs may share the same training blind spots and reach the same wrong conclusions. This is why LLM review is Layer 2, not the final word. Human judgment remains essential for anything that matters.

<div class="not-prose callout callout-dyk">

When we explored agentic patterns, we covered the self-correction loop — one agent generates, another reviews, the loop continues until the output passes. LLM-as-judge is exactly that pattern applied to project-level review. The same logic that makes self-correction useful in an agentic workflow makes it useful in your own review process.

</div>

<div class="not-prose callout callout-tip">

**Get more from LLM review by starting fresh.** Open a new chat session for the review step — one where the context isn't shaped by the same conversation that generated the output. Then give it a specific adversarial role: "Play devil's advocate and find every weakness in this argument." or "Act as a red-teamer — identify all the ways this could fail or be exploited." or "Act as a skeptical editor — find unsupported claims, logical gaps, and contradictions." These roles push the LLM away from the "this seems right" instinct toward actively hunting for problems. This technique can be applied at any stage: before you start building (to stress-test your design), after each section (to catch issues early), or at the end before delivery.

</div>

## 🛡️ The Layered Review Framework

No single review layer catches everything. Best practice is three layers, each targeting different types of problems:

**Layer 1 — Automated checks**
- For code: linting, security scanning, type checking, unit tests
- For documents: spell-check, formatting consistency, citation verification
- Runs automatically, catches mechanical problems consistently and quickly

**Layer 2 — LLM review**
Prompt a second LLM to review against your acceptance criteria and the failure patterns above. Provide it with context: what was this supposed to produce, what are the constraints, what does success look like?

This layer is fast and catches pattern-matching problems that humans miss in routine review — especially when reviewing large volumes of generated output.

**Layer 3 — Human review**
You review the LLM reviewer's findings, verify them, make judgment calls, and sign off. This layer is especially important for logic, business rules, and correctness — areas where both the generating and reviewing LLMs may share blind spots.

The key principle: **LLM review is an additional layer, never the only layer.** The goal is different types of review covering different types of problems. Human judgment remains the final gate.

## ✅ Prompting with Purpose

These five practices aren't specific to LLMs. They're the habits that separate disciplined software projects from chaotic ones — and they've been true since long before language models existed. Plan before you build. Give clear context. Gate your phases. Verify against requirements. Fix problems early. If you prompt like this, you'll be pretty good at running software development projects with or without LLMs.

What LLMs change is the cost of skipping them. When a human writes code slowly, shortcuts are visible and contained. When an LLM generates thousands of lines in minutes, skipped discipline compounds into problems faster than you can track. Follow these practices and your LLM-assisted process will be higher quality and more scalable. Skip them and the speed that felt like an advantage becomes the source of your technical debt.

One practical implication: don't try to do everything in a single chat session. A long, sprawling conversation accumulates context drift — the LLM starts losing track of earlier decisions, and you start losing track of what's been verified. Break your work into focused sessions: one for design, one for building a specific module, one for review. Each session gets a clear purpose, clean context, and a defined deliverable. This isn't just an LLM limitation — it's how disciplined projects have always worked.

---

**Practice 1 — Plan First**

Before opening a prompt window, answer three questions: What phase am I in (define, design, build, verify)? What specifically am I trying to produce right now? What does good output look like for this specific deliverable?

The most expensive prompts are the ones run in the wrong phase. Generating implementation before the design is done produces output you'll throw away. Writing section 5 before section 2's argument is resolved creates a contradiction you'll have to untangle later. Know what phase you're in before you type.

---

**Practice 2 — Give the LLM Clear Context**

Every prompt should tell the LLM:
- What the overall project or document is, and its purpose
- What phase of work you're currently in
- What this specific prompt is trying to produce
- What the expected input format is
- What the expected output format is
- Where related prior work is (prior sections, prior decisions, related artifacts)
- What constraints apply from earlier phases

Context you skip, the LLM invents. LLM-invented context is plausible-sounding and often wrong. If you don't tell it that section 3 argued X, it won't know to make section 5 consistent with X. If you don't tell it that the codebase uses pattern Y, it will invent a different pattern.

---

**Practice 3 — Phase Gates Before Moving On**

Before moving to the next section, module, or feature: can you answer yes to both of these questions?

1. Does this output meet the acceptance criteria from the Define phase?
2. Can you trace this output back to a stated requirement?

If the answer to either is no, don't proceed. The most common source of technical debt — in code, reports, and any complex output — is proceeding when the gate hasn't been passed, and only discovering the problem three phases later when it's expensive to fix.

---

**Practice 4 — Verify, Don't Accept**

Define what you're checking before you review. What requirements does this output serve? What constraints must it satisfy? What does inconsistency look like in this context?

Checking output without defined criteria is reading rather than reviewing. You notice what looks wrong intuitively, but miss structural problems that only appear when measured against requirements.

Specific things to look for in LLM output:
- Disabled lint rules or suppressed warnings (code)
- Tests or checks that only verify the happy path
- Values that should be configurable but are hardcoded
- Missing input validation or security checks (code) / unsupported claims (documents)
- Functions or sections that exist but are never called / never serve the argument
- The same problem solved differently in different places — inconsistency you'll pay to maintain

---

**Practice 5 — Correct Course Early**

LLM-assisted debt accumulates faster than traditional debt. The cost of fixing a problem grows with every layer built on top of it.

When you identify a problem during review, fix it before proceeding to the next phase. Don't accept and continue. Don't defer to "clean up at the end." The end is the most expensive time to clean up.

In practice: if Phase 3 review reveals that the design from Phase 2 was wrong, go back to Phase 2 and fix it. If a generated section contradicts an earlier section, resolve the contradiction before writing the next section. The discipline of correcting early is what keeps a project's accumulated output coherent as it grows.

<div class="not-prose callout callout-dyk">

These practices generalize to non-coding projects explicitly. Writing a 30-page industry report: Phase 1 (define) = what question does this answer, for whom? Phase 2 (design) = outline, argument structure, section plan. Phase 3 (build) = one section at a time, reviewed before moving to the next. Phase 4 (verify) = does each section serve the argument and answer the questions from Phase 1? The same gates apply. The same discipline pays off.

</div>


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-6">
<h3 class="text-xl font-bold font-headline mb-2">Prompting with Purpose</h3>
<p class="text-sm text-on-surface-variant">Work through the four phases for any LLM-assisted project. Check each item as you confirm it — and don't try to do it all in one chat session.</p>
</div>
<!-- Progress Bar -->
<div class="mb-6">
<div class="flex justify-between items-center mb-2">
<span id="rg-progress-text" class="text-sm font-bold text-on-surface">0 of 14 complete</span>
<span id="rg-progress-pct" class="text-xs font-bold text-on-surface-variant">0%</span>
</div>
<div class="w-full h-3 bg-surface-container-lowest rounded-full border border-outline-variant overflow-hidden">
<div id="rg-progress-bar" class="h-full rounded-full transition-all duration-500 ease-out" style="width: 0%; background: var(--accent);"></div>
</div>
</div>
<!-- Phase Sections -->
<div class="space-y-4" id="rg-phases">
<!-- Phase 1: Define -->
<div class="border-2 border-outline-variant rounded-xl overflow-hidden">
<button onclick="togglePhase(0, this)" class="w-full flex items-center justify-between p-4 bg-surface-container-lowest hover:bg-surface-container-low transition-colors text-left group">
<div class="flex items-center gap-3">
<span id="rg-phase-icon-0" class="text-xl">📋</span>
<div>
<div class="font-bold text-sm text-on-surface group-hover:text-primary transition-colors">Phase 1 — Define</div>
<div class="text-xs text-on-surface-variant">What are you building? For whom? How will you know it's done?</div>
</div>
</div>
<span id="rg-phase-toggle-0" class="text-on-surface-variant text-lg">▼</span>
</button>
<div id="rg-phase-body-0" class="border-t border-outline-variant divide-y divide-outline-variant/50">
<button onclick="toggleCheck(0, this)" id="rg-item-0" class="rg-item w-full flex items-start gap-3 p-4 bg-surface-container-lowest text-left hover:bg-surface-container-low transition-colors">
<div id="rg-box-0" class="w-6 h-6 min-w-[1.5rem] rounded-md border-2 border-outline-variant flex items-center justify-center text-xs transition-all duration-200 mt-0.5">✓</div>
<div>
<div class="font-bold text-xs text-on-surface mb-0.5">Purpose is defined</div>
<div class="text-[10px] text-on-surface-variant leading-relaxed">I can state in one sentence what this project/document does and who it's for.</div>
<div class="text-[10px] text-primary/70 mt-1 italic">💻 Code: "This is a chess puzzle site for beginner players." 📄 Report: "This analyzes EV adoption trends for a non-technical executive."</div>
</div>
</button>
<button onclick="toggleCheck(1, this)" id="rg-item-1" class="rg-item w-full flex items-start gap-3 p-4 bg-surface-container-lowest text-left hover:bg-surface-container-low transition-colors">
<div id="rg-box-1" class="w-6 h-6 min-w-[1.5rem] rounded-md border-2 border-outline-variant flex items-center justify-center text-xs transition-all duration-200 mt-0.5">✓</div>
<div>
<div class="font-bold text-xs text-on-surface mb-0.5">Success criteria are written</div>
<div class="text-[10px] text-on-surface-variant leading-relaxed">I have a measurable definition of "done" — not a feeling but a number or observable outcome.</div>
<div class="text-[10px] text-primary/70 mt-1 italic">💻 Code: "70% of users solve the first puzzle." 📄 Report: "Answers all 3 research questions within 20 pages."</div>
</div>
</button>
<button onclick="toggleCheck(2, this)" id="rg-item-2" class="rg-item w-full flex items-start gap-3 p-4 bg-surface-container-lowest text-left hover:bg-surface-container-low transition-colors">
<div id="rg-box-2" class="w-6 h-6 min-w-[1.5rem] rounded-md border-2 border-outline-variant flex items-center justify-center text-xs transition-all duration-200 mt-0.5">✓</div>
<div>
<div class="font-bold text-xs text-on-surface mb-0.5">Constraints are listed</div>
<div class="text-[10px] text-on-surface-variant leading-relaxed">I know what this must never do, what limits apply, and what approvals are needed.</div>
<div class="text-[10px] text-primary/70 mt-1 italic">💻 Code: "No hints visible by default; mobile-first." 📄 Report: "No proprietary client data included; verified sources only."</div>
</div>
</button>
<button onclick="toggleCheck(3, this)" id="rg-item-3" class="rg-item w-full flex items-start gap-3 p-4 bg-surface-container-lowest text-left hover:bg-surface-container-low transition-colors">
<div id="rg-box-3" class="w-6 h-6 min-w-[1.5rem] rounded-md border-2 border-outline-variant flex items-center justify-center text-xs transition-all duration-200 mt-0.5">✓</div>
<div>
<div class="font-bold text-xs text-on-surface mb-0.5">Requirements are written down</div>
<div class="text-[10px] text-on-surface-variant leading-relaxed">Requirements are externalized (not in my head) and numbered so I can trace work back to them.</div>
<div class="text-[10px] text-primary/70 mt-1 italic">Even a numbered bullet list counts. The key is: written, numbered, consulted before accepting output.</div>
</div>
</button>
</div>
</div>
<!-- Phase 2: Design -->
<div class="border-2 border-outline-variant rounded-xl overflow-hidden">
<button onclick="togglePhase(1, this)" class="w-full flex items-center justify-between p-4 bg-surface-container-lowest hover:bg-surface-container-low transition-colors text-left group">
<div class="flex items-center gap-3">
<span id="rg-phase-icon-1" class="text-xl">🗺️</span>
<div>
<div class="font-bold text-sm text-on-surface group-hover:text-primary transition-colors">Phase 2 — Design</div>
<div class="text-xs text-on-surface-variant">How is it structured? Could someone else build from this?</div>
</div>
</div>
<span id="rg-phase-toggle-1" class="text-on-surface-variant text-lg">▼</span>
</button>
<div id="rg-phase-body-1" class="border-t border-outline-variant divide-y divide-outline-variant/50">
<button onclick="toggleCheck(4, this)" id="rg-item-4" class="rg-item w-full flex items-start gap-3 p-4 bg-surface-container-lowest text-left hover:bg-surface-container-low transition-colors">
<div id="rg-box-4" class="w-6 h-6 min-w-[1.5rem] rounded-md border-2 border-outline-variant flex items-center justify-center text-xs transition-all duration-200 mt-0.5">✓</div>
<div>
<div class="font-bold text-xs text-on-surface mb-0.5">Structure is defined</div>
<div class="text-[10px] text-on-surface-variant leading-relaxed">Modules, sections, or components are planned. Each piece has a clear purpose and place.</div>
<div class="text-[10px] text-primary/70 mt-1 italic">💻 Code: Architecture diagram, module list. 📄 Report: Detailed outline with each section's purpose.</div>
</div>
</button>
<button onclick="toggleCheck(5, this)" id="rg-item-5" class="rg-item w-full flex items-start gap-3 p-4 bg-surface-container-lowest text-left hover:bg-surface-container-low transition-colors">
<div id="rg-box-5" class="w-6 h-6 min-w-[1.5rem] rounded-md border-2 border-outline-variant flex items-center justify-center text-xs transition-all duration-200 mt-0.5">✓</div>
<div>
<div class="font-bold text-xs text-on-surface mb-0.5">Tasks are broken down</div>
<div class="text-[10px] text-on-surface-variant leading-relaxed">Work is broken into small, reviewable chunks — one per prompt session. No megaprompts.</div>
<div class="text-[10px] text-primary/70 mt-1 italic">Each chunk = one role + one phase + one deliverable. If a chunk can't be reviewed in 5 minutes, it's too large.</div>
</div>
</button>
<button onclick="toggleCheck(6, this)" id="rg-item-6" class="rg-item w-full flex items-start gap-3 p-4 bg-surface-container-lowest text-left hover:bg-surface-container-low transition-colors">
<div id="rg-box-6" class="w-6 h-6 min-w-[1.5rem] rounded-md border-2 border-outline-variant flex items-center justify-center text-xs transition-all duration-200 mt-0.5">✓</div>
<div>
<div class="font-bold text-xs text-on-surface mb-0.5">Design is externalized</div>
<div class="text-[10px] text-on-surface-variant leading-relaxed">The design is written down, not held in my head. Someone else could build from it.</div>
<div class="text-[10px] text-primary/70 mt-1 italic">Gate: "If I left today, could someone else pick this up?" If no, the design needs more work.</div>
</div>
</button>
</div>
</div>
<!-- Phase 3: Build -->
<div class="border-2 border-outline-variant rounded-xl overflow-hidden">
<button onclick="togglePhase(2, this)" class="w-full flex items-center justify-between p-4 bg-surface-container-lowest hover:bg-surface-container-low transition-colors text-left group">
<div class="flex items-center gap-3">
<span id="rg-phase-icon-2" class="text-xl">🔨</span>
<div>
<div class="font-bold text-sm text-on-surface group-hover:text-primary transition-colors">Phase 3 — Build</div>
<div class="text-xs text-on-surface-variant">Give the LLM clear context. Review before proceeding.</div>
</div>
</div>
<span id="rg-phase-toggle-2" class="text-on-surface-variant text-lg">▼</span>
</button>
<div id="rg-phase-body-2" class="border-t border-outline-variant divide-y divide-outline-variant/50">
<button onclick="toggleCheck(7, this)" id="rg-item-7" class="rg-item w-full flex items-start gap-3 p-4 bg-surface-container-lowest text-left hover:bg-surface-container-low transition-colors">
<div id="rg-box-7" class="w-6 h-6 min-w-[1.5rem] rounded-md border-2 border-outline-variant flex items-center justify-center text-xs transition-all duration-200 mt-0.5">✓</div>
<div>
<div class="font-bold text-xs text-on-surface mb-0.5">Each prompt has clear context</div>
<div class="text-[10px] text-on-surface-variant leading-relaxed">The prompt includes: project purpose, current phase, what this prompt produces, input/output format, constraints, and where related work lives.</div>
<div class="text-[10px] text-primary/70 mt-1 italic">Context you skip, the LLM invents. Invented context is plausible but often wrong.</div>
</div>
</button>
<button onclick="toggleCheck(8, this)" id="rg-item-8" class="rg-item w-full flex items-start gap-3 p-4 bg-surface-container-lowest text-left hover:bg-surface-container-low transition-colors">
<div id="rg-box-8" class="w-6 h-6 min-w-[1.5rem] rounded-md border-2 border-outline-variant flex items-center justify-center text-xs transition-all duration-200 mt-0.5">✓</div>
<div>
<div class="font-bold text-xs text-on-surface mb-0.5">One chunk at a time</div>
<div class="text-[10px] text-on-surface-variant leading-relaxed">I'm generating one module/section at a time, not the whole thing at once.</div>
<div class="text-[10px] text-primary/70 mt-1 italic">Small chunks = verifiable checkpoints. Large chunks = accumulated unreviewed debt.</div>
</div>
</button>
<button onclick="toggleCheck(9, this)" id="rg-item-9" class="rg-item w-full flex items-start gap-3 p-4 bg-surface-container-lowest text-left hover:bg-surface-container-low transition-colors">
<div id="rg-box-9" class="w-6 h-6 min-w-[1.5rem] rounded-md border-2 border-outline-variant flex items-center justify-center text-xs transition-all duration-200 mt-0.5">✓</div>
<div>
<div class="font-bold text-xs text-on-surface mb-0.5">Review before proceeding</div>
<div class="text-[10px] text-on-surface-variant leading-relaxed">Each chunk is reviewed against its requirements before the next chunk is started.</div>
<div class="text-[10px] text-primary/70 mt-1 italic">Gate: "Has this been reviewed?" If no, don't start the next chunk yet.</div>
</div>
</button>
<button onclick="toggleCheck(10, this)" id="rg-item-10" class="rg-item w-full flex items-start gap-3 p-4 bg-surface-container-lowest text-left hover:bg-surface-container-low transition-colors">
<div id="rg-box-10" class="w-6 h-6 min-w-[1.5rem] rounded-md border-2 border-outline-variant flex items-center justify-center text-xs transition-all duration-200 mt-0.5">✓</div>
<div>
<div class="font-bold text-xs text-on-surface mb-0.5">Issues corrected immediately</div>
<div class="text-[10px] text-on-surface-variant leading-relaxed">Problems found in review are fixed now, not deferred to "clean up at the end."</div>
<div class="text-[10px] text-primary/70 mt-1 italic">Debt cost grows with each layer built on top of an unfixed problem.</div>
</div>
</button>
</div>
</div>
<!-- Phase 4: Verify -->
<div class="border-2 border-outline-variant rounded-xl overflow-hidden">
<button onclick="togglePhase(3, this)" class="w-full flex items-center justify-between p-4 bg-surface-container-lowest hover:bg-surface-container-low transition-colors text-left group">
<div class="flex items-center gap-3">
<span id="rg-phase-icon-3" class="text-xl">🔍</span>
<div>
<div class="font-bold text-sm text-on-surface group-hover:text-primary transition-colors">Phase 4 — Verify</div>
<div class="text-xs text-on-surface-variant">Does the output meet the requirements from Phase 1?</div>
</div>
</div>
<span id="rg-phase-toggle-3" class="text-on-surface-variant text-lg">▼</span>
</button>
<div id="rg-phase-body-3" class="border-t border-outline-variant divide-y divide-outline-variant/50">
<button onclick="toggleCheck(11, this)" id="rg-item-11" class="rg-item w-full flex items-start gap-3 p-4 bg-surface-container-lowest text-left hover:bg-surface-container-low transition-colors">
<div id="rg-box-11" class="w-6 h-6 min-w-[1.5rem] rounded-md border-2 border-outline-variant flex items-center justify-center text-xs transition-all duration-200 mt-0.5">✓</div>
<div>
<div class="font-bold text-xs text-on-surface mb-0.5">Output verified against success criteria</div>
<div class="text-[10px] text-on-surface-variant leading-relaxed">The output is checked against the measurable success criteria written in Phase 1 — not just "does it look right."</div>
<div class="text-[10px] text-primary/70 mt-1 italic">💻 Code: Does the feature meet its acceptance criteria? 📄 Report: Does it answer all stated research questions?</div>
</div>
</button>
<button onclick="toggleCheck(12, this)" id="rg-item-12" class="rg-item w-full flex items-start gap-3 p-4 bg-surface-container-lowest text-left hover:bg-surface-container-low transition-colors">
<div id="rg-box-12" class="w-6 h-6 min-w-[1.5rem] rounded-md border-2 border-outline-variant flex items-center justify-center text-xs transition-all duration-200 mt-0.5">✓</div>
<div>
<div class="font-bold text-xs text-on-surface mb-0.5">Requirements traceability confirmed</div>
<div class="text-[10px] text-on-surface-variant leading-relaxed">Every piece of work in the output traces back to a stated requirement. Nothing was added without a requirement.</div>
<div class="text-[10px] text-primary/70 mt-1 italic">Gate: Can you answer "which requirement does this serve?" for every part of the output?</div>
</div>
</button>
<button onclick="toggleCheck(13, this)" id="rg-item-13" class="rg-item w-full flex items-start gap-3 p-4 bg-surface-container-lowest text-left hover:bg-surface-container-low transition-colors">
<div id="rg-box-13" class="w-6 h-6 min-w-[1.5rem] rounded-md border-2 border-outline-variant flex items-center justify-center text-xs transition-all duration-200 mt-0.5">✓</div>
<div>
<div class="font-bold text-xs text-on-surface mb-0.5">Failure patterns checked</div>
<div class="text-[10px] text-on-surface-variant leading-relaxed">Reviewed for: duplicate content/logic, scattered structure, inconsistent coverage, always-passing checks.</div>
<div class="text-[10px] text-primary/70 mt-1 italic">These patterns are easy to miss on a quick read. Set aside time for a structured review against this list.</div>
</div>
</button>
</div>
</div>
</div>
<!-- Status Badge -->
<div id="rg-status" class="mt-6 rounded-xl p-4 text-center text-sm font-bold transition-all duration-500 bg-surface-container-lowest border border-outline-variant text-on-surface-variant">
📝 Work through all four phases before starting. Check each item as you confirm it.
</div>
</div>
<script>
(function() {
const TOTAL = 14;
const checked = new Array(TOTAL).fill(false);
const phaseOpen = [true, true, true, true];
window.togglePhase = function(index, btn) {
phaseOpen[index] = !phaseOpen[index];
const body = document.getElementById('rg-phase-body-' + index);
const toggle = document.getElementById('rg-phase-toggle-' + index);
body.classList.toggle('hidden', !phaseOpen[index]);
toggle.textContent = phaseOpen[index] ? '▼' : '▶';
};
window.toggleCheck = function(index, btn) {
checked[index] = !checked[index];
const box = document.getElementById('rg-box-' + index);
const item = document.getElementById('rg-item-' + index);
const checkmark = box;
if (checked[index]) {
box.style.backgroundColor = '#4CAF50';
box.style.borderColor = '#4CAF50';
box.style.color = 'white';
item.classList.add('opacity-70');
} else {
box.style.backgroundColor = '';
box.style.borderColor = '';
box.style.color = '';
item.classList.remove('opacity-70');
}
const count = checked.filter(Boolean).length;
const pct = Math.round((count / TOTAL) * 100);
const bar = document.getElementById('rg-progress-bar');
bar.style.width = pct + '%';
document.getElementById('rg-progress-text').textContent = count + ' of ' + TOTAL + ' complete';
document.getElementById('rg-progress-pct').textContent = pct + '%';
if (count === TOTAL) bar.style.background = '#4CAF50';
else bar.style.background = 'var(--accent)';
const status = document.getElementById('rg-status');
if (count === 0) {
status.className = 'mt-6 rounded-xl p-4 text-center text-sm font-bold transition-all duration-500 bg-surface-container-lowest border border-outline-variant text-on-surface-variant';
status.textContent = '📝 Work through all four phases before starting. Check each item as you confirm it.';
} else if (count === TOTAL) {
status.className = 'mt-6 rounded-xl p-4 text-center text-sm font-bold transition-all duration-500 bg-green-50 text-green-700 border border-green-200';
status.textContent = '🎉 All phases complete. Your foundation is solid — proceed with confidence.';
} else if (pct >= 75) {
status.className = 'mt-6 rounded-xl p-4 text-center text-sm font-bold transition-all duration-500 bg-primary/5 border border-primary/30 text-primary';
status.textContent = '✅ Good progress — ' + (TOTAL - count) + ' item' + (TOTAL - count > 1 ? 's' : '') + ' remaining before you proceed.';
} else {
const gaps = TOTAL - count;
status.className = 'mt-6 rounded-xl p-4 text-center text-sm font-bold transition-all duration-500 bg-amber-50 text-amber-700 border border-amber-200';
status.textContent = '⚠️ ' + gaps + ' item' + (gaps > 1 ? 's' : '') + ' remaining — don\'t skip ahead. The phase gates exist for a reason.';
}
};
})();
</script>

</div>


## 📝 Key Concepts

- **Failure patterns** — phantom duplicates, scattered logic, incomplete coverage, false verification. Apply to code, reports, and any LLM output.
- **LLM-as-judge** — use a second LLM to review the first's output with fresh pattern recognition. Effective for catching consistency and pattern problems; not a substitute for human judgment.
- **Three review layers** — automated checks + LLM review + human review. Each catches different problems.
- **Prompting with Purpose** — Plan First → Give Clear Context → Phase Gates → Verify Don't Accept → Correct Course Early. These are proven software discipline practices; the LLM just raises the stakes.
- **Generalize to all projects** — these practices apply whether you're building software, writing a long document, or producing any multi-part LLM output.

<div id="quiz-13-05" class="not-prose quiz-container my-12" data-quiz="13-05"></div>
