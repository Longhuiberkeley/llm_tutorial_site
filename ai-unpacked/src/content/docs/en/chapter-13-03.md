---
title: "13.3 From Vibe Coding to Structured Development"
description: "Why the natural default when using LLMs is to build fast and loose — and the structured frameworks that are the antidote."
chapter: "Chapter 13"
pageId: "13-03"
---

## 🎯 Core Goals
- Frame the spectrum of AI-assisted development — from pure vibe coding to structured, human-led work.
- Define vibe coding and explain why it emerges naturally from LLM-assisted work.
- Show how speed without structure produces drift across any type of output — not just code.
- Introduce SPEC Kit and BMAD as practical structured frameworks that anchor work to real needs.

<div class="not-prose callout callout-tldr">

Vibe coding feels right. Speed is intoxicating. But generating fast without structure is how impressive-looking projects become unmaintainable ones. Structured frameworks aren't bureaucracy — they're the scaffolding that makes speed sustainable.

</div>

## 📊 The AI-Assisted Development Spectrum

Not all LLM-assisted work is the same. There is a spectrum.

**One end — pure vibe coding.** Andrej Karpathy, one of the researchers who popularized the term, described it as fully giving in to the vibes, embracing exponentials, and forgetting that the code even exists. In this mode, the programmer guides, tests, and gives feedback rather than writing code manually. The LLM does the writing; the human does the directing. Karpathy captured the spirit in an earlier observation: the hottest new programming language is English — the idea that LLMs had become capable enough that natural language instruction could replace explicit code.

**The other end — AI-assisted craftsmanship.** The LLM is a tool you consult rather than a system you delegate to. Tab completion, targeted suggestions, and occasional code generation assist your work — but you understand every decision, you wrote most of what's there, and the LLM never had authorship of any substantial component. Quality reflects your judgment; the LLM amplifies it.

**The middle — structured AI development.** You use the LLM heavily — sometimes for entire modules or sections — but with requirements written first, clear context in every prompt, and genuine review before acceptance. You act more like a manager or architect than a line-writer: directing the work, checking outputs, making decisions, and correcting course. This is where frameworks like SPEC Kit and BMAD live.

Most practical work lands in the middle. The question isn't whether to use LLMs — it's how much structure and review you bring to that use.

## 🎸 What Is Vibe Coding?

**Vibe coding** is building primarily by prompting an LLM, iterating quickly on outputs, and accepting results that seem to work — without deeply understanding what's been built or verifying it against a stated need.

The name comes from software development, but the pattern applies to any LLM-assisted work. Writing a 40-page industry report by generating section after section without a clear argument structure. Building an application by adding features as they occur to you. Producing a research document by prompting for content without a defined research question.

In each case, the LLM is helpful. The output looks good. The problem emerges later.

The core issue is **drift**: without a clear specification, you build what seems interesting at the moment rather than what was actually needed. The LLM doesn't know your goals — it optimizes for plausible responses to your prompts. If the prompts aren't anchored to requirements, neither is the output.

When a carpenter gets a nail gun, the first reaction isn't to plan more carefully — it's to put nails in everything, fast. LLMs do this to projects. The ability to generate in seconds creates an intoxicating pace. Teams move quickly, demos look impressive, and then someone asks: "Does this actually solve the problem we set out to solve?"

<div class="not-prose callout callout-dyk">

Software engineer Ward Cunningham coined the term "technical debt" in 1992 to describe the cost of choosing quick-and-easy solutions now over better approaches that take longer. Vibe coding accumulates technical debt at an accelerated rate — but the concept applies equally to reports, documents, and research. Phantom sections that repeat the same analysis in different words. An argument structure that contradicts itself by section 8. The interest on that debt is paid when you try to edit, publish, or act on the output.

</div>

## 🏎️ The Velocity Trap: Quality Degradation

The danger of vibe coding doesn't appear immediately. It appears on a delay.

**Week 2:** Everything is great. Features or sections appear quickly. The project feels alive and productive.

**Week 6:** Adding something new takes longer than expected. Changing one section breaks the logic in another. A new feature creates three new bugs. The project starts to feel "sticky."

**Week 12:** What should be a one-day addition takes three days of archaeology. You spend more time understanding what was built than building new things.

