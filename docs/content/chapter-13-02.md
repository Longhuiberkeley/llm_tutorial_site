---
title: "13.2 Frameworks in Practice — SPEC Kits, BMAD, and More"
description: "Structured requirement frameworks prevent AI projects from drifting into 'cool stuff' instead of solving real problems."
chapter: "Chapter 13"
pageId: "13-02"
---

## 🎯 Core Goals
- Explain why structured frameworks matter specifically for AI projects (speed creates chaos without structure).
- Introduce the SPEC Kit as a practical requirements template.
- Introduce BMAD as a business-alignment mindset.
- Emphasize that having SOME structure matters more than which specific framework you choose.

:::callout-tldr
LLMs make building fast — dangerously fast. Without structure, AI projects drift toward "cool stuff we built" instead of "problems we solved." Frameworks like the SPEC Kit and BMAD ensure that every feature traces back to a real business need.
:::

## ⚡ Why Speed Creates Risk

When a carpenter gets a new nail gun, the first reaction isn't to think more carefully about where to put nails. It's to put nails in everything, fast.

LLMs do this to software developers. The ability to generate functional code in seconds — features that would have taken days to write — creates an intoxicating pace. Teams move quickly. They demo impressive things. And then, three months in, they look at what they've built and ask: "Does this actually solve anything?"

This is the AI project drift problem. Without a framework to anchor decisions to business outcomes, the natural tendency is to build what's interesting rather than what's needed. Frameworks aren't bureaucracy — they're the tool that keeps speed pointed in the right direction.

:::callout-dyk
"Move fast and break things" made sense when fixing broken things was cheap. In AI projects, broken things can mean bad outputs reaching customers, unexpected costs accumulating, and technical debt that's hard to diagnose because no one wrote the logic — the LLM generated it.
:::

## 📋 The SPEC Kit Template

The SPEC Kit is a structured requirements template that forces clarity before any building starts. For every capability you want to build, fill out this template:

**As a** [USER ROLE]
**I need** [CAPABILITY]
**So that** [OUTCOME]

**INPUT:** What goes into this feature? (What data, text, files, context?)
**OUTPUT:** What comes out? (What exactly should it produce?)
**CONSTRAINTS:** What are the limits and safety rails? (What must it never do? What approvals are needed?)
**SUCCESS CRITERIA:** How do we know it's working? (What measurable threshold defines success?)

**Example:** "As a customer support agent, I need AI to draft email responses, so that I can respond to customers faster. Input: Customer email + company policy document. Output: A draft response ready to edit and send. Constraints: Must cite specific policy when making claims; no refunds over $100 without manager approval. Success: 80% of drafts are usable with minor edits or no edits."

Notice what this template forces: you can't write it without knowing your user, your input, your output, your rules, and your success metric. That's exactly the information you need before writing a single line of code.

:::callout-error
A common mistake: writing requirements that describe the technology ("use GPT-4 to analyze emails") instead of the business need ("reduce average response time from 4 hours to 30 minutes"). Requirements should describe the problem, not the solution. The solution can change; the problem defines success.
:::

## 🎯 BMAD: Business-Aligned Development

BMAD (and similar approaches to business-aligned development) is less a specific template and more a mindset: every feature should trace back to a measurable business outcome.

The BMAD question chain:
1. **Why build this?** — What business problem does it solve?
2. **What does success look like?** — How would you know if it worked? (Metric, not feeling)
3. **Who benefits?** — Which user or team, and how?
4. **What's the cost of NOT building it?** — Is this urgent or nice-to-have?

This isn't unique to AI projects — good product teams have always done this. But AI projects need it more because the technology is so capable that teams will build impressive things that don't matter. BMAD keeps the question "should we build this?" in the room.

**The SPEC Kit and BMAD work together:** SPEC Kit captures the requirements for each feature. BMAD ensures each feature was worth specifying in the first place.

:::visual{name="visual-spec-kit"}

## 📝 Key Concepts

- **Speed without structure creates drift** — fast building without clear requirements produces impressive demos and unclear value.
- **SPEC Kit** = a structured template capturing user, capability, outcome, input, output, constraints, and success criteria.
- **BMAD** = tracing every feature to a business outcome — why build this, and how do we measure success?
- **Requirements describe problems, not solutions** — the technology can change; the business need defines success.
- **Any consistent framework is better than none** — the specific format matters less than the discipline of using it.

:::quiz{id="13-02"}
