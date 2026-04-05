---
title: "2.6 LLM 是如何訓練的"
description: "原始文本如何變成得力助手：探索預訓練 (Pre-training)、微調 (Fine-tuning) 與 RLHF。"
chapter: "第 2 章"
pageId: "02-06"
---

## 🎯 核心目標
- 理解 LLM 訓練中的兩個關鍵時刻：語言學習與質量學習。
- 理解為什麼僅靠預訓練 (Pre-training) 產生的只是一個「混亂」的自動完成，而非得力助手。
- 理解人類反饋在 RLHF 中是如何轉化為數學訓練信號的。

:::callout-tldr
訓練 LLM 是一個漫長且包含多個階段的過程。為了建立直覺，我們將探索兩個關鍵範例：**預訓練 (Pre-training)** 透過在整個互聯網上進行數十億次的預測下一個字詞，讓模型大規模地學習語言。接著，**RLHF (基於人類反饋的強化學習)** 透過人類的偏好引導旋鈕的調整方向，教導模型給出「好」的答案。
:::

## 👁️ 視覺化與互動組件


:::visual{name="visual-training"}

:::callout-dyk
上述階段只是更長、更複雜流程中的兩個縮影。現代 LLM 訓練還包括：
- **合成數據生成 (Synthetic data generation)**（LLM 自行生成訓練範例）
- **RLAIF / 憲法 AI (Constitutional AI)**（使用 AI 反饋代替或配合人類評分員）
- **工具使用訓練 (Tool-use training)**（教導 LLM 使用搜尋、執行程式碼和 API）以及
- **指令微調數據集 (Instruction-tuning datasets)**（精心挑選的高質量問答對）。這裡的直覺是簡化過的 —— 但它們是正確的基礎。
:::

:::callout-dyk
即使 RLHF 中的人類評分員偶爾會出現不一致的情況（有時對同一個提示偏好不同的回應），這個過程整體上仍能改善模型。大規模的不完美反饋，也遠比完全沒有反饋要好得多。
:::

:::callout-error
LLM 並非天生就有禮貌或安全。單靠預訓練 (Pre-training) 產生的只是一個原始的模式匹配器，它會像完成一封商務郵件一樣，輕而易舉地完成一段帶毒的謾罵。只有透過微調 (Fine-Tuning) 和 RLHF，它們才能成為我們今天使用的得力且謹慎的助手。
:::

:::quiz{id="02-06"}
LLM 訓練階段的正確順序是什麼？
- [ ] 微調 (Fine-tuning) → 預訓練 (Pre-training) → RLHF
- [x] 預訓練 (Pre-training) → 微調 (Fine-tuning) → RLHF
- [ ] RLHF → 預訓練 (Pre-training) → 微調 (Fine-tuning)
:::

:::quiz{id="02-06b"}
為什麼會存在 RLHF (基於人類反饋的強化學習)？它的目的是什麼？
- [ ] 教導模型從互聯網學習新的語言和事實
- [ ] 讓模型生成文本的速度更快
- [x] 塑造模型的行為 —— 讓它變得有幫助、安全且誠實，而非僅僅是原始的自動完成
- [ ] 壓縮模型以使其佔用更少的磁碟空間
:::
