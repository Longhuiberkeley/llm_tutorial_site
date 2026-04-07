---
title: "7.7 RAG 對比 微調 (Fine-Tuning) —— 何時微調才真正有意義？"
description: "微調 (Fine-Tuning) 曾經是解決所有問題的熱門方案。到了 2026 年，情況變得更加清晰且更具層次感。"
chapter: "第 7 章"
pageId: "07-07"
---

## 🎯 核心目標
- 瞭解何時微調 (Fine-Tuning) 真正有意義，以及何時沒有必要。
- 學會提出正確的問題：「大型語言模型 (LLM) 是否已經了解這個領域？」

<div class="not-prose callout callout-tldr">

現在的模型比以往更聰明，上下文窗口 (Context Window) 也更大。大多數問題現在都可以透過良好的提示 (Prompting)、工具調用 (Tool use) 和 檢索增強生成 (RAG) 來解決，而無需進行微調 (Fine-Tuning)。只有當你擁有的數據是任何公開模型都不可能學習過的，才考慮進行微調。

</div>

## 對話的核心已經轉移

幾年前，微調 (Fine-Tuning) 在工業界和學術界都引起了轟動。到了 2026 年，LLM 的能力大幅提升，上下文窗口 (Context Window) 也大規模擴張。精心設計的提示 (Prompt)、工具調用或 RAG 流程現在已經可以處理絕大多數現實世界的任務。

關鍵問題是：**「標準 LLM 的訓練數據中是否包含關於我們問題的知識？」**

還有一個實際的限制：當今的前沿模型 (Frontier models，如 GPT-4、Claude、Gemini) 擁有數千億個參數。對於大多數機構來說，自行微調是不切實際或不可能的。雖然可以微調較小的蒸餾版本，但完整的前沿模型所需的基礎設施，只有極少數人能負擔得起。

## 「開卷」與「閉卷」的區別

想像這是一場考試：

- **RAG = 開卷考試。** LLM 從你的知識庫中實時查找資料 —— 準確、及時且可引用。模型本身從未改變。
- **微調 (Fine-tuning) = 深度學習。** 知識直接嵌入到模型的權重 (Weights) 中 —— 推理 (Inference) 速度快且一致，但僅限於訓練數據中的內容。


<div class="not-prose">
<!-- Visual: RAG vs Fine-Tuning comparison -->
<div class="bg-surface-container-low rounded-xl p-6 mb-8 max-w-3xl mx-auto shadow-sm">
<div class="text-center mb-5">
<h3 class="text-lg font-bold font-headline mb-1">Two Ways to Give an LLM Knowledge</h3>
<p class="text-sm text-on-surface-variant">The open-book exam vs. studying deeply</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<!-- RAG -->
<div class="bg-surface-container-lowest rounded-xl p-4 border-2 border-blue-400/40">
<div class="flex items-center gap-2 mb-3">
<span class="text-2xl">📖</span>
<div>
<div class="font-bold">RAG</div>
<div class="text-xs text-blue-600 font-bold">Open-book exam</div>
</div>
</div>
<div class="space-y-2 text-xs mb-4">
<div class="flex gap-2"><span class="text-blue-500 font-bold mt-0.5">•</span><span>Model unchanged — attach a knowledge base</span></div>
<div class="flex gap-2"><span class="text-blue-500 font-bold mt-0.5">•</span><span>Retrieve relevant docs at query time</span></div>
<div class="flex gap-2"><span class="text-blue-500 font-bold mt-0.5">•</span><span>Knowledge is current and traceable</span></div>
<div class="flex gap-2"><span class="text-blue-500 font-bold mt-0.5">•</span><span>Update the knowledge base any time</span></div>
<div class="flex gap-2"><span class="text-blue-500 font-bold mt-0.5">•</span><span>No retraining needed</span></div>
</div>
<div class="bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 text-xs">
<span class="font-bold text-blue-700">Use when:</span> LLM already understands the domain — you just need to feed it your specific data
</div>
</div>
<!-- Fine-tuning -->
<div class="bg-surface-container-lowest rounded-xl p-4 border-2 border-orange-400/40">
<div class="flex items-center gap-2 mb-3">
<span class="text-2xl">🎓</span>
<div>
<div class="font-bold">Fine-Tuning</div>
<div class="text-xs text-orange-600 font-bold">Studying deeply</div>
</div>
</div>
<div class="space-y-2 text-xs mb-4">
<div class="flex gap-2"><span class="text-orange-500 font-bold mt-0.5">•</span><span>Model retrained on your data</span></div>
<div class="flex gap-2"><span class="text-orange-500 font-bold mt-0.5">•</span><span>Knowledge baked into model weights</span></div>
<div class="flex gap-2"><span class="text-orange-500 font-bold mt-0.5">•</span><span>Fast at inference, no retrieval step</span></div>
<div class="flex gap-2"><span class="text-orange-500 font-bold mt-0.5">•</span><span>Expensive and slow to update</span></div>
<div class="flex gap-2"><span class="text-orange-500 font-bold mt-0.5">•</span><span>Frontier models require enormous infra</span></div>
</div>
<div class="bg-orange-50 border border-orange-200 rounded-lg px-3 py-2 text-xs">
<span class="font-bold text-orange-700">Use when:</span> Knowledge truly doesn't exist in public training data — proprietary language, niche domain
</div>
</div>
</div>
<div class="mt-4 bg-primary/5 border border-primary/20 rounded-xl px-4 py-3 text-xs text-center">
<span class="font-bold">These aren't mutually exclusive</span> — many production systems use fine-tuning to shape <em>behavior</em> while using RAG to inject domain <em>knowledge</em>.
</div>
</div>

