---
title: "12.4 選擇你的自動化方式"
description: "混合自動化模式、實施頻譜，以及如何為工作挑選合適的工具。"
chapter: "第 12 章"
pageId: "12-04"
---

## 🎯 核心目標
- 介紹結合 RPA 和代理型 AI 的混合自動化模式。
- 確立原則：為任務挑選合適的工具 —— 並非每個問題都需要 LLM。
- 展示從簡單的聊天組件到完整的代理平台的實施頻譜。
- 探討自動化系統的安全性和對抗性攻擊 (Adversarial concerns) 問題。

<div class="not-prose callout callout-tldr">

並非每個問題都需要 LLM。最佳的自動化策略是為工作挑選合適的工具 —— 有時是 RPA，有時是代理型 AI (Agentic AI)，有時是專門構建的 App，而有時僅僅是一個組織良好的團隊。最聰明的團隊會混合使用多種方法。

</div>

## 🔀 實踐中的混合方法 (Hybrid Approach)

大多數現實世界的自動化並非純粹的 RPA 或純粹的代理型 —— 而是結合了兩者。這裡有兩種常見的模式。

### 模式 1：LLM 作為流水線中的一個步驟

在這種模式中，LLM 在現有的自動化工作流程中負責**一個判斷步驟**。其他一切保持不變 —— LLM 只是嵌入到需要理解或分類的部分。

**示例 —— 客戶反饋處理流水線：**

<div class="space-y-3 my-6">
<div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-xl">📥</span>
<div>
<div class="font-bold text-sm mb-1">步驟 1：收到反饋</div>
<p class="text-sm text-on-surface/80">客戶填寫表單或發送電子郵件。這部分是自動收集的（通過 RPA 或簡單的集成）。</p>
</div>
</div>
</div>
<div class="bg-surface-container-low rounded-xl p-4 border border-accent/40 ring-1 ring-accent/20">
<div class="flex items-start gap-3">
<span class="text-xl">🧠</span>
<div>
<div class="font-bold text-sm mb-1 text-primary">步驟 2：LLM 對反饋進行分類</div>
<p class="text-sm text-on-surface/80">LLM 閱讀訊息並將其分類：正面、負面或緊急。這是 LLM 處理的唯一步驟。</p>
</div>
</div>
</div>
<div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-xl">⚡</span>
<div>
<div class="font-bold text-sm mb-1">步驟 3：自動跟進</div>
<p class="text-sm text-on-surface/80">如果是負面 → RPA 發送帶有折扣券的跟進郵件。如果是緊急 → 路由給人工客服。如果是正面 → 記錄下來並結束流程。</p>
</div>
</div>
</div>
</div>

LLM 並不控制整個流程 —— 它只負責處理 RPA 無法完成的模糊分類步驟。流水線的其他部分保持簡單且基於規則。

### 模式 2：具有工具訪問權限的 LLM

在這種模式中，LLM 擁有**直接訪問現有系統的權限** —— 它可以讀取數據庫、調用 API、發送郵件或更新記錄。它不僅僅是分類，還可以決定該做什麼並採取行動。

這也是 LLM 如何**監控 RPA 流程**的方式：RPA 照常運行，但當遇到意外情況時，它會交給 LLM，由 LLM 對例外情況進行推理並決定如何處理。

<div class="bg-surface-container-low rounded-xl p-5 border border-outline-variant my-6">
<div class="flex items-start gap-3">
<span class="text-2xl">🔧</span>
<div>
<div class="font-bold text-base mb-1">模式 2 實踐案例</div>
<p class="text-sm text-on-surface/80 mb-2">一個由 LLM 驅動的代理監控訂單處理流水線。當一個訂單的運送地址 RPA 系統無法解析（格式不尋常、國際地址、郵政信箱）時，LLM 會讀取該地址，在 CRM 中查找客戶的歷史記錄，修正地址並推送訂單 —— 或者在信心不足時標記給人工審核。</p>
</div>
</div>
</div>

<div class="not-prose callout callout-dyk">

許多急於構建全自主代理工作流的公司現在正轉向混合模型。完全自主聽起來很有吸引力，直到一個意外的輸入導致一系列錯誤決策的連鎖反應。最穩健的系統會結合「針對已知案例的僵化可靠性」與「針對未知案例的靈活智能」。

</div>

## 🎯 為任務尋找最佳工具

在動用 LLM 之前，請先詢問：**LLM 真的是這裡的最佳工具嗎？**

以麥當勞的自助點餐機為例。它們展示大幅、诱人的食物照片。它們會建議加購（「要加份薯條嗎？」）。它們引導你瀏覽菜單，自然地鼓勵你點更多。它們在自己的領域做得非常出色。

