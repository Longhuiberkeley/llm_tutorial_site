---
title: "13.4 Building the Right Thing: Requirements Traceability"
description: "Every feature should trace back to a requirement — here's why that mindset matters and how to apply it, whether formally or informally."
chapter: "Chapter 13"
pageId: "13-04"
---

## 🎯 Core Goals
- Distinguish between building things right and building the right things.
- Define requirements traceability as a mental model — the chain from requirement to verification — and why it matters even if you never formalize it.
- Introduce feature drift and how to detect it in LLM-assisted projects.

<div class="not-prose callout callout-tldr">

It's easy to build things. It's harder to build the right things. Requirements traceability is the practice of ensuring every piece of work can be traced back to a stated need — so you can prove you're solving real problems, not just generating output. You don't need to run a formal tracking system to benefit from this — the mindset alone changes how you make decisions. Many agile teams never formalize it — but the best ones think this way instinctively.

</div>

## 🏗️ Two Ways to Fail

Every project has two distinct ways to fail:

1. **Building things right but building the wrong things** — high-quality output that doesn't serve the actual need. The code is clean, the report is well-written, the feature works perfectly — but it doesn't solve the problem it was supposed to solve.

2. **Building the right things, but building them wrong** — the correct problem is targeted, but the output is buggy, inconsistent, or incomplete.

Both failures matter. But LLM-assisted projects are uniquely vulnerable to the first failure mode.

The second failure mode is often visible. You can see bad code. A reviewer catches the error. Tests fail. Someone notices the report contradicts itself. The feedback loop is fast.

The first failure mode is invisible. The code works. The report reads well. The feature is impressive. The problem is that none of it serves the goal that was supposed to be served — and no one can see that from looking at the output alone. You only discover it when the business outcome you were working toward doesn't materialize.

LLMs accelerate both failure modes equally. The question is: which one are you managing for?

## 🔗 What Is Requirements Traceability?

Requirements traceability is a way of thinking that protects against the first failure mode.

The idea is a **chain** connecting every piece of work back to the need it serves:

**Requirement → Design Decision → Implementation → Verification**

In its most formal version, each requirement has an ID, every design decision traces to a requirement ("this module exists because of R4"), every implementation item traces to a design decision, and every test traces to a requirement. In practice, few teams outside regulated industries maintain that level of formality — and they don't need to. The value isn't in the tracking system. It's in the habit of asking the question: **"Which requirement does this serve?"** If you can answer that for any piece of work in your project — whether from a spreadsheet, from memory, or from a gut check against your project goals — the mental model is working.

<div class="not-prose callout callout-tip">

In reality, most agile teams, fast-moving startups, and solo developers never maintain formal traceability chains — and many ship great products. The reason to learn this concept isn't to impose paperwork on your process. It's to build the reflex of asking "why are we building this?" before you build it. That reflex alone prevents the most expensive class of project failures. How you practice it — and whether you formalize it — is entirely up to you.

