---
title: "5.2 Be Explicit — No Mind Reading"
description: "State your requirements clearly."
chapter: "Chapter 5"
pageId: "05-02"
---

## 🎯 Core Goals
- Learn why "more is more" when it comes to prompt instructions.
- See how specificity leads to dramatically better results.

:::callout-tldr
If you don't specify it, the LLM will guess — and it will guess based on the most common pattern it's seen, not what *you* actually need. The more explicit you are, the less room there is for a wrong assumption.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-be-explicit"}

## 📝 Key Concepts

- **Specify Length:** Instead of "Make this short," say "Keep it under 100 words."
- **Specify Tone:** Instead of "Be professional," say "Write in the style of a respectful business email."
- **Specify Audience:** Instead of "Explain quantum physics," say "Explain quantum physics to a 12-year-old with no science background."
- **Specify Format:** Instead of "List the items," say "Give me exactly 3 options, each in a single bullet point."
- **Use Negative Constraints:** Tell the LLM what NOT to do — e.g., "Do not apologize," "Do not include a summary at the end," "Do not use corporate jargon."

:::callout-dyk
**The 6W Framework for better prompts:** When stuck on why your result isn't right, ask yourself if you covered: **Who** is the audience? **What** exactly do you want? **When/Where** is the context? **Why** does this matter? **How** should it be formatted? More answered Ws = better output.
:::

:::callout-dyk
**How do you improve a bad prompt?** Add more context. The most common reason an LLM gives a generic or off-target response is that the prompt was ambiguous. Read your own prompt as if you knew nothing about the task — would the instruction be clear to a stranger? If not, add more detail.
:::

:::quiz{id="05-02"}
