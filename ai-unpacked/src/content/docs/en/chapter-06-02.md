---
title: "6.2 MCP — Model Context Protocol"
description: "USB-C for AI."
chapter: "Chapter 6"
pageId: "06-02"
---

## 🎯 Core Goals
- Learn about the industry standard for connecting LLMs to tools.
- Understand that MCP goes beyond "fetching data" — it can supply tools, data, and context.

<div class="not-prose callout callout-tldr">

Before MCP, every AI tool needed custom code to talk to every LLM. **MCP** standardizes this, letting any AI model connect to any tool, data source, or context provider through one universal interface.

</div>

## 👁️ Visuals & Interactives


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-10">
<h3 class="text-xl font-bold font-headline mb-2">MCP: The USB-C of AI</h3>
<p class="text-sm text-on-surface-variant">One standard connection for tools, data, and context.</p>
</div>
<!-- AI Model at top -->
<div class="flex justify-center mb-6">
<div class="bg-surface-container-lowest border-4 border-accent rounded-2xl p-5 shadow-xl flex flex-col items-center gap-3 min-w-[180px]">
<div class="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white text-3xl">🤖</div>
<div class="text-center">
<div class="font-bold text-sm">AI Model</div>
<div class="text-[10px] uppercase tracking-widest opacity-60">MCP Client</div>
</div>
</div>
</div>
<!-- Connector line + MCP label -->
<div class="flex flex-col items-center mb-6">
<div class="w-0.5 h-8 bg-primary/30"></div>
<div class="bg-primary rounded-full px-6 py-2 flex items-center gap-3 shadow">
<span class="material-symbols-outlined text-on-primary text-xl">usb</span>
<span class="text-on-primary font-black text-xs tracking-widest">MCP STANDARD</span>
<span class="material-symbols-outlined text-on-primary text-xl">usb</span>
</div>
<div class="w-0.5 h-8 bg-primary/30"></div>
</div>
<!-- Three columns -->
<div class="grid grid-cols-3 gap-4">
<!-- Tools column -->
<div class="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-4">
<div class="text-[10px] font-black uppercase tracking-widest text-primary mb-3 text-center">🔧 Tools</div>
<div class="space-y-2">
<div class="bg-surface-container rounded-lg px-3 py-2 text-[11px] font-medium text-center">Web Search</div>
<div class="bg-surface-container rounded-lg px-3 py-2 text-[11px] font-medium text-center">Code Runner</div>
<div class="bg-surface-container rounded-lg px-3 py-2 text-[11px] font-medium text-center">Email / Calendar</div>
</div>
</div>
<!-- Data column -->
<div class="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-4">
<div class="text-[10px] font-black uppercase tracking-widest text-primary mb-3 text-center">📦 Data</div>
<div class="space-y-2">
<div class="bg-surface-container rounded-lg px-3 py-2 text-[11px] font-medium text-center">Files & Docs</div>
<div class="bg-surface-container rounded-lg px-3 py-2 text-[11px] font-medium text-center">Database</div>
<div class="bg-surface-container rounded-lg px-3 py-2 text-[11px] font-medium text-center">GitHub Repos</div>
</div>
</div>
<!-- Context column -->
<div class="bg-surface-container-lowest border-2 border-accent/40 rounded-xl p-4">
<div class="text-[10px] font-black uppercase tracking-widest text-accent mb-3 text-center">💡 Context</div>
<div class="space-y-2">
<div class="bg-accent/5 border border-accent/20 rounded-lg px-3 py-2 text-[11px] font-medium text-center">Best Practices</div>
<div class="bg-accent/5 border border-accent/20 rounded-lg px-3 py-2 text-[11px] font-medium text-center">Travel Templates</div>
<div class="bg-accent/5 border border-accent/20 rounded-lg px-3 py-2 text-[11px] font-medium text-center">Domain Glossary</div>
</div>
</div>
</div>
<div class="mt-8 p-4 bg-surface-container-lowest border border-outline-variant rounded-xl flex items-center gap-4">
<div class="text-3xl">🔌</div>
<p class="text-xs text-on-surface-variant leading-relaxed italic">
<strong>Before MCP:</strong> Each AI needed a different "cable" for every tool.<br>
<strong>With MCP:</strong> One standard connection works for everything — whether you're fetching data, running tools, or loading context.
</p>
</div>
</div>

</div>


## 📝 Key Concepts

- **Standardization:** Just like USB-C replaced dozens of different charging cables, MCP replaces hundreds of custom integrations. Any AI model, any server — one standard.
- **MCP Servers:** Small programs that plug into the AI. They can expose three very different things:
  - **Tools** — actions the AI can trigger (e.g., run a web search, execute code, send an email)
  - **Data** — files, databases, GitHub repos the AI can read from
  - **Context** — pre-loaded knowledge like best practices guides, travel planning templates, or domain glossaries
- **MCP Clients:** The AI models (like Claude) that "plug into" those servers.
- **AI-native interfaces:** Many software tools now ship with built-in MCP support — command-line tools, project managers, and CRMs increasingly offer an AI-ready interface so agents can operate them directly.

<div class="not-prose callout callout-dyk">

MCP isn't just for pulling in data. A company could create an MCP server that loads their internal expense policy, coding standards, or customer service playbook — giving the AI instant context without you having to paste it into every prompt.

</div>

<div class="not-prose callout callout-tip">

The MCP ecosystem is evolving fast. It's worth searching for "best MCP servers 2025" or "what tools does Claude use" to see what's available today — from web browsers and spreadsheet editors to code runners and calendar integrations. What you find might surprise you.

</div>

<div class="not-prose my-12">
<!--
Quiz Box Component
Generated by build.js from :::quiz blocks in markdown.
-->
<div id="quiz-06-02" class="quiz-container bg-surface-container border border-outline-variant rounded-xl p-6 mt-10">
    <div class="font-bold mb-4 flex items-center gap-2">
        <span>🧠</span>
        <span>QUIZ</span>
    </div>
    <p class="mb-4">What problem does MCP (Model Context Protocol) solve?</p>
    <div class="space-y-2">
                <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            It makes LLMs generate faster responses
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="true">
            It standardizes how LLMs connect to tools and data sources — like USB-C for AI
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            It improves the quality of LLM responses by adding more training data
        </div>
    </div>
    <div class="quiz-feedback hidden mt-4 p-4 rounded-lg"></div>
</div>

</div>
