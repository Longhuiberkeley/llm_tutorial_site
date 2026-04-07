---
title: "6.1 什麼是工具使用 (Tool Use)？ — LLMs 可以進行委派"
description: "賦予 AI 雙手和腦袋。"
chapter: "第 6 章"
pageId: "06-01"
---

## 🎯 核心目標
- 了解大型語言模型 (LLMs) 可以調用外部軟件來解決自身的局限性。
- 明白在數學、搜尋和數據訪問方面進行「委派 (Delegation)」的力量。

<div class="not-prose callout callout-tldr">

大型語言模型 (LLMs) 擅長語言，但不擅長數學和事實。**工具使用 (Tool Use)** 讓它們可以委派給計算機或搜尋引擎，而不是靠猜測。

</div>

## 👁️ 視覺與互動



<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-8">
<h3 class="text-xl font-bold font-headline mb-2">LLMs 可以進行委派</h3>
<p class="text-sm text-on-surface-variant">看看 LLM 如何使用計算機來避免在數學問題上「亂猜」。</p>
</div>
<div class="flex flex-col md:flex-row gap-6 items-stretch">
<!-- Without Tool -->
<div class="flex-1 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col">
<div class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4 opacity-60">沒有工具</div>
<div class="text-xs font-mono p-3 bg-surface-container rounded mb-4">
<strong>問題：</strong>「123 × 456 等於多少？」
</div>
<div class="p-3 bg-red-50 border border-red-200 rounded text-xs leading-relaxed italic text-red-700 flex-grow">
<strong>AI 邏輯：</strong>「我記得看過類似的數字。大概是 50,000 左右吧……」<br><br>
<strong>輸出：</strong>「123 × 456 是 56,128。」（錯誤！它是猜出來的。）
</div>
</div>
<!-- Animation Center -->
<div class="flex items-center justify-center p-4">
<div class="flex flex-col items-center gap-2">
<span class="material-symbols-outlined text-primary text-4xl animate-bounce">handyman</span>
<span class="text-[10px] font-bold text-primary uppercase">工具調用 (Tool Call)</span>
</div>
</div>
<!-- With Tool -->
<div class="flex-1 bg-surface-container-lowest border-2 border-primary rounded-xl p-6 flex flex-col shadow-md">
<div class="text-[10px] font-bold uppercase tracking-widest text-primary mb-4">有計算機工具</div>
<div class="text-xs font-mono p-3 bg-surface-container rounded mb-4">
<strong>問題：</strong>「123 × 456 等於多少？」
</div>
<div class="space-y-3 flex-grow">
<div class="p-3 bg-surface-container rounded border-l-4 border-primary text-[10px] font-mono">
<span class="text-primary font-bold">調用 (CALL)：</span> calculator.multiply(123, 456)<br>
<span class="text-green-600 font-bold">結果 (RESULT)：</span> 56088
</div>
<div class="p-3 bg-green-50 border border-green-200 rounded text-xs leading-relaxed italic text-green-700">
<strong>輸出：</strong>「123 × 456 是 56,088。」（正確！精確計算。）
</div>
</div>
</div>
</div>
<div class="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-xl">
<p class="text-xs text-center italic text-on-surface-variant">
透過委派給<strong>計算機</strong>，LLM 不再是一個「統計猜測者 (Statistical guesser)」，而是一個精確的處理器。
</p>
</div>
<!-- Simon Says explanation -->
<div class="mt-8 border-t border-outline-variant pt-8">
<h4 class="text-sm font-bold text-center mb-6 text-on-surface">等一下 —— LLM 實際上是如何「使用」工具的？</h4>
<div class="flex flex-col md:flex-row items-stretch gap-4">
<!-- Step 1: LLM outputs text -->
<div class="flex-1 bg-surface-container-lowest border-2 border-accent/30 rounded-xl p-5 flex flex-col gap-3">
<div class="text-[10px] font-black uppercase tracking-widest text-accent">第一步 — LLM 輸出</div>
<div class="font-mono text-xs bg-surface-container rounded-lg p-3 leading-relaxed border border-outline-variant">
我需要計算這個。<br>
<span class="bg-accent/15 text-accent font-bold px-1 rounded">[tool_call: calculator.multiply(123, 456)]</span><br>
讓我使用這個結果……
</div>
<p class="text-[11px] text-on-surface-variant italic">LLM 只會輸出文字 —— 包括觸發短語。它本身從不「運行」任何東西。</p>
</div>
<!-- Arrow -->
<div class="flex items-center justify-center p-2 text-primary">
<span class="material-symbols-outlined text-3xl rotate-90 md:rotate-0">arrow_forward</span>
</div>
<!-- Step 2: Executor intercepts -->
<div class="flex-1 bg-surface-container-lowest border-2 border-primary/30 rounded-xl p-5 flex flex-col gap-3">
<div class="text-[10px] font-black uppercase tracking-widest text-primary">第二步 — 執行器 (Executor) 攔截</div>
<div class="font-mono text-xs bg-surface-container rounded-lg p-3 leading-relaxed border border-outline-variant text-green-700">
檢測到：<span class="font-bold">tool_call</span><br>
正在運行：calculator.multiply(123, 456)<br>
結果：<span class="font-bold">56088</span> ✓
</div>
<p class="text-[11px] text-on-surface-variant italic">另一個獨立的程式讀取觸發訊號，執行實際動作，並將結果傳回。</p>
</div>
</div>
<div class="mt-5 p-4 bg-accent/5 border border-accent/20 rounded-xl text-center">
<p class="text-xs italic text-on-surface-variant">
🎮 把它想像成<strong>「西門說 (Simon Says)」</strong>遊戲：LLM 就是西門 —— 它只負責*說出*指令，而由其他人實際去執行。
</p>
</div>
</div>
</div>
</div>



