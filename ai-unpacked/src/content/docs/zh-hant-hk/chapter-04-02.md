---
title: "4.2 幻覺 (Hallucination) — 充滿自信的編造"
description: "為甚麼大型語言模型 (LLM) 說謊時如此自信 — 這是統計生成的特性，而非錯誤。"
chapter: "第 4 章"
pageId: "04-02"
---

## 🎯 核心目標
- 將「幻覺」(Hallucinations) 重新定義為自然的統計猜測，而不是系統錯誤。
- 了解為甚麼大型語言模型 (LLM) 說謊時如此自信。

<div class="not-prose callout callout-tldr">

大型語言模型 (LLM) 並非在「說謊」 — 它們是在猜測。因為它們的設計目的是預測最可能的下一個字詞，如果它們不知道某個事實，它們會簡單地預測聽起來像是一個合理事實的字詞。結果就是聽起來充滿自信的胡言亂語。

</div>

## 👁️ 視覺效果與互動



<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-3xl mx-auto shadow-sm">
<div class="text-center mb-8">
<h3 class="text-xl font-bold font-headline mb-1">充滿自信，但卻錯誤</h3>
<p class="text-sm text-on-surface-variant italic">向 AI 詢問特定數據，看看會發生甚麼事</p>
</div>
<!-- Question button -->
<div class="flex justify-center mb-8">
<button onclick="hallAsk()" class="quiz-option rounded-xl border-2 border-primary bg-surface-container-lowest px-8 py-4 text-center hover:shadow-md transition-all active:scale-95">
<div class="font-bold text-lg mb-1">📊 「2024 年時裝業的收入數據是多少？」</div>
<div class="text-xs text-on-surface-variant">點擊向 AI 提問</div>
</button>
</div>
<!-- AI response -->
<div id="hall-response" class="hidden rounded-xl border-2 p-6 mb-4 animate-fade-in" style="border-color: var(--error); background-color: var(--error-container);">
<div class="flex items-start gap-4">
<div class="text-3xl">🤖</div>
<div>
<div class="text-xs font-bold uppercase tracking-widest mb-2 opacity-60" style="color: var(--on-error-container);">AI 回應（極其自信！）</div>
<p id="hall-text" class="text-sm leading-relaxed" style="color: var(--on-error-container);">
在 2024 年，全球時裝業實現了 4.2% 的顯著增長，總收入達到 <strong>1.93 萬億美元</strong>。奢侈品細分市場表現優於其他類別，增長率為 6.8%，主要受亞太市場推動，該市場為總收入貢獻了 7,420 億美元...
</p>
</div>
</div>
</div>
<!-- Truth reveal -->
<div id="hall-truth" class="hidden rounded-xl border-2 p-5 animate-fade-in" style="border-color: var(--success); background-color: var(--success-container);">
<div class="flex items-start gap-3">
<div class="text-2xl">🔍</div>
<div>
<div class="text-xs font-bold uppercase tracking-widest mb-1" style="color: var(--on-success-container); opacity: 0.7;">實際檢查</div>
<p class="text-sm font-medium" style="color: var(--on-success-container);">
這些數據完全是編造的。AI 識別出了財務報告的*模式*，並用聽起來合理的數值「完成」了數據。它實際上並不知道 2024 年的數字！
</p>
</div>
</div>
</div>
</div>
<script>
function hallAsk() {
document.getElementById('hall-response').classList.remove('hidden');
setTimeout(() => {
document.getElementById('hall-truth').classList.remove('hidden');
}, 1000);
}
</script>
</div>



## 📝 關鍵概念

- **充滿自信的猜測：** 如果你向大型語言模型 (LLM) 詢問一個它沒見過的特定數據點（例如未來某年的時裝業收入），它不會只說「我不知道」。它會識別出財務報告的模式，並填入統計上聽起來合理的數字。
- **沒有內部事實檢查器：** 大型語言模型 (LLM) 是基於模式生成文本，而不是通過在數據庫中查找事實。它們沒有內部機制在說話前驗證一項主張是真是假。
- **這是一項特性 (Feature)：** 讓大型語言模型 (LLM) 能夠寫出一首關於火星機器人的優美詩歌的機制（創造力），與讓它捏造虛假法律案件的機制完全相同。這從頭到尾都是模式匹配 (Pattern-matching)。

<div class="not-prose callout callout-dyk">

對於像收入數據、市場統計或近期事件這樣的事實數據 — 請使用**深度研究 (Deep Research)** 或**網絡搜索 (Web search)** 工具（如果可用）。它會從互聯網獲取真實、當前的資訊，而不是進行模式猜測。如有疑問：查一下，不要要求大型語言模型 (LLM) 回憶。稍後我們將探索一種名為 **檢索增強生成 (Retrieval-Augmented Generation, RAG)** 的技術，它正是這樣做的 — 自動獲取真實文檔，使 LLM 的回答基於事實而非猜測。

</div>

<div class="not-prose callout callout-dyk">

大型語言模型 (LLM) 的工程師實際上很難讓模型可靠地說出「我不知道」。因為 LLM 的設計初衷是總是輸出*某些內容*，訓練它們停止並承認無知需要密集且專業的工作。

</div>

<div id="quiz-04-02" class="not-prose quiz-container my-12" data-quiz="04-02"></div>
