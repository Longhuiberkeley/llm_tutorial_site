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

:::interactive{id="word-distance"}

*(Interactive 2D scatter plot showing emoji words. Hover over any word to see lines connecting to its "neighbors". Thicker lines = closer distance.)*

## 📝 Key Concepts

- **Meaning-Space:** Think of it as a giant map where every word has a specific coordinate. Words with similar meanings are located near each other.
- **Contextual Neighbors:** The distance between words is how an LLM can understand that "the doctor walked into the room" and "the nurse walked into the room" are likely talking about a similar situation.

:::callout-dyk
How do you think an LLM would know that "doctor" and "nurse" are related? What patterns might it have seen in training data?
:::

:::quiz{id="01-02"}
