---
title: "11.5 規劃你的 AI 導入方案"
description: "什麼是區分成功的 AI 實施與代價高昂的混亂的關鍵 —— 以及如何規劃一個真正能持續落地的導入方案。"
chapter: "第 11 章"
pageId: "11-05"
---

<div class="not-prose callout callout-tldr">

導入方案 (Rollout plan) 並非可有可無 —— 它是成功的 AI 部署與一個讓你入不敷出的部署之間的區別。而且，方案的核心主要是溝通，而非技術。

</div>

## 一個缺乏計劃的故事

**A 公司** 是一家中型的美國電子商務企業。他們的訂單平台每年花費 5 萬美元。CEO 發現了一個中國市場的平台，功能相當，只需 3.5 萬美元 —— 加上一個價值 1 萬美元、號稱能讓平台適應國際市場的「定制化套裝 (Customization package)」。總的來說，在紙面上看來這仍然是一筆可觀的節省。功能列表看起來旗鼓相當。定制化套裝聽起來也很周全。於是他們簽署了合約。

三個月後，他們面臨一個代價非常高昂的問題。

<div class="space-y-3 my-6">

  <div class="bg-red-50 rounded-xl p-4 border border-red-200">
    <div class="flex items-start gap-3">
      <span class="text-xl">📦</span>
      <div>
        <div class="font-bold text-sm mb-1 text-red-800">地址欄位 (Address Fields)</div>
        <p class="text-sm text-red-700">該平台使用中國的地址格式（省 → 市 → 街道 → 門牌）。而美國地址是街道 → 城市 → 州 → 郵遞區號。數據庫中每個客戶的地址都損壞了。頭兩週的出貨全部失敗。定制化套裝本應處理在地化 (Localization) —— 但「地址格式」並不在書面範圍內。</p>
      </div>
    </div>
  </div>

  <div class="bg-red-50 rounded-xl p-4 border border-red-200">
    <div class="flex items-start gap-3">
      <span class="text-xl">📅</span>
      <div>
        <div class="font-bold text-sm mb-1 text-red-800">日期格式 (Date Formats)</div>
        <p class="text-sm text-red-700">該平台以 YYYY/MM/DD 儲存日期。而他們的會計軟件要求 MM/DD/YYYY。所有歷史記錄都不匹配。對帳花費了數月時間。當時沒有人事先規劃好哪些下游系統會接收來自新平台的數據。</p>
      </div>
    </div>
  </div>

  <div class="bg-red-50 rounded-xl p-4 border border-red-200">
    <div class="flex items-start gap-3">
      <span class="text-xl">💳</span>
      <div>
        <div class="font-bold text-sm mb-1 text-red-800">支付集成 (Payment Integrations)</div>
        <p class="text-sm text-red-700">該平台原生支持微信支付和支付寶。而美國支付處理商（如 Stripe, Braintree）需要自定義集成。定制化合約中提到了支付支持 —— 但僅限於供應商已經熟悉的處理商。額外成本：超過 3 萬美元的計劃外開發費用。</p>
      </div>
    </div>
  </div>

  <div class="bg-red-50 rounded-xl p-4 border border-red-200">
    <div class="flex items-start gap-3">
      <span class="text-xl">👩‍💼</span>
      <div>
        <div class="font-bold text-sm mb-1 text-red-800">員工效率 (Employee Efficiency)</div>
        <p class="text-sm text-red-700">接受過舊系統培訓的員工需要重新培訓。沒有人事先對此進行規劃、排程，或為生產力落差預留預算。效率在六週內下降了 40%。所謂的「節省」全部耗費在加班費和錯失的訂單中。</p>
      </div>
    </div>
  </div>

</div>

**轉換的總成本：** 每年 1.5 萬美元的節省，最終導致了約 20 萬美元的適應、開發和生產力損失成本。

問題不在於他們選錯了軟件，甚至不在於他們跳過了定制化。問題在於沒有導入方案 (Rollout plan) —— 沒有記錄在案的範圍、沒有集成映射 (Integration mapping)、沒有過渡時間表、沒有培訓計劃。定制化合約給了他們一種「困難部分已處理好」的虛假信心。

<div class="not-prose callout callout-error">

這個故事在 AI 工具的採用中不斷重演。一家公司在沒有試行 (Piloting)、沒有映射它將涉及的工作流程、沒有讓團隊做好準備的情況下，就部署了一款 AI 產品。它在實際生產中失敗了。省下的時間變成了清理爛攤子的時間。

</div>

## 導入方案是必須的

一個真正的導入方案 (Rollout plan) 涵蓋以下內容：