</div>


## 何時微調 (Fine-Tuning) 才是真正的正確選擇

**案例 1：專有的編程語言**
你的公司開發了一種內部領域特定語言 (DSL)，全球只有 50 人使用。GPT/Claude/Gemini 從未見過它。即使在每個提示中都加入 tutorial.txt，LLM 仍然會出現一致的語法錯誤。這時就需要在你的代碼庫上進行微調。

**案例 2：放射科罕見疾病檢測**
你需要一個 LLM 來分析胸部 X 光片以檢測罕見的肺部疾病。大型實驗室沒有你機構的影像數據集。這時就需要在你標記過的掃描圖像上進行微調。

## 何時 RAG 就足夠了

**公司人力資源政策問答：** LLM 已經知道如何回答人力資源問題 —— 只需透過 RAG 加載你的政策文檔即可。

**法律文件分析：** LLM 已經理解法律語言 —— 律師 Sarah 只需要透過檢索功能獲取她的 500 個案例即可。

## 決策指南

<div class="space-y-3 my-4">
  <div class="flex items-start gap-3 bg-surface-container-low rounded-xl p-4">
    <span class="text-lg">🔍</span>
    <div><strong class="text-sm">這些知識是否為你的組織/領域所獨有？</strong>
    <p class="text-xs text-on-surface-variant mt-1">如果公開數據涵蓋了這些內容 → 使用 RAG。如果它確實不存在於你的公司之外 → 考慮微調 (Fine-Tuning)。</p></div>
  </div>
  <div class="flex items-start gap-3 bg-surface-container-low rounded-xl p-4">
    <span class="text-lg">🧠</span>
    <div><strong class="text-sm">LLM 是否已經理解這個領域？</strong>
    <p class="text-xs text-on-surface-variant mt-1">如果是 → RAG 就能奏效。LLM 只需要你的特定數據，而不是新的領域知識。</p></div>
  </div>
  <div class="flex items-start gap-3 bg-surface-container-low rounded-xl p-4">
    <span class="text-lg">📊</span>
    <div><strong class="text-sm">你是否擁有高質量的精選數據集？</strong>
    <p class="text-xs text-on-surface-variant mt-1">垃圾進，垃圾出 (Garbage in, garbage out)。噪聲大或不一致的訓練數據會使模型變得更糟。如果答案是否定的，請先不要進行微調。</p></div>
  </div>
  <div class="flex items-start gap-3 bg-surface-container-low rounded-xl p-4">
    <span class="text-lg">🔄</span>
    <div><strong class="text-sm">你的數據是否頻繁更新？</strong>
    <p class="text-xs text-on-surface-variant mt-1">RAG 讓你可以隨時更新知識庫。微調後的模型在數據變化時需要重新訓練。</p></div>
  </div>
  <div class="flex items-start gap-3 bg-surface-container-low rounded-xl p-4">
    <span class="text-lg">🛠️</span>
    <div><strong class="text-sm">強大的提示 (Prompting) + 工具調用 (Tool use) 是否已經可以解決問題？</strong>
    <p class="text-xs text-on-surface-variant mt-1">始終從最簡單的方法開始。大多數問題都可以透過良好的提示或 RAG 解決 —— 不要過度設計。</p></div>
  </div>
</div>

<div class="not-prose callout callout-tip">

始終從最簡單的方法開始：良好的提示 (Prompting) 和工具調用 (Tool use)。如果不足夠，再加入 RAG。只有當你可以明確回答「這些知識根本不存在於任何公開訓練數據中」時，才進行微調 (Fine-Tuning)。

</div>

## 📝 關鍵概念

- **微調 (Fine-Tuning) 的熱度已經降溫：** RAG + 提示 (Prompting) 現在可以處理大多數情況
- **真正的微調測試：** 「標準模型是否可能接受過這些數據的訓練？」
- **RAG 滿足大多數業務需求：** 如果 LLM 瞭解該領域，只需提供你的數據即可
- **專有 + 罕見 = 微調領域：** 自定義語言、小眾醫學影像
- **並非互斥：** 許多系統使用微調來規範行為 + 使用 RAG 來提供知識

<div class="not-prose my-12">
<!--
Quiz Box Component
Generated by build.js from :::quiz blocks in markdown.
-->
<div id="quiz-07-07" class="quiz-container bg-surface-container border border-outline-variant rounded-xl p-6 mt-10">
    <div class="font-bold mb-4 flex items-center gap-2">
        <span>🧠</span>
        <span>QUIZ</span>
    </div>
    <p class="mb-4">何時應該考慮微調 (Fine-Tuning) LLM 而不是使用 RAG？</p>
    <div class="space-y-2">
                <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="true">
            當知識確實是專有的，且不可能存在於任何公開訓練數據中時
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            每當你想在特定任務上獲得更好的性能時
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            當你的數據頻繁更新且需要保持最新狀態時
        </div>
    </div>
    <div class="quiz-feedback hidden mt-4 p-4 rounded-lg"></div>
</div>

</div>
