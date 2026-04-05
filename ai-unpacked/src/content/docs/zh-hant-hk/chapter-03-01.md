---
title: "3.1 黑盒子 (The Black Box)"
description: "文本輸入，文本輸出 —— 但內部究竟發生了什麼事？"
chapter: "第 3 章"
pageId: "03-01"
---

## 🎯 核心目標
- 將 LLM 介紹為一個輸入/輸出的黑盒子。
- 透過預設的猜測測驗，激發對內部運作的好奇心。
- 銜接至 3.2 中的三文治模型 (Sandwich model)。

<div class="not-prose callout callout-tldr">

文本輸入。文本輸出。這就是全部的界面 —— 但那個盒子內部究竟發生了什麼事？讓我們來一探究竟。

</div>

## 👁️ 視覺化與互動組件



<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-2xl mx-auto shadow-sm">
<!-- Diagram -->
<div class="flex items-center justify-center gap-3 mb-10 flex-wrap">
<div class="rounded-xl px-5 py-4 text-center shadow-md min-w-[110px]" style="background-color: var(--primary); color: var(--on-primary);">
<div class="text-2xl mb-1">💬</div>
<div class="text-xs font-bold uppercase tracking-wider">你的訊息</div>
<div class="text-xs opacity-75 mt-1">文本輸入</div>
</div>
<div class="text-3xl font-bold" style="color: var(--on-surface-variant);">→</div>
<div class="rounded-xl px-5 py-4 text-center shadow-lg min-w-[130px]" style="background-color: var(--on-surface); color: var(--background);">
<div class="text-2xl mb-1">📦</div>
<div class="text-xs font-bold uppercase tracking-wider">LLM</div>
<div class="text-xs opacity-60 mt-1">??? 裡面是什麼？</div>
</div>
<div class="text-3xl font-bold" style="color: var(--on-surface-variant);">→</div>
<div class="rounded-xl px-5 py-4 text-center shadow-md min-w-[110px]" style="background-color: color-mix(in srgb, var(--accent) 15%, var(--surface-container-lowest)); border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);">
<div class="text-2xl mb-1">🤖</div>
<div class="text-xs font-bold uppercase tracking-wider">回覆</div>
<div class="text-xs opacity-75 mt-1">文本輸出</div>
</div>
</div>
<!-- Quiz -->
<p class="text-center font-bold font-headline text-lg mb-5">那個盒子內部究竟發生了什麼事？</p>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto" id="bb-options">
<button class="quiz-option px-4 py-3 rounded-lg text-sm font-medium text-left border border-outline-variant hover:bg-surface-container transition-colors" style="background-color: var(--surface-container-lowest);" onclick="bbGuess(this, false)">🔍 搜尋互聯網</button>
<button class="quiz-option px-4 py-3 rounded-lg text-sm font-medium text-left border border-outline-variant hover:bg-surface-container transition-colors" style="background-color: var(--surface-container-lowest);" onclick="bbGuess(this, true)">🎯 重複預測下一個字詞</button>
<button class="quiz-option px-4 py-3 rounded-lg text-sm font-medium text-left border border-outline-variant hover:bg-surface-container transition-colors" style="background-color: var(--surface-container-lowest);" onclick="bbGuess(this, false)">🗄️ 查閱資料庫</button>
<button class="quiz-option px-4 py-3 rounded-lg text-sm font-medium text-left border border-outline-variant hover:bg-surface-container transition-colors" style="background-color: var(--surface-container-lowest);" onclick="bbGuess(this, false)">🧙 魔法 —— 沒人真正知道</button>
</div>
<!-- Feedback -->
<div id="bb-feedback" class="hidden mt-6 p-4 rounded-lg text-sm border" style="background-color: var(--surface-container-lowest); border-color: var(--outline-variant);">
<div id="bb-fb-text"></div>
<div class="mt-3 pt-3 text-on-surface-variant italic" style="border-top: 1px solid var(--outline-variant);">
👇 <strong>接下來：</strong>如果它只是預測單字……它是如何「記住」你的整個對話的？這就是我們接下來要探索的內容。
</div>
</div>
</div>
<script>
function bbGuess(btn, isCorrect) {
var opts = document.querySelectorAll('#bb-options .quiz-option');
opts.forEach(function(o) { o.disabled = true; o.onclick = null; });
if (isCorrect) {
btn.classList.add('correct');
document.getElementById('bb-fb-text').innerHTML = '✅ <strong>完全正確！</strong>每次你發送訊息時，LLM 都會逐一預測單字（詞元 (Token)） —— 根據之前的所有內容挑選統計上最可能的下一個詞元 —— 並不斷重複直到回覆完成。它並不是在搜尋或查閱資料。這是純粹的<strong>預測下一個詞元 (Next-token prediction)</strong>，建立在訓練數據中看到的模式之上。';
} else {
btn.classList.add('wrong');
opts.forEach(function(o) {
if (o.textContent.trim().startsWith('🎯')) o.classList.add('correct');
});
document.getElementById('bb-fb-text').innerHTML = '❌ <strong>不完全對。</strong>LLM 實際上是在重複地逐一預測下一個單字（詞元 (Token)）。它不會實時搜尋互聯網或查閱資料庫 —— 它是根據訓練期間學到的模式來生成文本。這也是為什麼它會自信地說出錯誤資訊的原因。';
}
document.getElementById('bb-feedback').classList.remove('hidden');
}
</script>
</div>



## 📝 關鍵概念

- **黑盒子 (The Black Box)：** 從外部看，LLM 很簡單 —— 文本輸入，文本輸出。聊天界面隱藏了所有的運作機制。
- **預測下一個詞元 (Next-token prediction)：** LLM 的核心工作是根據之前的所有內容，預測統計上最可能的下一個單字/詞元。它會不斷重複這個過程，直到回覆完成。
- **不是搜尋引擎：** LLM 不會實時查閱資料。它們是根據學到的模式生成文本 —— 雖然功能強大，但這也是它們會自信地說出錯誤資訊的原因。
- **界面幻覺：** 聊天應用程式讓它「看起來」像是一段流暢的對話。實際上每一輪發生了什麼事？這就是我們接下來要探索的內容。

<div class="not-prose callout callout-dyk">

如果它只是預測單字……它是如何「記住」你的整個對話的？這就是巧妙之處 —— 每次你按下發送鍵，後台都會發生一些令人驚訝的事情。讓我們接著看下去。

</div>

<div id="quiz-03-01" class="not-prose quiz-container my-12" data-quiz="03-01"></div>
