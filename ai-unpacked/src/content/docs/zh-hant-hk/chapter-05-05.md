---
title: "5.5 隱私保護 — 絕對不能貼上的內容"
description: "使用大型語言模型 (LLMs) 時保護你的數據。"
chapter: "第 5 章"
pageId: "05-05"
---

## 🎯 核心目標
- 了解為什麼大型語言模型 (LLMs) 會讓人更有衝動分享敏感數據，以及這為什麼很重要。
- 建立一個簡單的思考模型，用來判斷哪些內容可以安全分享。

<div class="not-prose callout callout-tldr">

大型語言模型 (LLMs) 非常好用，而這種好用程度正是讓隱私保護變得更難的原因。獲得幫助越容易，就越容易不小心貼上不該貼的東西。核心規則與以往一樣：不要將敏感數據交給你不完全控制的外部服務。

</div>

## 👁️ 視覺與互動



<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-8">
<h3 class="text-xl font-bold font-headline mb-2">AI 隱私過濾器</h3>
<p class="text-sm text-on-surface-variant">以下哪些內容可以安全地貼到大型語言模型 (LLM) 的對話框中？</p>
</div>
<div class="grid sm:grid-cols-2 gap-4">
<button onclick="checkPrivacy(false, this)" class="p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-red-500 transition-all text-left flex items-center gap-4 group active:scale-95">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-xl group-hover:scale-110 transition-transform">🔑</div>
<div class="flex-grow">
<div class="font-bold text-sm">內部 API 金鑰 (API Keys)</div>
<div class="text-[10px] opacity-60 uppercase tracking-widest">技術數據</div>
</div>
<span class="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity text-red-500">cancel</span>
</button>
<button onclick="checkPrivacy(true, this)" class="p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-green-500 transition-all text-left flex items-center gap-4 group active:scale-95">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-xl group-hover:scale-110 transition-transform">📝</div>
<div class="flex-grow">
<div class="font-bold text-sm">網誌文章草稿</div>
<div class="text-[10px] opacity-60 uppercase tracking-widest">公開內容</div>
</div>
<span class="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity text-green-500">check_circle</span>
</button>
<button onclick="checkPrivacy(false, this)" class="p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-red-500 transition-all text-left flex items-center gap-4 group active:scale-95">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-xl group-hover:scale-110 transition-transform">🏥</div>
<div class="flex-grow">
<div class="font-bold text-sm">醫療記錄</div>
<div class="text-[10px] opacity-60 uppercase tracking-widest">個人資料</div>
</div>
<span class="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity text-red-500">cancel</span>
</button>
<button onclick="checkPrivacy(true, this)" class="p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-green-500 transition-all text-left flex items-center gap-4 group active:scale-95">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-xl group-hover:scale-110 transition-transform">💻</div>
<div class="flex-grow">
<div class="font-bold text-sm">通用程式碼片段</div>
<div class="text-[10px] opacity-60 uppercase tracking-widest">開源內容</div>
</div>
<span class="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity text-green-500">check_circle</span>
</button>
<button onclick="checkPrivacy(false, this)" class="p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-red-500 transition-all text-left flex items-center gap-4 group active:scale-95">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-xl group-hover:scale-110 transition-transform">💳</div>
<div class="flex-grow">
<div class="font-bold text-sm">客戶信用卡資料</div>
<div class="text-[10px] opacity-60 uppercase tracking-widest">財務數據</div>
</div>
<span class="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity text-red-500">cancel</span>
</button>
<button onclick="checkPrivacy(false, this)" class="p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-red-500 transition-all text-left flex items-center gap-4 group active:scale-95">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-xl group-hover:scale-110 transition-transform">🏗️</div>
<div class="flex-grow">
<div class="font-bold text-sm">未發佈的藍圖</div>
<div class="text-[10px] opacity-60 uppercase tracking-widest">商業秘密</div>
</div>
<span class="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity text-red-500">cancel</span>
</button>
</div>
<div id="privacy-feedback" class="mt-8 p-4 rounded-xl text-center font-bold text-sm opacity-0 transition-all duration-300">
<!-- 此處顯示反饋 -->
</div>
</div>
<script>
function checkPrivacy(isSafe, btn) {
const feedback = document.getElementById('privacy-feedback');
// 重置按鈕
btn.parentElement.querySelectorAll('button').forEach(b => {
b.classList.remove('border-red-500', 'border-green-500', 'bg-red-50', 'bg-green-50');
});
if (isSafe) {
btn.classList.add('border-green-500', 'bg-green-50');
feedback.textContent = "✅ 正確！公開或通用的資訊通常可以安全分享。";
feedback.className = "mt-8 p-4 rounded-xl text-center font-bold text-sm bg-green-100 text-green-800 opacity-100";
} else {
btn.classList.add('border-red-500', 'bg-red-50');
feedback.textContent = "❌ 危險！切勿將敏感、私密或專有數據貼到大型語言模型 (LLM) 中。";
feedback.className = "mt-8 p-4 rounded-xl text-center font-bold text-sm bg-red-100 text-red-800 opacity-100";
}
}
</script>
</div>



