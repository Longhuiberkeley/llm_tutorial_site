---
title: "7.6 資料格式決定命運"
description: "資料存在的格式決定了 LLM 讀取它的難易程度。簡單的格式勝出。"
chapter: "第 7 章"
pageId: "07-06"
---

## 🎯 核心目標
- 解釋為什麼檔案格式對於 LLM 處理來說與檔案內容同樣重要。
- 強調私有格式和掃描格式的隱藏成本。

<div class="not-prose callout callout-tldr">

LLM 喜歡純文字。Word、PowerPoint 和 PDF 等私有格式需要轉換工具，這會增加成本、複雜性和錯誤。最好的格式通常是最簡單的格式。

</div>

## 格式問題

你構建了一個 RAG 系統。Sarah 的 500 個案件檔案已準備好上傳。但它們是什麼格式的？

- **Word 文件 (.docx)：** 需要解析器來去除格式 —— 表格經常會亂掉。
- **PowerPoint 投影片 (.pptx)：** 文字散落在形狀、投影片和備註中。
- **PDF：** 可能是原生文本（可解析），也可能是掃描圖像（需要先進行光學字元辨識 (OCR)）。
- **掃描紙本：** 只是圖像 —— 對於基於文本的 LLM 來說完全不可見。

*內容* 是一樣的。*格式* 決定了 LLM 是否能讀取它。


<div class="not-prose">
<!-- Visual: Data Formats Spectrum -->
<div class="bg-surface-container-low rounded-xl p-6 mb-8 max-w-3xl mx-auto shadow-sm">
<div class="text-center mb-5">
<h3 class="text-lg font-bold font-headline mb-1">Data Format Difficulty Spectrum</h3>
<p class="text-sm text-on-surface-variant">From trivial to painful — for an LLM to read</p>
</div>
<!-- Spectrum axis -->
<div class="relative mb-6">
<div class="h-3 rounded-full" style="background: linear-gradient(to right, #22c55e, #f59e0b, #ef4444)"></div>
<div class="flex justify-between mt-1">
<span class="text-xs font-bold text-green-600">Easy</span>
<span class="text-xs font-bold text-yellow-600">Maybe</span>
<span class="text-xs font-bold text-red-500">Hard</span>
</div>
</div>
<!-- Format cards by difficulty -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-3">
<!-- Easy formats -->
<div class="bg-green-50 border border-green-200 rounded-xl p-4">
<div class="text-xs font-black text-green-700 uppercase tracking-wide mb-3">✅ LLM-native</div>
<div class="space-y-2">
<div class="flex items-center gap-2">
<span class="text-base">📄</span>
<div>
<div class="text-xs font-bold">.txt</div>
<div class="text-xs text-on-surface-variant">Pure text, nothing to parse</div>
</div>
</div>
<div class="flex items-center gap-2">
<span class="text-base">📝</span>
<div>
<div class="text-xs font-bold">.md (Markdown)</div>
<div class="text-xs text-on-surface-variant">Clean headers, lists, structure</div>
</div>
</div>
<div class="flex items-center gap-2">
<span class="text-base">📊</span>
<div>
<div class="text-xs font-bold">.csv / .json</div>
<div class="text-xs text-on-surface-variant">Structured data, maps naturally</div>
</div>
</div>
</div>
</div>
<!-- Needs conversion -->
<div class="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
<div class="text-xs font-black text-yellow-700 uppercase tracking-wide mb-3">⚠️ Maybe</div>
<div class="space-y-2">
<div class="flex items-center gap-2">
<span class="text-base">📘</span>
<div>
<div class="text-xs font-bold">.docx (Word)</div>
<div class="text-xs text-on-surface-variant">Tables often break on extract</div>
</div>
</div>
<div class="flex items-center gap-2">
<span class="text-base">📊</span>
<div>
<div class="text-xs font-bold">.xlsx (Excel)</div>
<div class="text-xs text-on-surface-variant">Formulas lost; only values survive</div>
</div>
</div>
<div class="flex items-center gap-2">
<span class="text-base">📑</span>
<div>
<div class="text-xs font-bold">.pptx (PowerPoint)</div>
<div class="text-xs text-on-surface-variant">Text scattered across shapes</div>
</div>
</div>
</div>
</div>
<!-- Needs OCR -->
<div class="bg-red-50 border border-red-200 rounded-xl p-4">
<div class="text-xs font-black text-red-600 uppercase tracking-wide mb-3">🚫 Hard</div>
<div class="space-y-2">
<div class="flex items-center gap-2">
<span class="text-base">🖼️</span>
<div>
<div class="text-xs font-bold">Scanned PDFs</div>
<div class="text-xs text-on-surface-variant">Photo of text — pixels, not words</div>
</div>
</div>
<div class="flex items-center gap-2">
<span class="text-base">📸</span>
<div>
<div class="text-xs font-bold">Photo documents</div>
<div class="text-xs text-on-surface-variant">Same problem, must extract text</div>
</div>
</div>
<div class="flex items-center gap-2">
<span class="text-base">📠</span>
<div>
<div class="text-xs font-bold">Fax → image</div>
<div class="text-xs text-on-surface-variant">Common in legal, medical records</div>
</div>
</div>
</div>
</div>
</div>
<p class="text-center text-xs text-on-surface-variant mt-4 italic">The content may be identical — the format determines whether the LLM can even read it.</p>
</div>

