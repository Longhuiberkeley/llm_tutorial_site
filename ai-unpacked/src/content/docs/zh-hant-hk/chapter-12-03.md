---
title: "12.3 RPA 與代理型 AI"
description: "基於規則的自動化與由 LLM 驅動的自動化解決不同的問題 —— 學習何時使用每一種。"
chapter: "第 12 章"
pageId: "12-03"
---

## 🎯 核心目標
- 清晰定義 RPA (機械人流程自動化) 並將其與代理型 AI (Agentic AI) 進行對比。
- 幫助學習者識別哪種類型的自動化適合他們的任務。
- 引入「混合方法通常是最佳選擇」的想法。

<div class="not-prose callout callout-tldr">

RPA 遵循僵化的規則 —— 非常適合穩定、重複的任務。代理型 AI (Agentic AI) 則能處理模糊性並做出決策 —— 非常適合多變、需要判斷的任務。大多數現實世界的自動化會結合兩者使用。

</div>

## 🤖 RPA：可靠的規則執行者

機械人流程自動化 (Robotic Process Automation, RPA) 正如其名：它是通過遵循精確、預定義規則來自動化重複任務的軟件。

可以把 RPA 想像成一組鐵軌。火車運行完美 —— 快速、可靠、廉價 —— 只要它保持在軌道上。但一旦發生意外，火車就會停止。它完全沒有繞過障礙物導航的能力。

RPA 主要有兩種形式：
- **基於點擊 (UI 自動化)：** 像人類一樣控制電腦的軟件 —— 點擊按鈕、填寫表單、複製和貼上。當你只能訪問用戶界面 (UI) 而非 API 時非常有用。
- **基於編程 (API 集成)：** 通過 API 直接與系統對話的代碼 —— 比基於點擊的自動化更快、更可靠，且不易崩潰。

**最適合：** 將 1,000 行數據從試算表複製到會計系統。處理格式固定的發票。每週一早上 9 點運行相同的報告。

**優點：** 對於穩定、定義明確的任務，可靠性達 100%。大規模運行的單次成本極低。

**缺點：** 當任何事情發生變化時都會崩潰。無法處理模糊性。無法做出判斷。

<div class="not-prose callout callout-dyk">

**RPA 在實踐中是什麼樣的？** 把它想像成超級宏 (Macros on steroids)。常見例子：每天早上自動下載銀行對帳單、將 PDF 郵件中的發票數據複製到會計系統、根據試算表數據填寫政府表單、從儀表板生成並發送每週狀態報告，或按計劃在兩個系統之間同步客戶記錄。

</div>

## 🧠 代理型 AI：靈活的決策者

代理型 AI (Agentic AI，即擁有工具和自主行動能力的 LLM) 可以閱讀上下文、做出決策、處理例外並適應變化。把它想像成一輛帶有 GPS 的汽車 —— 它可以繞過路障，尋找替代路線，並對意外情況做出反應。

當 RPA 遇到意外輸入只會崩潰時，代理型系統可以對其進行推理：「這封郵件很不尋常。讓我檢查一下政策，考慮客戶的歷史記錄，然後決定是否上報。」

**最適合：** 閱讀客戶郵件、理解情緒基調、檢查政策、起草個性化回覆，並標記邊緣案例供人工審核。輸入多變且需要判斷的任務。

**優點：** 處理變異性和自然語言。管理例外情況。做出模糊決策。

**缺點：** 比 RPA 更難預測。單次運行的成本更高。需要監督和監測。

<div class="not-prose callout callout-error">

一個常見的錯誤是在 RPA 就能完美勝任且成本更低的情況下，執意使用代理型 AI。如果任務具有穩定的、定義明確的規則和一致的輸入，RPA 通常是更好的選擇。代理型 AI 並不是 RPA 的升級版，它是應對不同任務的不同工具。

</div>

## 🔀 混合方法

