---
title: "1.4 句子距離 —— 「相似」代表什麼？"
description: "將距離的概念從詞語擴展到句子。"
chapter: "第 1 章"
pageId: "01-04"
---

## 🎯 核心目標
- 將距離的概念從詞語擴展到句子。
- 理解整句句子在意思上可以有「近」或「遠」之分。
- 觀察即使你使用不同的詞語，LLM 如何理解你的意思。

<div class="not-prose callout callout-tldr">

就像詞語一樣，句子在意思上也有「近」或「遠」之分。「我很肚餓」和「我們去吃飯吧」非常接近 —— 即使使用了不同的詞語，它們表達的意思卻是一樣的。

</div>

## 👁️ 視覺效果與互動



<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 text-center">
<div class="flex items-center justify-center gap-3 mb-6">
<span class="text-3xl">🧐</span>
<h3 class="text-xl font-bold font-headline">哪句句子的意思完全不同？</h3>
</div>
<div class="flex flex-col gap-3 max-w-xl mx-auto">
<div class="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-4 hover:border-primary cursor-pointer transition-all text-left font-medium text-lg" onclick="this.classList.add('border-red-500', 'bg-red-50'); document.getElementById('iq-sentence-feedback').classList.remove('hidden')">
A) 「我而家好肚餓。」
</div>
<div class="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-4 hover:border-primary cursor-pointer transition-all text-left font-medium text-lg" onclick="this.classList.add('border-red-500', 'bg-red-50'); document.getElementById('iq-sentence-feedback').classList.remove('hidden')">
B) 「我哋去搵啲嘢食啦。」
</div>
<div class="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-4 hover:border-primary cursor-pointer transition-all text-left font-medium text-lg group" onclick="this.classList.add('border-green-500', 'bg-green-50'); this.querySelector('.feedback').classList.remove('hidden'); document.getElementById('iq-sentence-feedback').classList.remove('hidden')">
C) 「今日個天好藍。」
<span class="feedback hidden float-right text-green-600 font-bold">✅ 正確！</span>
</div>
<div class="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-4 hover:border-primary cursor-pointer transition-all text-left font-medium text-lg" onclick="this.classList.add('border-red-500', 'bg-red-50'); document.getElementById('iq-sentence-feedback').classList.remove('hidden')">
D) 「我真係好想食嘢。」
</div>
</div>
<p id="iq-sentence-feedback" class="mt-6 text-on-surface-variant italic hidden animate-fade-in">雖然句子 A、B 和 D 使用了完全不同的詞語，但在 LLM 的意義空間 (Meaning-space) 中，它們被緊密地歸類在一起！</p>
</div>
</div>



## 📝 關鍵概念

- **超越詞語：** LLM 不僅僅是映射單個詞語，它們還會映射整個序列。
- **例子 1：** 「小貓坐在墊子上」和「幼貓在地毯上休息」會被映射到同一個區域，而「股價下跌」則相距甚遠。
- **例子 2：** 「我愛我的新電話」和「我鍾情於最近買的智能手機」在意思上很接近。但「電話在午夜響起」則相距甚遠，儘管它也包含了「電話」這個詞。
- **語義理解 (Semantic Understanding)：** 意思相近的句子（即使使用完全不同的詞語）會映射到意義空間 (Meaning-space) 中的同一個區域。這就是實現「理解」的關鍵。

<div class="not-prose callout callout-error">

LLM 不會逐字逐句地匹配句子。它們看的是整體意思。這就是為什麼它們能將「我很肚餓」和「我想食嘢」理解為同一件事。

</div>

<div id="quiz-01-04" class="not-prose quiz-container my-12" data-quiz="01-04"></div>
