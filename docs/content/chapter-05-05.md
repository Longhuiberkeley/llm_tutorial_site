---
title: "5.5 Privacy 🔒"
description: "What never to paste (Secrets, PII)."
chapter: "Chapter 5"
pageId: "05-05"
---

## 🎯 Core Goals
- Establish strict boundaries for what is safe to share with an LLM.
- Understand the difference between Consumer AI and Enterprise AI privacy.

:::callout-tldr
When you use a free AI tool on the internet, assume anything you type could be read by a human reviewer or used to train the next version of the AI. Keep your secrets secret!
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-privacy-lock"}

## 📝 Key Concepts

- **The Training Risk:** Free models (like standard ChatGPT or free Claude) often use your chat history to train future models. This means your secret recipe or code could theoretically be spat out to a random user next year!
- **Never Paste These:**
  1. **PII (Personally Identifiable Information):** Customer names, addresses, social security numbers.
  2. **Secrets:** API keys, passwords, proprietary financial data.
  3. **Unreleased IP:** Source code for unreleased products.
- **Enterprise Mode:** Most AI companies offer paid "Enterprise" or "API" tiers where they legally guarantee they will *not* use your data for training. If your company uses one of these, the rules are much safer!

:::callout-error
Scrubbing data is your responsibility! If you want the AI to analyze a spreadsheet, manually change "John Doe" to "Customer A" before pasting it in.
:::

:::quiz{id="05-05"}