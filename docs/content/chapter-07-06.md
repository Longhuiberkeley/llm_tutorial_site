---
title: "7.6 Data Formats are Destiny"
description: "The format your data lives in determines how easily an LLM can read it. Simple formats win."
chapter: "Chapter 7"
pageId: "07-06"
---

## 🎯 Core Goals
- Explain why file format matters as much as file content for LLM processing.
- Highlight the hidden cost of proprietary and scanned formats.

:::callout-tldr
LLMs love plain text. Proprietary formats like Word, PowerPoint, and PDF require conversion tools that add cost, complexity, and errors. The best format is usually the simplest one.
:::

## The Format Problem

You've built a RAG system. Sarah's 500 case files are ready to upload. But what format are they in?

- **Word documents (.docx):** Need a parser to strip formatting — tables often break
- **PowerPoint slides (.pptx):** Text scattered across shapes, slides, and notes
- **PDFs:** Could be native text (parseable) or scanned images (need OCR first)
- **Scanned paper:** Just images — completely invisible to a text-based LLM

The *content* is the same. The *format* determines whether the LLM can even read it.

:::visual{name="visual-data-formats"}

## The Format Spectrum

**Easy for LLMs — minimal processing:**

- **Plain text (.txt)** — just text, nothing to parse
- **Markdown (.md)** — clean structure with headers and lists; LLMs read it naturally
- **CSV** — rows and columns that LLMs handle well
- **JSON** — structured data that maps cleanly to LLM understanding

**Requires conversion tools:**

- **Word (.docx)** — extraction libraries exist; tables often lose formatting
- **PowerPoint (.pptx)** — text scattered across slides; order may not be meaningful
- **Excel (.xlsx)** — formulas disappear; only values survive

**Requires OCR first:**

- **Scanned PDFs** — the document is a photo of text; the LLM can't read pixels
- **Photographed documents** — same problem; must convert to text first

## The File Format Trap

Many organizations store everything in complex formats — polished Word reports, elaborate Excel workbooks, beautiful PowerPoint decks. This looks professional. For AI processing, it's a liability.

Every conversion step:

- Takes extra time and compute cost
- Introduces potential errors (tables that don't parse, images that get skipped)
- Reduces the quality of what the LLM actually receives

:::callout-error
A surprisingly common AI project failure: a team builds a great RAG system, then discovers 80% of their knowledge base is scanned PDFs. Before the AI can help, someone has to run OCR on thousands of documents — a project that takes months and costs significant money.
:::

## Practical Advice

If you're building a knowledge base for LLM use, invest in format early:

- Prefer Markdown or plain text for new documentation going forward
- Convert critical old documents to cleaner formats before indexing
- For PDFs, verify they're native (text-selectable) rather than scanned images — try selecting text in a PDF reader

Data preparation is frequently 80% of any real AI project. The quality of your LLM output is bounded by the quality of your data *format*, not just your data content.

## 📝 Key Concepts

- **Simple formats win:** Plain text and Markdown are ideal for LLM processing
- **Proprietary formats add cost:** Conversion tools introduce complexity and potential errors
- **Scanned = invisible:** Images of text require OCR before an LLM can read them
- **The file format trap:** Storing knowledge in complex formats creates AI headaches later
- **Data prep is the real work:** Often 80% of any AI project is getting data into usable form

:::quiz{id="07-06"}