</div>


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-6">
<h3 class="text-xl font-bold font-headline mb-2">Requirements Traceability Chain</h3>
<p class="text-sm text-on-surface-variant">Click a requirement to trace it through the chain. Try "Feature Drift Mode" to spot orphaned work.</p>
</div>
<!-- Mode Toggle -->
<div class="flex gap-2 justify-center mb-6">
<button onclick="setRtMode('trace', this)" id="rt-btn-trace"
class="rt-mode-btn px-4 py-2 rounded-full text-xs font-bold border-2 border-outline-variant bg-surface-container-lowest transition-all hover:border-primary">
🔗 Trace Mode
</button>
<button onclick="setRtMode('drift', this)" id="rt-btn-drift"
class="rt-mode-btn px-4 py-2 rounded-full text-xs font-bold border-2 border-outline-variant bg-surface-container-lowest transition-all hover:border-primary">
🌊 Feature Drift Mode
</button>
</div>
<!-- Trace Mode -->
<div id="rt-trace-view">
<!-- Requirements Row -->
<div class="mb-4">
<div class="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-2 text-center">📋 Requirements — click to trace</div>
<div class="flex flex-wrap gap-2 justify-center" id="rt-reqs">
<button onclick="traceReq('R1', this)" class="rt-req px-4 py-2 rounded-full text-xs font-bold border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all">R1: User Login</button>
<button onclick="traceReq('R2', this)" class="rt-req px-4 py-2 rounded-full text-xs font-bold border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all">R2: Fast Search</button>
<button onclick="traceReq('R3', this)" class="rt-req px-4 py-2 rounded-full text-xs font-bold border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all">R3: Export to PDF</button>
</div>
</div>
<!-- Chain -->
<div id="rt-chain" class="hidden">
<div class="flex flex-col sm:flex-row items-stretch gap-2 justify-center">
<div id="rt-c-req" class="flex-1 rounded-xl p-4 border-2 border-outline-variant bg-surface-container-lowest text-xs text-center">
<div class="font-black text-[9px] uppercase tracking-wider text-on-surface-variant mb-1">REQUIREMENT</div>
<div id="rt-c-req-text" class="font-bold text-on-surface"></div>
<div id="rt-c-req-desc" class="text-on-surface-variant mt-1 text-[10px]"></div>
</div>
<div class="flex items-center justify-center text-on-surface-variant font-bold text-lg">→</div>
<div id="rt-c-design" class="flex-1 rounded-xl p-4 border-2 border-outline-variant bg-surface-container-lowest text-xs text-center">
<div class="font-black text-[9px] uppercase tracking-wider text-on-surface-variant mb-1">DESIGN DECISION</div>
<div id="rt-c-design-text" class="font-bold text-on-surface"></div>
<div id="rt-c-design-desc" class="text-on-surface-variant mt-1 text-[10px]"></div>
</div>
<div class="flex items-center justify-center text-on-surface-variant font-bold text-lg">→</div>
<div id="rt-c-impl" class="flex-1 rounded-xl p-4 border-2 border-outline-variant bg-surface-container-lowest text-xs text-center">
<div class="font-black text-[9px] uppercase tracking-wider text-on-surface-variant mb-1">IMPLEMENTATION</div>
<div id="rt-c-impl-text" class="font-bold text-on-surface"></div>
<div id="rt-c-impl-desc" class="text-on-surface-variant mt-1 text-[10px]"></div>
</div>
<div class="flex items-center justify-center text-on-surface-variant font-bold text-lg">→</div>
<div id="rt-c-test" class="flex-1 rounded-xl p-4 border-2 border-outline-variant bg-surface-container-lowest text-xs text-center">
<div class="font-black text-[9px] uppercase tracking-wider text-on-surface-variant mb-1">VERIFICATION</div>
<div id="rt-c-test-text" class="font-bold text-on-surface"></div>
<div id="rt-c-test-desc" class="text-on-surface-variant mt-1 text-[10px]"></div>
</div>
</div>
</div>
<div id="rt-chain-prompt" class="text-center mt-4">
<p class="text-xs text-on-surface-variant italic">Click a requirement above to see its full chain.</p>
</div>
</div>
<!-- Drift Mode -->
<div id="rt-drift-view" class="hidden">
<p class="text-xs text-on-surface-variant text-center mb-4">Five features were built. Which ones trace back to a stated requirement? Click each to find out.</p>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-3" id="rt-drift-items">
<button onclick="checkDrift(0, this)" class="rt-drift p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest text-left hover:border-primary transition-all text-xs">
<div class="font-bold mb-1">🔐 User login via email and Google OAuth</div>
<div class="text-on-surface-variant text-[10px]">Two login methods with password reset</div>
</button>
<button onclick="checkDrift(1, this)" class="rt-drift p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest text-left hover:border-primary transition-all text-xs">
<div class="font-bold mb-1">🎨 Animated background on the homepage</div>
<div class="text-on-surface-variant text-[10px]">Subtle particle effect, looked cool in the LLM demo</div>
</button>
<button onclick="checkDrift(2, this)" class="rt-drift p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest text-left hover:border-primary transition-all text-xs">
<div class="font-bold mb-1">⚡ Search results in under 2 seconds</div>
<div class="text-on-surface-variant text-[10px]">Indexed search with caching</div>
</button>
<button onclick="checkDrift(3, this)" class="rt-drift p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest text-left hover:border-primary transition-all text-xs">
<div class="font-bold mb-1">🌙 Dark mode toggle</div>
<div class="text-on-surface-variant text-[10px]">The LLM suggested it while building the UI</div>
</button>
<button onclick="checkDrift(4, this)" class="rt-drift p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest text-left hover:border-primary transition-all text-xs sm:col-span-2">
<div class="font-bold mb-1">📄 Export results to PDF</div>
<div class="text-on-surface-variant text-[10px]">Users asked for this in stakeholder interviews</div>
</button>
</div>
<div id="rt-drift-result" class="mt-4 rounded-xl p-4 text-center text-xs font-bold bg-surface-container-lowest border border-outline-variant text-on-surface-variant hidden"></div>
</div>
</div>
<script type="module">
import { init } from '/js/interactives/requirements-traceability.js';
init({
chains: {
R1: { req: { text: 'R1: User Login', desc: 'Users can log in via email or Google OAuth with password reset — on mobile and desktop.' }, design: { text: 'Auth module', desc: 'Separate authentication service, OAuth integration via provider SDK, JWT session tokens.' }, impl: { text: 'auth.js + GoogleOAuth', desc: 'Login form, Google OAuth button, password reset flow, session token issuance.' }, test: { text: 'Auth test suite', desc: 'Login with email, login with Google, password reset, session expiry, mobile/desktop layout tests.' } },
R2: { req: { text: 'R2: Fast Search', desc: 'Search results must appear in under 2 seconds for 95% of queries.' }, design: { text: 'Indexed search + cache', desc: 'Inverted index built at write time. Redis cache for top 1000 queries. Query timeout: 1.8s.' }, impl: { text: 'search.js + RedisCache', desc: 'Index builder, cache warmer, query router, result formatter.' }, test: { text: 'Performance tests', desc: 'Load test: 100 concurrent users. P95 latency < 2s. Edge case: empty query, special chars.' } },
R3: { req: { text: 'R3: Export to PDF', desc: 'Users can export any search results page to a formatted PDF.' }, design: { text: 'PDF generation service', desc: 'Server-side render to headless browser, template for branded layout, max 10MB output.' }, impl: { text: 'export.js + pdf-template.html', desc: 'Export button on results page, PDF generation API endpoint, download link delivery.' }, test: { text: 'Export tests', desc: 'Export with 10 results, 100 results. Verify layout, verify branding, verify file size limit.' } }
},
driftData: [
{ traced: true, req: 'R1', note: '✅ Traced to R1: User Login. Stakeholder interviews defined this as a core requirement in the brief.' },
{ traced: false, req: null, note: '❌ No requirement found. This was generated because "it looked cool." It adds bundle size, slows load time, and serves no defined user need.' },
{ traced: true, req: 'R2', note: '✅ Traced to R2: Fast Search. Performance requirement defined before development.' },
{ traced: false, req: null, note: '❌ No requirement found. Dark mode was suggested by the LLM during UI generation. It may be valuable — but it should be added as an explicit requirement (R6?) with success criteria, not absorbed implicitly.' },
{ traced: true, req: 'R3', note: '✅ Traced to R3: Export to PDF. Defined in stakeholder interviews.' }
]
});
</script>

