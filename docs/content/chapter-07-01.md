---
title: "7.1 The Lawyer Case Study — When Context Isn't Enough"
description: "A real-world scenario that reveals why retrieval is needed: the context window can't hold 20 years of case files."
chapter: "Chapter 7"
pageId: "07-01"
---

## 🎯 Core Goals
- Establish the fundamental problem: too much knowledge, not enough context window.
- Motivate RAG as a solution through a relatable real-world scenario.

:::callout-tldr
Even a massive context window can't hold 20 years of a lawyer's case files. You need a smarter way to pull in only the most relevant information — not everything at once.
:::

## Meet Sarah the Lawyer

Sarah has practiced law for 20 years. That's **500+ cases** — contracts, disputes, settlements, appeals. A new client walks in with a construction delay claim.

"Have you dealt with something like this before?"

Sarah has. Probably several times. But *which* cases? Case 137? Case 284? Case 401?

**The problem:** Even brief summaries of 500 cases exceed 200K tokens. You simply can't paste all of that into a prompt and ask an LLM to find the relevant ones. It won't fit. And even if it did, attention degrades in long contexts — important details buried in the middle get missed.

:::visual{name="visual-lawyer-case"}

## The Naive Solutions (And Why They Break)

Before we get to the right answer, let's rule out the obvious wrong ones:

**Option 1 — Dump everything in.**
The context window isn't big enough. And even if you used a 1M-token model, attention fades across such long contexts — the truly relevant case might not even register.

**Option 2 — Keyword search.**
Sarah types "construction delay." Problem: the winning case from 2019 was titled *"contractor failure to meet schedule"* — no match. Keywords miss synonyms, paraphrasing, and legal nuance.

**Option 3 — Have the LLM read every case one by one.**
This works, but 500 cases × time and cost per read = painfully slow and expensive.

## The Question That Drives Everything

What if the LLM could automatically find only the **3–5 most relevant cases** — by *meaning*, not keywords — and read only those?

That's the promise of Retrieval-Augmented Generation. The next pages build up exactly how it works.

:::callout-dyk
This challenge isn't unique to law. Any organization with more knowledge than fits in a context window faces the same problem: company policies, research papers, customer support tickets, product documentation, HR manuals. The constraint is universal.
:::

## 📝 Key Concepts

- **Context ceiling:** Even large context windows have limits — more knowledge than fits means you must choose
- **Keyword search misses meaning:** Synonyms, paraphrasing, and domain jargon all defeat exact-match search
- **The retrieval gap:** You need selective fetching — grab only what's relevant, not everything
- **RAG = the solution:** Retrieve the right documents, then generate from them

:::quiz{id="07-01"}
