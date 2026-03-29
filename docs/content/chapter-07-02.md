---
title: "7.2 What is RAG? — Search + LLM"
description: "How Retrieval-Augmented Generation works: retrieve relevant documents first, then generate an answer from them."
chapter: "Chapter 7"
pageId: "07-02"
---

## 🎯 Core Goals
- Explain RAG as a two-step process: retrieve first, then generate.
- Show the concrete difference between a hallucinating LLM and a RAG-grounded LLM.

:::callout-tldr
RAG combines a search engine with an LLM. First find the right documents, then have the LLM answer from them — not from memory.
:::

## Three Letters, One Big Idea

**R**etrieval — **A**ugmented — **G**eneration

- **Retrieve:** Search your knowledge base for the most relevant documents
- **Augment:** Add those documents to the prompt (slot them right into the Sandwich)
- **Generate:** The LLM writes an answer grounded in those documents — not guessing from training data

:::visual{name="visual-rag-flow"}

## Before and After

The difference is dramatic:

**Without RAG:**
> You: "What's our company's refund policy for damaged goods?"
> LLM: "Most companies offer a 30-day return window for damaged items..." *(total hallucination — it has no idea what YOUR policy says)*

**With RAG:**
> System retrieves your actual refund policy document from the knowledge base.
> LLM: "According to your policy, damaged goods qualify for a full refund within 60 days with photo documentation." *(grounded in your real document)*

The LLM hasn't changed at all. What changed is that the *right document* was placed in front of it.

:::callout-error
RAG dramatically *reduces* hallucination — it does not eliminate it. It trades one kind of error for another: instead of the LLM inventing facts from training data, it might now answer confidently from the *wrong* retrieved document. The LLM can also still misread or misinterpret a document it did retrieve. But grounding answers in real documents is far better than guessing from training memory alone.
:::

:::callout-dyk
Think of RAG like a **smart table of contents**. The retrieval step doesn't answer your question — it just identifies *which pages* might be relevant, the way a book's index points you to the right chapter. The actual reading and answering is still the LLM's job. That retrieval could use vector search, keyword matching, or anything else that finds the right pages.
:::

## When Retrieval Gets It Wrong

RAG dramatically improves grounding — but the retrieval step has its own failure modes:

- **False negatives:** A relevant document used different phrasing and never made it into the retrieved set. The LLM can't save what it never receives.
- **False positives:** An irrelevant document was retrieved anyway — it dilutes the context and can mislead the answer.
- **Wrong chunk:** The right document exists in the knowledge base, but the wrong *section* of it was retrieved.

The takeaway: RAG reduces hallucination but introduces a new axis of failure — retrieval quality. A great LLM with bad retrieval still gives bad answers.

## Why This Is Powerful

RAG means your LLM is never limited to what it knew during training. You can:

- Add new company documents today — the LLM "knows" them immediately
- Keep proprietary data on your own servers — the LLM only sees what you retrieve
- Update your knowledge base without retraining the model

## 📝 Key Concepts

- **Retrieve first, generate second** — order matters; search happens before the LLM speaks
- **Grounded answers:** The LLM responds from retrieved content, not training memory
- **Dynamic knowledge:** New documents are immediately available without model retraining
- **RAG ≠ fine-tuning:** The model doesn't change — only the context it receives changes
- **Hallucination reduction:** Not elimination, but a major improvement

:::quiz{id="07-02"}
What is the main benefit of RAG (Retrieval-Augmented Generation)?
- [ ] It makes the LLM respond faster
- [ ] It completely eliminates hallucination
- [x] It grounds the LLM's answers in actual retrieved documents instead of guessing from training data
:::
