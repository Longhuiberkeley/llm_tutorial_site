---
title: "10.4 Web UI vs. API — Which Should You Use?"
description: "Chat interfaces are for exploration. APIs are for building. Know when to switch."
chapter: "Chapter 10"
pageId: "10-04"
---

## 🎯 Core Goals
- Explain the practical difference between using an LLM through a chat interface vs. the API.
- Help readers identify when they've outgrown the web UI.

:::callout-tldr
Web UIs are great for exploring and learning. APIs unlock automation, integration, and building products. Most people start in the web UI and eventually need to move to the API.
:::

## Two Ways to Talk to an LLM

**Web UI (Chat Interface):**
You visit a website (ChatGPT, Claude.ai, Gemini), type a message, read the response. Point-and-click. No code required. All the formatting, conversation history, and interface is handled for you.

**API (Application Programming Interface):**
Your software sends a request to the provider's server programmatically. The LLM responds in raw text (or JSON). Your code processes the response. No web interface — just data flowing between systems.

:::visual{name="visual-ui-vs-api"}

## When to Use the Web UI

The web UI is the right tool when you're:

- **Exploring:** Testing what the LLM can do, experimenting with prompts
- **One-off tasks:** Drafting a single document, answering a one-time question
- **Learning:** Understanding how LLMs respond to different inputs
- **No coding involved:** The person using it isn't a developer

Think of it like dining in a restaurant. The kitchen (LLM) does the work, but you're in a curated environment with a menu, service, and presentation all included.

## When to Use the API

The API is the right tool when you're:

- **Automating:** Running the same type of task repeatedly without human involvement
- **Building a product:** Embedding an LLM into your own application or workflow
- **Integrating:** Connecting the LLM to other systems (your database, CRM, email)
- **Scaling:** Processing hundreds or thousands of requests programmatically

Think of it like a delivery service. Same food, but you pick up the raw ingredients (responses) and do what you want with them. More work, but much more flexibility.

:::callout-dyk
The API is the same model as the web UI — just a different delivery method. A request to Claude via the API and a message typed into Claude.ai both reach the same underlying model. The difference is what you can do with the response.
:::

## Signs You've Outgrown the Web UI

- You find yourself copying and pasting the same prompt repeatedly
- You want to process a list of items (emails, products, customers) through the LLM
- You need the LLM's output to automatically feed into another system
- You want to build a product or internal tool that others use

These are all API use cases.

## 📝 Key Concepts

- **Web UI:** For exploring, one-off tasks, non-technical users
- **API:** For automation, integration, building products, processing at scale
- **Same model, different delivery:** The underlying LLM is identical
- **Start in the web UI** to learn; move to the API when you want to build or automate
- **API requires code** — but opens up unlimited integration possibilities

:::quiz{id="10-04"}
