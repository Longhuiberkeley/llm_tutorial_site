---
title: "13.5 Review, Best Practices & Common Pitfalls"
description: "How to review LLM output well, the failure patterns to watch for, and V-model-inspired prompting practices for any type of project."
chapter: "Chapter 13"
pageId: "13-05"
---

## 🎯 Core Goals
- Catalogue the failure patterns that emerge from LLM-generated output across any project type.
- Introduce LLM-as-judge and the layered review framework.
- Establish five V-model-inspired prompting best practices applicable to code, reports, and any complex document.

:::callout-tldr
LLM output always needs review — always. This page covers the failure patterns to watch for, a three-layer review framework, and five prompting best practices that apply whether you're building software, writing a 50-page industry report, or producing any complex document.
:::

## 🚨 Failure Patterns (Generalized)

When LLM-assisted projects grow large enough without structure, they develop recognizable failure patterns. These apply to code, reports, research documents, and any multi-part output:

**Phantom duplicates:** The same content exists in multiple places in slightly different forms. In code: the same function written three times in three files because the LLM regenerated rather than reusing. In a report: the same analysis appearing in two sections with slightly different conclusions — and a contradiction neither version acknowledges.

**Scattered logic:** Important content ends up in the wrong place. In code: business rules buried in the UI layer. In a report: the conclusion buried in the middle, the introduction front-loaded with detail that belongs later. Structure was never defined, so structure was never enforced.

**Incomplete coverage:** Edge cases are handled differently in different parts of the output. One section of the report addresses counterarguments; another ignores them entirely. One code module validates inputs; another module doing the same task doesn't. There's no single standard because the standard was never defined.

**False verification:** Tests that always pass. Review criteria applied in a way that validates format rather than substance. A report reviewed for grammar but not for argument consistency. Code tested for the happy path but not for edge cases. The checks exist and run clean — but they're not checking the things that matter.

:::callout-error
Verification that always passes is worse than no verification — it creates false confidence. Before trusting any check, confirm it would actually detect a failure. A test that can't fail is not a test. A review that doesn't check requirements is not a review.
:::

## 🔄 LLM Reviewing LLM

One LLM can review another LLM's output — and this is more useful than it sounds.

Generating and reviewing are different tasks. A model generating content is trying to satisfy a specification. A model reviewing content is asking: "What could go wrong here? What's missing? What looks inconsistent?" Fresh pattern recognition, without the original context and its blind spots.

This is called **LLM-as-judge**. In practice: after an LLM generates a section, report, or module, you prompt a second LLM to review it — looking for problems the generating model missed.

For documents: *"You are a critical editor. Review this section for: unsupported claims, gaps in the argument, contradictions with earlier sections, and unclear writing."*

For code: *"Review this module for: security holes, hardcoded values, missing input validation, disabled linting, and code that only tests the happy path."*

Why it works: each LLM call brings fresh pattern recognition. The reviewer doesn't know what the generator was "trying" to do — it only sees what was produced. That's often exactly the perspective needed to catch what the generator missed.

That said, LLM-as-judge has real limits. It's not bulletproof — just as one human proofreader doesn't guarantee an error-free document, one LLM review doesn't guarantee a correct or complete output. Both the generating and reviewing LLMs may share the same training blind spots and reach the same wrong conclusions. This is why LLM review is Layer 2, not the final word. Human judgment remains essential for anything that matters.

:::callout-dyk
When we explored agentic patterns, we covered the self-correction loop — one agent generates, another reviews, the loop continues until the output passes. LLM-as-judge is exactly that pattern applied to project-level review. The same logic that makes self-correction useful in an agentic workflow makes it useful in your own review process.
:::

:::callout-tip
**Get more from LLM review by starting fresh.** Open a new chat session for the review step — one where the context isn't shaped by the same conversation that generated the output. Then give it a specific adversarial role: "Play devil's advocate and find every weakness in this argument." or "Act as a red-teamer — identify all the ways this could fail or be exploited." or "Act as a skeptical editor — find unsupported claims, logical gaps, and contradictions." These roles push the LLM away from the "this seems right" instinct toward actively hunting for problems. This technique can be applied at any stage: before you start building (to stress-test your design), after each section (to catch issues early), or at the end before delivery.
:::

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

## ✅ Five V-Model-Inspired Prompting Best Practices

These practices are drawn from the same logic as the V-model phase gates — applied to how you work with LLMs prompt by prompt. They work for coding projects, long documents, research, and any multi-part LLM-assisted work.

---

**Best Practice 1 — Plan First**

Before opening a prompt window, answer three questions: What phase am I in (define, design, build, verify)? What specifically am I trying to produce right now? What does good output look like for this specific deliverable?

The most expensive prompts are the ones run in the wrong phase. Generating implementation before the design is done produces output you'll throw away. Writing section 5 before section 2's argument is resolved creates a contradiction you'll have to untangle later. Know what phase you're in before you type.

---

**Best Practice 2 — Give the LLM Clear Context**

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

**Best Practice 3 — Phase Gates Before Moving On**

Before moving to the next section, module, or feature: can you answer yes to both of these questions?

1. Does this output meet the acceptance criteria from the Define phase?
2. Can you trace this output back to a stated requirement?

If the answer to either is no, don't proceed. The most common source of technical debt — in code, reports, and any complex output — is proceeding when the gate hasn't been passed, and only discovering the problem three phases later when it's expensive to fix.

---

**Best Practice 4 — Verify, Don't Accept**

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

**Best Practice 5 — Correct Course Early**

LLM-assisted debt accumulates faster than traditional debt. The cost of fixing a problem grows with every layer built on top of it.

When you identify a problem during review, fix it before proceeding to the next phase. Don't accept and continue. Don't defer to "clean up at the end." The end is the most expensive time to clean up.

In practice: if Phase 3 review reveals that the design from Phase 2 was wrong, go back to Phase 2 and fix it. If a generated section contradicts an earlier section, resolve the contradiction before writing the next section. The discipline of correcting early is what keeps a project's accumulated output coherent as it grows.

:::callout-dyk
These practices generalize to non-coding projects explicitly. Writing a 30-page industry report: Phase 1 (define) = what question does this answer, for whom? Phase 2 (design) = outline, argument structure, section plan. Phase 3 (build) = one section at a time, reviewed before moving to the next. Phase 4 (verify) = does each section serve the argument and answer the questions from Phase 1? The same gates apply. The same discipline pays off.
:::

:::visual{name="visual-review-gates"}

## 📝 Key Concepts

- **Failure patterns** — phantom duplicates, scattered logic, incomplete coverage, false verification. Apply to code, reports, and any LLM output.
- **LLM-as-judge** — use a second LLM to review the first's output with fresh pattern recognition. Effective for catching consistency and pattern problems; not a substitute for human judgment.
- **Three review layers** — automated checks + LLM review + human review. Each catches different problems.
- **Five best practices**: Plan First → Give Clear Context → Phase Gates → Verify Don't Accept → Correct Course Early.
- **Generalize to all projects** — these practices apply whether you're building software, writing a long document, or producing any multi-part LLM output.

:::quiz{id="13-05"}
