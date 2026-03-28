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

:::callout-tldr
Most people who use LLMs to build things aren't project managers — and that's fine. But skipping PM basics is how projects fail. You don't need a certification. You need to know: what am I building, for whom, how will I know it's done, and how do I check my work before moving on.
:::

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

:::callout-dyk
Good professionals in any field use this logic without thinking about it. A lawyer drafts a section, reviews it against the brief, then moves to the next. A chef tastes before serving. An editor checks a chapter against the outline. Phases and checks are how careful work gets done — not a software invention.
:::

:::visual{name="visual-pm-101"}

## 🔄 Agile in Plain English

Agile is a reaction to the limits of planning everything upfront. It says: build in small iterations, get feedback early, adjust as you go.

The core idea is a **sprint** — a short work cycle, typically one to two weeks. Each sprint produces something reviewable: a working feature, a completed section, a testable prototype. You review what was built, decide what's next, and adjust.

This maps naturally to LLM-assisted work:
- Generate a chunk
- Review it against your requirements
- Decide what to add or change
- Move to the next chunk

The tension between Agile and the V-model is productive: **Agile gives you iteration speed; the V-model gives you verification discipline.** Use both. Iterate quickly, but verify at each iteration rather than accumulating unreviewed output.

:::visual{name="visual-agile-sprint"}

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

:::callout-error
The most expensive mistake in any project is starting Phase 3 (Build) before Phase 1 (Define) is complete. When requirements become clear after substantial work is done, features get rebuilt. The cost of late requirement discovery is proportional to how much was built before it.
:::

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

:::quiz{id="13-02"}
