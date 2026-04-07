---
title: "5.4 思維鏈 (Chain-of-Thought) 與推理詞元 (Reasoning Tokens)"
description: "按部就班地思考。"
chapter: "第 5 章"
pageId: "05-04"
---

## 🎯 核心目標
- 了解為什麼「按部就班地思考」能讓人人工智能 (AI) 變得更聰明。
- 明白提示詞引導推理與原生「思考」模型之間的區別。

<div class="not-prose callout callout-tldr">

處理複雜任務時，不要要求立即得到答案。要求 AI「按部就班地思考 (think step by step)」。這會迫使它在得出最終結論之前，先建立內部的邏輯。

</div>

## 👁️ 視覺與互動



<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-8">
<h3 class="text-xl font-bold font-headline mb-2">展示思考過程</h3>
<p class="text-sm text-on-surface-variant">看看按部就班地思考如何防止邏輯錯誤。</p>
</div>
<div class="flex flex-col gap-6">
<!-- Direct Answer -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 relative overflow-hidden">
<div class="flex items-center gap-2 mb-4">
<span class="px-2 py-0.5 rounded bg-surface-container text-[10px] font-bold uppercase tracking-widest opacity-60">直接回答</span>
</div>
<div class="text-xs font-mono p-3 bg-surface-container rounded mb-4">
<strong>問題：</strong>「如果我有 3 個蘋果，吃了 1 個，再買 5 個，現在有多少個？」
</div>
<div class="p-3 bg-red-50 border border-red-200 rounded text-xs leading-relaxed italic text-red-700">
<strong>AI 結果：</strong>「你有 8 個蘋果。」（錯誤！它漏掉了減法步驟。）
</div>
</div>
<!-- Arrow -->
<div class="flex items-center justify-center">
<span class="material-symbols-outlined text-accent text-3xl">keyboard_double_arrow_down</span>
</div>
<!-- Chain of Thought -->
<div class="bg-surface-container-lowest border-2 border-primary rounded-xl p-6 shadow-md relative overflow-hidden">
<div class="flex items-center gap-2 mb-4">
<span class="px-2 py-0.5 rounded bg-primary text-on-primary text-[10px] font-bold uppercase tracking-widest">思維鏈 (Chain of Thought)</span>
<span class="text-[10px] font-bold text-primary uppercase animate-pulse">✨ 準確度大幅提高</span>
</div>
<div class="text-xs font-mono p-3 bg-surface-container rounded mb-4">
<strong>問題：</strong>「如果我有 3 個蘋果，吃了 1 個，再買 5 個，現在有多少個？<strong>讓我們按部就班地思考。</strong>」
</div>
<div class="space-y-3">
<div class="p-4 bg-surface-container rounded border-l-4 border-accent animate-fade-in text-[11px] leading-relaxed">
<div class="flex items-center gap-2 mb-2 font-bold opacity-60 uppercase text-[10px]">
<span class="material-symbols-outlined text-xs">psychology</span>
思考過程
</div>
1. 從 3 個蘋果開始。<br>
2. 吃掉 1 個：3 - 1 = 剩餘 2 個蘋果。<br>
3. 再買 5 個：2 + 5 = 7 個蘋果。<br>
4. 最終數量：7。
</div>
<div class="p-4 bg-green-50 border border-green-200 rounded text-xs leading-relaxed italic text-green-700 font-bold">
<strong>AI 輸出：</strong>「你有 7 個蘋果。」（正確！）
</div>
</div>
</div>
</div>
</div>
</div>



## 📝 關鍵概念

- **思維鏈 (Chain-of-Thought, CoT)：** 透過提示詞引導 AI 進行按部就班的推理。
- **推理詞元 (Reasoning Tokens)：** 現代模型（與我們學到的模型訓練相關）被訓練在開始輸出最終答案之前，先在內部進行推理過程。
- **「草稿墊」(Scratchpad) 效應：** 生成中間步驟為最終答案提供了額外的上下文，使其更可靠。

<div class="not-prose callout callout-dyk">

即使推理鏈中包含錯誤，僅僅在推理上消耗更多詞元 (Tokens) 也能提高最終的準確性。這就像在草稿紙上亂寫亂畫能幫助你解決數學難題一樣，即使你的草稿並不完美。因此，在某種意義上，推理更像是一種「付出」。如果你想要一個**更聰明**的模型，請將推理強度設置為高。

</div>

<div class="not-prose callout callout-dyk">

推理和思考是同一回事嗎？

</div>

<div id="quiz-05-04" class="not-prose quiz-container my-12" data-quiz="05-04"></div>
