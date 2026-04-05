---
title: "7.4 超越向量搜尋 —— 其他將知識引入上下文的方法"
description: "RAG 不一定需要向量資料庫。關鍵字搜尋、子代理和檔案串聯各有用處。在構建之前，先了解你的選擇。"
chapter: "第 7 章"
pageId: "07-04"
---

## 🎯 核心目標
- 澄清 RAG 是一種模式（檢索、增強、生成），而不是一種特定的技術。
- 展示不同的檢索方法以及每種方法的適用場景。
- 幫助讀者根據實際情況選擇合適的方法。

<div class="not-prose callout callout-tldr">

RAG 是一個三步模式：檢索文件、增強提示、生成答案。檢索步驟可以使用向量搜尋、關鍵字搜尋、SQL 或任何其他能找到相關內容的方法。不要假設你一定需要向量資料庫——請根據實際問題選擇合適的檢索方法。

</div>

## 律師的選擇

讓我們回到 Sarah 的 500 個案件問題。她需要將正確的案件呈現在 LLM 面前。以下是切合實際的方法——每種方法都有其誠實的權衡。有些是你可以插入 RAG 流程的檢索方法；有些則完全跳過了檢索。

<div class="not-prose callout callout-error">

**「RAG」和「向量資料庫 (Vector database)」經常被混為一談——但從技術上講，這並不完全正確。** RAG 描述的是一種模式：檢索文件、將其注入提示、讓 LLM 根據文件回答。檢索步驟可以使用關鍵字搜尋、向量搜尋、SQL 或任何其他方式。向量資料庫是一種流行的選擇——但不是必需的。

</div>


<div class="not-prose">
<!-- Visual: RAG Alternatives — Strategy comparison cards -->
<div class="bg-surface-container-low rounded-xl p-6 mb-8 max-w-3xl mx-auto shadow-sm">
<div class="text-center mb-5">
<h3 class="text-lg font-bold font-headline mb-1">Approaches to Getting Knowledge Into Context</h3>
<p class="text-sm text-on-surface-variant">Each approach has a different character — and a different best use case</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<!-- Keyword Search -->
<div class="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant">
<div class="flex items-center gap-3 mb-3">
<span class="text-2xl">🔤</span>
<div>
<div class="font-bold text-sm">Keyword Search</div>
<div class="text-xs text-on-surface-variant">The classic, zero-setup approach</div>
</div>
</div>
<div class="space-y-1 text-xs mb-3">
<div class="flex items-center gap-2"><span class="text-green-600 font-bold">✓</span> Instant — works in any doc system</div>
<div class="flex items-center gap-2"><span class="text-green-600 font-bold">✓</span> No embedding, no vector DB needed</div>
<div class="flex items-center gap-2"><span class="text-red-500 font-bold">✗</span> Binary: word present or absent</div>
<div class="flex items-center gap-2"><span class="text-red-500 font-bold">✗</span> Misses synonyms, paraphrasing</div>
</div>
<div class="bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2 text-xs">
<span class="font-bold text-yellow-700">Best for:</span> Consistent terminology — also works as a simple RAG retrieval step
</div>
</div>
<!-- Concatenation -->
<div class="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant">
<div class="flex items-center gap-3 mb-3">
<span class="text-2xl">📋</span>
<div>
<div class="font-bold text-sm">File Concatenation</div>
<div class="text-xs text-on-surface-variant">Paste everything in, ask away</div>
</div>
</div>
<div class="space-y-1 text-xs mb-3">
<div class="flex items-center gap-2"><span class="text-green-600 font-bold">✓</span> Literally zero setup</div>
<div class="flex items-center gap-2"><span class="text-green-600 font-bold">✓</span> LLM sees full context, no retrieval errors</div>
<div class="flex items-center gap-2"><span class="text-red-500 font-bold">✗</span> Hits context window limit fast</div>
<div class="flex items-center gap-2"><span class="text-red-500 font-bold">✗</span> Doesn't scale beyond a few docs</div>
</div>
<div class="bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2 text-xs">
<span class="font-bold text-yellow-700">Best for:</span> Tiny datasets — under a dozen short docs
</div>
</div>
<!-- Subagent -->
<div class="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant">
<div class="flex items-center gap-3 mb-3">
<span class="text-2xl">🤖</span>
<div>
<div class="font-bold text-sm">Subagent Sequential Read</div>
<div class="text-xs text-on-surface-variant">LLM reads each doc and decides</div>
</div>
</div>
<div class="space-y-1 text-xs mb-3">
<div class="flex items-center gap-2"><span class="text-green-600 font-bold">✓</span> Deep understanding — no retrieval errors</div>
<div class="flex items-center gap-2"><span class="text-green-600 font-bold">✓</span> Handles nuance and context well</div>
<div class="flex items-center gap-2"><span class="text-red-500 font-bold">✗</span> Slow: reads 500 cases one at a time</div>
<div class="flex items-center gap-2"><span class="text-red-500 font-bold">✗</span> Expensive: pays per doc, every query</div>
</div>
<div class="bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2 text-xs">
<span class="font-bold text-yellow-700">Best for:</span> Small sets where thoroughness > speed/cost
</div>
</div>
<!-- RAG -->
<div class="bg-surface-container-lowest rounded-xl p-4 border-2 border-primary/30">
<div class="flex items-center gap-3 mb-3">
<span class="text-2xl">🔍</span>
<div>
<div class="font-bold text-sm text-primary">RAG</div>
<div class="text-xs text-on-surface-variant">Retrieve, augment, generate — any retrieval method</div>
</div>
</div>
<div class="space-y-1 text-xs mb-3">
<div class="flex items-center gap-2"><span class="text-green-600 font-bold">✓</span> Flexible — works with any retrieval method</div>
<div class="flex items-center gap-2"><span class="text-green-600 font-bold">✓</span> Scales to millions of documents</div>
<div class="flex items-center gap-2"><span class="text-red-500 font-bold">✗</span> Vector-based RAG requires setup (embeddings, DB)</div>
<div class="flex items-center gap-2"><span class="text-red-500 font-bold">✗</span> Retrieval can miss or mis-rank docs</div>
</div>
<div class="bg-primary/5 border border-primary/20 rounded-lg px-3 py-2 text-xs">
<span class="font-bold text-primary">Best for:</span> Large, diverse knowledge bases at scale
</div>
</div>
</div>
</div>

