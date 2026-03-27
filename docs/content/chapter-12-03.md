---
title: "12.3 RPA vs. Agentic AI"
description: "Rule-based automation and LLM-powered automation solve different problems — learn when to use each."
chapter: "Chapter 12"
pageId: "12-03"
---

## 🎯 Core Goals
- Clearly define RPA (Robotic Process Automation) and contrast it with agentic AI.
- Help learners recognize which type of automation fits their task.
- Introduce the idea that hybrid approaches are often best.

:::callout-tldr
RPA follows rigid rules — perfect for stable, repetitive tasks. Agentic AI handles ambiguity and makes decisions — perfect for variable, judgment-heavy tasks. Most real-world automation uses both together.
:::

## 🤖 RPA: The Reliable Rule-Follower

Robotic Process Automation (RPA) is exactly what it sounds like: software that automates repetitive tasks by following precise, predefined rules.

Think of RPA like a set of railroad tracks. The train runs perfectly — fast, reliable, cheap — as long as it stays on the tracks. But the moment something unexpected happens, the train stops. It has no ability to navigate around an obstacle.

RPA comes in two main flavors:
- **Click-based (UI automation):** Software that controls a computer like a human would — clicking buttons, filling forms, copying and pasting. Useful when you only have access to a user interface, not an API.
- **Programming-based (API integration):** Code that talks directly to systems via their APIs — faster, more reliable, and harder to break than click-based automation.

**Best for:** Copying 1,000 rows from a spreadsheet into an accounting system. Processing a fixed-format invoice. Running the same report every Monday at 9 AM.

**Strength:** 100% reliable for stable, well-defined tasks. Cheap per operation at scale.

**Weakness:** Breaks when anything changes. Can't handle ambiguity. Can't make judgment calls.

:::callout-dyk
**What does RPA look like in practice?** Think of it as macros on steroids. Common examples: automatically downloading bank statements every morning, copying invoice data from PDF emails into an accounting system, filling out government forms from spreadsheet data, generating and sending a weekly status report from a dashboard, or syncing customer records between two systems on a schedule.
:::

## 🧠 Agentic AI: The Flexible Decision-Maker

Agentic AI (LLMs with tools and autonomous action capabilities) can read context, make decisions, handle exceptions, and adapt to variation. Think of it like a car with GPS — it can navigate around roadblocks, find alternate routes, and respond to unexpected situations.

Where RPA would simply crash on an unexpected input, an agentic system can reason about it: "This email is unusual. Let me check the policy, consider the customer's history, and decide whether to escalate."

**Best for:** Reading a customer email, understanding the emotional tone, checking policy, drafting a personalized response, and flagging edge cases for human review. Tasks where the input is variable and judgment is required.

**Strength:** Handles variability and natural language. Manages exceptions. Makes fuzzy decisions.

**Weakness:** Less predictable than RPA. More expensive per operation. Requires oversight and monitoring.

:::callout-error
A common mistake is reaching for agentic AI when RPA would work perfectly well — and cost far less. If a task has stable, defined rules and consistent inputs, RPA is usually the better choice. Agentic AI is not an upgrade to RPA; it's a different tool for a different job.
:::

## 🔀 The Hybrid Approach

In practice, most real-world systems combine both — using RPA for routine cases, agentic AI for exceptions, and humans for escalations. The specific patterns for how to combine them, and how to choose the right approach for your situation, are covered on the next page.

:::visual{name="visual-rpa-vs-agentic"}

## 📝 Key Concepts

- **RPA** is rigid, reliable, and cheap — best for stable, rule-defined tasks.
- **Agentic AI** is flexible and adaptive — best for variable, judgment-heavy tasks.
- **RPA breaks on exceptions** — if anything changes, it stops working.
- **Agentic AI costs more** per operation and requires monitoring and oversight.
- **Hybrid is often best** — use RPA for routine cases, agentic AI for exceptions, humans for escalations.

:::quiz{id="12-03"}
