---
title: "10.4 How You Access LLMs — Interfaces & Pricing Models"
description: "From chat interfaces to mobile apps to the raw API — the interface shapes both your experience and your bill."
chapter: "Chapter 10"
pageId: "10-04"
---

<div class="not-prose callout callout-tldr">

There are many ways to use an LLM. Most fall into two camps: a **subscription interface** (flat monthly fee, provider handles everything) or the **API** (pay per token, you build the experience). Same model underneath — very different relationship.

</div>

## Subscription Interfaces — Pay Once, Use Freely

Most people's first LLM experience is through a subscription product: you sign up, pay a flat monthly fee, and use the model through a polished interface. The provider handles everything — the interface, conversation history, file uploads, plugins.

These come in several forms:

<div class="space-y-3 my-5">

  <div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
    <div class="font-bold text-sm mb-1">🌐 Web Browser</div>
    <p class="text-sm text-on-surface/80">Visit a website (claude.ai, chatgpt.com, gemini.google.com) and start typing. The most common entry point — nothing to install, works on any device.</p>
  </div>

  <div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
    <div class="font-bold text-sm mb-1">📱 Mobile App</div>
    <p class="text-sm text-on-surface/80">Most providers have iOS and Android apps. Same subscription, native mobile experience — useful for on-the-go queries or voice input.</p>
  </div>

  <div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
    <div class="font-bold text-sm mb-1 flex items-center gap-2">🖥️ IDE Plugin
      <button onclick="var el=this.parentElement.nextElementSibling.nextElementSibling;el.classList.toggle('hidden');this.textContent=el.classList.contains('hidden')?'What\'s an IDE? ▾':'Hide ▴';" class="text-xs font-normal bg-accent/10 text-accent border border-accent/20 rounded px-2 py-0.5 cursor-pointer hover:bg-accent/20 transition-colors">What's an IDE? ▾</button>
    </div>
    <p class="text-sm text-on-surface/80">AI assistants built into code editors — GitHub Copilot, Cursor, Claude in VS Code. Used by developers who want AI suggestions without leaving their editor. Often covered by a separate subscription.</p>
    <p class="hidden text-xs text-on-surface/60 mt-2 bg-surface-container-lowest rounded-lg px-3 py-2 border border-outline-variant">💡 <strong>IDE</strong> = Integrated Development Environment — a code editor like VS Code, Cursor, or JetBrains. AI plugins live directly inside your editor, letting you ask questions, generate code, and get explanations without switching windows.</p>
  </div>

  <div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
    <div class="font-bold text-sm mb-1 flex items-center gap-2">💻 CLI Tool
      <button onclick="var el=this.parentElement.nextElementSibling.nextElementSibling;el.classList.toggle('hidden');this.textContent=el.classList.contains('hidden')?'What\'s a CLI? ▾':'Hide ▴';" class="text-xs font-normal bg-accent/10 text-accent border border-accent/20 rounded px-2 py-0.5 cursor-pointer hover:bg-accent/20 transition-colors">What's a CLI? ▾</button>
    </div>
    <p class="text-sm text-on-surface/80">Tools like Claude Code that run in a terminal. Developers use these to interact with an LLM directly from the command line — useful for tasks like reviewing code, running automated workflows, or querying the model from scripts.</p>
    <p class="hidden text-xs text-on-surface/60 mt-2 bg-surface-container-lowest rounded-lg px-3 py-2 border border-outline-variant">💡 <strong>CLI</strong> = Command Line Interface — a text-based tool you run in your computer's terminal by typing commands, rather than clicking buttons in a graphical app. Common among developers and power users.</p>
  </div>

</div>

**What these have in common:** The provider manages everything. You pay a flat fee and get a curated experience. Usage limits may apply on lower tiers.

## The API — Pay Per Token

The API is how developers and businesses talk to LLMs programmatically. There's no interface: your code sends a request, the model responds in raw text, your code does something with it.

- **Pay-on-demand** — billed per million tokens (input + output), no monthly commitment
- **No interface layer** — you build whatever experience you want on top
- **Scalable** — process one request or one million, the pricing scales with you
- **Same model** as the subscription products — just a different delivery method

The API is the right tool when you're:
- **Automating** — running the same task repeatedly without human involvement
- **Building a product** — embedding an LLM into your own app or workflow
- **Integrating** — connecting the LLM to your database, CRM, or email system
- **Scaling** — processing hundreds or thousands of requests programmatically

<div class="not-prose callout callout-dyk">

Providers heavily subsidize their subscription plans to attract users. At low to moderate usage, the API can cost significantly more than a flat subscription — sometimes 5–10×. For individuals and small teams, the subscription is often the better deal. The economics flip only when you're building at scale.

</div>

## Signs You've Outgrown the Subscription Interface

- You find yourself copying and pasting the same prompt repeatedly
- You want to process a list of things (emails, products, customers) through the LLM
- You need the LLM's output to automatically feed into another system
- You want to build a tool that other people use

These are all API use cases.

<div id="quiz-10-04" class="not-prose quiz-container my-12" data-quiz="10-04"></div>
