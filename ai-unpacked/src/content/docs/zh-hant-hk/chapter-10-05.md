---
title: "10.5 選擇你的模型 — 一個思考練習"
description: "一個根據你的特定需求評估 LLM 的框架 — 因為「最佳模型」完全取決於你的優先事項。"
chapter: "第 10 章"
pageId: "10-05"
---

## 🎯 核心目標
- 為讀者提供一個可重複的模型選擇框架。
- 強化模型選擇是多維度的，應與實際優先事項相匹配。

<div class="not-prose callout callout-tldr">

沒有通用的「最佳」大型語言模型 (LLM)。正確的模型取決於你的特定優先事項 — 速度、成本、準確性、隱私、上下文窗口 (Context Window)。先梳理你的需求，再尋找匹配的模型。

</div>

## 陷阱：按品牌選擇

許多組織默認選擇最著名的模型，或是他們的 IT 團隊最先批准的模型，或是執行長 (CEO) 在演示中看到的模型。

這很少是最佳選擇。

模型選擇應由你的實際需求驅動 — 這些需求隨使用場景的不同而有巨大差異。客戶支援機器人的需求與法律文件審查員不同。營銷郵件生成器的需求與代碼助手不同。

## 六個維度

為你的特定使用場景對每個維度進行評分（1 = 低優先級，5 = 至關重要）：


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-8">
<h3 class="text-xl font-bold font-headline mb-2">The Six Evaluation Dimensions</h3>
<p class="text-sm text-on-surface-variant">Rate each 1–5 for your use case. The right model matches your highest priorities.</p>
</div>
<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
<!-- Speed -->
<div class="p-6 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-accent transition-all">
<div class="flex items-center gap-3 mb-3">
<span class="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent material-symbols-outlined text-sm">bolt</span>
<h4 class="font-bold text-sm">Speed</h4>
</div>
<p class="text-[11px] text-on-surface-variant leading-relaxed mb-3">
How fast does the response need to arrive? Users notice lag; batch jobs don't.
</p>
<div class="space-y-1.5">
<div class="text-[10px] flex gap-1.5 items-start">
<span class="text-green-600 font-bold shrink-0 mt-0.5">↑ High</span>
<span class="text-on-surface-variant">User-facing chat, real-time tools</span>
</div>
<div class="text-[10px] flex gap-1.5 items-start">
<span class="text-on-surface/40 font-bold shrink-0 mt-0.5">↓ Low</span>
<span class="text-on-surface-variant">Overnight batch processing</span>
</div>
</div>
</div>
<!-- Accuracy -->
<div class="p-6 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-accent transition-all">
<div class="flex items-center gap-3 mb-3">
<span class="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent material-symbols-outlined text-sm">verified</span>
<h4 class="font-bold text-sm">Accuracy & Reasoning</h4>
</div>
<p class="text-[11px] text-on-surface-variant leading-relaxed mb-3">
How much does getting it exactly right matter? Some tasks forgive errors; others can't.
</p>
<div class="space-y-1.5">
<div class="text-[10px] flex gap-1.5 items-start">
<span class="text-green-600 font-bold shrink-0 mt-0.5">↑ High</span>
<span class="text-on-surface-variant">Medical summaries, legal analysis</span>
</div>
<div class="text-[10px] flex gap-1.5 items-start">
<span class="text-on-surface/40 font-bold shrink-0 mt-0.5">↓ Low</span>
<span class="text-on-surface-variant">Marketing brainstorming, ideation</span>
</div>
</div>
</div>
<!-- Cost -->
<div class="p-6 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-accent transition-all">
<div class="flex items-center gap-3 mb-3">
<span class="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent material-symbols-outlined text-sm">payments</span>
<h4 class="font-bold text-sm">Cost</h4>
</div>
<p class="text-[11px] text-on-surface-variant leading-relaxed mb-3">
What's your token budget at expected scale? Cost compounds quickly at volume.
</p>
<div class="space-y-1.5">
<div class="text-[10px] flex gap-1.5 items-start">
<span class="text-green-600 font-bold shrink-0 mt-0.5">↑ High</span>
<span class="text-on-surface-variant">High-volume, simple repeated tasks</span>
</div>
<div class="text-[10px] flex gap-1.5 items-start">
<span class="text-on-surface/40 font-bold shrink-0 mt-0.5">↓ Low</span>
<span class="text-on-surface-variant">Low-volume, quality-critical tasks</span>
</div>
</div>
</div>
<!-- Context Window -->
<div class="p-6 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-accent transition-all">
<div class="flex items-center gap-3 mb-3">
<span class="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent material-symbols-outlined text-sm">article</span>
<h4 class="font-bold text-sm">Context Window</h4>
</div>
<p class="text-[11px] text-on-surface-variant leading-relaxed mb-3">
How much text does the model need to hold in mind at once? Long documents need large windows.
</p>
<div class="space-y-1.5">
<div class="text-[10px] flex gap-1.5 items-start">
<span class="text-green-600 font-bold shrink-0 mt-0.5">↑ High</span>
<span class="text-on-surface-variant">Reviewing 50-page contracts</span>
</div>
<div class="text-[10px] flex gap-1.5 items-start">
<span class="text-on-surface/40 font-bold shrink-0 mt-0.5">↓ Low</span>
<span class="text-on-surface-variant">Short Q&A, single-turn queries</span>
</div>
</div>
</div>
<!-- Privacy -->
<div class="p-6 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-accent transition-all">
<div class="flex items-center gap-3 mb-3">
<span class="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent material-symbols-outlined text-sm">lock</span>
<h4 class="font-bold text-sm">Privacy & Data Residency</h4>
</div>
<p class="text-[11px] text-on-surface-variant leading-relaxed mb-3">
Can your data leave your servers? Regulations in some industries make self-hosting non-negotiable.
</p>
<div class="space-y-1.5">
<div class="text-[10px] flex gap-1.5 items-start">
<span class="text-green-600 font-bold shrink-0 mt-0.5">↑ High</span>
<span class="text-on-surface-variant">Healthcare, legal, government, finance</span>
</div>
<div class="text-[10px] flex gap-1.5 items-start">
<span class="text-on-surface/40 font-bold shrink-0 mt-0.5">↓ Low</span>
<span class="text-on-surface-variant">General marketing, public content</span>
</div>
</div>
</div>
<!-- Domain Fit -->
<div class="p-6 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-accent transition-all">
<div class="flex items-center gap-3 mb-3">
<span class="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent material-symbols-outlined text-sm">tune</span>
<h4 class="font-bold text-sm">Domain Fit</h4>
</div>
<p class="text-[11px] text-on-surface-variant leading-relaxed mb-3">
Does the model have strengths in your specific area? Not all models are equally good at code or multilingual tasks.
</p>
<div class="space-y-1.5">
<div class="text-[10px] flex gap-1.5 items-start">
<span class="text-green-600 font-bold shrink-0 mt-0.5">↑ High</span>
<span class="text-on-surface-variant">Code generation, non-English markets</span>
</div>
<div class="text-[10px] flex gap-1.5 items-start">
<span class="text-on-surface/40 font-bold shrink-0 mt-0.5">↓ Low</span>
<span class="text-on-surface-variant">General English text tasks</span>
</div>
</div>
</div>
</div>
</div>

