---
title: "6.5 When Agents Go Wrong"
description: "Common failure modes."
chapter: "Chapter 6"
pageId: "06-05"
---

## 🎯 Core Goals
- Understand that agent failures happen at three levels: planning, execution, and the tools themselves.
- Recognize the four classic failure modes using the Simon Says analogy.

<div class="not-prose callout callout-tldr">

A good agentic LLM needs to be a good LLM first. It should have a clear sense of direction before it ever reaches for a tool. When things go wrong, the failure is usually in the *planning* — not just the *tool call*. And sometimes the failure isn't the agent or the LLM at all — it's the tool that gave it bad information.

</div>

## 👁️ Visuals & Interactives


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-8">
<h3 class="text-xl font-bold font-headline mb-2">The Simon Says Failure Test</h3>
<p class="text-sm text-on-surface-variant">Click each scenario to see what went wrong and how to fix it.</p>
</div>
<div class="grid sm:grid-cols-2 gap-4">
<!-- Scenario 1: Impossible Task -->
<button onclick="revealBug(0, this)" class="bug-btn p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-red-400 transition-all text-left flex items-start gap-4 group active:scale-95">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-xl group-hover:scale-110 transition-transform flex-shrink-0 mt-0.5">🏔️</div>
<div>
<div class="font-bold text-sm mb-1">"Simon says, jump 10 meters tall"</div>
<div class="text-[10px] opacity-60 uppercase tracking-widest">Impossible Task</div>
</div>
</button>
<!-- Scenario 2: Wrong Trigger -->
<button onclick="revealBug(1, this)" class="bug-btn p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-red-400 transition-all text-left flex items-start gap-4 group active:scale-95">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-xl group-hover:scale-110 transition-transform flex-shrink-0 mt-0.5">📢</div>
<div>
<div class="font-bold text-sm mb-1">"Simon <em>told</em>, do your homework"</div>
<div class="text-[10px] opacity-60 uppercase tracking-widest">Wrong Trigger</div>
</div>
</button>
<!-- Scenario 3: Missing Tool -->
<button onclick="revealBug(2, this)" class="bug-btn p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-red-400 transition-all text-left flex items-start gap-4 group active:scale-95">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-xl group-hover:scale-110 transition-transform flex-shrink-0 mt-0.5">🏎️</div>
<div>
<div class="font-bold text-sm mb-1">"Simon says, drive the Ferrari to work"</div>
<div class="text-[10px] opacity-60 uppercase tracking-widest">Missing Tool</div>
</div>
</button>
<!-- Scenario 4: Harmful Behavior -->
<button onclick="revealBug(3, this)" class="bug-btn p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-red-400 transition-all text-left flex items-start gap-4 group active:scale-95">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-xl group-hover:scale-110 transition-transform flex-shrink-0 mt-0.5">🚨</div>
<div>
<div class="font-bold text-sm mb-1">"Simon says, jump off the building"</div>
<div class="text-[10px] opacity-60 uppercase tracking-widest">Harmful Behavior</div>
</div>
</button>
</div>
<!-- Detail Display -->
<div id="bug-display" class="mt-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 min-h-[180px] animate-fade-in opacity-0 transition-all duration-300">
<div class="flex items-center gap-3 mb-4">
<span id="bug-icon" class="text-3xl">🏔️</span>
<h4 id="bug-title" class="text-lg font-bold"></h4>
</div>
<div class="grid md:grid-cols-2 gap-6">
<div>
<div class="text-[10px] font-black uppercase tracking-widest text-red-500 mb-2">What Went Wrong</div>
<p id="bug-problem" class="text-xs text-on-surface-variant leading-relaxed italic"></p>
</div>
<div>
<div class="text-[10px] font-black uppercase tracking-widest text-green-600 mb-2">The Fix</div>
<p id="bug-fix" class="text-xs text-on-surface-variant leading-relaxed italic"></p>
</div>
</div>
</div>
<!-- Think further callout -->
<div class="mt-6 p-4 bg-accent/5 border-l-4 border-accent rounded-r-xl">
<div class="text-[10px] font-black uppercase tracking-widest text-accent mb-1">🤔 Think Further</div>
<p class="text-xs text-on-surface-variant leading-relaxed">
These four aren't the only ways agents fail. Can you think of others? What if the agent misreads its own output and acts on it? What if two agents give each other conflicting instructions? What if someone deliberately crafts a web page to trick the agent into doing something harmful mid-task?
</p>
</div>
</div>
<script type="module">
import { init } from '/js/interactives/simon-says-failure.js';
init({
  bugData: [
    {
      title: "Impossible Task",
      icon: "\uD83C\uDFD4\uFE0F",
      problem: "The goal itself is unrealistic \u2014 no tool can help. The agent should recognize this in the <strong>planning phase</strong>, before it ever tries a tool call. A good LLM asks: 'Is this even achievable?' before acting.",
      fix: "Improve the underlying LLM quality and system prompt to encourage <strong>feasibility checks</strong> before execution. The agent should surface 'This goal is not achievable' as a valid response."
    },
    {
      title: "Wrong Trigger",
      icon: "\uD83D\uDCD2",
      problem: "The agent used <em>told</em> instead of <em>says</em> \u2014 the trigger word was wrong. In real terms: the tool call was malformed or missing the required format, so the executor never detected it and nothing happened.",
      fix: "The system prompt should clearly specify the <strong>exact tool call format</strong>. Validate outputs before sending them to the executor, and return a format error if the pattern doesn't match."
    },
    {
      title: "Missing Tool (Hallucination)",
      icon: "\uD83C\uDFCE\uFE0F",
      problem: "The command was perfectly formed, but there's no Ferrari \u2014 the tool doesn't exist. Imagine the LLM wants to open a Chrome browser, but you're a Firefox user. The call fails because the tool simply isn't there, even though the instruction was correct.",
      fix: "List only <strong>available tools explicitly</strong> in the system prompt. If the agent calls a tool not on the list, return a 404-style error and force it to re-plan using only what's available."
    },
    {
      title: "Harmful Behavior",
      icon: "\uD83D\uDEA8",
      problem: "The command is syntactically correct and technically executable \u2014 but it should never be carried out. The agent followed instructions without checking whether the action was safe or ethical.",
      fix: "Implement <strong>safety guardrails</strong> at the executor level \u2014 a separate layer that reviews actions before running them. Never rely solely on the LLM to self-police harmful commands."
    }
  ]
});
</script>

