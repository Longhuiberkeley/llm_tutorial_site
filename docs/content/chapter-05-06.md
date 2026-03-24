---
title: "5.6 Privacy — What Never to Paste"
description: "Protecting your data when using LLMs."
chapter: "Chapter 5"
pageId: "05-06"
---

## 🎯 Core Goals
- Understand the risks of pasting sensitive data into LLMs.
- Apply a simple mental model for deciding what is safe to share.

:::callout-tldr
Everything you type into an LLM is sent to external servers. Even with trustworthy providers, your data can be retained, used for training, or inadvertently exposed. The same instincts that govern what you'd include in an email should govern what you paste into an LLM.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-privacy-check"}

## 📝 Key Concepts

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

:::quiz{id="05-06"}
