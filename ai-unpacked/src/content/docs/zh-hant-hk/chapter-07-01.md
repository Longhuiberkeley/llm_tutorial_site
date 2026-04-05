---
title: "7.1 律師案例分析 —— 當上下文不足時"
description: "一個揭示為何需要檢索的現實場景：上下文窗口無法容納 20 年的案件檔案。"
chapter: "第 7 章"
pageId: "07-01"
---

## 🎯 核心目標
- 確立根本問題：知識太多，上下文窗口 (Context window) 不足。
- 透過一個貼近生活的現實場景來引發對 RAG 作為解決方案的動機。

<div class="not-prose callout callout-tldr">

即使是巨大的上下文窗口 (Context window)，也無法容納律師 20 年的案件檔案。你需要一種更聰明的方法來僅提取最相關的資訊——而不是一次提取所有內容。

</div>

## 遇見 Sarah 律師

Sarah 從事法律工作 20 年。那是 **500 多個案件** —— 合約、糾紛、和解、上訴。一位新客戶帶著建築延誤索賠走進來。

「您以前處理過類似的事情嗎？」

Sarah 處理過。可能好幾次了。但 *哪些* 案件？案件 137？案件 284？案件 401？

**問題所在：** 即使是 500 個案件的簡要摘要也會超過 20 萬個詞元 (Tokens)。你根本無法將所有內容貼入提示 (Prompt) 並要求 LLM 找到相關的案件。放不下。而且即使放得下，注意力在長上下文中也會衰減——埋藏在中間的重要細節會被遺漏。


<div class="not-prose">
<!-- Visual: Context Overflow -->
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-3xl mx-auto shadow-sm">
<div class="text-center mb-6">
<h3 class="text-lg font-bold font-headline mb-1">Sarah's 20 Years of Case Files</h3>
<p class="text-sm text-on-surface-variant">vs. what fits in a single context window</p>
</div>
<div class="flex flex-col md:flex-row gap-6 items-start justify-center">
<!-- File Cabinet -->
<div class="flex-1 min-w-0">
<div class="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-3 text-center opacity-60">📁 Knowledge Base — 500+ Cases</div>
<div class="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-4">
<div class="grid grid-cols-8 gap-1 mb-2">
<span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span>
<span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span>
<span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span>
<span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span>
<span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span>
<span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span><span class="text-lg">🗂️</span>
<span class="text-sm opacity-40 col-span-8 text-center pt-1">...and hundreds more</span>
</div>
<div class="mt-3 text-center">
<span class="text-xs font-bold text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">~200K+ tokens</span>
</div>
</div>
</div>
<!-- Arrow -->
<div class="flex items-center justify-center md:pt-12 text-3xl text-on-surface/30 font-bold select-none">→</div>
<!-- Context Window -->
<div class="flex-none w-52">
<div class="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-3 text-center opacity-60">🧠 LLM Context Window</div>
<div class="bg-surface-container-lowest border-2 border-primary rounded-xl p-4 relative overflow-hidden">
<div class="absolute top-0 right-0 p-2 opacity-10 text-5xl">🧠</div>
<div class="flex flex-col gap-2 mb-3">
<div class="flex items-center gap-2 bg-primary/10 rounded-lg px-3 py-2">
<span class="text-base">🗂️</span>
<span class="text-xs font-bold">Case #137 ✓</span>
</div>
<div class="flex items-center gap-2 bg-primary/10 rounded-lg px-3 py-2">
<span class="text-base">🗂️</span>
<span class="text-xs font-bold">Case #284 ✓</span>
</div>
<div class="flex items-center gap-2 bg-primary/10 rounded-lg px-3 py-2">
<span class="text-base">🗂️</span>
<span class="text-xs font-bold">Case #401 ✓</span>
</div>
<div class="flex items-center gap-2 border-2 border-dashed border-error/40 rounded-lg px-3 py-2 opacity-40">
<span class="text-base">🗂️</span>
<span class="text-xs font-bold text-error">Case #402 ✗</span>
</div>
<div class="text-center text-[10px] text-error font-bold opacity-60">⚠️ Full — no more room</div>
</div>
<div class="text-center">
<span class="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">~3–5 cases fit</span>
</div>
</div>
</div>
</div>
<p class="text-center text-sm text-on-surface-variant mt-6 italic">You must <strong>choose</strong> which cases to load in — but how do you know which ones are relevant before you read them?</p>
</div>

</div>


## 幼稚的解決方案（以及為什麼它們會失效）

在我們得出正確答案之前，讓我們排除明顯錯誤的方案：

**選項 1 —— 全部丟進去。**
上下文窗口不夠大。即使你使用 100 萬詞元的模型，注意力在如此長的上下文中也會消退——真正相關的案件可能根本無法被識別。

**選項 2 —— 關鍵字搜尋 (Keyword search)。**
Sarah 輸入「建築延誤 (construction delay)」。問題：2019 年勝訴的案件標題是 *「承包商未能按計劃執行 (contractor failure to meet schedule)」* —— 不匹配。關鍵字會遺漏同義詞、釋義和法律細微差別。

**選項 3 —— 讓 LLM 一個接一個地閱讀每個案件。**
這可行，但 500 個案件 × 每次閱讀的時間和成本 = 痛苦地緩慢且昂貴。

## 驅動一切的問題

如果 LLM 能自動根據 **意義 (Meaning)** 而非關鍵字，僅找到 **3-5 個最相關的案件**，並且只閱讀這些案件會怎樣？

這就是檢索增強生成 (Retrieval-Augmented Generation) 的承諾。接下來的頁面將逐步介紹它是如何運作的。

<div class="not-prose callout callout-dyk">

這項挑戰並非法律界所獨有。任何組織，只要其擁有的知識超過了上下文窗口的容量，都會面臨同樣的問題：公司政策、研究論文、客戶支援工單、產品文件、人力資源手冊。這種限制是普遍存在的。

</div>

## 📝 關鍵概念

- **上下文天花板 (Context ceiling)：** 即使是大型上下文窗口也有限制——當知識超過容量時，你必須做出選擇。
- **關鍵字搜尋遺漏意義：** 同義詞、釋義和專業術語都會擊敗精確匹配搜尋。
- **檢索缺口 (Retrieval gap)：** 你需要選擇性獲取——只抓取相關內容，而非全部。
- **RAG = 解決方案：** 檢索 (Retrieve) 正確的文件，然後根據它們進行生成 (Generate)。

<div id="quiz-07-01" class="not-prose quiz-container my-12" data-quiz="07-01"></div>
