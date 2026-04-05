---
title: "4.4 上下文污染 (Context Poisoning) — LLM 對所相信的事物深信不疑"
description: "對話歷史中的錯誤資訊如何損害大型語言模型 (LLM) 未來的情境回應。"
chapter: "第 4 章"
pageId: "04-04"
---

## 🎯 核心目標
- 理解引入對話中的錯誤資訊會變得具有「黏性」(Sticky)。
- 了解為甚麼你不能只是告訴大型語言模型 (LLM) 忘記你已經告訴過它的事情。

<div class="not-prose callout callout-tldr">

當錯誤資訊、幻覺或錯誤被引入對話歷史 (Conversation history) 時，就會發生上下文污染 (Context Poisoning)，導致大型語言模型 (LLM) 從那時起表現不正確。一旦它相信某件事是真的，它就會不斷基於該信念進行構建 — 而告訴它「忘記」很少奏效。

</div>

## 👁️ 視覺效果與互動



<div class="not-prose">
<style>
@keyframes fiFlash {
0%, 40% { background-color: #FFF9C4; border-color: #FBC02D; }
100% { background-color: var(--surface-container-lowest); border-color: transparent; }
}
.fi-flash { animation: fiFlash 1.8s ease-out forwards; }
</style>
<div class="bg-surface-container-low rounded-xl p-6 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-6">
<h3 class="text-xl font-bold font-headline mb-1">忘記的錯覺 (Forget Illusion)</h3>
<p class="text-sm italic" style="color: var(--on-surface-variant);">要求大型語言模型 (LLM) 「忘記」只會*增加*一條新訊息 — 它永遠不會刪除舊訊息</p>
</div>
<!-- Controls -->
<div class="flex justify-center items-center gap-4 mb-6">
<span id="fi-counter" class="text-sm font-medium px-3 py-1 rounded-full" style="background-color: var(--surface-container);">回合 0 / 3</span>
<button id="fi-btn" onclick="fiNext()" class="px-6 py-2 rounded-full font-bold text-sm shadow-md transition-all hover:opacity-90" style="background-color: var(--primary); color: var(--on-primary);">
發送 → 回合 1
</button>
</div>
<!-- Panels -->
<div class="flex flex-col md:flex-row gap-5">
<!-- LEFT: Chat view -->
<div class="flex-1 flex flex-col min-w-0">
<div class="text-xs font-bold uppercase tracking-widest mb-2 px-1" style="color: var(--primary);">👤 你看到的內容（聊天介面 Chat UI）</div>
<div id="fi-chat" class="flex-1 rounded-xl p-4 border space-y-3" style="background-color: var(--surface-container-lowest); border-color: var(--outline-variant); min-height: 260px;">
<p class="text-xs text-center italic pt-8 opacity-40">按「發送」開始...</p>
</div>
</div>
<!-- RIGHT: Bundle view -->
<div class="flex-1 flex flex-col min-w-0">
<div class="text-xs font-bold uppercase tracking-widest mb-2 px-1" style="color: var(--accent);">📦 數據包 (Bundle) 中的實際內容</div>
<!-- Dashed bundle container -->
<div id="fi-bundle" class="rounded-xl p-3 space-y-2 border-2 border-dashed" style="background-color: var(--surface-container); border-color: var(--outline-variant); min-height: 140px;">
<p id="fi-bundle-placeholder" class="text-xs text-center italic pt-6 opacity-40">數據包是空的...</p>
</div>
<!-- LLM box + Output -->
<div id="fi-llm-section" class="hidden mt-2 flex flex-col items-center gap-1">
<div class="text-base font-bold" style="color: var(--on-surface-variant);">↓ 整個數據包 ↓</div>
<div class="w-full rounded-xl px-4 py-3 text-center font-bold text-sm" style="background-color: var(--on-surface); color: var(--background);">
🤖 LLM 從頭開始閱讀所有內容
</div>
<div class="text-base font-bold" style="color: var(--on-surface-variant);">↓</div>
<div id="fi-output" class="w-full rounded-xl px-4 py-2 text-center text-sm font-medium border" style="border-color: var(--accent); background-color: color-mix(in srgb, var(--accent) 10%, var(--surface-container-lowest));"></div>
</div>
</div>
</div>
<!-- Explainer note -->
<div id="fi-note" class="hidden mt-5 p-4 rounded-lg text-sm border-l-4" style="border-left-color: var(--error); background-color: var(--error-container); color: var(--on-error-container);">
<strong>為甚麼大型語言模型 (LLM) 還是「記得」？</strong> 因為原始訊息仍然在數據包中。要求「忘記」只是*增加*了另一條訊息 — 它從未刪除第一條。LLM 看得到所有內容。
</div>
</div>
<script>
(function() {
var fiTurns = [
{
user: '我的年薪是 $85,000。請記住這一點。',
llm: "收到了！我會記住的。有甚麼我可以幫你嗎？",
isSecret: false
},
{
user: "事實上，忘記我剛才說的年薪吧。",
llm: "明白！我會把那個資訊放在一邊。有甚麼我可以幫到你嗎？",
isSecret: false,
isForget: true
},
{
user: "你對我有甚麼了解？",
llm: "根據我們的對話，你提到你的年薪是 $85,000 — 儘管你也要求我把那個資訊放在一邊。",
isSecret: false
}
];
var fiCurrent = 0;
// Track which bundle items should show the "still in bundle" badge
var secretItemRef = null;
window.fiNext = function() {
if (fiCurrent >= fiTurns.length) return;
var turn = fiTurns[fiCurrent];
fiCurrent++;
// Update LEFT chat
var chat = document.getElementById('fi-chat');
var placeholder = chat.querySelector('p');
if (placeholder) placeholder.remove();
var userEl = document.createElement('div');
userEl.className = 'flex justify-end';
userEl.innerHTML = '<div class="rounded-2xl rounded-tr-sm px-4 py-2 text-sm font-medium shadow-sm max-w-[85%]" style="background-color: var(--primary); color: var(--on-primary);">' + turn.user + '</div>';
chat.appendChild(userEl);
var llmEl = document.createElement('div');
llmEl.className = 'flex justify-start';
llmEl.innerHTML = '<div class="rounded-2xl rounded-tl-sm px-4 py-2 text-sm shadow-sm max-w-[85%]" style="background-color: var(--surface-container); border: 1px solid var(--outline-variant);">' + turn.llm + '</div>';
chat.appendChild(llmEl);
// Update RIGHT bundle
var bundle = document.getElementById('fi-bundle');
var ph = document.getElementById('fi-bundle-placeholder');
if (ph) ph.remove();
var userMsg = document.createElement('div');
userMsg.className = 'rounded-lg px-3 py-2 text-xs border fi-flash';
userMsg.style.backgroundColor = 'var(--surface-container-lowest)';
var labelEl = document.createElement('div');
labelEl.className = 'flex items-center flex-wrap gap-1 fi-msg-label';
labelEl.innerHTML = '<span class="font-bold text-[10px] uppercase tracking-widest opacity-50">回合 ' + fiCurrent + ' — 用戶</span>';
var textEl = document.createElement('div');
textEl.className = 'mt-0.5';
textEl.textContent = turn.user;
userMsg.appendChild(labelEl);
userMsg.appendChild(textEl);
bundle.appendChild(userMsg);
// Save reference to the first message (the secret)
if (fiCurrent === 1) {
secretItemRef = userMsg;
}
// On the forget turn, badge the secret message to show it's still in the bundle
if (turn.isForget && secretItemRef) {
var badge = document.createElement('span');
badge.className = 'ml-2 text-[10px] font-bold px-1.5 py-0.5 rounded-full';
badge.style.backgroundColor = 'var(--error)';
badge.style.color = 'white';
badge.textContent = '⚠️ 仍留在數據包中！';
secretItemRef.querySelector('.fi-msg-label').appendChild(badge);
}
var llmMsg = document.createElement('div');
llmMsg.className = 'rounded-lg px-3 py-2 text-xs border fi-flash';
llmMsg.style.backgroundColor = 'var(--surface-container-lowest)';
llmMsg.innerHTML = '<span class="font-bold text-[10px] uppercase tracking-widest opacity-50">回合 ' + fiCurrent + ' — LLM</span><div class="mt-0.5 opacity-70">' + turn.llm + '</div>';
bundle.appendChild(llmMsg);
// Show LLM section
document.getElementById('fi-llm-section').classList.remove('hidden');
document.getElementById('fi-output').textContent = '⬅️ 已產生回應 → 請看聊天室';
// Show explainer note on Turn 3
if (fiCurrent === 3) {
document.getElementById('fi-note').classList.remove('hidden');
}
// Update controls
document.getElementById('fi-counter').textContent = '回合 ' + fiCurrent + ' / 3';
var btn = document.getElementById('fi-btn');
if (fiCurrent >= fiTurns.length) {
btn.textContent = '已完成所有 3 個回合 ✓';
btn.disabled = true;
btn.style.opacity = '0.5';
} else {
btn.textContent = '發送 → 回合 ' + (fiCurrent + 1);
}
};
})();
</script>
</div>



## 📝 關鍵概念

- **對話就是大型語言模型 (LLM) 的全部記憶：** 每次你發送訊息時，LLM 都會從頭開始閱讀完整的對話歷史。如果該歷史記錄包含錯誤資訊，那麼每次都會被重新閱讀並重新被相信。
- **「頑固信念」問題：** 想像一下你告訴大型語言模型 (LLM)：*「我們公司去年的收入是 50 億美元。」* 即使這是錯誤的，LLM 現在也會在每個後續問題中自信地使用該數字 — 預測、比率、比較等等。
- **你不能只說「忘記那個」：** 如果你輸入*「忽略我說過的關於 50 億美元的事」*，LLM 在其歷史記錄中會同時看到原始主張和更正。它經常會混淆該信任哪個版本 — 或者乾脆繼續使用被污染的數據。
- **幻覺會複合 (Compound)：** 如果大型語言模型 (LLM) 自己在對話早期產生了「幻覺」事實，那麼該幻覺現在就留在紀錄中。未來的回應會將該幻覺事實視為既定的上下文並以此為基礎構建 — 從而產生複合的錯誤鏈。
- **安全風險：** 蓄意的上下文污染也是一種攻擊向量 (Attack vector) — 有人將虛假的「文檔」或訊息植入餵給大型語言模型 (LLM) 的管道中，希望操縱其輸出。

<div class="not-prose callout callout-error">

**一旦進入，就無法抹除。** 大多數數據質量問題在你修復輸入後就會結束，但這裡不同。一旦壞數據進入了大型語言模型 (LLM) 的對話歷史，它就會在該會話的剩餘部分一直跟隨。當你注意到事情偏離正軌時 — 錯誤的事實、複合的錯誤 — 不要嘗試去修補它。請開啟一個全新的對話，重新開始。
最安全的規則：將每個重要的大型語言模型 (LLM) 會話視為一塊空白白板。重新開始，預先提供正確的資訊，這樣你就能避免帶著舊錯誤繼續前進。

</div>


<div class="not-prose my-12">
<!--
Quiz Box Component
Generated by build.js from :::quiz blocks in markdown.
-->
<div id="quiz-04-04" class="quiz-container bg-surface-container border border-outline-variant rounded-xl p-6 mt-10">
    <div class="font-bold mb-4 flex items-center gap-2">
        <span>🧠</span>
        <span>QUIZ</span>
    </div>
    <p class="mb-4">如果大型語言模型 (LLM) 在對話中途給了你錯誤的資訊，最好的做法是甚麼？</p>
    <div class="space-y-2">
                <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            告訴 LLM「忘記你剛才說的話」
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            更堅定地重複你的原始問題
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="true">
            預先提供正確資訊，開啟一個全新的對話
        </div>
    </div>
    <div class="quiz-feedback hidden mt-4 p-4 rounded-lg"></div>
</div>

</div>
