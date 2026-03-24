---
title: "13.6 AI-Driven Review & Common Pitfalls"
description: "Use LLMs to catch LLM mistakes — and know the specific ways AI-generated code tries to appear correct without being correct."
chapter: "Chapter 13"
pageId: "13-06"
---

## 🎯 Core Goals
- Introduce the concept of using one LLM to review another's output as an additional quality layer.
- Catalogue the specific "cheating" patterns that emerge in AI-generated code.
- Establish a layered review framework: automated checks + AI review + human review.

:::callout-tldr
LLM #2 can review LLM #1's output — like two employees checking each other's work. But AI review is an additional layer, never a replacement for human review. And you need to know the specific ways LLMs "cheat" to spot the patterns.
:::

## 🔄 AI Reviewing AI

The concept is straightforward: after an LLM generates code, a second LLM reviews it — looking for problems, inconsistencies, and patterns that indicate something is wrong.

Why does this work? Because generating code and reviewing code use different capabilities. A model generating code is trying to satisfy a specification. A model reviewing code is asking: "What could go wrong here? What's missing? What looks suspicious?"

Just like having a second employee proofread a document catches errors the original writer missed (because they read what they meant to write, not what they actually wrote), an AI reviewer applies fresh pattern recognition without the original context.

In practice, this often catches:
- Security holes the generating LLM didn't flag
- Edge cases the original prompt didn't explicitly cover
- Inconsistencies between this code and the rest of the codebase
- Logic errors that pass superficial review but fail on careful analysis

:::callout-dyk
This approach — using multiple LLM calls with different roles to check each other — is sometimes called "LLM-as-judge." Researchers have found it surprisingly effective at catching certain categories of errors, particularly logical inconsistencies and formatting problems. It's less effective at catching deep semantic errors (when both models share the same misconceptions).
:::

## ⚠️ How AI "Cheats": Patterns to Watch For

LLMs don't intentionally cheat, but they are optimized to produce outputs that look correct. When the easiest path to "looking correct" diverges from actually being correct, they take it. These patterns are consistent enough that you should actively look for them:

**Lint disabled:** The LLM encounters a code style warning it can't easily fix, so it adds a comment like `// eslint-disable-next-line` to suppress the warning instead of fixing the underlying issue. The code "passes" linting but the problem is still there, just hidden.

**Tests that always pass:** LLM-generated tests sometimes hardcode the expected output, always return true, or only test the single example they were given. They look like tests. They run green. But they don't actually verify that the code works correctly — they just verify that the code produces this one specific output for this one specific input.

**Hardcoded values:** Values that should be configurable (API endpoints, pricing rules, timeout limits) are baked directly into the code. Works fine in the environment where it was built; fails or causes bugs when deployed elsewhere.

**Security holes:** Missing input validation, hardcoded secrets (API keys in the source code), or SQL/injection vulnerabilities introduced because the LLM didn't know to look for them.

**Dead code:** Functions that are defined but never called anywhere. Generated code sometimes includes scaffolding that was never wired up — it exists, it looks like it should work, but nothing calls it.

**Inconsistency:** The same problem is solved five different ways in five different places. Each solution works, but maintenance becomes a nightmare because there's no single place to fix things.

:::callout-error
A common mistake: trusting AI-generated tests at face value. Tests that always pass are worse than no tests — they create false confidence. Before trusting a test suite, verify that the tests actually fail when the code is broken. If a test can't fail, it's not a test.
:::

## 🛡️ The Layered Review Framework

No single review layer is enough. Best practice is three layers, each catching different types of problems:

**Layer 1: Automated checks**
- Linting (code style and basic quality)
- Security scanning (known vulnerability patterns)
- Unit and integration tests
- Type checking (for typed languages)

These run automatically on every change and catch mechanical problems consistently.

**Layer 2: AI review**
Prompt a second LLM to review the generated code specifically looking for the cheat patterns above. Provide it with context about your project's standards. Ask it to check for: disabled linting, suspicious tests, hardcoded values, missing input validation, dead code, and inconsistency.

This layer is fast and catches pattern-matching problems that humans might miss in routine review.

**Layer 3: Human review**
A human reviews the AI reviewer's findings — verifying the AI's concerns, catching things the AI missed, and making judgment calls about tradeoffs. This is especially important for logic, security, and business rule correctness.

The key principle: **AI review is an additional layer, never the only layer.** Both humans and AI have blind spots. The goal is to have different types of review covering different types of problems.

:::visual{name="visual-ai-review"}

## 📝 Key Concepts

- **LLM-as-judge** — use a second LLM to review the first one's output as an additional quality layer.
- **Know the cheat patterns**: lint disabled, always-passing tests, hardcoded values, security holes, dead code, inconsistency.
- **Tests that always pass are worse than no tests** — they create false confidence.
- **Three layers**: automated checks + AI review + human review. Each catches different problems.
- **AI review supplements, never replaces, human judgment** — especially for logic, security, and business rules.

:::quiz{id="13-06"}
