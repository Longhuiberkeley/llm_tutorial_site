---
title: "5.3 Negative Constraints"
description: "What NOT to do."
chapter: "Chapter 5"
pageId: "05-03"
---

## 🎯 Core Goals
- Learn why telling an AI what *not* to do can sometimes backfire.
- Master the art of affirmative constraints.

:::callout-tldr
Telling an AI "Do not think of a pink elephant" almost guarantees it will think of a pink elephant. It's usually better to tell the AI exactly what *to* do instead of what *not* to do.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-negative-constraints"}

## 📝 Key Concepts

- **The Pink Elephant Problem:** Because LLMs generate words based on the tokens in your prompt, if you include the word "apologize" in a negative constraint (*"Do not apologize"*), you are actively increasing the probability of the AI generating an apology!
- **Affirmative Phrasing:** Instead of *"Don't write long paragraphs"*, write *"Write exclusively in single sentences."* Instead of *"Don't use jargon"*, write *"Explain this to a 5-year-old."*
- **When to use Negative Constraints:** Negative constraints are best used when the AI keeps making a very specific, stubborn mistake. Use them as a last resort "patch."

:::callout-error
Avoid giving the AI a laundry list of 20 things *not* to do. It dilutes the AI's attention and makes the prompt confusing. Stick to 1 or 2 critical negative rules if necessary.
:::

:::quiz{id="05-03"}