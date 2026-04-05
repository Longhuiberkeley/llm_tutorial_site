---
title: "12.5 構建代理型應用程序"
description: "代理型 AI 系統背後的構件和設計模式 —— 你的團隊將構建什麼，以及如何思考它。"
chapter: "第 12 章"
pageId: "12-05"
---

## 🎯 核心目標
- 揭開代理型應用程序 (Agentic application) 構成要素的神祕面紗。
- 用通俗的語言介紹四個核心構件。
- 以概念而非代碼的形式展示常見的設計模式。
- 將一切框架化為「你的團隊將構建什麼」 —— 使其對業務決策者觸手可及。

:::callout-tldr
代理型應用程序由四個簡單的構件組成：大腦（代理 Agent）、雙手（工具 Tools）、記憶（會話 Sessions）和引擎（執行器 Runner）。你不需要成為開發人員也能理解它們 —— 理解它們能幫助你與開發團隊進行更好的溝通。
:::

## 🧩 四個核心構件

從簡單的聊天機械人到複雜的多步工作流，每個代理型應用程序都是由同樣的四個部分組成的。把它們想像成系統的器官 —— 每個器官都有明確的工作。

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
<div class="bg-surface-container-low rounded-xl p-5 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-2xl">🧠</span>
<div>
<div class="font-bold text-base mb-1">代理 Agent（大腦）</div>
<p class="text-sm text-on-surface/80">帶有指令的 LLM。它讀取輸入，思考該做什麼，並做出決策。它的指令 —— 你告訴它關於其角色、規則和個性的內容 —— 就是它的界面。好的指令產生好的行為；模糊的指令產生不可預測的行為。</p>
</div>
</div>
</div>
<div class="bg-surface-container-low rounded-xl p-5 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-2xl">🔧</span>
<div>
<div class="font-bold text-base mb-1">工具 Tools（雙手）</div>
<p class="text-sm text-on-surface/80">代理可以調用以與現實世界互動的功能：搜索網頁、讀取數據庫、發送郵件、調用 API、更新試算表。沒有工具，代理只能說話。有了工具，它就可以行動。</p>
</div>
</div>
</div>
<div class="bg-surface-container-low rounded-xl p-5 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-2xl">📝</span>
<div>
<div class="font-bold text-base mb-1">會話 Sessions（記憶）</div>
<p class="text-sm text-on-surface/80">代理如何記住當前互動中發生的事情。它知道你三條訊息前說了什麼，它調用了哪些工具，以及返回了什麼結果。這就是使多步對話和工作流成為可能的原因。</p>
</div>
</div>
</div>
<div class="bg-surface-container-low rounded-xl p-5 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-2xl">⚙️</span>
<div>
<div class="font-bold text-base mb-1">執行器 Runner（引擎）</div>
<p class="text-sm text-on-surface/80">實際運行一切的編排層。它管理循環：將輸入發送給代理，代理決定做什麼，執行器執行工具調用，將結果傳回，並重複此過程直到任務完成。</p>
</div>
</div>
</div>
</div>

:::visual{name="visual-agentic-primitives"}

核心洞察：代理 Agent（大腦）是唯一使用 AI 的部分。工具、會話和執行器都是常規的軟件工程。這意味著系統的大部分是可預測且可測試的 —— 只有決策層涉及 LLM 的不可預測性。

## 🏗️ 常見設計模式 (Design Patterns)

當開發人員構建代理型應用程序時，他們通常會採用以下三種成熟的模式。理解這些能幫助你評估提案並提出更好的問題。

### A. 委託模式 (Delegation - 專家與編排者)

與其構建一個處理所有事情的巨大代理，不如創建多個**專家代理 (Specialist agents)** —— 每個代理負責一個領域 —— 以及一個知道該調用誰的**編排者 (Orchestrator)**。

