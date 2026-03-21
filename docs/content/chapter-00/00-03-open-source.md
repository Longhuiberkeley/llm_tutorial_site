---
title: Open Source vs Closed Source
chapter: 0
page: 3
goals:
  - "Understand the difference between open source and closed source models"
  - "Know key open source models (GLM, Kimi, DeepSeek, Qwen)"
  - "Understand quadratic relationship: bigger model = more compute needed"
visuals:
  - "Quadratic curve visualization (model size vs compute)"
  - "Comparison table: open vs closed trade-offs"
---

# Page 0.3: Open Source vs Closed Source

## The Two Approaches

### 🔒 Closed Source (API Only)

| Provider | Models | You Need To... |
|----------|--------|----------------|
| Anthropic | Claude | Use their API |
| OpenAI | GPT | Use their API |
| Google | Gemini | Use their API |

**Pros:** Best performance, easy to use, no infrastructure
**Cons:** Monthly costs, data leaves your systems, less control

### 📖 Open Weights (Self-Host)

| Provider | Models | Notable For |
|----------|--------|-------------|
| **Zhipu AI** | GLM-4 | Chinese-English bilingual |
| **Moonshot** | Kimi | Very long context (2M+ tokens) |
| **DeepSeek** | DeepSeek-V3 | Best open-source reasoning |
| **Alibaba** | Qwen 2.5 | Strong multilingual support |
| Meta | Llama 3/3.1 | Most popular, great ecosystem |

**Pros:** Data stays yours, no per-token costs, customizable
**Cons:** Need GPU servers, maintenance, scaling is hard

### 📐 The Quadratic Relationship

**Key insight:** Bigger models need WAY more compute

```
Model Size  →  Compute Needed  →  Cost
2x bigger   →  4x compute      →  4x cost  (quadratic!)
```

**What this means:**
- A model with 2x parameters needs ~4x GPU memory
- Running it yourself scales poorly
- Open source makes sense at scale, not for small projects

### 🎯 Decision Framework

| Use Case | Recommended |
|----------|-------------|
| Startup, <1M tokens/month | Closed source (API) |
| Need data privacy | Open source (self-host) |
| Want to customize | Open source |
| Don't want to manage servers | Closed source |
| High volume, predictable | Open source (cheaper at scale) |

### 💡 Hybrid Approach

Many companies do both:
- Use API for development and testing
- Switch to self-host when volume justifies it
- Run smaller open models for simple tasks
- Call API for complex reasoning

---

**Interactive Element:** Quadratic curve - drag a slider to see how compute grows with model size.
