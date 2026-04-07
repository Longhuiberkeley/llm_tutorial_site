---
title: "10.4 你如何存取 LLM — 介面與定價模式"
description: "從對話介面到手機應用程式，再到原始的 API — 存取介面會形塑你的體驗和帳單。"
chapter: "第 10 章"
pageId: "10-04"
---

<div class="not-prose callout callout-tldr">

使用大型語言模型 (LLM) 有很多種方式。大多數分為兩大類：**訂閱介面**（固定的月費，供應商處理一切）或 **API**（按詞元計費，你自己構建體驗）。背後的模型是一樣的 — 但關係大不相同。

</div>

## 訂閱介面 — 付費一次，自由使用

大多數人的第一次 LLM 體驗是通過訂閱產品：你註冊、支付固定的月費，並通過一個精美的介面使用模型。供應商處理一切 — 介面、對話歷史、檔案上傳、插件。

這些有幾種形式：

<div class="space-y-3 my-5">

  <div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
    <div class="font-bold text-sm mb-1">🌐 網頁瀏覽器 (Web Browser)</div>
    <p class="text-sm text-on-surface/80">訪問網站（claude.ai, chatgpt.com, gemini.google.com）並開始輸入。這是最常見的入口點 — 無需安裝，可在任何裝置上運行。</p>
  </div>

  <div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
    <div class="font-bold text-sm mb-1">📱 手機應用程式 (Mobile App)</div>
    <p class="text-sm text-on-surface/80">大多數供應商都有 iOS 和 Android 應用程式。相同的訂閱，原生的移動體驗 — 適用於隨時隨地的查詢或語音輸入。</p>
  </div>

  <div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
    <div class="font-bold text-sm mb-1 flex items-center gap-2">🖥️ IDE 插件
      <button onclick="var el=this.parentElement.nextElementSibling.nextElementSibling;el.classList.toggle('hidden');this.textContent=el.classList.contains('hidden')?'什麼是 IDE？ ▾':'隱藏 ▴';" class="text-xs font-normal bg-accent/10 text-accent border border-accent/20 rounded px-2 py-0.5 cursor-pointer hover:bg-accent/20 transition-colors">什麼是 IDE？ ▾</button>
    </div>
    <p class="text-sm text-on-surface/80">內置於代碼編輯器中的 AI 助手 — GitHub Copilot, Cursor, VS Code 中的 Claude。由希望在不離開編輯器的情況下獲得 AI 建議的開發人員使用。通常由單獨的訂閱涵蓋。</p>
    <p class="hidden text-xs text-on-surface/60 mt-2 bg-surface-container-lowest rounded-lg px-3 py-2 border border-outline-variant">💡 <strong>IDE</strong> = 集成開發環境 (Integrated Development Environment) — 一個代碼編輯器，如 VS Code、Cursor 或 JetBrains。AI 插件直接內置在你的編輯器中，讓你無需切換視窗即可提出問題、生成代碼和獲取解釋。</p>
  </div>

  <div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
    <div class="font-bold text-sm mb-1 flex items-center gap-2">💻 CLI 工具
      <button onclick="var el=this.parentElement.nextElementSibling.nextElementSibling;el.classList.toggle('hidden');this.textContent=el.classList.contains('hidden')?'什麼是 CLI？ ▾':'隱藏 ▴';" class="text-xs font-normal bg-accent/10 text-accent border border-accent/20 rounded px-2 py-0.5 cursor-pointer hover:bg-accent/20 transition-colors">什麼是 CLI？ ▾</button>
    </div>
    <p class="text-sm text-on-surface/80">像 Claude Code 這樣在終端運行的工具。開發人員使用這些工具直接從命令行與 LLM 互動 — 適用於審核代碼、運行自動化工作流或從腳本查詢模型等任務。</p>
    <p class="hidden text-xs text-on-surface/60 mt-2 bg-surface-container-lowest rounded-lg px-3 py-2 border border-outline-variant">💡 <strong>CLI</strong> = 命令行介面 (Command Line Interface) — 你通過在電腦終端輸入指令而非點擊圖形應用程式中的按鈕來運行的文本工具。在開發人員和高級用戶中很常見。</p>
  </div>

</div>

**這些形式的共同點：** 供應商管理一切。你支付固定費用並獲得精挑選的體驗。較低層級可能會有使用限制。

## API — 按詞元 (Token) 計費

API 是開發人員和企業以程式方式與 LLM 對話的方式。沒有圖形介面：你的代碼發送請求，模型以原始文本回應，你的代碼對其進行處理。

- **按需付費** — 按每百萬詞元（輸入 + 輸出）計費，無需按月承諾
- **無介面層** — 你在上面構建任何你想要的體驗
- **可擴展** — 處理一個請求或一百萬個請求，定價隨你擴展
- **與訂閱產品相同的模型** — 只是交付方式不同

在以下情況下，API 是正確的工具：
- **自動化** — 在沒有人工干預的情況下重複運行相同的任務
- **構建產品** — 將 LLM 嵌入你自己的應用程式或工作流中
- **整合** — 將 LLM 連接到你的數據庫、CRM 或電子郵件系統
- **擴展** — 以程式方式處理成百上千個請求

<div class="not-prose callout callout-dyk">

供應商大幅補貼其訂閱方案以吸引用戶。在中低使用量下，使用 API 的成本可能明顯高於固定訂閱 — 有時甚至高出 5–10 倍。對於個人和小型團隊，訂閱通常是更划算的選擇。只有當你進行大規模構建時，經濟效益才會反轉。

</div>

## 你已不滿足於訂閱介面的跡象

- 你發現自己反覆複製貼上相同的提示 (Prompt)
- 你想通過 LLM 處理一清單的事項（電子郵件、產品、客戶）
- 你需要 LLM 的輸出自動輸入到另一個系統中
- 你想構建一個供其他人使用的工具

這些都是 API 的使用場景。

<div id="quiz-10-04" class="not-prose quiz-container my-12" data-quiz="10-04"></div>
