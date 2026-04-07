---
title: "6.3 什麼是好的智能代理 (Agent)？"
description: "具備響應與適應能力的 AI。"
chapter: "第 6 章"
pageId: "06-03"
---

## 🎯 核心目標
- 定義什麼讓 AI 系統真正具有「代理能力 (Agentic)」—— 而不僅僅是一個掛載了工具的腳本。
- 了解高質量智能代理 (Agents) 的六個關鍵特徵。

<div class="not-prose callout callout-tldr">

真正的智能代理不僅僅是一個外掛了工具的 LLM。它能夠**自主運作 (Autonomously)**、分解複雜目標、在出錯時進行調整並能與他人協作 —— 就像一個懂得自行解決問題的員工，而不僅僅是一個等待被使用的工具。

</div>

## 👁️ 視覺輔助與互動內容



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



## 📝 關鍵特徵

- **自主性與主動性 (Autonomy & Proactivity)：** 與被動、反應式的 AI 不同，好的代理能獨立行動以達成目標。它不需要每一步都等待指令 —— 而是自行決定下一步該做什麼。
- **以目標為導向的規劃 (Goal-Oriented Planning)：** 代理能將複雜的高階目標分解為可行步驟，確定優先次序，並在情況變化時調整策略。
- **工具使用與互通性 (Tool Use & Interoperability)：** 好的代理能與外部系統（API、軟體、搜尋引擎、數據庫）互動以完成任務（例如：檢查電子郵件、更新 CRM）。
- **適應性與學習 (Adaptability & Learning)：** 代理利用反饋循環和即時數據來優化表現，並在任務過程中適應新情況。
- **上下文感知與記憶 (Context Awareness & Memory)：** 具備代理能力的 LLM 能夠保持對過去互動的短期和長期記憶，從而實現跨多步驟或多個會話的連貫工作。
- **協作 (Collaboration)：** 代理可以與人類協作，通常也能與其他專業代理合作完成複雜的多部分項目。

<div class="not-prose callout callout-dyk">

傳統腳本遵循固定的步驟：A → B → C。智能代理則遵循一個適應性循環：**感知 → 規劃 → 行動 → 觀察 → 重複 (Perceive → Plan → Act → Observe → Repeat)**。這個循環會一直持續到目標達成 —— 或者代理請求幫助。

</div>

<div class="not-prose callout callout-tip">

還記得那些荒謬的問題嗎？比如「小明買了 12 個西瓜，小紅買了 24 個蘋果 —— 小強有多少個菠蘿？」一個好的模型應該回答：「這是不可能的。」同樣地，如果你問了一個不可能的問題，一個好的 LLM 不應該說「真是個好主意！」——它應該提出質疑。研究人員創建了一個基準測試來測試這種能力：[胡說八道基準測試 (Bullshit Benchmark)](https://github.com/petergpt/bullshit-benchmark)

</div>


<div id="quiz-06-03" class="not-prose quiz-container my-12" data-quiz="06-03"></div>