它們不使用 LLM，也完全不需要。

點餐機是針對特定任務優化的專用解決方案。它比任何處理同樣工作的 LLM 驅動系統都更便宜、更快、更可靠且更可預測。使用 LLM 只會增加成本和複雜性，而不會改善結果。

**啟示：** 始終詢問更簡單的專用解決方案是否會更好、成本更低。LLM 很強大 —— 但你需要的並不總是強大的力量。

<div class="space-y-3 my-6">
<div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-xl">✅</span>
<div>
<div class="font-bold text-sm mb-1">適合使用 LLM 的場景</div>
<p class="text-sm text-on-surface/80">閱讀格式多變的客戶郵件、解釋模糊的請求、起草個性化回覆、總結文件</p>
</div>
</div>
</div>
<div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-xl">⛔</span>
<div>
<div class="font-bold text-sm mb-1">使用 LLM 可能大材小用</div>
<p class="text-sm text-on-surface/80">顯示菜單、路由已知的一組選項、計算總額、發送模板化的通知、簡單的數據錄入</p>
</div>
</div>
</div>
</div>

<div class="not-prose callout callout-tip">

在投入任何技術解決方案之前，請確定你實際要解決的問題是什麼。這真的是技術問題嗎？它可能是一個管理問題、溝通缺口或培訓問題。麥當勞的點餐機之所以有效，是因為他們深知自己的瓶頸所在。對解決方案保持創意：遊戲化、更好的激勵機制、更清晰的標準作業程序 (SOP) 或改進培訓，有時表現優於任何 AI 實施 —— 且成本低得多。

</div>

<div class="not-prose callout callout-tip">

最終用戶體驗至關重要。大多數人本來就不喜歡打電話給客戶支援。現在許多人發現由 LLM 驅動的支援甚至更令人沮喪 —— 尤其是當 LLM 信心十足地嘗試提供幫助但實際上無法解決問題時。如果你正在構建面向客戶的東西，請在體驗上投入心力。一個簡單、設計良好且深知自己極限的系統，勝過一個浪費人們時間的過度自信系統。糟糕的 AI 用戶體驗 (UX) 對品牌的傷害可能比完全沒有 AI 更大。

</div>

## 📏 實施頻譜 (Implementation Spectrum)