This pattern is consistent across project types. A 50-page industry report vibe-coded over a month looks impressive at draft stage. By the time it needs editing — when a key argument has to change, or a new finding needs to be incorporated — the lack of underlying structure makes every edit a risk. Changing one section reveals inconsistencies in two others.

The solution isn't to stop using LLMs. It's to **invest in structure before generating**. Design the outline, define the argument, specify the requirements — then use LLMs to produce content within that structure.

## 📋 The Antidote: Structured Frameworks

Several frameworks have emerged specifically to address vibe coding in LLM-assisted development. They share a common approach: specify the work clearly before generating any of it.

### SPEC Kit

The **SPEC Kit** is an open-source toolkit that enables Spec-Driven Development (SDD). Instead of generating from vague prompts, it uses structured markdown files — `spec.md`, `plan.md` — to give LLM agents clear context, requirements, and constraints.

The SPEC Kit workflow defines a clear lifecycle: set a **constitution** (the project's rules and principles), write a **specification**, create a **technical plan**, generate **tasks**, then **implement**. Each phase is an explicit handoff — you can't skip ahead without the prior phase's output.

At its core is a requirements template that forces specificity. For every capability you want to build or write:

---

**As a** [USER ROLE]
**I need** [CAPABILITY]
**So that** [OUTCOME]

**INPUT:** What goes into this feature or section?
**OUTPUT:** What comes out? What exactly should it produce?
**CONSTRAINTS:** What limits and rules apply? What must it never do?
**SUCCESS CRITERIA:** How do we know it's working or done?

---

**Example:** "As a customer support agent, I need the LLM to draft email responses, so that I can respond to customers faster. Input: Customer email + company policy document. Output: A draft response ready to edit and send. Constraints: Must cite specific policy when making claims; no refunds over $100 without manager approval. Success: 80% of drafts are usable with minor edits or no edits."

Notice what completing this template requires: you must know your user, your input, your expected output, your rules, and your success metric. That is exactly the information you need before generating anything — and exactly what vibe coding skips.

<div class="not-prose callout callout-error">

A common mistake: writing requirements that describe the technology ("use this LLM to analyze emails") instead of the business need ("reduce average response time from 4 hours to 30 minutes"). Requirements should describe the problem. The solution can change — the problem defines success.

</div>

### BMAD

**BMAD** (Build More Architect Dreams) is a free open-source agile framework for LLM-assisted development. Rather than one agent doing everything, BMAD organizes work into a multi-agent team: product managers, architects, developers, and reviewers — each with a bounded role. Giving each agent a clear, limited responsibility reduces hallucinations and improves precision across the full development lifecycle.

The BMAD mindset is a question chain that every capability must answer before it gets built:

1. **Why build this?** — What problem does it solve?
2. **What does success look like?** — A measurable outcome, not a feeling.
3. **Who benefits?** — Which user or team, and how?
4. **What's the cost of not building this?** — Is it urgent or nice-to-have?

SPEC Kit and BMAD work together: SPEC Kit captures the requirements for what to build. BMAD ensures each item was worth specifying in the first place.

### Other Frameworks

GSD, Superpowers, and a growing ecosystem of similar frameworks take the same root approach: define before generating, structure before speed. The specific tool matters less than the discipline of using one. Any framework that forces you to answer "what am I building, for whom, and how will I know it's done" before opening a prompt window will produce better results than none.

## 📝 Key Concepts

- **The spectrum** — LLM-assisted work ranges from pure vibe coding (LLM writes, human guides) to structured AI development (LLM generates within defined specs, human directs). Most practical work is in the middle.
- **Vibe coding** = generating output by prompting quickly and accepting what seems to work, without anchoring to requirements. Applies to code, reports, documents — any LLM output.
- **Drift** — without a spec, you build what's interesting rather than what's needed. Speed hides the problem until it's expensive to fix.
- **SPEC Kit** = open-source Spec-Driven Development toolkit. Uses a structured template (user / capability / outcome / input / output / constraints / success criteria) to anchor every feature to a real need.
- **BMAD** = multi-agent development framework. Organizes LLM work into specialist roles (PM, architect, developer, reviewer) to reduce hallucinations and improve quality.
- **Any consistent framework beats none** — what matters is the discipline of answering "what, for whom, how do I know it's done" before generating.

<div id="quiz-13-03" class="not-prose quiz-container my-12" data-quiz="13-03"></div>