</div>


## 匹配模型優勢

評估優先事項後：

- **高準確性 + 大上下文 → 旗艦閉源模型**（任何主要供應商的頂級/超強層級）
- **高速度 + 高使用量 → 快速層級**（lite、mini、flash 層級的模型）
- **嚴格隱私 → 自託管開源模型**（你下載並自行運行的模型）
- **Google Workspace 整合 → Google 的生態系統**
- **大規模使用且對成本敏感 → 中國開源替代方案**（DeepSeek、Qwen 等）

如果你正在為代理 (Agent) 或自動化工作評估模型，我們在課程早期探索過的優秀代理特質也值得與你的模型選擇進行對比：


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-8">
<h3 class="text-xl font-bold font-headline mb-2">智能代理檢核表</h3>
<p class="text-sm text-on-surface-variant">是什麼區分了聰明的腳本與真正的 AI 智能代理？</p>
</div>
<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
<!-- Autonomy & Proactivity -->
<div class="p-6 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all">
<div class="flex items-center gap-3 mb-3">
<span class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary material-symbols-outlined text-sm">self_improvement</span>
<h4 class="font-bold text-sm">自主性與主動性</h4>
</div>
<p class="text-[11px] text-on-surface-variant leading-relaxed">
獨立朝向目標行動 —— 不會等待指令的每一步。更像是一個員工而非單純的工具。
</p>
</div>
<!-- Goal-Oriented Planning -->
<div class="p-6 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all">
<div class="flex items-center gap-3 mb-3">
<span class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary material-symbols-outlined text-sm">checklist</span>
<h4 class="font-bold text-sm">以目標為導向的規劃</h4>
</div>
<p class="text-[11px] text-on-surface-variant leading-relaxed">
將高階目標分解為邏輯順序的可行步驟 —— 先完成前提條件，再以此為基礎進行。確定優先次序、編排順序，並在情況變化時進行調整。
</p>
</div>
<!-- Tool Use & Interoperability -->
<div class="p-6 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all">
<div class="flex items-center gap-3 mb-3">
<span class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary material-symbols-outlined text-sm">build</span>
<h4 class="font-bold text-sm">工具使用與互通性</h4>
</div>
<p class="text-[11px] text-on-surface-variant leading-relaxed">
與外部 API、搜尋引擎和數據庫互動以完成真實任務 —— 而不僅僅是空談。
</p>
</div>
<!-- Adaptability & Learning -->
<div class="p-6 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all">
<div class="flex items-center gap-3 mb-3">
<span class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary material-symbols-outlined text-sm">published_with_changes</span>
<h4 class="font-bold text-sm">適應性</h4>
</div>
<p class="text-[11px] text-on-surface-variant leading-relaxed">
如果工具 A 失敗，它會嘗試工具 B。利用即時反饋在任務過程中優化方法。
</p>
</div>
<!-- Context Awareness & Memory -->
<div class="p-6 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all">
<div class="flex items-center gap-3 mb-3">
<span class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary material-symbols-outlined text-sm">memory</span>
<h4 class="font-bold text-sm">上下文與記憶</h4>
</div>
<p class="text-[11px] text-on-surface-variant leading-relaxed">
保持對過去步驟的短期和長期記憶，實現跨多步驟或多會話任務的連貫工作。
</p>
</div>
<!-- Collaboration -->
<div class="p-6 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all">
<div class="flex items-center gap-3 mb-3">
<span class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary material-symbols-outlined text-sm">group</span>
<h4 class="font-bold text-sm">協作</h4>
</div>
<p class="text-[11px] text-on-surface-variant leading-relaxed">
與人類及其他專業代理協作，以完成複雜的多部分項目。
</p>
</div>
</div>
<!-- Script vs Agent contrast -->
<div class="mt-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-5">
<div class="grid grid-cols-2 gap-6 text-center">
<div>
<div class="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-2 opacity-60">腳本 (Script)</div>
<div class="font-mono text-xs text-on-surface-variant bg-surface-container rounded-lg px-4 py-3">A → B → C</div>
<p class="text-[11px] text-on-surface-variant mt-2 opacity-70 italic">固定的步驟，任何變化都會導致失敗</p>
</div>
<div>
<div class="text-[10px] font-black uppercase tracking-widest text-primary mb-2">智能代理 (Agent)</div>
<div class="font-mono text-xs text-primary bg-primary/5 border border-primary/20 rounded-lg px-4 py-3">感知 → 規劃 → 行動 → 觀察 → 重複</div>
<p class="text-[11px] text-on-surface-variant mt-2 italic">適應性循環 —— 持續運作直到目標達成</p>
</div>
</div>
</div>
</div>
</div>