</div>


This applies beyond software:
- In a research report: each section traces to a research question defined in Phase 1.
- In a product launch: each feature traces to a user need in the brief.
- In a training course: each module traces to a learning objective.

If you can't complete the chain for a piece of work, that's a signal — not a failure. It means asking: "Why are we doing this? Which stated need does it serve?"

<div class="not-prose callout callout-dyk">

This practice has roots in industries where getting the wrong thing built is very expensive — aerospace, medical devices, automotive software. The principle that every line of implementation should be traceable to a requirement was formalized decades before LLMs. In those industries, it's a regulatory mandate. For everyone else, it's a powerful mental model — you take the thinking, leave the paperwork. The reason it matters even more now: LLMs generate so much, so fast, that untraced work can accumulate faster than ever before.

</div>

## 🔍 Two Conversations

Consider two versions of the same project review:

**Without traceability:**

"We added user profile customization last sprint because it seemed like a nice feature." Does it serve the onboarding goal (R1)? Or the retention goal (R7)? Does it conflict with the priority to ship the core use case (R3) first? There's no way to tell. The team is guessing at whether the work was the right call.

**With traceability:**

"We added user profile customization to implement R7 — the requirement that users must be able to set notification preferences, per the stakeholder session on February 12." The business justification is clear. You can evaluate whether R7 was the right priority at this moment. You can measure success against R7's success criteria. You can defend the decision in a review.

