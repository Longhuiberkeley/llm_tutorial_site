---
title: "8.2 認知與執行：背景資料 (Context) + 工具"
description: "無狀態模型如何變身個人助手 —— 透過「認知」與「執行」兩大層面。"
chapter: "第 8 章"
pageId: "08-02"
---

## 🎯 核心目標
- 展示個人助手體驗需要兩樣東西：背景資料工程 (Context engineering)（認知）和工具（執行）。
- 與「感知 (Perceive) → 計劃 (Plan) → 行動 (Act) → 觀察 (Observe)」循環相聯繫。

:::callout-tldr
個人助手不僅僅是了解關於你的事情 —— 它還能代表你採取行動。背景資料工程 (Context engineering) 處理「認知」的一面：將正確的信息輸入 LLM。工具處理「執行」的一面：讓 LLM 在現實世界中採取行動。兩者缺一不可，單靠其中一項都難以成事。
:::

## 答案包含兩個部分

我們已經確定了問題所在：模型是無狀態 (Stateless) 的，但目標是打造一個了解你並為你行動的個人助手。

答案有兩個面向：

**背景資料工程 (Context engineering)** —— 一門刻意設計進入 LLM 上下文窗口 (Context Window) 內容的學科。在模型做出回應之前，將正確的信息呈現在其面前。我們已經在 RAG 中探討過這一點。同樣的原理也適用於個性化：過去的會話、你的偏好、你的郵件 —— 所有這些都以文本形式注入。

**工具 (Tools)** —— 讓 LLM 在對話之外採取行動的能力：搜索網頁、運行代碼、發送電子郵件、查詢數據庫。模型不再僅僅生成文本，還能付諸行動。

一個真正的個人助手兩者兼備。

## 個人助手架構（「認知」的一面）

將其視為讓 LLM 感覺了解你的四層背景資料 (Context)：

<div class="space-y-3 my-6">
  <div class="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5 flex gap-4 items-start">
    <div class="text-2xl flex-shrink-0">📜</div>
    <div>
      <div class="font-bold text-on-surface mb-1">對話歷史</div>
      <p class="text-sm text-on-surface/80">本次會話中發生了什麼。LLM 已經重新閱讀了之前的所有消息 —— 這是「三明治結構 (The Sandwich)」的基本運作。不需要額外的工程設計，它是基礎。</p>
    </div>
  </div>
  <div class="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5 flex gap-4 items-start">
    <div class="text-2xl flex-shrink-0">🧠</div>
    <div>
      <div class="font-bold text-on-surface mb-1">往期會話記憶</div>
      <p class="text-sm text-on-surface/80">來自之前對話的筆記或摘要，保存在某處並在下一次對話開始時重新注入。「我們上週四討論過產品發布。」「用戶提到了一個名為 Apex Corp 的關鍵供應商。」這就是 AI「記憶功能」試圖提供的內容。</p>
    </div>
  </div>
  <div class="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5 flex gap-4 items-start">
    <div class="text-2xl flex-shrink-0">📬</div>
    <div>
      <div class="font-bold text-on-surface mb-1">實時數據訪問</div>
      <p class="text-sm text-on-surface/80">在查詢時獲取的最新背景資料 —— 你的郵件、日曆、最近的文檔。系統在調用模型之前讀取實時信息，而不是存儲舊的摘要。內容始終是最新的，但需要授予系統訪問數據的權限。</p>
    </div>
  </div>
  <div class="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5 flex gap-4 items-start">
    <div class="text-2xl flex-shrink-0">👤</div>
    <div>
      <div class="font-bold text-on-surface mb-1">用戶資料</div>
      <p class="text-sm text-on-surface/80">關於你的持久事實：你的姓名、職業、溝通風格、已知偏好。這是最簡單的一層 —— 在每次會話開始時以一小段文字的形式注入。</p>
    </div>
  </div>
</div>

所有這四層最終都歸結為同一件事：**三明治中的文本**。模型每次都是從頭開始閱讀所有內容。沒有魔法 —— 只有更好的背景資料工程。

:::callout-dyk
這就是為什麼即使使用相同的底層模型，不同的 AI 產品給人的感覺也可能大相徑庭。區別不在於模型本身，而在於周圍系統在每次對話中工程化注入了多少背景資料 (Context)。
:::

## 但這只是全貌的一半

背景資料工程告訴 LLM 應該「知道」什麼。工具告訴 LLM 它可以「做」什麼。

<div class="grid md:grid-cols-2 gap-4 my-6">
  <div class="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5">
    <div class="font-bold text-on-surface mb-2">📖 背景資料工程 —— 認知面</div>
    <p class="text-sm text-on-surface/70 mb-3">將正確的信息輸入 LLM 的上下文窗口 (Context Window)。</p>
    <ul class="text-sm space-y-1.5 text-on-surface/80">
      <li>📁 為律師檢索相關的案卷文件</li>
      <li>🧠 在對話開始時注入往期會話記憶</li>
      <li>📬 在早會簡報前閱讀今天的郵件</li>
    </ul>
  </div>
  <div class="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5">
    <div class="font-bold text-on-surface mb-2">🤝 工具 —— 執行面</div>
    <p class="text-sm text-on-surface/70 mb-3">讓 LLM 在世界上執行行動。</p>
    <ul class="text-sm space-y-1.5 text-on-surface/80">
      <li>📧 起草並發送電子郵件</li>
      <li>🧪 對一段代碼運行測試</li>
      <li>🗓️ 在你的日曆上預訂會議</li>
    </ul>
  </div>
</div>

背景資料工程也經常使用工具 —— 例如用於檢索的 RAG —— 但其目標是收集信息，而不是改變世界。

之前的律師例子主要是背景資料工程：獲取正確的案卷文件進行閱讀。但一個更完整的助手還需要工具：運行法律數據庫查詢、起草並提交文件、檢查法院截止日期。

軟件助手則反轉了這種平衡：了解代碼庫是背景資料工程；但 *運行測試*、*讀取錯誤輸出*、*提交修復方案* —— 這些都屬於工具。

在實踐中，代理 (Agents) 在連續循環中交替使用這兩者。這直接對應於 **感知 (Perceive) → 計劃 (Plan) → 行動 (Act) → 觀察 (Observe)** 循環：感知是背景資料工程（閱讀相關內容），行動是工具（在世界上做某事），而觀察則將工具的結果作為新的背景資料帶回到下一步。

## 📝 關鍵概念

- **背景資料工程 = 認知面：** 將正確的信息輸入 LLM 的上下文窗口 (Context Window) —— 記憶、實時數據、用戶資料、對話歷史
- **工具 = 執行面：** 讓 LLM 在世界上執行行動的能力 —— 運行代碼、發送消息、查詢系統
- **兩者兼備：** 背景資料告訴 LLM 什麼是事實。工具讓它基於事實採取行動。
- **感知 (Perceive) → 計劃 (Plan) → 行動 (Act) → 觀察 (Observe)：** 背景資料工程處理感知；工具處理行動；循環往復
- **沒有魔法：** 當個性化失敗時，是背景資料工程出了問題。當助手採取了錯誤行動時，是工具被誤用了。

:::quiz{id="08-02"}
:::
