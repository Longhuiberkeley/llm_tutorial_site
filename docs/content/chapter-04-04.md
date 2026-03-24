---
title: "4.4 Context Poisoning — What the LLM Believes, It Believes Deeply"
description: "How false information in a conversation history corrupts the LLM's future responses."
chapter: "Chapter 4"
pageId: "04-04"
---

## 🎯 Core Goals
- Understand that false information introduced into a conversation becomes "sticky."
- Learn why you can't just tell an LLM to forget something you've already told it.

:::callout-tldr
Context poisoning occurs when false information, hallucinations, or errors are introduced into the conversation history, causing the LLM to behave incorrectly from that point on. Once it believes something is true, it keeps building on that belief — and telling it to "forget" rarely works.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-forget-illusion"}

## 📝 Key Concepts

- **The Conversation is the LLM's Entire Memory:** Every time you send a message, the LLM re-reads the full conversation history from scratch. If that history contains wrong information, it gets re-read and re-believed every single time.
- **The "Stuck Belief" Problem:** Imagine you tell an LLM: *"Our company's revenue last year was $5 billion."* Even if that's wrong, the LLM will now use that figure confidently for every follow-up question — forecasts, ratios, comparisons, all of it.
- **You Can't Just Say "Forget That":** If you type *"ignore what I said about the $5 billion"*, the LLM sees both the original claim AND the correction in its history. It often gets confused about which version to trust — or simply continues using the poisoned figure.
- **Hallucinations Compound:** If the LLM itself hallucinated a "fact" earlier in the conversation, that hallucination now sits in the transcript. Future responses treat the hallucinated fact as established context and build on it — creating a compounding chain of errors.
- **Security Risk:** Intentional context poisoning is also an attack vector — someone plants a false "document" or message in a pipeline feeding an LLM, hoping to manipulate its outputs.

:::callout-error
**Once it's in, it's in.** Most data quality problems end when you fix the input. Not here. Once bad data is in an LLM's conversation history, it rides along for the rest of the session. When you notice things going off-track — wrong facts, compounding errors — don't try to patch it. Start a fresh conversation with a clean slate.
The safest rule: treat each important LLM session like a blank whiteboard. Start fresh, provide the correct information upfront, and you avoid carrying old mistakes forward.
:::


:::quiz{id="04-04"}
