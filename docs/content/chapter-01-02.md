---
title: "1.2 Word Distance - Which Words Are Close?"
description: "Introduce the concept of 'distance' between words and how similar words are 'close' in meaning-space."
chapter: "Chapter 1"
pageId: "01-02"
---

## 🎯 Core Goals
- Introduce the concept of "distance" between words.
- Understand that similar words are "close" in meaning-space.
- See how LLMs use this distance to understand relationships.

:::callout-tldr
Words have "distance" between them based on meaning. Similar words like "lion" and "tiger" are close. Unrelated words like "lion" and "banana" are far.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-iq-test-words"}

## 📝 Key Concepts

:::callout-error
Just for the record: "Meaning-space" isn't the proper technical term. Data scientists use jargon like "Semantics", "Vector Embeddings", and "Metric Space". But for our intuition, "Meaning-space" works perfectly! We'll cover the real jargon later.
:::

- **Meaning-Space:** Think of it as a giant map where every word has a specific coordinate. Words with similar meanings are located near each other.
- **Contextual Neighbors:** The distance between words is how an LLM can understand that "the doctor walked into the room" and "the nurse walked into the room" are likely talking about a similar situation.

:::callout-dyk
How do you think an LLM would know that "doctor" and "nurse" are related? What patterns might it have seen in training data?
:::

:::quiz{id="01-02"}
In an LLM's "meaning-space," which two words would be closest together?
- [ ] "Doctor" and "doctrine" — they share most of the same letters
- [x] "Doctor" and "nurse" — they share similar meaning and context
- [ ] "Doctor" and "calendar" — doctors use calendars for appointments
:::