## 🎮 「西門說」的小把戲

這是大多數人都忽略的關鍵見解：**大型語言模型 (LLM) 從不實際「做」任何事情。**

它唯一會做的就是輸出文字。就這樣。沒有點擊，沒有下載，沒有運行程式碼 —— 只有文字。

那麼它如何「使用」計算機呢？想想**「西門說 (Simon Says)」**這個遊戲。當西門說了什麼，其他人就會執行那個動作。LLM 就是西門 —— 它只*說出*指令。另一個獨立的程式會監聽觸發訊號並實際執行任務。

在實踐中，它看起來像這樣：

> LLM 輸出：`[tool_call: calculator.multiply(123, 456)]`

這只是具有特殊觸發模式的文字。另一個程式讀取它，進行計算，並將結果反饋回來。然後 LLM 讀取該結果並繼續寫作。

「西門說，從 example.com 下載數據」—— LLM 負責說；執行器 (Executor) 負責做。

## 📝 關鍵概念

- **委派 (Delegation)：** LLM 決定使用哪個工具以及問什麼 —— 但由工具來完成繁重的工作。
- **常見工具：** 計算機、網絡搜尋、程式碼執行、檔案讀取和資料庫查詢。
- **觸發文字 (Trigger Text)：** 工具調用 (Tool calls) 只是格式特殊的文字，由周邊系統攔截並運行。
- **整合結果：** 工具完成後，LLM 會讀取結果並將其重新整合到你的對話中。

<div class="not-prose callout callout-dyk">

**什麼是 API？** 應用程式編程介面 (API) 就像餐廳的菜單。你不需要進入廚房 —— 你只要看菜單，下單，然後拿回食物。API 就是讓軟件程式之間互相交談的「菜單」。

</div>

<div class="not-prose my-12">
<!--
Quiz Box Component
Generated by build.js from :::quiz blocks in markdown.
-->
<div id="quiz-06-01" class="quiz-container bg-surface-container border border-outline-variant rounded-xl p-6 mt-10">
    <div class="font-bold mb-4 flex items-center gap-2">
        <span>🧠</span>
        <span>QUIZ</span>
    </div>
    <p class="mb-4">當大型語言模型 (LLM) 「使用計算機」時，實際發生了什麼事？</p>
    <div class="space-y-2">
                <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            LLM 使用內置模組在內部進行數學運算
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="true">
            LLM 輸出特殊格式的文字，由外部系統攔截並執行
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            LLM 將計算發送給另一個專門從事數學運算的 AI 模型
        </div>
    </div>
    <div class="quiz-feedback hidden mt-4 p-4 rounded-lg"></div>
</div>

</div>