<div class="not-prose callout callout-dyk">

最重要的數字不是基準測試分數 — 而是你在自己任務上的準確性。在競爭模型中運行你的實際使用場景並衡量輸出。對真實範例進行內部測試勝過任何發布的排行榜。

</div>

<div class="not-prose callout callout-dyk">

**長週期任務 — 前沿模型物有所值的地方。** 當任務涉及多個步驟時 — 審核 50 頁的文件、跨多個檔案偵錯、在長對話中保持一致性 — 較便宜的模型往往會「忘記」先前的上下文或偏離目標。前沿模型處理這類任務的能力明顯更好：它們在較長的任務中保持連貫性，更可靠地執行複雜的多步指令，並且在某些內容不合理時更有可能提出質疑，而不是盲目地生成看似合理的廢話。如果你的使用場景涉及持續的多步工作，廉價模型與前沿模型之間的差距是巨大的。

</div>

<div class="not-prose callout callout-error">

**一個好的模型不只是附和。** 如果你讓 LLM 評估你的商業計劃，而它只說「哇，太精彩了 — 這將改變世界！」而沒有任何批評或質疑……這不是一個好預兆。一個真正有能力的模型會發現弱點，提出尖銳的問題，並告訴你什麼時候行不通。**提示：** 嘗試將你的計劃貼上到一個*不同的*對話視窗中 — 甚至是一個完全不同的模型 — 並明確要求它挑出邏輯漏洞。一個沒有先前上下文的新模型，比起過去 20 分鐘一直在愉快地附和你的模型，更有可能給你誠實的回饋。

</div>

<div class="not-prose callout callout-tip">

**考慮構建應用程式或自動化工作流？** 模型只是決定的一部分。當我們探索什麼是優秀的代理 (Agent) 時，我們看到了它們如何依賴工具、記憶、整合以及在現實世界中採取行動的能力 — 這些都超出了模型本身。模型周邊的生態系統 — 它連接到什麼、如何編排、可以使用什麼工具 — 通常同樣重要。自動化和實施章節將對此進行深入探討。

</div>

## 定期回顧

LLM 的版圖每隔幾個月就會發生變化。六個月前不存在的模型現在可能是你的最佳選擇。每季度設置一個日曆提醒，重新檢查你目前的選擇是否仍然合理。

<div id="quiz-10-05" class="not-prose quiz-container my-12" data-quiz="10-05"></div>
