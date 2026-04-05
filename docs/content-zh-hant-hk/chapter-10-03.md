---
title: "10.3 開源 vs. 閉源 — 控制權 vs. 便利性"
description: "託管 API 簡單且可靠。自託管開源模型提供控制權和隱私。權衡是真實存在的。"
chapter: "第 10 章"
pageId: "10-03"
---

## 🎯 核心目標
- 比較託管 API（閉源）與自託管開源模型。
- 展示在實踐中「免費」的開源模型通常並非真的免費。

:::callout-tldr
目前，世界上性能最好的模型都是閉源的 — 供應商正積極補貼成本以贏得用戶。開源讓你擁有完整的控制權和隱私，但也伴隨着真實的權衡。
:::

## 兩條路徑

**閉源 (Closed-Source) (託管 API):**
你將請求發送到供應商的伺服器。他們處理請求、返回結果，並按詞元 (Token) 向你收費。你永遠看不到模型權重 (Model Weights)。

**開源 (Open-Source) (自託管):**
你下載模型權重（來自 Meta 的 Llama, Mistral, DeepSeek 等）並在自己的硬件上運行。你完全擁有整個過程。

## 選擇託管 API 的理由

截至 2026 年，最前沿的模型都是閉源的。這些公司也正積極補貼存取（通過廉價的訂閱和具競爭力的 API 定價）以贏得市場份額。目前你的花費能得到很多回報。

<div class="grid md:grid-cols-2 gap-4 my-6">
  <div class="rounded-xl p-4 border-2" style="background: rgba(95, 168, 96, 0.08); border-color: rgba(95, 168, 96, 0.3);">
    <div class="text-[10px] font-bold uppercase tracking-widest mb-3" style="color: #2e7d32;">✅ 優點</div>
    <ul class="text-sm text-on-surface/80 space-y-2 list-none pl-0">
      <li>• 零基礎設施設置 — 幾分鐘內即可開始調用 API</li>
      <li>• 供應商負責擴展、可靠性和模型更新</li>
      <li>• 存取最新、最強大的模型</li>
      <li>• 無需硬件投資</li>
    </ul>
  </div>
  <div class="rounded-xl p-4 border-2" style="background: rgba(214, 92, 92, 0.08); border-color: rgba(214, 92, 92, 0.3);">
    <div class="text-[10px] font-bold uppercase tracking-widest mb-3" style="color: var(--error);">⚠️ 缺點</div>
    <ul class="text-sm text-on-surface/80 space-y-2 list-none pl-0">
      <li>• 你的數據離開你的伺服器並在外部處理</li>
      <li>• 依賴於供應商的運行時間和定價</li>
      <li>• 服務條款控制你可以做和不能做的事情</li>
      <li>• 數據可能被用於訓練（視方案而定 — 請仔細檢查）</li>
    </ul>
  </div>
</div>

**最適合：** 大多數企業，尤其是剛開始時。從這裡開始。

## 選擇自託管的理由

<div class="grid md:grid-cols-2 gap-4 my-6">
  <div class="rounded-xl p-4 border-2" style="background: rgba(95, 168, 96, 0.08); border-color: rgba(95, 168, 96, 0.3);">
    <div class="text-[10px] font-bold uppercase tracking-widest mb-3" style="color: #2e7d32;">✅ 優點</div>
    <ul class="text-sm text-on-surface/80 space-y-2 list-none pl-0">
      <li>• 數據永遠不會離開你的伺服器 — 完整的隱私和合規控制</li>
      <li>• 無按詞元計費 — 固定基礎設施成本</li>
      <li>• 根據需要自定義和微調 (Fine-tune) 模型</li>
      <li>• 無供應商鎖定</li>
    </ul>
  </div>
  <div class="rounded-xl p-4 border-2" style="background: rgba(214, 92, 92, 0.08); border-color: rgba(214, 92, 92, 0.3);">
    <div class="text-[10px] font-bold uppercase tracking-widest mb-3" style="color: var(--error);">⚠️ 缺點</div>
    <ul class="text-sm text-on-surface/80 space-y-2 list-none pl-0">
      <li>• GPU 非常昂貴（高品質模型需要 A100 或 H100）</li>
      <li>• 設置、配置和維護需要技術專長</li>
      <li>• 你需負責運行時間、安全性和擴展</li>
      <li>• 開源模型通常落後於最好的閉源模型</li>
    </ul>
  </div>
</div>

**最適合：** 有嚴格數據隱私要求（醫療、法律、政府、金融）的組織，或詞元成本超過基礎設施成本的極高使用量場景。

## 量化模型 — 輕量級自託管

如果你想在沒有企業級硬件的情況下嘗試自託管，**量化模型 (Quantized Models)** 是入門點。

量化通過降低內部權重的數值精度來壓縮模型 — 想像一下就像將照片另存為 JPEG 而非 RAW 檔案。結果是：
- 檔案大小大幅縮減（一個 70B 模型可以從 140 GB 降至 ~40 GB）
- 可在消費級硬件上運行 — 甚至是一台有足夠 RAM 的筆電
- 在複雜任務上的能力明顯較弱，但對於簡單任務通常足夠

像 **Ollama** 這樣的工具讓你只需一個指令即可下載並運行 Llama、Mistral、Gemma 等模型的量化版本。無需雲端帳號，無需 API 金鑰 — 只需你的電腦。

**適用於：** 本地實驗、隱私優先的原型設計，以及在沒有基礎設施成本的情況下感受開源模型。

## 隱藏成本的現實

自託管*聽起來*是免費的。模型權重通常可以免費下載。但是：

- 一台 A100 GPU 伺服器：購買需 10,000–30,000 美元，或在雲端每小時 2–5 美元
- 非普通部署的設置時間：數週的工程工作
- 持續維護：模型更新、安全補丁、監控
- 託管品質差距：最好的開源模型仍然落後於最好的閉源模型一截

:::callout-error
「我們只需自託管來省錢」是一個常見的錯誤。除非你每天處理數百萬個詞元，或者有嚴格的數據駐留要求，否則工程和基礎設施成本幾乎肯定會超過你支付給託管 API 的費用。先算清楚帳。
:::