<div class="bg-surface-container-low rounded-xl p-5 border border-outline-variant my-6">
<div class="text-sm mb-3"><strong>類比：</strong> 項目經理自己不寫代碼、不設計圖形，也不處理法律審查。他們知道針對每項任務該找哪位團隊成員。</div>
<div class="text-sm"><strong>示例：</strong> 一個客戶服務編排者接收所有傳入的請求。它將帳單問題路由給帳單代理（該代理有權訪問支付系統），技術問題路由給技術支持代理（該代理可以檢查系統狀態），運送問題路由給物流代理（該代理可以跟踪包裹）。每個專家代理都精簡、專注且準確。</div>
</div>

**為什麼這比單一的大代理更好：** 與試圖處理每種可能情況的龐大代理相比，小型、專業的代理更準確，且更不容易出錯。

### B. 路由模式 (Router Pattern)

一個**路由代理 (Router agent)** 守在前門。它的唯一工作是弄清楚**這是哪種類型的請求**，並將其傳遞給合適的工作者。它不執行實際工作 —— 它只負責分類。

<div class="bg-surface-container-low rounded-xl p-5 border border-outline-variant my-6">
<div class="text-sm mb-3"><strong>類比：</strong> 醫院的分診護士評估每位病人並將其送往正確的科室。護士不治療病人 —— 但沒有良好的分診，系統就會崩潰。</div>
<div class="text-sm"><strong>示例：</strong> 客戶寫信進來。路由代理判斷：這是關於帳單、技術支持還是普通諮詢？然後它將對話交給相應的專家。分類步驟快速且廉價；專業的處理才是真正的工作所在。</div>
</div>

### C. 自我糾錯循環 (Self-Correction Loop)

代理不是給出第一個答案就停止，而是會**檢查自己的工作**，如果結果不夠好，就再試一次。

<div class="bg-surface-container-low rounded-xl p-5 border border-outline-variant my-6">
<div class="text-sm mb-3"><strong>類比：</strong> 一個學生做完數學題，驗證答案，如果錯了就重做。檢查步驟是區分細心與粗心工作者的關鍵。</div>
<div class="text-sm"><strong>示例：</strong> 一個代理起草客戶回覆，然後由一個「質量檢查員」根據公司準則進行審核。如果未通過檢查，代理會修改並重新提交。這個循環持續到回覆通過為止 —— 或者在嘗試次數過多後標記給人工審核。</div>
</div>

這種模式使代理顯得「聰明」。它們無需人工干預即可從自己的錯誤中恢復 —— 至少是對於那些它們被教導要捕捉的錯誤。

## 🏢 多代理系統 (Multi-Agent Systems)：代理團隊

複雜的工作流不需要一個超級英雄代理 —— 它們需要一個像人類組織一樣共同工作的**團隊**。

可以把它想像成代理的組織架構圖：
- 一個**管理代理 (Manager agent)** 協調整體工作流
- **專家代理 (Specialist agents)** 處理各自的領域（帳單、物流、內容等）
- **審核代理 (Review agents)** 在任何內容發布前檢查質量
- **上報路徑** 將困難案例路由給人類

這鏡像了你自己的組織運作方式。你的人類組織架構定義得越清晰，就越容易設計出與之匹配的代理組織架構。

:::callout-dyk
構建代理型應用程序最重要的技能不是編碼 —— 而是清晰地描述代理應該做什麼、需要什麼工具，以及絕對不能做什麼。這就是為什麼業務專業知識在流程中至關重要。你的開發人員構建系統；而你的業務知識定義了它實際應該達成什麼目標。
:::

## 📝 核心概念

- **四個構件：** 代理 Agent（大腦）、工具 Tools（雙手）、會話 Sessions（記憶）、執行器 Runner（引擎）。
- **僅有代理 Agent 使用 AI** —— 其餘部分是可預測的軟件工程。
- **委託模式** —— 由編排者協調專家代理，而非單一的巨大代理。
- **路由模式** —— 先分類，再交給合適的工作者。
- **自我糾錯循環** —— 代理會檢查並改進自己的工作。
- **多代理 = 代理團隊** —— 鏡像你的組織結構。
- **業務專業知識驅動代理設計** —— 清晰的指令比代碼更重要。

:::quiz{id="12-05"}
