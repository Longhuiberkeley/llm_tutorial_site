---
title: "1.1 鍵盤自動完成 vs LLM 補全"
description: "學習大型語言模型 (LLMs) 的核心直覺：它們就像是打了類固醇的自動完成。"
chapter: "第 1 章"
pageId: "01-01"
---

## 🎯 核心目標
- 展示 LLM 基本上與你手機的自動完成相同，只是規模巨大。
- 確立 LLM 是預測下一個字詞 (Next-word prediction)——它們並沒有真正「思考」。

<div class="not-prose callout callout-tldr">

大型語言模型 (LLMs) 只是超級強大的自動完成 (Autocomplete)。它們只預測接下來會出現什麼字，僅此而已。

</div>

## 👁️ 視覺比較



<div class="not-prose">
<!-- Comparison Section (Bento Grid Style) -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 mt-8">
<!-- Phone Keyboard Completion -->
<div class="bg-surface-container-low rounded-xl p-8 relative overflow-hidden group flex flex-col">
<div class="flex items-center gap-3 mb-6">
<span class="text-3xl">📱</span>
<h3 class="text-xl font-bold font-headline">鍵盤自動完成</h3>
</div>
<div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm flex-grow flex flex-col justify-between min-h-[400px]">
<div class="p-4">
<p class="text-xl font-medium border-r-2 border-primary w-fit pr-1">Roses are...</p>
</div>
<div class="mt-auto">
<!-- iPhone Suggestion Bar -->
<div class="flex border-b border-outline-variant/30 mb-0.5 bg-outline-variant/30 dark:bg-surface-container-high rounded-t-lg">
<div class="flex-1 py-3 text-center text-sm font-bold border-r border-outline-variant/30">beautiful</div>
<div class="flex-1 py-3 text-center text-sm font-bold border-r border-outline-variant/30 text-primary">red</div>
<div class="flex-1 py-3 text-center text-sm font-bold">so</div>
</div>
<!-- Keyboard -->
<div class="bg-outline-variant/30 dark:bg-surface-container-high rounded-b-lg p-1 pb-4 shadow-inner">
<div class="flex justify-center gap-1 mb-1">
<div class="w-7 h-9 bg-white dark:bg-surface rounded shadow-sm text-center leading-9 font-medium text-sm">Q</div>
<div class="w-7 h-9 bg-white dark:bg-surface rounded shadow-sm text-center leading-9 font-medium text-sm">W</div>
<div class="w-7 h-9 bg-white dark:bg-surface rounded shadow-sm text-center leading-9 font-medium text-sm">E</div>
<div class="w-7 h-9 bg-white dark:bg-surface rounded shadow-sm text-center leading-9 font-medium text-sm">R</div>
<div class="w-7 h-9 bg-white dark:bg-surface rounded shadow-sm text-center leading-9 font-medium text-sm">T</div>
<div class="w-7 h-9 bg-white dark:bg-surface rounded shadow-sm text-center leading-9 font-medium text-sm">Y</div>
<div class="w-7 h-9 bg-white dark:bg-surface rounded shadow-sm text-center leading-9 font-medium text-sm">U</div>
<div class="w-7 h-9 bg-white dark:bg-surface rounded shadow-sm text-center leading-9 font-medium text-sm">I</div>
<div class="w-7 h-9 bg-white dark:bg-surface rounded shadow-sm text-center leading-9 font-medium text-sm">O</div>
<div class="w-7 h-9 bg-white dark:bg-surface rounded shadow-sm text-center leading-9 font-medium text-sm">P</div>
</div>
<div class="flex justify-center gap-1 mb-1 px-3">
<div class="w-7 h-9 bg-white dark:bg-surface rounded shadow-sm text-center leading-9 font-medium text-sm">A</div>
<div class="w-7 h-9 bg-white dark:bg-surface rounded shadow-sm text-center leading-9 font-medium text-sm">S</div>
<div class="w-7 h-9 bg-white dark:bg-surface rounded shadow-sm text-center leading-9 font-medium text-sm">D</div>
<div class="w-7 h-9 bg-white dark:bg-surface rounded shadow-sm text-center leading-9 font-medium text-sm">F</div>
<div class="w-7 h-9 bg-white dark:bg-surface rounded shadow-sm text-center leading-9 font-medium text-sm">G</div>
<div class="w-7 h-9 bg-white dark:bg-surface rounded shadow-sm text-center leading-9 font-medium text-sm">H</div>
<div class="w-7 h-9 bg-white dark:bg-surface rounded shadow-sm text-center leading-9 font-medium text-sm">J</div>
<div class="w-7 h-9 bg-white dark:bg-surface rounded shadow-sm text-center leading-9 font-medium text-sm">K</div>
<div class="w-7 h-9 bg-white dark:bg-surface rounded shadow-sm text-center leading-9 font-medium text-sm">L</div>
</div>
<div class="flex justify-center gap-1">
<div class="w-10 h-9 bg-outline-variant/50 dark:bg-surface-variant rounded shadow-sm text-center leading-9 text-xs font-bold">⇧</div>
<div class="w-7 h-9 bg-white dark:bg-surface rounded shadow-sm text-center leading-9 font-medium text-sm">Z</div>
<div class="w-7 h-9 bg-white dark:bg-surface rounded shadow-sm text-center leading-9 font-medium text-sm">X</div>
<div class="w-7 h-9 bg-white dark:bg-surface rounded shadow-sm text-center leading-9 font-medium text-sm">C</div>
<div class="w-7 h-9 bg-white dark:bg-surface rounded shadow-sm text-center leading-9 font-medium text-sm">V</div>
<div class="w-7 h-9 bg-white dark:bg-surface rounded shadow-sm text-center leading-9 font-medium text-sm">B</div>
<div class="w-7 h-9 bg-white dark:bg-surface rounded shadow-sm text-center leading-9 font-medium text-sm">N</div>
<div class="w-7 h-9 bg-white dark:bg-surface rounded shadow-sm text-center leading-9 font-medium text-sm">M</div>
<div class="w-10 h-9 bg-outline-variant/50 dark:bg-surface-variant rounded shadow-sm text-center leading-9 text-xs font-bold">⌫</div>
</div>
</div>
</div>
</div>
<div class="mt-4 text-sm text-on-surface-variant italic">根據局部頻率預測下一個字詞。</div>
</div>
<!-- LLM Completion -->
<div class="bg-surface-container-low rounded-xl p-8 relative overflow-hidden flex flex-col">
<div class="absolute inset-0 opacity-10 pointer-events-none">
<div class="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full blur-3xl translate-x-10 -translate-y-10"></div>
</div>
<div class="flex items-center gap-3 mb-6">
<span class="text-3xl">🤖</span>
<h3 class="text-xl font-bold font-headline">大型語言模型</h3>
</div>
<div class="bg-surface-container-lowest rounded-xl p-8 shadow-sm flex-grow border border-primary/10 min-h-[400px]">
<div class="space-y-4">
<p class="text-xl font-medium">Roses are...</p>
<div class="space-y-2 animate-pulse">
<p class="text-primary font-bold text-lg">red, violets are blue,</p>
<p class="text-primary font-bold text-lg">I’ve learned a lot about LLMs,</p>
<p class="text-primary font-bold text-lg">and so will you!</p>
</div>
</div>
</div>
<div class="mt-4 text-sm text-on-surface-variant italic">預測跨上下文的整個知識分佈。</div>
</div>
</div>
<!-- The Big Equation Text -->
<div class="flex justify-center mb-16">
<div class="equation-banner px-10 py-6 rounded-full inline-flex items-center gap-6 rotate-[-1deg]">
<span class="text-4xl font-extrabold font-headline">LLM = 打了類固醇的自動完成</span>
</div>
</div>
</div>