</div>


## 檔案格式陷阱

許多組織將所有內容儲存在複雜的格式中 —— 精美的 Word 報告、精心製作的 Excel 工作簿、漂亮的 PowerPoint 簡報。這看起來很專業。但對於 AI 處理來說，這是一種負擔。

每個轉換步驟：

- 消耗額外的時間和計算成本。
- 引入潛在錯誤（無法解析的表格、被跳過的圖像）。
- 降低 LLM 實際接收到的內容質量。

<div class="not-prose callout callout-error">

一個出人意料常見的 AI 專案失敗案例：團隊構建了一個出色的 RAG 系統，然後發現其知識庫中 80% 是掃描的 PDF。在 AI 能提供幫助之前，必須有人對成千上萬份文件執行光學字元辨識 (OCR) —— 這是一個耗時數月且耗資巨大的專案。

</div>

<div class="not-prose callout callout-tip">

如果你正在構建供 LLM 使用的知識庫，請儘早投資於格式：

- 今後的新文件優先考慮 Markdown 或純文字。
- 在建立索引之前，將重要的舊文件轉換為更乾淨的格式。
- 對於 PDF，確認它們是原生的（文字可選取）而非掃描圖像 —— 嘗試在 PDF 閱讀器中選取文字。
- 考慮一個 **中間處理步驟**：在對複雜文件（Word、PDF）建立索引之前，先執行一個預處理流水線，將它們轉換為乾淨的 Markdown 或純文字。這種一次性投資可以提高每次查詢的檢索質量，且比為多模態處理支付按次查詢的費用要便宜得多。

</div>

資料準備通常佔任何實際 AI 專案的 80%。LLM 輸出的質量受限於資料 *格式* 的質量，而不僅僅是資料內容的質量。

## 📝 關鍵概念

- **簡單格式勝出：** 純文字和 Markdown 是 LLM 處理的理想選擇。
- **私有格式增加成本：** 轉換工具引入了複雜性和潛在錯誤。
- **掃描 = 不可見：** 文字圖像在 LLM 讀取之前需要進行光學字元辨識 (OCR)。
- **檔案格式陷阱：** 將知識儲存在複雜格式中會為以後的 AI 應用帶來麻煩。
- **資料準備是真正的工作：** 通常任何 AI 專案的 80% 工作都是將資料轉換為可用形式。

<div id="quiz-07-06" class="not-prose quiz-container my-12" data-quiz="07-06"></div>
