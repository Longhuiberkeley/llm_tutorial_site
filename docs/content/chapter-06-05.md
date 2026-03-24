---
title: "6.5 When Agents Go Wrong"
description: "Common failure modes."
chapter: "Chapter 6"
pageId: "06-05"
---

## 🎯 Core Goals
- Understand that agent failures happen at two levels: planning and execution.
- Recognize the four classic failure modes using the Simon Says analogy.

:::callout-tldr
A good agentic LLM needs to be a good LLM first. It should have a clear sense of direction before it ever reaches for a tool. When things go wrong, the failure is usually in the *planning* — not just the *tool call*.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-agent-bugs"}

## 📝 Key Concepts

- **Planning failures** happen before any tool is called — the agent has a bad goal or a bad plan.
- **Execution failures** happen during the tool call — wrong format, missing tool, or unsafe action.
- **Solutions:** Timeouts, step limits, and human-in-the-loop oversight are essential guardrails for execution. For planning failures, the quality of the underlying LLM and its system prompt matters most.
- **Old problems don't disappear:** Every issue we've seen with LLMs still applies inside an agent. Hallucinations, context rot (the LLM losing track of earlier steps in a long task), context window limits, and prompt injection (a malicious web page trying to hijack the agent mid-task) — all of these remain real risks at every step of the agentic loop.

:::callout-error
Never "set and forget" an autonomous agent with access to your email or bank account! Always start with high human oversight.
:::

:::quiz{id="06-05"}