## 📝 關鍵概念

- **新的誘惑：** 與你輸入查詢內容的搜尋引擎不同，與大型語言模型 (LLM) 的對話非常自然 —— 感覺就像在與一位知識淵博的同事交談。這種無摩擦的體驗會讓人很想貼入客戶電子郵件、病歷或內部財務數據「只是為了尋求幫助」。幫助是真實的，但風險也是真實的。
- **老規則，新背景：** 基本原則沒有改變。你不會將病歷資料發送電子郵件給隨機的顧問，也不會與電話裡的陌生人分享商業秘密。將同樣的數據貼入 LLM 聊天室也是一樣的 —— 你的數據離開了你的環境，落在別人的基礎設施上。
- **電子郵件啟發式法 (The Email Heuristic)：** 在將任何內容貼入大型語言模型 (LLM) 之前，請先問問自己：*「如果我把這些內容包含在發送給我不完全信任的人的工作郵件中，我會覺得自在嗎？」* 如果答案是不會 —— 那就不要貼上去。
- **絕對不要貼上：** 密碼、API 金鑰 (API Keys)、私鑰、信用卡號碼、身份證號碼、醫療記錄、商業秘密、內部財務數據或客戶/患者的個人身份識別資訊 (PII)。
- **可以貼上：** 公開資訊、你自己的非機密寫作、一般性問題、匿名化或脫敏處理後的數據、不包含秘密的程式碼。
- **分享前先清理數據：** 如果你需要處理真實的文件，請先移除敏感部分。將姓名替換為「人物 A」，數字替換為「X」，內部引用替換為通用標籤。LLM 仍然可以幫助你處理結構和語言。

<div class="not-prose callout callout-error">

**三星事件 (The Samsung Incident)：** 三星工程師將專有的原始程式碼貼入 ChatGPT 以尋求調試幫助。這些代碼隨後可能被用於訓練數據 (Training data)。不久後，三星不得不全面禁止公司內部使用外部大型語言模型 (LLMs)。LLMs 引入了意外數據洩露的新途徑 —— 請保持良好的網絡安全 (Cybersecurity) 習慣。

</div>

<div class="not-prose callout callout-dyk">

即使是承諾數據隱私並可以選擇退出訓練的「企業」方案也不是萬無一失的。你的數據仍然在互聯網上傳輸，在外部基礎設施上處理，並受制於該提供商的安全狀況。請將大型語言模型 (LLMs) 視為值得信賴但屬於外部的承包商 —— 給予他們完成工作所需的資料，而不是你家的鑰匙。

</div>

<div class="not-prose my-12">
<!--
Quiz Box Component
Generated by build.js from :::quiz blocks in markdown.
-->
<div id="quiz-05-05" class="quiz-container bg-surface-container border border-outline-variant rounded-xl p-6 mt-10">
    <div class="font-bold mb-4 flex items-center gap-2">
        <span>🧠</span>
        <span>QUIZ</span>
    </div>
    <p class="mb-4">以下哪項內容可以安全地貼入公開的大型語言模型 (LLM) 聊天室？</p>
    <div class="space-y-2">
                <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            包含客戶個人詳細資料的電子郵件
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            為了快速調試而貼上公司的 API 金鑰 (API Keys)
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="true">
            一篇你想要總結的公開文章
        </div>
    </div>
    <div class="quiz-feedback hidden mt-4 p-4 rounded-lg"></div>
</div>

</div>
