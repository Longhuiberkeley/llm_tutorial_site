---
title: "6.5 When Agents Go Wrong"
description: "Common failure modes."
chapter: "Chapter 6"
pageId: "06-05"
---

## 🎯 Core Goals
- Understand that agent failures happen at three levels: planning, execution, and the tools themselves.
- Recognize the four classic failure modes using the Simon Says analogy.

:::callout-tldr
A good agentic LLM needs to be a good LLM first. It should have a clear sense of direction before it ever reaches for a tool. When things go wrong, the failure is usually in the *planning* — not just the *tool call*. And sometimes the failure isn't the agent or the LLM at all — it's the tool that gave it bad information.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-agent-bugs"}

## 📝 Key Concepts

- **Planning failures** happen before any tool is called — the agent has a bad goal or a bad plan.
- **Execution failures** happen during the tool call — wrong format, missing tool, or unsafe action.
- **Tool failures** happen even when the agent did everything right — the tool itself returned wrong, incomplete, or distorted results. The search engine returned outdated pages. The database had stale records. The file reader garbled a complex spreadsheet. This is not a planning failure (the agent chose the right tool for the job) and not an execution failure (the call was formatted correctly) — it is a *trust* failure. The agent trusted a tool that let it down.
- **Solutions:** Timeouts, step limits, and human-in-the-loop oversight are essential guardrails for execution. For planning failures, the quality of the underlying LLM and its system prompt matters most.
- **Old problems don't disappear:** Every issue we've seen with LLMs still applies inside an agent. Hallucinations, context rot (the LLM losing track of earlier steps in a long task), context window limits, and prompt injection (a malicious web page trying to hijack the agent mid-task) — all of these remain real risks at every step of the agentic loop.

:::callout-error
Never "set and forget" an autonomous agent with access to your email or bank account! Always start with high human oversight.
:::

:::callout-dyk
**Tools have their own limitations.** When an agent gives you a wrong answer, the LLM might have been right — it used a web search tool that returned outdated pages, queried a database with stale records, or read a file through a tool that garbled the formatting. The chain is only as reliable as its weakest tool.
:::

:::quiz{id="06-05"}
