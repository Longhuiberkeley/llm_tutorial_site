---
title: "7.5 上下文工程 —— 你給 LLM 餵什麼，它就產出什麼"
description: "RAG 是一個更大學科中的一項策略：管理你提供給 LLM 的所有內容的系統藝術。"
chapter: "第 7 章"
pageId: "07-05"
---

## 🎯 核心目標
- 將上下文工程 (Context Engineering) 定義為更廣泛的學科 —— RAG 是其中的一項策略。
- 展示區分普通 LLM 系統與卓越系統的決策：注入什麼內容、注入多少以及注入在哪裡。

<div class="not-prose callout callout-tldr">

上下文工程 (Context Engineering) 是一門系統性的學科，旨在組織、格式化和管理餵給 LLM 的所有內容 —— 包括指令、記憶、檢索到的文件和對話歷史。RAG 是其中一項強大的策略。許多 AI 失敗案例並非因為模型不好，而是因為上下文工程做得很糟糕。

</div>

## 什麼是上下文工程？

每當 LLM 回答問題時，它都會根據其上下文窗口 (Context window) 內的任何內容進行工作。上下文工程就是 *蓄意設計* 放入其中的內容的學科。

這不僅僅關於 RAG。整個上下文 —— 從開頭的系統提示 (System prompt) 到最後一份檢索到的文件 —— 都在你的工程設計範圍內：

- **系統提示 (System Prompt)** —— 角色、指令、限制、語氣。
- **檢索到的文件 (RAG)** —— 在查詢時獲取的相關片段，使用任何適合的搜尋方法（關鍵字、語義、混合等）。
- **對話歷史 (Conversation History)** —— 之前的對話輪次；保留多少、總結或修剪。
- **使用者查詢 (User Query)** —— 使用者的問題或任務。

每一層都是一個決策。上下文工程就是做出這些決策的學科。


<div class="not-prose">
<!-- Visual: Context Engineering Stack — 4 layers -->
<div class="bg-surface-container-low rounded-xl p-6 mb-8 max-w-3xl mx-auto shadow-sm">
<div class="text-center mb-5">
<h3 class="text-lg font-bold font-headline mb-1">What's Inside the Context Window</h3>
<p class="text-sm text-on-surface-variant">Every layer is a deliberate engineering decision</p>
</div>
<div class="max-w-sm mx-auto space-y-2">
<!-- System Prompt -->
<div class="bg-primary/10 border-l-4 border-primary rounded-r-xl px-4 py-3 flex items-start gap-3">
<span class="text-xl mt-0.5">⚙️</span>
<div>
<div class="font-bold text-sm">System Prompt</div>
<div class="text-xs text-on-surface-variant">Role, instructions, constraints, tone — who the LLM is and how it should behave</div>
</div>
</div>
<!-- Retrieved Documents -->
<div class="bg-accent/10 border-l-4 border-accent rounded-r-xl px-4 py-3 flex items-start gap-3">
<span class="text-xl mt-0.5">📄</span>
<div>
<div class="font-bold text-sm">Retrieved Documents (RAG)</div>
<div class="text-xs text-on-surface-variant">Relevant chunks fetched at query time — via keyword search, semantic search, or any retrieval method</div>
</div>
</div>
<!-- Conversation History -->
<div class="bg-blue-500/10 border-l-4 border-blue-400 rounded-r-xl px-4 py-3 flex items-start gap-3">
<span class="text-xl mt-0.5">💬</span>
<div>
<div class="font-bold text-sm">Conversation History</div>
<div class="text-xs text-on-surface-variant">Prior turns — how much to keep, summarize, or trim is an engineering choice</div>
</div>
</div>
<!-- User Query -->
<div class="bg-green-500/10 border-l-4 border-green-500 rounded-r-xl px-4 py-3 flex items-start gap-3">
<span class="text-xl mt-0.5">🙋</span>
<div>
<div class="font-bold text-sm">User Query</div>
<div class="text-xs text-on-surface-variant">The question or task — at the bottom, but often most important for relevance</div>
</div>
</div>
<!-- Arrow to LLM -->
<div class="flex flex-col items-center py-1 gap-1">
<div class="text-on-surface/30 text-xl font-bold">↓</div>
<div class="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant rounded-full px-4 py-2">
<span class="text-base">🤖</span>
<span class="text-sm font-bold">LLM processes everything above</span>
</div>
</div>
</div>
<p class="text-center text-xs text-on-surface-variant mt-4 italic">Context Engineering = deciding what goes in each layer, how much, and in what order.</p>
</div>

</div>


## 兩堆資料

想像兩堆資訊並排放在一起：

**上下文堆 (The Context Pile)** —— 目前提示中能放下的內容：系統提示、對話歷史和任何注入的文件。總共大約 5,000–20,000 個詞元 (Tokens)。

**知識堆 (The Knowledge Pile)** —— 知識庫中的所有內容：所有 500 個案件、每份政策文件、每本手冊。可能有數百萬個詞元。

RAG 的工作就是從「知識堆」中抓取 *正確的片段*，並將其移動到「上下文堆」中 —— 只抓取正確的片段，而不是全部。「抓取」可以使用關鍵字搜尋、向量相似度、SQL 查詢或任何其他能找到相關內容的方法。

## 金髮姑娘問題

做好上下文注入意味著找到那個平衡點：