The difference isn't just record-keeping. It's the ability to make and evaluate decisions rationally rather than based on what felt right at the time.

## 🌊 Feature Drift in LLM Projects

LLMs are very good at generating plausible extensions. Ask an LLM to "improve the application" and it will generate improvements — features that look useful, that work correctly, that seem like good additions.

What the LLM cannot tell you is which requirement each improvement serves.

**Feature drift** is the gradual accumulation of work that is well-executed but not connected to a stated need. Each individual item looks reasonable. The aggregate picture is a project that has moved away from its original purpose without anyone deciding to change course.

The detection mechanism is simple: before accepting any generated output, ask "which requirement does this serve?" If you can't name one, the work needs to be justified before it's accepted — not after.

Here is the scenario in plain terms: you share your project with friends on the weekend and they come back with 50 suggestions. Now what? Without a requirements framework, the default is to build the ones that seem most interesting, or the ones from whoever was most persuasive. With a requirements mindset, you have a filter: which of these suggestions connect to an existing requirement? Which ones reveal a real gap that should be added formally? Which ones are good ideas but belong to a later phase — not now? You don't have to build all 50, and you don't have to reject all 50. The framework gives you a principled way to decide.

This isn't about rejecting good ideas. It's about making the decision consciously. A good idea that doesn't serve an existing requirement is either:
- Evidence that a new requirement should be added (update the chain, then proceed), or
- A distraction that should be deferred to a later phase.

Either way, the decision is made explicitly rather than absorbed implicitly through the accumulated output. Plans change — requirements get updated, priorities shift, scope evolves. That's expected. The mindset of traceability doesn't demand a perfect, unchanging plan. It demands conscious decisions. When a requirement changes, update the chain. When a new feature is added, add the requirement. The discipline is in making each decision deliberately, not in resisting change.

<div class="not-prose callout callout-error">

A common mistake: treating requirement changes as a reason to abandon traceability. "The requirements changed so fast we couldn't track them" usually means there was no requirements process in the first place — changes were being made implicitly through code and output rather than explicitly in requirements. Adding traceability during a fast-moving project is harder, but adding it late is still valuable: it forces a retroactive justification of every existing piece of work.

</div>

## 📄 The Building Blocks: User Stories and PRDs

If you do want to give traceability some structure, two lightweight tools can help:

**User stories** are single requirements written from the user's perspective:
*"As a [user], I want to [do something] so that [I achieve some outcome]."*

They're short by design. Each story is one need, one user, one outcome. For teams that want a lightweight requirements list, user stories are a natural fit — each one captures a single traceable need.

**Product Requirement Documents (PRDs)** capture a larger set of requirements in one place: the purpose of the project, the users it serves, each capability required, the constraints, and the acceptance criteria. A PRD is a living document — updated when requirements change, consulted when making decisions.

You don't need either to be formal. A numbered list of requirements in a shared document works. Even a set of bullet points in a project README is better than nothing. What matters most is that requirements exist somewhere outside your head and get consulted — even informally — before work is accepted.

## 📝 Key Concepts

- **Two failure modes** — building the wrong thing (invisible) and building it wrong (visible). LLMs accelerate both; traceability addresses the first.
- **The chain** — Requirement → Design Decision → Implementation → Verification. A mental model for checking that every piece of work connects to a stated need.
- **Feature drift** — plausible-looking work accumulates without connecting to stated needs. Before accepting LLM output: "which requirement does this serve?"
- **User stories** — single requirements in the format "As a [user], I want [action] so that [outcome]."
- **PRDs** — living documents capturing the full requirements set; updated when requirements change, consulted when making decisions.

<div id="quiz-13-04" class="not-prose quiz-container my-12" data-quiz="13-04"></div>
