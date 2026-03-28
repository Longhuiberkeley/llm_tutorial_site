---
title: "5.5 Privacy — What Never to Paste"
description: "Protecting your data when using LLMs."
chapter: "Chapter 5"
pageId: "05-05"
---

## 🎯 Core Goals
- Understand why LLMs create a stronger temptation to share sensitive data — and why that matters.
- Apply a simple mental model for deciding what is safe to share.

:::callout-tldr
LLMs are remarkably useful, and that usefulness is exactly what makes privacy harder. The easier it is to get help, the easier it is to paste something you shouldn't. At its core, the rule is the same as it's always been: don't hand sensitive data to external services you don't fully control.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-privacy-check"}

## 📝 Key Concepts

- **A new temptation:** Unlike a search engine where you type a query, an LLM conversation flows naturally — it feels like talking to a knowledgeable colleague. That friction-free experience makes it tempting to paste in a client email, a patient record, or internal financials "just to get help." The helpfulness is real, but so is the risk.
- **Same old rule, new context:** The underlying principle hasn't changed. You wouldn't email patient data to a random consultant or share trade secrets with a stranger on the phone. Pasting that same data into an LLM chat is equivalent — your data leaves your environment and lands on someone else's infrastructure.
- **The Email Heuristic:** Before pasting anything into an LLM, ask yourself: *"Would I be comfortable including this in a work email sent to someone I don't fully trust?"* If the answer is no — don't paste it.
- **NEVER Paste:** Passwords, API keys, private keys, credit card numbers, SSNs, medical records, trade secrets, internal financial data, or client/patient personally identifiable information (PII).
- **OK to Paste:** Public information, your own non-confidential writing, general questions, anonymized or sanitized data, code that doesn't contain secrets.
- **Sanitize Before Sharing:** If you need help with a real document, remove the sensitive parts first. Replace names with "Person A", figures with "X", and internal references with generic labels. The LLM can still help with structure and language.

:::callout-error
**The Samsung Incident:** Samsung engineers pasted proprietary source code into ChatGPT for help debugging. That code was potentially used in training data. Samsung had to ban the use of external LLMs company-wide shortly after. LLMs introduce a new vector for accidental data leakage — apply good cybersecurity hygiene.
:::

:::callout-dyk
Even "Enterprise" plans that promise data privacy and opt-out from training aren't foolproof. Your data still travels over the internet, is processed on external infrastructure, and is subject to that provider's security posture. Treat LLMs like a trusted but external contractor — give them what they need to do the job, not your house keys.
:::

:::quiz{id="05-05"}
Which of these is safe to paste into a public LLM chat?
- [ ] A customer's email containing their personal details
- [ ] Your company's API keys for a quick debugging session
- [x] A publicly available article you want summarized
:::