<div class="grid md:grid-cols-3 gap-3 my-4">
  <div class="bg-error/5 border border-error/20 rounded-xl p-4">
    <div class="text-xs font-black text-error mb-2">❌ 太少</div>
    <p class="text-xs italic">「為這位客戶總結我們的退款政策。」</p>
    <p class="text-xs text-on-surface-variant mt-1">沒有檢索到政策 —— LLM 只能猜測或承認它不知道。</p>
  </div>
  <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
    <div class="text-xs font-black text-yellow-700 mb-2">⚠️ 太多</div>
    <p class="text-xs italic">注入了所有 50 份政策文件。</p>
    <p class="text-xs text-on-surface-variant mt-1">LLM 被衝突的條款、過時的版本和不相關的章節弄糊塗了。</p>
  </div>
  <div class="bg-green-50 border border-green-200 rounded-xl p-4">
    <div class="text-xs font-black text-green-700 mb-2">✅ 剛剛好</div>
    <p class="text-xs italic">檢索到了 2 個最相關的章節 —— 當前版本，且與問題匹配。</p>
    <p class="text-xs text-on-surface-variant mt-1">重點突出、準確、有據可查的答案。</p>
  </div>
</div>

## 分塊：將文件分解為大小合適的片段

一份 50 頁的文件不應該被完整注入。相反，應將其分解為 **分塊 (Chunks)** —— 每個約 500–1,000 個詞元 (Tokens) 的段落或章節。分別為每個分塊建立索引。

當問題提出時，檢索 *最相關的特定分塊* —— 而非整份文件。

<div class="not-prose callout callout-dyk">

分塊大小是一個出人意料的重要槓桿。太小（單個句子）會丟失周圍的上下文 —— LLM 看到的是一個片段，卻不知道它是關於什麼的。太大（整章）會將相關內容與無關的填充內容混合在一起，稀釋 LLM 的注意力。最合適的大小通常是幾個段落 —— 足以表達意義的上下文，且小到足以精確。

</div>

## 放置位置也很重要

你在「三明治」結構中放置檢索內容的位置也很重要。LLM 對上下文的開頭和結尾會給予更多關注。將關鍵的檢索資訊放在靠近開頭的地方 —— 在對話歷史之前 —— 以獲得最大的注意力。

## 支撐工程：LLM 周圍的腳手架

隨著 LLM 系統的發展，有一門相關的學科變得至關重要：**支撐工程 (Harness Engineering)** —— 設計和構建 LLM 調用 *周圍* 的腳手架。

想像一匹馬。LLM 就是這匹馬 —— 強大、快速，但沒有方向。「支撐 (Harness)」就是引導這股力量發揮效用的所有東西：韁繩、馬鞍、馬嚼子。沒有好的支撐，即使是最強壯的馬也會原地打轉。

在實踐中，支撐工程涵蓋：

- **重試邏輯 (Retry logic)** —— 當 LLM 失敗或返回垃圾資訊時，如何優雅地恢復？
- **緩存 (Caching)** —— 儲存之前的結果，這樣對於同一個問題就不用重新執行昂貴的 LLM 調用。
- **回應解析 (Response parsing)** —— 從 LLM 的自由文本輸出中提取結構化數據。
- **成本追蹤 (Cost tracking)** —— 監控每次查詢的成本並設定預算。
- **評估流水線 (Evaluation pipelines)** —— 持續測試系統的答案是否仍然良好。
- **工作流控制 (Workflow control)** —— 決定 LLM 何時可以自主行動，何時需要人工批准。

這些都不光鮮亮麗。但它們是酷炫的展示案例與可靠產品之間的區別。隨著組織從試驗 LLM 轉向在生產環境中執行 LLM，支撐工程往往成為瓶頸 —— 而非模型本身。

## 📝 關鍵概念

- **上下文工程 (Context Engineering)：** 管理餵給 LLM 的所有內容（提示、檢索到的文件、對話歷史、指令）的學科。
- **RAG 是一項策略：** 檢索是上下文工程的一部分，而非整個學科。
- **質量 > 數量：** 3 個高度相關的段落勝過 30 頁關係疏遠的內容。
- **分塊 (Chunking)：** 將文件分解為小片段（500–1,000 個詞元），並分別建立索引。
- **放置位置：** 關鍵上下文應放在提示的開頭，以獲得最大注意力。
- **支撐工程 (Harness Engineering)：** LLM 調用周圍的腳手架 —— 重試、緩存、解析、成本追蹤 —— 將演示轉化為可靠產品。

<div class="not-prose my-12">
<!--
Quiz Box Component
Generated by build.js from :::quiz blocks in markdown.
-->
<div id="quiz-07-05" class="quiz-container bg-surface-container border border-outline-variant rounded-xl p-6 mt-10">
    <div class="font-bold mb-4 flex items-center gap-2">
        <span>🧠</span>
        <span>QUIZ</span>
    </div>
    <p class="mb-4">RAG 與上下文工程之間的關係是什麼？</p>
    <div class="space-y-2">
                <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            RAG 是一個更廣泛的學科，包含上下文工程
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            它們是解決同一問題的競爭方法
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="true">
            上下文工程是更廣泛的學科；RAG 是其中的一項策略
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            它們是無關的概念
        </div>
    </div>
    <div class="quiz-feedback hidden mt-4 p-4 rounded-lg"></div>
</div>

</div>
