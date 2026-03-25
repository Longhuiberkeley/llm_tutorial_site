---
title: "8.2 Knowing and Doing: Context + Tools"
description: "How a stateless model becomes a personal assistant — through the READ side and the ACT side."
chapter: "Chapter 8"
pageId: "08-02"
---

## 🎯 Core Goals
- Show that the personal assistant experience requires two things: context engineering (knowing) and tools (doing).
- Connect to the Perceive → Plan → Act → Observe loop.

:::callout-tldr
A personal assistant doesn't just know things about you — it can also act on your behalf. Context engineering handles the "knowing" side: getting the right information into the LLM. Tools handle the "doing" side: letting the LLM take actions in the world. Both are needed. Neither is enough alone.
:::

## The Answer Has Two Parts

We established the problem: the model is stateless, but the goal is a personal assistant that knows you and acts for you.

The answer has two sides:

**Context engineering** — the discipline of deliberately designing what goes into the LLM's context window. Getting the right information in front of the model before it responds. We explored this with RAG. The same principle applies here, aimed at personalization: past sessions, your preferences, your emails — all injected as text.

**Tools** — capabilities that let the LLM take actions outside the conversation: search the web, run code, send an email, query a database. Rather than just generating text, the model can do things.

A true personal assistant needs both.

## The Personal Assistant Stack (The "Knowing" Side)

Think of it as four layers of context that make an LLM feel like it knows you:

<div class="space-y-3 my-6">
  <div class="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5 flex gap-4 items-start">
    <div class="text-2xl flex-shrink-0">📜</div>
    <div>
      <div class="font-bold text-on-surface mb-1">Conversation History</div>
      <p class="text-sm text-on-surface/80">What happened in <em>this</em> session. The LLM already re-reads every prior message — this is the basic Sandwich at work. No extra engineering required; it's the foundation.</p>
    </div>
  </div>
  <div class="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5 flex gap-4 items-start">
    <div class="text-2xl flex-shrink-0">🧠</div>
    <div>
      <div class="font-bold text-on-surface mb-1">Past Session Memory</div>
      <p class="text-sm text-on-surface/80">Notes or summaries from <em>previous</em> conversations, saved somewhere and re-injected at the start of the next one. "We discussed the product launch last Thursday." "User mentioned a key vendor called Apex Corp." This is what AI "memory features" are trying to provide.</p>
    </div>
  </div>
  <div class="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5 flex gap-4 items-start">
    <div class="text-2xl flex-shrink-0">📬</div>
    <div>
      <div class="font-bold text-on-surface mb-1">Live Data Access</div>
      <p class="text-sm text-on-surface/80">Fresh context fetched at query time — your emails, calendar, recent documents. Rather than storing old summaries, the system reads live information just before calling the model. Always current, but requires giving the system access to your data.</p>
    </div>
  </div>
  <div class="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5 flex gap-4 items-start">
    <div class="text-2xl flex-shrink-0">👤</div>
    <div>
      <div class="font-bold text-on-surface mb-1">User Profile</div>
      <p class="text-sm text-on-surface/80">Persistent facts about you: your name, job, communication style, known preferences. The simplest layer — injected as a short paragraph at the start of every session.</p>
    </div>
  </div>
</div>

All four layers resolve to the same thing: **text in the Sandwich**. The model reads it all from scratch, every time. There's no magic — just better context engineering.

:::callout-dyk
This is why AI products can feel dramatically different even when they use the same underlying model. The difference isn't the model — it's how much context the surrounding system engineers into each conversation.
:::

## But That's Only Half the Picture

Context engineering tells the LLM what to *know*. Tools tell the LLM what it can *do*.

<div class="grid md:grid-cols-2 gap-4 my-6">
  <div class="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5">
    <div class="font-bold text-on-surface mb-2">📖 Context Engineering — the READ side</div>
    <p class="text-sm text-on-surface/70 mb-3">Getting the right information into the LLM's context window.</p>
    <ul class="text-sm space-y-1.5 text-on-surface/80">
      <li>📁 Retrieving relevant case files for a lawyer</li>
      <li>🧠 Injecting past session memory at conversation start</li>
      <li>📬 Reading today's emails before a morning briefing</li>
    </ul>
  </div>
  <div class="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5">
    <div class="font-bold text-on-surface mb-2">🤝 Tools — the ACT side</div>
    <p class="text-sm text-on-surface/70 mb-3">Letting the LLM execute actions in the world.</p>
    <ul class="text-sm space-y-1.5 text-on-surface/80">
      <li>📧 Drafting and sending an email</li>
      <li>🧪 Running tests on a piece of code</li>
      <li>🗓️ Booking a meeting on your calendar</li>
    </ul>
  </div>
</div>

The lawyer example from earlier is mostly context engineering: fetch the right case files to read. But a fuller assistant would also need tools: run a legal database query, draft and file a document, check a court deadline.

A software assistant flips the balance: knowing the codebase is context engineering; but *running the tests*, *reading the error output*, *committing the fix* — those are tools.

In practice, agents interleave both in a continuous loop. This maps directly to the **Perceive → Plan → Act → Observe** cycle: perceiving is context engineering (reading what's relevant), acting is tools (doing something in the world), and observing brings the tool's result back as new context for the next step.

## 📝 Key Concepts

- **Context engineering = the knowing side:** Getting the right information into the LLM's context window — memory, live data, user profile, conversation history
- **Tools = the acting side:** Capabilities that let the LLM do things in the world — run code, send messages, query systems
- **Both are needed:** Context tells the LLM what's true. Tools let it act on that truth.
- **Perceive → Plan → Act → Observe:** Context engineering handles perceiving; tools handle acting; the loop continues
- **No magic:** When personalization fails, it's context engineering failing. When the assistant takes a wrong action, it's a tool being misused.

:::quiz{id="08-02"}
