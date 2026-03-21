---
title: Web UI vs API
chapter: 0
page: 4
goals:
  - "Understand when to use chat interfaces vs build with APIs"
  - "Know the trade-offs between web UI and programmatic access"
  - "Get intuition about when to automate"
visuals:
  - "Side-by-side comparison: browser vs code"
  - "Flow chart showing decision tree"
---

# Page 0.4: Web UI vs API

## Two Ways to Use LLMs

### 🌐 Web UI (Chat Interface)

**What it is:** Using claude.ai, chatgpt.com, gemini.google.com in a browser

**Best for:**
- ✅ Learning and exploration
- ✅ One-off tasks (write an email, summarize a doc)
- ✅ Brainstorming and ideation
- ✅ Quick answers without coding
- ✅ Interactive, iterative work

**Limitations:**
- ❌ Can't automate (needs human to click)
- ❌ Can't integrate into your products
- ❌ Manual copy-paste
- ❌ No record for business processes

### 🔌 API (Programmatic Access)

**What it is:** Calling LLMs from code (Python, JS, etc.)

**Best for:**
- ✅ Building products (chatbots, AI features)
- ✅ Automating repetitive tasks
- ✅ Processing many items at once
- ✅ Integrating into workflows
- ✅ Building customer-facing features

**Requirements:**
- Need coding skills (or someone who can code)
- API key and billing setup
- Error handling and rate limits

### 🎯 Decision Tree

```
Do you need to do this task repeatedly?
├── No → Use Web UI
└── Yes
    ├── Can you write code (or hire someone)?
    │   ├── No → Use Web UI (for now)
    │   └── Yes
    │       ├── Is the task high-volume?
    │       │   ├── Yes → Use API
    │       │   └── No → Start with Web UI, automate later if worth it
```

### 💼 Business Examples

| Task | Web UI or API? | Why |
|------|----------------|-----|
| Write weekly newsletter | Web UI | Low volume, needs human touch |
| Customer support bot | API | Automated, customer-facing |
| Analyze 1000 documents | API | High volume, repetitive |
| Brainstorm blog topics | Web UI | One-off, creative |
| Auto-generate reports | API | Scheduled, automated |

### 💡 Pro Tip

Start with Web UI to:
1. Figure out what prompts work
2. Validate the use case is valuable
3. Learn what the LLM can/can't do

Then move to API when:
- You're doing the same task daily
- You've proven it saves time/money
- You want to share with others

---

**Interactive Element:** Decision tree - answer questions to get a recommendation (Web UI vs API).
