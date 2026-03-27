---
title: "13.4 Building the Right Thing: Requirements Traceability"
description: "Every feature should trace back to a requirement — here's how to ensure you're building what was actually needed."
chapter: "Chapter 13"
pageId: "13-04"
---

## 🎯 Core Goals
- Distinguish between building things right and building the right things.
- Define requirements traceability and the chain from requirement to verification.
- Introduce feature drift and how to detect it in LLM-assisted projects.

:::callout-tldr
It's easy to build things. It's harder to build the right things. Requirements traceability is the practice of ensuring every piece of work can be traced back to a stated need — so you can prove you're solving real problems, not just generating output. You don't need to run a formal tracking system to benefit from this — the mindset alone changes how you make decisions.
:::

## 🏗️ Two Ways to Fail

Every project has two distinct ways to fail:

1. **Building things right but building the wrong things** — high-quality output that doesn't serve the actual need. The code is clean, the report is well-written, the feature works perfectly — but it doesn't solve the problem it was supposed to solve.

2. **Building the right things, but building them wrong** — the correct problem is targeted, but the output is buggy, inconsistent, or incomplete.

Both failures matter. But LLM-assisted projects are uniquely vulnerable to the first failure mode.

The second failure mode is often visible. You can see bad code. A reviewer catches the error. Tests fail. Someone notices the report contradicts itself. The feedback loop is fast.

The first failure mode is invisible. The code works. The report reads well. The feature is impressive. The problem is that none of it serves the goal that was supposed to be served — and no one can see that from looking at the output alone. You only discover it when the business outcome you were working toward doesn't materialize.

LLMs accelerate both failure modes equally. The question is: which one are you managing for?

## 🔗 What Is Requirements Traceability?

Requirements traceability is a discipline for ensuring the first failure mode can't hide.

The idea is a **chain** connecting every piece of work back to the need it serves:

**Requirement → Design Decision → Implementation → Verification**

Each requirement has an ID. Every design decision traces to a requirement ("this module exists because of R4"). Every implementation item traces to a design decision. Every verification test or check traces to a requirement.

If you pick up any piece of work in the project and ask "which requirement does this serve?" — requirements traceability means you can answer.

:::visual{name="visual-requirements-trace"}

This applies beyond software:
- In a research report: each section traces to a research question defined in Phase 1.
- In a product launch: each feature traces to a user need in the brief.
- In a training course: each module traces to a learning objective.

If you can't complete the chain for a piece of work, that's a signal — not a failure. It means asking: "Why are we doing this? Which stated need does it serve?"

:::callout-dyk
This practice has roots in industries where getting the wrong thing built is very expensive — aerospace, medical devices, automotive software. The principle that every line of implementation should be traceable to a requirement was formalized decades before LLMs. The reason it matters even more now: LLMs generate so much, so fast, that untraced work can accumulate faster than ever before.
:::

## 🔍 Two Conversations

Consider two versions of the same project review:

**Without traceability:**

"We added user profile customization last sprint because it seemed like a nice feature." Does it serve the onboarding goal (R1)? Or the retention goal (R7)? Does it conflict with the priority to ship the core use case (R3) first? There's no way to tell. The team is guessing at whether the work was the right call.

**With traceability:**

"We added user profile customization to implement R7 — the requirement that users must be able to set notification preferences, per the stakeholder session on February 12." The business justification is clear. You can evaluate whether R7 was the right priority at this moment. You can measure success against R7's success criteria. You can defend the decision in a review.

The difference isn't just record-keeping. It's the ability to make and evaluate decisions rationally rather than based on what felt right at the time.

## 🌊 Feature Drift in LLM Projects

LLMs are very good at generating plausible extensions. Ask an LLM to "improve the application" and it will generate improvements — features that look useful, that work correctly, that seem like good additions.

What the LLM cannot tell you is which requirement each improvement serves.

**Feature drift** is the gradual accumulation of work that is well-executed but not connected to a stated need. Each individual item looks reasonable. The aggregate picture is a project that has moved away from its original purpose without anyone deciding to change course.

The detection mechanism is simple: before accepting any generated output, ask "which requirement does this serve?" If you can't name one, the work needs to be justified before it's accepted — not after.

Here is the scenario in plain terms: you share your project with friends on the weekend and they come back with 50 suggestions. Now what? Without a requirements framework, the default is to build the ones that seem most interesting, or the ones from whoever was most persuasive. With a requirements mindset, you have a filter: which of these suggestions connect to an existing requirement? Which ones reveal a real gap that should be added formally? Which ones are good ideas but belong to a later phase — not now? You don't have to build all 50, and you don't have to reject all 50. The framework gives you a principled way to decide.

This isn't about rejecting good ideas. It's about making the decision consciously. A good idea that doesn't serve an existing requirement is either:
- Evidence that a new requirement should be added (update the chain, then proceed), or
- A distraction that should be deferred to a later phase.

Either way, the decision is made explicitly rather than absorbed implicitly through the accumulated output. Plans change — requirements get updated, priorities shift, scope evolves. That's expected. The mindset of traceability doesn't demand a perfect, unchanging plan. It demands conscious decisions. When a requirement changes, update the chain. When a new feature is added, add the requirement. The discipline is in making each decision deliberately, not in resisting change.

:::callout-error
A common mistake: treating requirement changes as a reason to abandon traceability. "The requirements changed so fast we couldn't track them" usually means there was no requirements process in the first place — changes were being made implicitly through code and output rather than explicitly in requirements. Adding traceability during a fast-moving project is harder, but adding it late is still valuable: it forces a retroactive justification of every existing piece of work.
:::

## 📄 The Building Blocks: User Stories and PRDs

Two tools make requirements traceability practical:

**User stories** are single requirements written from the user's perspective:
*"As a [user], I want to [do something] so that [I achieve some outcome]."*

They're short by design. Each story is one need, one user, one outcome. A project's requirements become a list of user stories — each one numbered, each one traceable.

**Product Requirement Documents (PRDs)** capture a larger set of requirements in one place: the purpose of the project, the users it serves, each capability required, the constraints, and the acceptance criteria. A PRD is a living document — updated when requirements change, consulted when making decisions.

You don't need either to be formal. A numbered list of requirements in a shared document is enough to establish a chain. What matters is that requirements are externalized (written down, not held in someone's head), numbered, and consulted before work is accepted.

## 📝 Key Concepts

- **Two failure modes** — building the wrong thing (invisible) and building it wrong (visible). LLMs accelerate both; traceability addresses the first.
- **The chain** — Requirement → Design Decision → Implementation → Verification. Every piece of work should complete this chain.
- **Feature drift** — plausible-looking work accumulates without connecting to stated needs. Before accepting LLM output: "which requirement does this serve?"
- **User stories** — single requirements in the format "As a [user], I want [action] so that [outcome]."
- **PRDs** — living documents capturing the full requirements set; updated when requirements change, consulted when making decisions.

:::quiz{id="13-04"}