## 📝 核心概念

- **手機自動完成 (Phone Autocomplete)：** 根據基本的局部頻率一次預測 **1個字** (例如，輸入「Roses are」會建議「red」)。
- **大型語言模型 (Large Language Model)：** 根據從數十億文檔中學到的深度語義模式，預測**整個句子和段落**。
- **規模差異：** 這是完全相同的底層技術，只是擴展到了巨大的規模。

<div class="not-prose callout callout-error">

我們很容易相信 LLM 「理解」它們在說什麼。其實不然——它們只是非常擅長根據訓練數據中的模式，猜測統計上最可能的下一個字詞。

</div>

<div class="not-prose my-12">
<!--
Quiz Box Component
Generated by build.js from :::quiz blocks in markdown.
-->
<div id="quiz-01-01" class="quiz-container bg-surface-container border border-outline-variant rounded-xl p-6 mt-10">
    <div class="font-bold mb-4 flex items-center gap-2">
        <span>🧠</span>
        <span>QUIZ</span>
    </div>
    <p class="mb-4">為什麼 LLM 能產生如此令人印象深刻、聽起來像人類的文本？</p>
    <div class="space-y-2">
                <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            它們理解文字背後的含義
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="true">
            它們根據來自數十億文件的模式，預測統計上可能的下一個字詞
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            它們在生成文本前會先思考要說什麼
        </div>
    </div>
    <div class="quiz-feedback hidden mt-4 p-4 rounded-lg"></div>
</div>

</div>