---
title: "11.5 Planning Your AI Rollout"
description: "What separates a successful AI implementation from a costly mess — and how to plan a rollout that actually sticks."
chapter: "Chapter 11"
pageId: "11-05"
---

<div class="not-prose callout callout-tldr">

A rollout plan isn't optional — it's the difference between an AI deployment that works and one that costs you more than it saves. And the plan is mostly about communication, not technology.

</div>

## A Story Without a Plan

**Company A** is a mid-sized US e-commerce business. Their ordering platform costs $50K/year. The CEO finds a Chinese-market platform with comparable features at $35K — plus a $10K customization package described as adapting the platform for international markets. All told, still a meaningful saving on paper. The feature list looks comparable. The customization package sounds thorough. They sign the contract.

Three months later, they have a very expensive problem.

<div class="space-y-3 my-6">

  <div class="bg-red-50 rounded-xl p-4 border border-red-200">
    <div class="flex items-start gap-3">
      <span class="text-xl">📦</span>
      <div>
        <div class="font-bold text-sm mb-1 text-red-800">Address Fields</div>
        <p class="text-sm text-red-700">The platform uses Chinese address format (Province → City → Street → Number). US addresses are Street → City → State → ZIP. Every customer address in the database is broken. Shipping fails for the first two weeks. The customization package was supposed to handle localization — but "address format" wasn't in the written scope.</p>
      </div>
    </div>
  </div>

  <div class="bg-red-50 rounded-xl p-4 border border-red-200">
    <div class="flex items-start gap-3">
      <span class="text-xl">📅</span>
      <div>
        <div class="font-bold text-sm mb-1 text-red-800">Date Formats</div>
        <p class="text-sm text-red-700">The platform stores dates as YYYY/MM/DD. Their accounting software expects MM/DD/YYYY. All historical records are mismatched. Reconciliation takes months. Nobody had mapped out which downstream systems would receive data from the new platform.</p>
      </div>
    </div>
  </div>

  <div class="bg-red-50 rounded-xl p-4 border border-red-200">
    <div class="flex items-start gap-3">
      <span class="text-xl">💳</span>
      <div>
        <div class="font-bold text-sm mb-1 text-red-800">Payment Integrations</div>
        <p class="text-sm text-red-700">The platform supports WePay and Alipay natively. US processors (Stripe, Braintree) require a custom integration. The customization contract mentioned payment support — but only for the processors the vendor already knew. Additional cost: $30K+ in unplanned development.</p>
      </div>
    </div>
  </div>

  <div class="bg-red-50 rounded-xl p-4 border border-red-200">
    <div class="flex items-start gap-3">
      <span class="text-xl">👩‍💼</span>
      <div>
        <div class="font-bold text-sm mb-1 text-red-800">Employee Efficiency</div>
        <p class="text-sm text-red-700">Staff trained on the old system need retraining. Nobody had planned for this, scheduled it, or budgeted for the productivity gap. Efficiency drops 40% for six weeks. The "savings" disappear into overtime and missed orders.</p>
      </div>
    </div>
  </div>

</div>

**Total cost of the switch:** The $15K annual saving cost roughly $200K in adaptation, development, and lost productivity.

The problem wasn't that they chose the wrong software, or even that they skipped the customization. The problem was that there was no rollout plan — no documented scope, no integration mapping, no transition timeline, no training plan. The customization contract gave them false confidence that the hard parts were handled.

<div class="not-prose callout callout-error">

This exact story repeats in AI tool adoption. A company deploys an AI product without piloting it, without mapping the workflows it will touch, without preparing the team. It fails in production. The time saved becomes time spent cleaning up the mess.

</div>

## A Rollout Plan Is Required

Here's what a real rollout plan covers:

<div class="space-y-3 my-6">

  <div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
    <div class="flex items-start gap-3">
      <span class="text-xl">📢</span>
      <div>
        <div class="font-bold text-sm mb-1">Communication</div>
        <p class="text-sm text-on-surface/80">People resist what they don't understand. Before any deployment, communicate clearly: <em>why</em> this change is happening, <em>what</em> is changing, <em>what stays the same</em>, and <em>what it means for each specific role</em>. This is the step most implementations skip — and the most damaging one to skip.</p>
      </div>
    </div>
  </div>

  <div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
    <div class="flex items-start gap-3">
      <span class="text-xl">🎓</span>
      <div>
        <div class="font-bold text-sm mb-1">Training</div>
        <p class="text-sm text-on-surface/80">Not just "here's the tool." Workflow-specific guidance, role by role. How does this change <em>my</em> job specifically? What do I do when something goes wrong? Generic training sessions rarely transfer to real work.</p>
      </div>
    </div>
  </div>

  <div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
    <div class="flex items-start gap-3">
      <span class="text-xl">🆘</span>
      <div>
        <div class="font-bold text-sm mb-1">Support Channels</div>
        <p class="text-sm text-on-surface/80">Before go-live, define who people ask when something breaks. A helpdesk ticket? A Slack channel? A designated point person on each team? Ambiguity here leads to confusion and silent workarounds that quietly undermine adoption.</p>
      </div>
    </div>
  </div>

  <div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
    <div class="flex items-start gap-3">
      <span class="text-xl">🪜</span>
      <div>
        <div class="font-bold text-sm mb-1">Phased Rollout</div>
        <p class="text-sm text-on-surface/80">Don't flip the switch globally. Start with a pilot team, gather real feedback, fix what's broken, then expand. Problems found in a pilot cost a fraction of what they cost in a full deployment.</p>
      </div>
    </div>
  </div>

  <div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
    <div class="flex items-start gap-3">
      <span class="text-xl">🔁</span>
      <div>
        <div class="font-bold text-sm mb-1">Feedback Loops</div>
        <p class="text-sm text-on-surface/80">After launch, establish a genuine channel for users to report problems — and actually address them. Token feedback forms that go nowhere destroy trust faster than almost anything else.</p>
      </div>
    </div>
  </div>

  <div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
    <div class="flex items-start gap-3">
      <span class="text-xl">⏱️</span>
      <div>
        <div class="font-bold text-sm mb-1">Transition Window</div>
        <p class="text-sm text-on-surface/80">How long will old and new coexist? Define this deliberately. Keeping both systems running indefinitely is expensive. Cutting over too fast leaves no safety net. Pick a window, communicate it clearly, and hold to it.</p>
      </div>
    </div>
  </div>

</div>

## The Person in Charge Matters

Successful AI rollouts aren't primarily a technology challenge. They're a change management challenge — and the person leading the implementation needs to understand both.

The implementer needs to be asking:
- Who is most affected by this change, and have I actually talked to them?
- Where will resistance come from — fear, added workload, skepticism about the technology?
- What does success look like from each team's perspective, not just the project sponsor's?
- What are the failure modes, and what's the early warning signal for each?

A rollout plan that lives in a spreadsheet and never gets discussed with the people it affects is not a rollout plan. It's a document.

## 📝 Key Concepts

- **A rollout plan is required** — not optional, not a nice-to-have
- **Communication comes first:** people resist what they don't understand; explain the *why* before the *what*
- **Phased over global:** pilot with a small team, learn from it, then expand
- **Define the transition window:** know how long both systems will coexist and commit to that timeline
- **The implementer's job is people, not just technology:** technical success without human adoption is failure

<div id="quiz-11-05" class="not-prose quiz-container my-12" data-quiz="11-05"></div>