<div class="space-y-3 my-6">

  <div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
    <div class="flex items-start gap-3">
      <span class="text-xl">📢</span>
      <div>
        <div class="font-bold text-sm mb-1">溝通 (Communication)</div>
        <p class="text-sm text-on-surface/80">人們會抵制他們不理解的事物。在任何部署之前，請清晰溝通：<em>為什麼</em>要進行這次變革、<em>什麼</em>正在改變、<em>什麼保持不變</em>，以及<em>這對每個特定角色意味著什麼</em>。這是大多數實施過程中被跳過的步驟 —— 也是最致命的遺漏。</p>
      </div>
    </div>
  </div>

  <div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
    <div class="flex items-start gap-3">
      <span class="text-xl">🎓</span>
      <div>
        <div class="font-bold text-sm mb-1">培訓 (Training)</div>
        <p class="text-sm text-on-surface/80">不僅僅是「這就是工具」。而是針對每個角色的具體工作流程指導。這具體如何改變<em>我</em>的工作？當出錯時我該怎麼辦？泛泛的培訓課程很少能轉化為實際工作能力。</p>
      </div>
    </div>
  </div>

  <div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
    <div class="flex items-start gap-3">
      <span class="text-xl">🆘</span>
      <div>
        <div class="font-bold text-sm mb-1">支援渠道 (Support Channels)</div>
        <p class="text-sm text-on-surface/80">在正式上線前，定義好當出現問題時人們該向誰求助。是提交工單 (Helpdesk ticket)？一個 Slack 頻道？還是每個團隊指定的負責人？這裡的模糊不清會導致混亂，並產生悄悄破壞採用的私下變通方案。</p>
      </div>
    </div>
  </div>

  <div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
    <div class="flex items-start gap-3">
      <span class="text-xl">🪜</span>
      <div>
        <div class="font-bold text-sm mb-1">分階段導入 (Phased Rollout)</div>
        <p class="text-sm text-on-surface/80">不要全域性地開啟開關。從一個試行團隊 (Pilot team) 開始，收集真實反饋，修復問題，然後再擴展。在試行中發現問題的成本，僅僅是在全面部署中發現問題成本的一小部分。</p>
      </div>
    </div>
  </div>

  <div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
    <div class="flex items-start gap-3">
      <span class="text-xl">🔁</span>
      <div>
        <div class="font-bold text-sm mb-1">反饋迴圈 (Feedback Loops)</div>
        <p class="text-sm text-on-surface/80">發布後，建立一個真實的渠道讓用戶報告問題 —— 並真正解決它們。石沉大海的反饋表比任何事情都更能迅速摧毀信任。</p>
      </div>
    </div>
  </div>

  <div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
    <div class="flex items-start gap-3">
      <span class="text-xl">⏱️</span>
      <div>
        <div class="font-bold text-sm mb-1">過渡期 (Transition Window)</div>
        <p class="text-sm text-on-surface/80">舊系統和新系統將共存多久？請深思熟慮地定義這一點。無限期地運行兩個系統代價昂貴。切換太快則沒有安全網。選擇一個時間窗，清晰地溝通，並堅守它。</p>
      </div>
    </div>
  </div>

</div>

## 負責人至關重要

成功的 AI 導入並非主要是技術挑戰。它們是變革管理 (Change management) 的挑戰 —— 而負責實施的人需要同時理解這兩者。

實施者需要詢問：
- 誰受這次變革影響最大，我是否真的和他們談過？
- 阻力會來自哪裡 —— 是恐懼、增加的工作量，還是對技術的懷疑？
- 從每個團隊的角度來看，成功是什麼樣子的，而不僅僅是項目資助者的視角？
- 有哪些失效模式 (Failure modes)，以及每種模式的早期預警訊號是什麼？

一個只存在於試算表中、從未與受影響的人討論過的導入方案，並不能稱之為方案。它只是一份文件。

## 📝 核心概念

- **導入方案 (Rollout plan) 是必須的** —— 不是可選的，也不是「有了更好」
- **溝通先行：** 人們會抵制他們不理解的事物；在解釋「是什麼」之前，先解釋「為什麼」
- **分階段優於全域：** 先在小團隊中進行試行 (Pilot)，從中學習，然後再擴展
- **定義過渡期 (Transition Window)：** 明確新舊系統共存多久，並致力於該時間表
- **實施者的工作是「人」，而不僅僅是技術：** 沒有人採用的技術成功就是失敗

<div id="quiz-11-05" class="not-prose quiz-container my-12" data-quiz="11-05"></div>