</div>


## 選項 1 —— 關鍵字搜尋（一種有效的 RAG 檢索方法）

最古老的方法：尋找包含特定單詞的文件。

它是二元的——要麼單詞存在，要麼不存在。它沒有同義詞、釋義或上下文的概念。標題為「承包商未能履行條款」的 2019 年案件，在搜尋「違約 (breach of contract)」時不會出現。

但關鍵字搜尋 *是* RAG 中一個合法的檢索步驟。你可以構建一個 RAG 流程，其中的檢索僅僅是關鍵字匹配——檢索匹配的文件，將其注入提示，讓 LLM 根據文件回答。模式相同，只是搜尋引擎更簡單。

其特點：**快速、便宜、零設定** —— 而且當你的組織使用一致的術語時，效果出奇地好。

## 選項 2 —— 子代理 / 順序閱讀

LLM 一次閱讀一份文件，並決定哪些內容是相關的。

這種方法徹底且細緻——LLM 理解的是上下文，而不僅僅是關鍵字。但它為接觸的每一份文件都支付了全部成本：500 個案件意味著每次查詢都要閱讀 500 次。

其特點：**深度理解，無檢索錯誤** —— 代價是在大規模情況下速度慢且昂貴。

## 選項 3 —— 檔案串聯

將所有內容合併成一個文本塊，並將其作為上下文全部發送。

這是最簡單的方法——完全不需要基礎設施。但它會遇到一堵硬牆：上下文窗口。幾份短文件？沒問題。Sarah 的 500 個案件？永遠放不下。

其特點：**零設定，零檢索錯誤** —— 適用於小到足以容納的數據集。

<div class="not-prose callout callout-dyk">

大多數生產級 RAG 系統不只使用一種檢索方法——它們會結合使用。首先由關鍵字搜尋縮小候選範圍，然後由向量相似度對結果進行重新排名，有時子代理還會對排名靠前的候選文件進行最終閱讀。這種混合檢索 *仍然是 RAG* —— 其模式是檢索、增強、生成。只是搜尋引擎碰巧使用了多種策略。你可以同時獲得關鍵字過濾的速度和語義匹配的精確度。

</div>

<div class="not-prose callout callout-dyk">

當你透過網頁界面使用 ChatGPT 或 Gemini 時，你無法選擇檢索機制——你只能使用他們內置的任何機制。當你開始構建自己的 LLM 驅動產品或將 LLM API 集成到你的系統中時，這種理解就變得很重要。

</div>

## 📝 關鍵概念

- **RAG 是模式，而非產品：** 檢索 (Retrieve)、增強 (Augment)、生成 (Generate)。檢索步驟可以使用任何方法。
- **關鍵字搜尋是有效的 RAG 檢索方法** —— 而非 RAG 的替代方案。
- **混合檢索仍然是 RAG** —— 結合關鍵字 + 語義是目前最常見的生產方案。
- **串聯完全跳過了檢索** —— 這與 RAG 是完全不同的方法。
- **對於小數據集，串聯被低估了** —— 不要過早地進行過度工程。

<div class="not-prose my-12">
<!--
Quiz Box Component
Generated by build.js from :::quiz blocks in markdown.
-->
<div id="quiz-07-04" class="quiz-container bg-surface-container border border-outline-variant rounded-xl p-6 mt-10">
    <div class="font-bold mb-4 flex items-center gap-2">
        <span>🧠</span>
        <span>QUIZ</span>
    </div>
    <p class="mb-4">關於 RAG 的哪種說法最準確？</p>
    <div class="space-y-2">
                <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            RAG 需要向量資料庫來儲存文件嵌入
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            RAG 是尋找文件時關鍵字搜尋的替代方案
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="true">
            RAG 是一種模式，任何檢索方法都可以將文件饋送至 LLM 的提示中
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            RAG 僅適用於由嵌入驅動的語義搜尋
        </div>
    </div>
    <div class="quiz-feedback hidden mt-4 p-4 rounded-lg"></div>
</div>

</div>
