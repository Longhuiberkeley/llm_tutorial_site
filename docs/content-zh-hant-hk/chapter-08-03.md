---
title: "8.3 如何構建 —— 以及為何仍然困難"
description: "「記憶」功能背後的可能實現方式，以及其核心尚未解決的檢索問題。"
chapter: "第 8 章"
pageId: "08-03"
---

## 🎯 核心目標
- 揭開「記憶」和個性化功能背後可能的工程方法。
- 展示檢索問題在現階段仍然未得到真正解決。

:::callout-tldr
AI 產品常以聽起來很高大上的名稱來推銷其「記憶」功能。在底層，它們使用的是一種或多種廣為人知的技術 —— 而公司很少會告訴你具體是哪一種。難點不在於存儲記憶，而在於知道該提取哪一段記憶。
:::

## 「記憶」按鈕背後的真相

我們已經了解了構成個人助手架構的四種背景資料 (Context) 類型。但一個產品實際上是如何構建和維護這些層級的呢？以下是可能的技術方案 —— 公司很少公佈其具體實現方式，但幾乎可以肯定它們是以下幾種技術的混合體。

<div class="grid md:grid-cols-2 gap-4 my-6">
  <div class="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5">
    <div class="text-lg mb-2">📄</div>
    <div class="font-bold text-on-surface mb-1">會話摘要</div>
    <p class="text-sm text-on-surface/80 mb-2">每次對話結束後，自動生成一段簡短的文本摘要。在下次會話開始時，將該摘要注入提示 (Prompt) 中。</p>
    <p class="text-xs text-on-surface/50 italic">易於構建。摘要會丟失細節。舊摘要會過時。</p>
  </div>
  <div class="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5">
    <div class="text-lg mb-2">🗂️</div>
    <div class="font-bold text-on-surface mb-1">事實提取</div>
    <p class="text-sm text-on-surface/80 mb-2">從對話中提取結構化事實並保存：「用戶偏好簡潔的回答。」「從事醫療保健行業。」這些事實會在每次會話時注入系統提示中。</p>
    <p class="text-xs text-on-surface/50 italic">精準且輕量。會遺漏細微差別。事實可能會過時。</p>
  </div>
  <div class="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5">
    <div class="text-lg mb-2">🔍</div>
    <div class="font-bold text-on-surface mb-1">歷史紀錄 RAG</div>
    <p class="text-sm text-on-surface/80 mb-2">將過去的對話保存為可搜索的片段。在查詢時，檢索語義上最相關的交流內容並將其注入。這本質上就是將 RAG 應用於你自己的歷史紀錄。</p>
    <p class="text-xs text-on-surface/50 italic">能更好地處理細微差別。檢索仍不完美。成本較高。</p>
  </div>
  <div class="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5">
    <div class="text-lg mb-2">📬</div>
    <div class="font-bold text-on-surface mb-1">實時工具訪問</div>
    <p class="text-sm text-on-surface/80 mb-2">不存儲記憶，而是在查詢時讀取最新的背景資料 —— 你的郵件、日曆、最近的文件 —— 在調用模型之前按需獲取。</p>
    <p class="text-xs text-on-surface/50 italic">始終保持最新。需要數據訪問權限。涉及重大的隱私問題。</p>
  </div>
</div>

:::callout-dyk
當一個產品宣稱擁有「線束工程 (Harness engineering)」、「持久記憶 (Persistent memory)」或「跨會話背景管理 (Multi-session context management)」時 —— 這些術語幾乎總是在描述上述方法的某種組合。術語各異，但機制殊途同歸。
:::

## 難點：知道該提取什麼

一旦你擁有了記憶來源，一個新問題就隨之而來：哪些記憶與「當下」相關？

律師 Sarah 已經使用 AI 助手兩年了。系統保存了數百次客戶對話的摘要、數千個提取的事實，以及一個可搜索的案卷歷史數據庫。

一位新客戶來了：「你處理過加利福尼亞州涉及聯邦政府合同的建築延誤案件嗎？」

系統會從數百個保存的案例中提取哪一個？哪些事實是相關的？哪些對話摘要至關重要？

- 提取太少 —— LLM 會給出泛泛而談的回答
- 提取過多 —— 上下文窗口充滿噪音，注意力被稀釋，質量下降

這就是**檢索問題 (Retrieval problem)** —— 而且目前確實尚未解決。

## 為什麼當前的方法不盡如人意

<div class="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5 my-6">
  <div class="text-sm font-bold text-on-surface mb-3">金髮姑娘問題 (The Goldilocks Problem)</div>
  <div class="grid grid-cols-3 gap-3 text-center text-sm">
    <div class="bg-error/10 border border-error/20 rounded-lg p-3">
      <div class="text-lg mb-1">📭</div>
      <div class="font-semibold text-error/80">太少</div>
      <div class="text-on-surface/60 text-xs mt-1">錯誤或空洞的回答</div>
    </div>
    <div class="bg-accent/10 border border-accent/30 rounded-lg p-3">
      <div class="text-lg mb-1">✅</div>
      <div class="font-semibold text-accent">恰到好處</div>
      <div class="text-on-surface/60 text-xs mt-1">尚未解決的問題</div>
    </div>
    <div class="bg-error/10 border border-error/20 rounded-lg p-3">
      <div class="text-lg mb-1">📚</div>
      <div class="font-semibold text-error/80">太多</div>
      <div class="text-on-surface/60 text-xs mt-1">注意力稀釋，質量低下</div>
    </div>
  </div>
</div>

:::callout-dyk
**一個常見的反駁觀點：** 「隨著 LLM 變得越來越聰明，上下文窗口 (Context Window) 越來越大，我們難道不能把所有東西都塞進去，讓模型自己去梳理嗎？問題不就解決了嗎？」

這值得深思 —— 這樣真的行得通嗎？支持和反對的理由分別是什麼？在實踐中，即使擁有巨大的上下文窗口，當其中充滿無關材料時，LLM 的注意力質量也會下降。更多的詞元 (Tokens) 並不意味著更好的理解 —— 它往往意味著更多的噪音。
:::

## 活躍的研究領域

截至 2026 年，這個問題仍未得到真正解決。記憶功能每年都在進步 —— 但尚未有任何 AI 產品攻克了真正可靠、符合語境的長期記憶。最接近成功的系統結合了多種檢索方法，並投入大量工程精力來決定「不應包含什麼」。

## 📝 關鍵概念

- **技術方案清單：** 會話摘要、事實提取、歷史紀錄 RAG、實時工具訪問
- **公司使用混合方案：** 沒有公開的實現細節 —— 幾乎肯定是由多種方法組合而成
- **揭開術語面紗：** 「跨會話背景管理 (Multi-session context management)」 = 上述一種或多種機制
- **檢索問題：** 存儲記憶很容易，但在正確的時間提取「正確」的記憶卻很難。
- **活躍的研究領域：** 截至 2026 年尚未解決 —— 正在改進，但仍不可靠

:::quiz{id="08-03"}
:::