在實踐中，大多數現實世界的系統會結合兩者 —— 使用 RPA 處理常規案例，使用代理型 AI 處理例外情況，並由人工處理上報。關於如何結合它們以及如何根據你的情況選擇合適方法的具體模式，將在下一頁介紹。


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-8">
<h3 class="text-xl font-bold font-headline mb-2">RPA vs Agentic AI</h3>
<p class="text-sm text-on-surface-variant">Two approaches to automation — and a powerful hybrid.</p>
</div>
<!-- Tab Buttons -->
<div class="flex gap-2 mb-6" id="rpa-tabs">
<button onclick="selectRpaTab(0)" id="rpa-btn-0"
class="flex-1 py-3 px-4 rounded-lg text-sm font-bold border-2 transition-all cursor-pointer bg-primary text-on-primary border-primary">
🚂 RPA
</button>
<button onclick="selectRpaTab(1)" id="rpa-btn-1"
class="flex-1 py-3 px-4 rounded-lg text-sm font-bold border-2 transition-all cursor-pointer bg-surface-container-lowest border-outline-variant text-on-surface">
🚗 Agentic AI
</button>
<button onclick="selectRpaTab(2)" id="rpa-btn-2"
class="flex-1 py-3 px-4 rounded-lg text-sm font-bold border-2 transition-all cursor-pointer bg-surface-container-lowest border-outline-variant text-on-surface">
🔀 Hybrid
</button>
</div>
<!-- Content Panel -->
<div id="rpa-panel" class="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant min-h-[300px] transition-all">
<!-- Populated by JS -->
</div>
</div>
<script type="module">
import { init } from '/js/interactives/rpa-vs-agentic.js';
init({
tabs: [
{ id: 'rpa', emoji: '🚂', metaphor: 'Like a Train on Tracks', desc: 'Follows exact rules, breaks on surprises. Every step is pre-programmed — fast and reliable on known routes, but derails if anything changes.', strengths: ['Blazing fast on repetitive, identical tasks','Near-zero error rate on structured data','Easy to audit — every step is logged and predictable'], weaknesses: ['Breaks immediately when formats or layouts change','Cannot handle exceptions or edge cases','Expensive to maintain as systems evolve'], bestFor: ['Data entry from fixed forms', 'Payroll processing', 'Scheduled report generation', 'Invoice routing (standard formats)'] },
{ id: 'agentic', emoji: '🚗', metaphor: 'Like a Car with GPS', desc: 'Navigates around obstacles, adapts to situations. Understands intent and can figure out alternative routes when the road is blocked.', strengths: ['Handles messy, unstructured, or unexpected input','Adapts to format changes without reprogramming','Can reason about edge cases and make judgment calls'], weaknesses: ['Slower and more expensive per task','Occasional errors require human oversight','Harder to audit — reasoning is not always transparent'], bestFor: ['Processing free-text emails', 'Handling exception invoices', 'Customer request interpretation', 'Document understanding'] }
],
hybridHtml: '<div class="text-center mb-6"><div class="text-2xl mb-2">🔀</div><div class="text-lg font-bold mb-1">The Best of Both Worlds</div><p class="text-sm text-on-surface-variant">Example: Processing 500 invoices per day</p></div><div class="space-y-4"><div><div class="flex items-center justify-between mb-1.5"><span class="text-sm font-bold">🚂 RPA handles standard invoices</span><span class="text-sm font-bold" style="color: #4CAF50;">450 invoices (90%)</span></div><div class="w-full bg-surface-container rounded-full h-8 overflow-hidden"><div class="h-full rounded-full flex items-center justify-center text-white text-xs font-bold" style="width: 90%; background: #4CAF50;">Fast, cheap, predictable</div></div></div><div><div class="flex items-center justify-between mb-1.5"><span class="text-sm font-bold">🚗 Agentic AI handles exceptions</span><span class="text-sm font-bold" style="color: #5B8DB8;">40 invoices (8%)</span></div><div class="w-full bg-surface-container rounded-full h-8 overflow-hidden"><div class="h-full rounded-full flex items-center justify-center text-white text-xs font-bold" style="width: 8%; min-width: 180px; background: #5B8DB8;">Reads, reasons, adapts</div></div></div><div><div class="flex items-center justify-between mb-1.5"><span class="text-sm font-bold">👤 Humans handle edge cases</span><span class="text-sm font-bold" style="color: var(--accent);">10 invoices (2%)</span></div><div class="w-full bg-surface-container rounded-full h-8 overflow-hidden"><div class="h-full rounded-full flex items-center justify-center text-white text-xs font-bold" style="width: 4%; min-width: 180px; background: var(--accent);">Expert judgment needed</div></div></div></div><div class="mt-6 bg-surface-container rounded-xl p-4 text-center"><p class="text-sm text-on-surface-variant"><strong>Result:</strong> 98% automated, humans only touch the truly unusual cases. Each tool does what it does best.</p></div>'
});
</script>

</div>


## 📝 核心概念

- **RPA** 是僵化的、可靠且廉價的 —— 最適合穩定、由規則定義的任務。
- **代理型 AI (Agentic AI)** 是靈活且具適應性的 —— 最適合多變、需要判斷的任務。
- **RPA 在遇到例外時會崩潰** —— 如果任何事情發生變化，它就會停止工作。
- **代理型 AI 成本更高**，且需要持續的監測和監督。
- **混合方法通常最佳** —— 使用 RPA 處理常規案例，代理型 AI 處理例外，人工處理上報。

<div class="not-prose my-12">
<!--
Quiz Box Component
Generated by build.js from :::quiz blocks in markdown.
-->
<div id="quiz-12-03" class="quiz-container bg-surface-container border border-outline-variant rounded-xl p-6 mt-10">
    <div class="font-bold mb-4 flex items-center gap-2">
        <span>🧠</span>
        <span>QUIZ</span>
    </div>
    <p class="mb-4">一家公司每天處理 500 張格式完全相同的發票。哪種自動化方法最合適？</p>
    <div class="space-y-2">
                <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="true">
            RPA —— 該任務量大、變異性低，且遵循固定規則
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            代理型 AI —— 你總是想要最先進的解決方案
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            無需自動化 —— 500 張的量不足以證明其合理性
        </div>
    </div>
    <div class="quiz-feedback hidden mt-4 p-4 rounded-lg"></div>
</div>

</div>
