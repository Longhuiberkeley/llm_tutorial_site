---
title: "3.3 完整的三文治 — 系統提示詞 (System Prompts) 與自訂空間 (Custom Spaces)"
description: "每個數據包都由隱藏層開始 — 有些是你無法看見或控制的。"
chapter: "第 3 章"
pageId: "03-03"
---

## 🎯 核心目標
- 展示與 3.2 相同的雙視圖 (Dual-view)，但現在數據包總是從隱藏層開始。
- 理解三個提示詞分層 (Prompt layers)（提供者 Provider / 應用程式 App / 對話會話 Session）。
- 揭開自訂 GPTs (Custom GPTs)、Claude 專案 (Claude Projects) 和 Gemini Gems 作為預製三文治的神秘面紗。

:::callout-tldr
在你輸入第一條訊息之前，大型語言模型 (LLM) 已經收到了隱藏指令。每個數據包頂部都有不可見的層次 — 其中一些是你無法觸碰的。
:::

## 👁️ 視覺效果與互動


:::visual{name="visual-full-sandwich-dual-view"}


## 📝 關鍵概念

每個數據包中都有三個層次：

- **第 1 層 — 提供者提示詞 Provider Prompt（你無法看見或更改）：** 由 AI 公司（Anthropic, OpenAI, Google）設定。包含始終有效的安全規則：「不要產生有害內容」、「被誠懇詢問時，絕不假裝是人類」。
- **第 2 層 — 應用程式 / 自訂預設提示詞 App / Custom Pre-prompt（由應用程式構建者設定）：** 定義產品的個性、語調和知識。「你是 TechCorp 支援」。這讓聊天機器人感覺更專業。
- **第 3 層 — 你的對話會話上下文 Your Session Context（由你設定）：** 你在每個對話中注入的重複偏好：「總是用列點形式回答」、「我正在使用 Python 3.12 進行開發」。

:::callout-tip
**上下文的隱藏成本：** 現在你知道發送訊息通常意味著發送一個「打包」的訊息，這裡有個問題：由於大型語言模型 (LLM) 不會「記住」之前的回合，你每次回覆時都要重新發送整個歷史記錄（數據包）。這意味著對話中的第 10 條訊息的處理成本明顯高於第 1 條！
:::

## 📦 自訂空間 (Custom Spaces) — 預製的三文治

像自訂 GPTs (Custom GPTs)、Claude 專案 (Claude Projects) 和 Gemini Gems 這樣的功能打包了三樣東西：
1. **系統提示詞 (System Prompt)：** 專門的指令（個性）。
2. **知識文檔 (Knowledge Docs)：** 參考文件（公司政策、產品規格）。
3. **工具 (Tools)：** 特定功能（網絡搜索 Web search、代碼解釋器 Code interpreter）。

**為甚麼要使用它們？** 設定一次指令，然後直接開始聊天。無需在每次對話中重新解釋背景資訊。

**商業用途：** 公司構建預先加載了品牌語調 (Brand voice)、法律政策和私有數據的內部專案 — 這樣每位員工開始時都有正確的上下文 (Context)。



:::callout-dyk
為甚麼 Claude 的感覺與 ChatGPT 不同？它們的提供者提示詞 (Provider Prompts)（第 1 層）和默認預設提示詞完全不同。概念相同，指令不同。
:::

:::quiz{id="03-03"}
是甚麼讓自訂 GPTs (Custom GPTs) 或 Claude 專案 (Claude Projects) 在你無需解釋任何事情的情況下感到專業？
- [ ] 它在每次會話中都會從互聯網下載最新資訊
- [x] 它預先加載了系統提示詞 (System Prompts)、知識文檔 (Knowledge Docs) 和工具 (Tools)
- [ ] 它在底層使用了一個單獨的、更強大的 AI 模型
:::