並非每個 AI 項目都需要是一個全代理系統。實施複雜度存在一個廣泛的頻譜，大多數公司應該從較簡單的一端開始。


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-8">
<h3 class="text-xl font-bold font-headline mb-2">The Implementation Spectrum</h3>
<p class="text-sm text-on-surface-variant">From simple FAQ bots to full agentic platforms. Click a stage to explore.</p>
</div>
<!-- Spectrum Bar -->
<div class="relative mb-8">
<!-- Gradient Track -->
<div class="h-3 rounded-full w-full" style="background: linear-gradient(to right, #4CAF50, #8BC34A, #FFC107, #FF9800, #F44336);"></div>
<!-- Clickable Nodes -->
<div class="flex justify-between -mt-5">
<button onclick="selectStage(0)" id="stage-btn-0" class="stage-btn flex flex-col items-center gap-2 group" style="width: 18%;">
<div id="stage-dot-0" class="w-7 h-7 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-xs transition-all" style="background: #4CAF50;">
</div>
<span class="text-[10px] font-bold text-center leading-tight hidden sm:block">📋 FAQ Bot</span>
</button>
<button onclick="selectStage(1)" id="stage-btn-1" class="stage-btn flex flex-col items-center gap-2 group" style="width: 18%;">
<div id="stage-dot-1" class="w-7 h-7 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-xs transition-all" style="background: #8BC34A;">
</div>
<span class="text-[10px] font-bold text-center leading-tight hidden sm:block">💬 Chat Widget</span>
</button>
<button onclick="selectStage(2)" id="stage-btn-2" class="stage-btn flex flex-col items-center gap-2 group" style="width: 18%;">
<div id="stage-dot-2" class="w-7 h-7 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-xs transition-all" style="background: #FFC107;">
</div>
<span class="text-[10px] font-bold text-center leading-tight hidden sm:block">⚙️ Workflow</span>
</button>
<button onclick="selectStage(3)" id="stage-btn-3" class="stage-btn flex flex-col items-center gap-2 group" style="width: 18%;">
<div id="stage-dot-3" class="w-7 h-7 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-xs transition-all" style="background: #FF9800;">
</div>
<span class="text-[10px] font-bold text-center leading-tight hidden sm:block">🤖 Agent</span>
</button>
<button onclick="selectStage(4)" id="stage-btn-4" class="stage-btn flex flex-col items-center gap-2 group" style="width: 18%;">
<div id="stage-dot-4" class="w-7 h-7 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-xs transition-all" style="background: #F44336;">
</div>
<span class="text-[10px] font-bold text-center leading-tight hidden sm:block">🏢 Platform</span>
</button>
</div>
</div>
<!-- Detail Panel -->
<div id="spectrum-panel" class="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant min-h-[220px] transition-all">
<!-- Populated by JS -->
</div>
</div>
<script>
(function() {
var stages = [
{
emoji: '📋',
name: 'FAQ Bot',
desc: 'Simple Q&A from predefined answers. Lowest cost, lowest risk.',
cost: '💰',
costLabel: 'Minimal',
color: '#4CAF50',
complexity: 'Very Low',
useCase: 'Support page that answers common questions like store hours, return policy, or pricing — using a fixed knowledge base.',
risk: 'Almost none. Answers are pre-approved. The only risk is missing questions the bot cannot handle.'
},
{
emoji: '💬',
name: 'Chat Widget',
desc: 'LLM-powered chat on your existing site. Moderate cost and risk.',
cost: '💰💰',
costLabel: 'Low-Moderate',
color: '#8BC34A',
complexity: 'Low',
useCase: 'A customer-facing chatbot that can answer questions about your product docs, help articles, or knowledge base in natural language.',
risk: 'May hallucinate answers or misinterpret questions. Needs clear guardrails and fallback to human support.'
},
{
emoji: '⚙️',
name: 'Workflow Assistant',
desc: 'LLM integrated into existing business processes. Needs human-in-the-loop.',
cost: '💰💰💰',
costLabel: 'Moderate',
color: '#FFC107',
complexity: 'Medium',
useCase: 'An assistant that drafts emails, summarizes meeting notes, or pre-fills forms — with a human reviewing before anything is sent.',
risk: 'Errors in drafts could slip through if reviewers get complacent. Requires clear review checkpoints.'
},
{
emoji: '🤖',
name: 'Autonomous Agent',
desc: 'Full agentic system with tool access and decision-making. Requires monitoring.',
cost: '💰💰💰💰',
costLabel: 'Significant',
color: '#FF9800',
complexity: 'High',
useCase: 'An agent that monitors your inbox, triages support tickets, looks up customer history, drafts responses, and escalates complex issues.',
risk: 'Can take wrong actions with real consequences. Needs robust logging, spending limits, and human escalation paths.'
},
{
emoji: '🏢',
name: 'Full Agentic Platform',
desc: 'Multi-agent system running core business processes. Enterprise investment.',
cost: '💰💰💰💰💰',
costLabel: 'Enterprise',
color: '#F44336',
complexity: 'Very High',
useCase: 'Multiple specialized agents coordinating to run end-to-end processes — e.g., procurement, vendor management, and invoice processing as a unified system.',
risk: 'Compounding errors across agents. Requires dedicated engineering team, extensive testing, and governance framework.'
}
];
function render(idx) {
var s = stages[idx];
var panel = document.getElementById('spectrum-panel');
// Update dots
for (var i = 0; i < 5; i++) {
var dot = document.getElementById('stage-dot-' + i);
if (i === idx) {
dot.style.transform = 'scale(1.4)';
dot.style.borderColor = stages[i].color;
dot.style.boxShadow = '0 0 0 4px ' + stages[i].color + '33';
} else {
dot.style.transform = 'scale(1)';
dot.style.borderColor = 'white';
dot.style.boxShadow = '0 1px 3px rgba(0,0,0,0.2)';
}
}
panel.innerHTML =
'<div class="flex items-start justify-between mb-4">' +
'<div>' +
'<div class="text-xl font-bold mb-1">' + s.emoji + ' ' + s.name + '</div>' +
'<p class="text-sm text-on-surface-variant">' + s.desc + '</p>' +
'</div>' +
'<div class="text-right shrink-0 ml-4">' +
'<div class="text-xl">' + s.cost + '</div>' +
'<div class="text-xs text-on-surface/50 mt-0.5">' + s.costLabel + '</div>' +
'</div>' +
'</div>' +
'<div class="flex items-center gap-3 mb-4">' +
'<div class="text-xs font-bold uppercase tracking-widest text-on-surface/50">Complexity</div>' +
'<div class="flex-1 bg-surface-container rounded-full h-2.5 overflow-hidden">' +
'<div class="h-full rounded-full transition-all" style="width: ' + ((idx + 1) * 20) + '%; background: ' + s.color + ';"></div>' +
'</div>' +
'<div class="text-xs font-bold" style="color: ' + s.color + ';">' + s.complexity + '</div>' +
'</div>' +
'<div class="grid sm:grid-cols-2 gap-4">' +
'<div class="bg-surface-container rounded-xl p-4">' +
'<div class="text-xs font-bold uppercase tracking-widest text-on-surface/50 mb-2">📌 Typical use case</div>' +
'<p class="text-sm leading-relaxed">' + s.useCase + '</p>' +
'</div>' +
'<div class="bg-surface-container rounded-xl p-4">' +
'<div class="text-xs font-bold uppercase tracking-widest mb-2" style="color: ' + s.color + ';">⚠️ Key risk</div>' +
'<p class="text-sm leading-relaxed">' + s.risk + '</p>' +
'</div>' +
'</div>';
}
window.selectStage = function(idx) { render(idx); };
render(0); // Default to first position
})();
</script>