</div>


## 📝 Key Concepts

- **Planning failures** happen before any tool is called — the agent has a bad goal or a bad plan.
- **Execution failures** happen during the tool call — wrong format, missing tool, or unsafe action.
- **Tool failures** happen even when the agent did everything right — the tool itself returned wrong, incomplete, or distorted results. The search engine returned outdated pages. The database had stale records. The file reader garbled a complex spreadsheet. This is not a planning failure (the agent chose the right tool for the job) and not an execution failure (the call was formatted correctly) — it is a *trust* failure. The agent trusted a tool that let it down.
- **Solutions:** Timeouts, step limits, and human-in-the-loop oversight are essential guardrails for execution. For planning failures, the quality of the underlying LLM and its system prompt matters most.
- **Old problems don't disappear:** Every issue we've seen with LLMs still applies inside an agent. Hallucinations, context rot (the LLM losing track of earlier steps in a long task), context window limits, and prompt injection (a malicious web page trying to hijack the agent mid-task) — all of these remain real risks at every step of the agentic loop.

<div class="not-prose callout callout-error">

Never "set and forget" an autonomous agent with access to your email or bank account! Always start with high human oversight.

</div>

<div class="not-prose callout callout-dyk">

**Tools have their own limitations.** When an agent gives you a wrong answer, the LLM might have been right — it used a web search tool that returned outdated pages, queried a database with stale records, or read a file through a tool that garbled the formatting. The chain is only as reliable as its weakest tool.

</div>

<div id="quiz-06-05" class="not-prose quiz-container my-12" data-quiz="06-05"></div>
