---
title: "6.2 MCP — Model Context Protocol"
description: "USB-C for AI."
chapter: "Chapter 6"
pageId: "06-02"
---

## 🎯 Core Goals
- Learn about the industry standard for connecting LLMs to tools.
- Understand that MCP goes beyond "fetching data" — it can supply tools, data, and context.

:::callout-tldr
Before MCP, every AI tool needed custom code to talk to every LLM. **MCP** standardizes this, letting any AI model connect to any tool, data source, or context provider through one universal interface.
:::

## 👁️ Visuals & Interactives

:::visual{name="visual-mcp-usb"}

## 📝 Key Concepts

- **Standardization:** Just like USB-C replaced dozens of different charging cables, MCP replaces hundreds of custom integrations. Any AI model, any server — one standard.
- **MCP Servers:** Small programs that plug into the AI. They can expose three very different things:
  - **Tools** — actions the AI can trigger (e.g., run a web search, execute code, send an email)
  - **Data** — files, databases, GitHub repos the AI can read from
  - **Context** — pre-loaded knowledge like best practices guides, travel planning templates, or domain glossaries
- **MCP Clients:** The AI models (like Claude) that "plug into" those servers.
- **AI-native interfaces:** Many software tools now ship with built-in MCP support — command-line tools, project managers, and CRMs increasingly offer an AI-ready interface so agents can operate them directly.

:::callout-dyk
MCP isn't just for pulling in data. A company could create an MCP server that loads their internal expense policy, coding standards, or customer service playbook — giving the AI instant context without you having to paste it into every prompt.
:::

:::callout-tip
The MCP ecosystem is evolving fast. It's worth searching for "best MCP servers 2025" or "what tools does Claude use" to see what's available today — from web browsers and spreadsheet editors to code runners and calendar integrations. What you find might surprise you.
:::

:::quiz{id="06-02"}
