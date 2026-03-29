---
title: "How I Built This"
description: "The story of building this tutorial — from curriculum to code, with AI as a collaborator."
chapter: "Special"
pageId: "special-01"
---

## 🎯 Why This Exists

:::callout-tldr
Friends and colleagues kept asking me the same thing: "Why isn't AI doing what I asked?" After years working across data analytics, automotive software, computer vision, and medical AI — I realized the gap was never about intelligence. It was about intuition. So I built this.
:::

I've worn a lot of hats. Project management in data analytics. Automotive software engineering — the compliance side, control theory, sensor fusion. Computer vision and deep learning research. Even medical AI, specializing in uncertainty quantification and vision processing.

Through all of it, the people around me kept hitting the same wall with AI. Not because they weren't smart — because nobody had explained *how these things actually think*. Or more accurately, how they *don't* think.

## 💡 The Core Philosophy

The most important thing about understanding LLMs is **not** the algebra. It's not the attention equations or the loss functions. It's building the right mental model — the kind of intuition that lets you predict when AI will nail it and when it'll confidently make something up.

That's what this course is. Every analogy, every interactive, every chapter — designed to help you *conceptualize* how these systems work so you can actually use them well.

<div class="flex justify-center my-12">
    <div class="equation-banner px-10 py-6 rounded-full inline-flex items-center gap-4 rotate-[-1deg]">
        <span class="text-2xl md:text-3xl font-extrabold font-headline text-center">Build intuition first — use AI with confidence</span>
    </div>
</div>

## 🛠️ How It Actually Got Built

Here's the honest process, step by step:

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
    <div class="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10">
        <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">Step 1</span>
        </div>
        <h4 class="font-headline font-bold text-on-surface mb-1">Typed the curriculum from scratch</h4>
        <p class="text-on-surface-variant text-sm leading-relaxed">Key points, analogies, structure — all from my head first. Things like "context poisoning should go... somewhere. Which chapter?"</p>
    </div>
    <div class="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10">
        <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">Step 2</span>
        </div>
        <h4 class="font-headline font-bold text-on-surface mb-1">Used an LLM to refine and organize</h4>
        <p class="text-on-surface-variant text-sm leading-relaxed">Back-and-forth iterations to check placement, fill gaps, and stress-test the flow. Multiple rounds of "does this make sense here?"</p>
    </div>
    <div class="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10">
        <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">Step 3</span>
        </div>
        <h4 class="font-headline font-bold text-on-surface mb-1">LLM session for the technical plan</h4>
        <p class="text-on-surface-variant text-sm leading-relaxed">I wanted this on GitHub Pages — no server, no complexity, just static files anyone can fork. We mapped out the architecture together.</p>
    </div>
    <div class="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10">
        <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">Step 4</span>
        </div>
        <h4 class="font-headline font-bold text-on-surface mb-1">Generated the first chapter + template</h4>
        <p class="text-on-surface-variant text-sm leading-relaxed">I originally used Gemini's Stitch UI/UX tool to scaffold the visual design, then iterated from there.</p>
    </div>
    <div class="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10">
        <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">Step 5</span>
        </div>
        <h4 class="font-headline font-bold text-on-surface mb-1">Read chapter 1, fixed what wasn't right</h4>
        <p class="text-on-surface-variant text-sm leading-relaxed">Some content from a lesser model had subtle issues — oversimplifications, wrong emphasis. The kind of thing only a human who <em>knows the material</em> would catch.</p>
    </div>
    <div class="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10">
        <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">Step 6</span>
        </div>
        <h4 class="font-headline font-bold text-on-surface mb-1">Repeated for all chapters</h4>
        <p class="text-on-surface-variant text-sm leading-relaxed">Each one followed the same loop: generate a draft, read carefully, fix content, refine visuals. Easier one by one than batching.</p>
    </div>
    <div class="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10">
        <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">Step 7</span>
        </div>
        <h4 class="font-headline font-bold text-on-surface mb-1">Fixed content chapter by chapter</h4>
        <p class="text-on-surface-variant text-sm leading-relaxed">A dedicated pass through every page, checking accuracy, tone, and flow.</p>
    </div>
    <div class="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10">
        <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">Step 8</span>
        </div>
        <h4 class="font-headline font-bold text-on-surface mb-1">Used a smarter model to review everything</h4>
        <p class="text-on-surface-variant text-sm leading-relaxed">Final quality pass across the whole site — catching inconsistencies, checking analogies held up, flagging anything off.</p>
    </div>
</div>

## 🤔 What I Learned (Honestly)

I still overestimate what AI can do sometimes. It got some definitions subtly wrong — maybe from an earlier knowledge cutoff, maybe from training data quirks. And I'll be honest: I was sometimes lazy. I didn't always type out every detail I wanted, hoping the model would fill in the gaps. Sometimes it did. Sometimes it filled them with confident nonsense.

The biggest lesson: **AI-assisted doesn't mean AI-authored.** Every page needed human judgment — the kind that comes from actually understanding the subject matter, not just being able to generate text about it.

Looking back, this whole site took about **5 days**. And if I'd followed my own advice — sat down, wrote more of the course content myself, had the LLM help me with the gaps, and spent more time on the overall flow — it probably would've been done faster. Part of the process was me wanting to see how automatic and smart Gemini 3 and the Gemini CLI had become. Curiosity is a valid reason to build things, even if it's not the most efficient path.

:::callout-dyk
**Tools I used:** Claude Code and Gemini CLI for development. Claude Opus and Claude Sonnet for content generation and review. A bit of GLM family models for light work and minor edits. I'm just sharing what I used — sticking with one tool is perfectly fine and probably preferred. Use whatever works for you.
:::

If you want to know more about what I do and how I can help, check out the <a href="about.html" class="text-primary font-bold hover:underline">About & Contact</a> page.
