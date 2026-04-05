---
title: "我是如何構建這個網站的"
description: "構建本教程的故事 —— 從課程大綱到程式碼，與 AI 作為協作者。"
chapter: "Special"
pageId: "special-01"
---

## 🎯 為什麼這個網站會存在

:::callout-tldr
朋友和同事一直在問我同樣的事情：「為什麼 AI 沒有按照我要求的去做？」在數據分析、汽車軟體、電腦視覺和醫療 AI 領域工作多年後，我意識到差距從來不在於智慧，而在於直覺。所以我構建了這個。
:::

我曾擔任過許多角色：數據分析專案管理、汽車軟體工程（負責合規、控制理論、感測器融合）、電腦視覺和深度學習研究，甚至還有醫療 AI（專注於不確定性量化和影像處理）。

在這些經歷中，我周圍的人在 AI 面前總是遇到同樣的障礙。這並不是因為他們不夠聰明，而是因為沒有人解釋過 *這些東西到底是怎麼思考的*。或者更準確地說，它們 *不* 思考。

## 💡 核心理念

理解 LLM 最重要的事情 **不是** 代數，不是注意力機制方程或損失函數。而是建立正確的心智模型 —— 一種能讓你預測 AI 何時能完美達成、何時會自信地胡說八道的直覺。

這就是本課程的意義所在。每一個類比、每一個互動組件、每一個章節 —— 都是為了幫助你 *概念化* 這些系統是如何運作的，以便你能真正用好它們。

<div class="flex justify-center my-12">
    <div class="equation-banner px-10 py-6 rounded-full inline-flex items-center gap-4 rotate-[-1deg]">
        <span class="text-2xl md:text-3xl font-extrabold font-headline text-center">先建立直覺 —— 才能自信地使用 AI</span>
    </div>
</div>

## 🛠️ 網站是如何真正構建起來的

以下是真實的過程，一步步拆解：

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
    <div class="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10">
        <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">第 1 步</span>
        </div>
        <h4 class="font-headline font-bold text-on-surface mb-1">從零開始手打課程大綱</h4>
        <p class="text-on-surface-variant text-sm leading-relaxed">關鍵點、類比、結構 —— 全都先從我的腦海中產生。比如「上下文中毒應該放在……某個地方。哪一章合適？」</p>
    </div>
    <div class="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10">
        <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">第 2 步</span>
        </div>
        <h4 class="font-headline font-bold text-on-surface mb-1">使用 LLM 進行微調和組織</h4>
        <p class="text-on-surface-variant text-sm leading-relaxed">反覆迭代以檢查位置是否合適、填補空白並壓力測試流程。進行多輪「放在這裡合理嗎？」的討論。</p>
    </div>
    <div class="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10">
        <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">第 3 步</span>
        </div>
        <h4 class="font-headline font-bold text-on-surface mb-1">與 LLM 討論技術方案</h4>
        <p class="text-on-surface-variant text-sm leading-relaxed">我希望將其放在 GitHub Pages 上 —— 無需伺服器，沒有複雜性，只是任何人都可以 Fork 的靜態文件。我們一起規劃了架構。</p>
    </div>
    <div class="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10">
        <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">第 4 步</span>
        </div>
        <h4 class="font-headline font-bold text-on-surface mb-1">生成第一章 + 模板</h4>
        <p class="text-on-surface-variant text-sm leading-relaxed">我最初使用 Gemini 的 Stitch UI/UX 工具來搭建視覺設計的原型，然後從那裡開始迭代。</p>
    </div>
    <div class="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10">
        <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">第 5 步</span>
        </div>
        <h4 class="font-headline font-bold text-on-surface mb-1">閱讀第一章，修正不正確的地方</h4>
        <p class="text-on-surface-variant text-sm leading-relaxed">一些來自較弱模型的內容存在細微問題 —— 過度簡化、重點錯誤。這類問題只有 <em>真正了解素材</em> 的人類才能發現。</p>
    </div>
    <div class="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10">
        <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">第 6 步</span>
        </div>
        <h4 class="font-headline font-bold text-on-surface mb-1">對所有章節重複此過程</h4>
        <p class="text-on-surface-variant text-sm leading-relaxed">每一章都遵循相同的循環：生成草稿、仔細閱讀、修正內容、精修視覺效果。逐一進行比批量處理更容易。</p>
    </div>
    <div class="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10">
        <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">第 7 步</span>
        </div>
        <h4 class="font-headline font-bold text-on-surface mb-1">逐章修正內容</h4>
        <p class="text-on-surface-variant text-sm leading-relaxed">專門對每一頁進行審閱，檢查準確性、語氣和流程。</p>
    </div>
    <div class="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10">
        <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">第 8 步</span>
        </div>
        <h4 class="font-headline font-bold text-on-surface mb-1">使用更聰明的模型審核一切</h4>
        <p class="text-on-surface-variant text-sm leading-relaxed">對整個網站進行最後的質量把關 —— 捕捉不一致之處、檢查類比是否站得住腳、標記任何不對勁的地方。</p>
    </div>
</div>

## 🤔 我學到了什麼（誠實地說）

我有時仍然會高估 AI 的能力。它對一些定義的理解存在細微偏差 —— 也許是因為知識截止日期較早，或者是訓練數據的奇特性。而且老實說：我也有偷懶的時候。我並不總是打出我想要的所有細節，而是希望模型能填補空白。有時它確實做到了，有時它卻給出了充滿自信的胡言亂語。

最大的教訓：**AI 輔助並不等於 AI 創作。** 每一頁都需要人類的判斷 —— 這種判斷來自於對主題的真正理解，而不僅僅是生成相關文本的能力。

回顧過去，整個網站大約花了 **5 天** 時間。如果我遵循自己的建議 —— 坐下來，自己寫更多的課程內容，讓 LLM 幫我填補空白，並花更多時間在整體流程上 —— 可能會完成得更快。過程的一部分是我也想看看 Gemini 3 和 Gemini CLI 已經變得多麼自動化和聰明。好奇心是構建事物的正當理由，即使它不是最高效的路徑。

:::callout-dyk
**我使用的工具：** 開發使用 Claude Code 和 Gemini CLI。內容生成和審核使用 Claude Opus 和 Claude Sonnet。少量輕量工作和微調使用了 GLM 系列模型。我只是分享我所使用的工具 —— 堅持使用一個工具完全沒問題，甚至可能更好。請使用適合你的工具。
:::

如果你想了解更多關於我的工作以及我能如何提供幫助，請查看 <a href="about.html" class="text-primary font-bold hover:underline">關於與聯繫</a> 頁面。