</div>


從簡單開始具有真正的優勢：成本更低、風險更低、部署更快，以及更清晰的投資回報率 (ROI)。隨著你了解哪些方法行之有效，你總是可以沿著頻譜進一步移動。過於雄心勃勃是 AI 項目失敗最常見的原因之一。

## 🔒 考慮誰會使用 —— 以及濫用 —— 你的系統

在構建任何自動化系統之前，請詢問一個關鍵問題：**這是對內的還是對外的？**

**內部工具**（由你自己的員工使用）面臨不同的風險。你的員工經過培訓、負有責任，且通常是出於善意行事。主要風險在於出錯和誤解，而非惡意。

**面向外部的系統**（由客戶或公眾使用）面臨根本不同的威脅模型。如果你的自動化系統與客戶交談，不法分子**一定會**測試它。

<div class="not-prose callout callout-error">

如果你的系統是面向外部的，請假設人們會嘗試誘騙你的 LLM 提供未經授權的折扣、洩露內部訊息、繞過規則或以非預期的方式行事。這並非假設 —— 它發生在每個面向公眾的 AI 系統中。從第一天起就應考慮「對抗性使用 (Adversarial use)」進行設計，而非事後補救。

</div>

**真實案例 —— 外部濫用：**

<div class="space-y-3 my-6">
<div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-2xl">🏪</span>
<div>
<div class="font-bold text-sm mb-1">汽車經銷商聊天組件</div>
<p class="text-sm text-on-surface/80">一家汽車經銷商部署了由 LLM 驅動的網頁聊天來幫助客戶。幾天內，用戶發現他們可以讓它同意任意低的價格、對競爭對手的車輛發表好評，甚至幫他們做功課。經銷商不得不將其關閉。一個沒有護欄 (Guardrails) 的聊天組件是一項負債，而非銷售工具。</p>
</div>
</div>
</div>
<div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-2xl">✈️</span>
<div>
<div class="font-bold text-sm mb-1">航空公司聊天機械人訴訟</div>
<p class="text-sm text-on-surface/80">一家航空公司的 LLM 聊天機械人告訴一位悲痛的客戶，他可以在行程結束後追溯申請喪親票價折扣 —— 這與公司的實際政策相左。當航空公司被起訴時，他們辯稱聊天機械人是一個「獨立的法律實體」，應對自己的言論負責。法院並不同意，判決航空公司敗訴並需支付賠償。<strong>教訓：你的 LLM 的言論就是你的言論。</strong></p>
</div>
</div>
</div>
</div>

**內部濫用 —— 指標陷阱：**

並非所有對抗性行為都來自組織外部的不法分子。內部的激勵機制也會產生自身的問題。一些公司將 **Token 使用量**（員工調用 LLM API 的次數）作為 AI 採用的關鍵績效指標 (KPI)。這聽起來很合理 —— 但它是一個糟糕的指標。它衡量的是活動量，而非價值或質量。員工可以生成數千個低質量、無用的 AI 輸出來達成數字。衡量 AI 使用數量而不衡量輸出質量的指標會產生另一種濫用 —— 一種更難發現且代價同樣高昂的濫用。

即使是內部工具，也要考慮：誰有訪問權限？自動化系統是否會被利用來達成某個 KPI？如果憑據 (Credentials) 被共享會發生什麼？「內部還是外部？」這個問題的答案決定了之後的每一個設計決策。

## 📝 核心概念

- **混合模式 1 (LLM 作為流水線步驟)** —— LLM 處理一個模糊的判斷步驟；其餘部分保持基於規則。
- **混合模式 2 (具有工具訪問權限的 LLM)** —— LLM 可以跨系統進行推理、決策和行動。
- **並非每個問題都需要 LLM** —— 專用解決方案通常更便宜、更快且更可靠。
- **從頻譜的簡單端開始** —— 僅隨著你了解哪些行之有效而增加複雜度。
- **內部與外部之別**改變一切 —— 面向外部的系統必須針對對抗性使用進行設計。

<div id="quiz-12-04" class="not-prose quiz-container my-12" data-quiz="12-04"></div>
