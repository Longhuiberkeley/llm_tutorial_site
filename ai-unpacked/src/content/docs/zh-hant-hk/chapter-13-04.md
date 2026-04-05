---
title: "13.4 構建正確的東西：需求可追溯性"
description: "每個功能都應該追溯到一個需求 —— 為什麼這種心態很重要，以及如何應用它，無論是正式還是非正式的。"
chapter: "第 13 章"
pageId: "13-04"
---

## 🎯 核心目標
- 區分「正確地構建東西」與「構建正確的東西」。
- 將需求可追溯性 (Requirements traceability) 定義為一種心理模型 —— 從需求到驗證的鏈條 —— 並解釋為什麼它很重要，即使你從未將其正式化。
- 介紹「功能偏移 (Feature drift)」以及如何在由 LLM 輔助的項目中檢測它。

<div class="not-prose callout callout-tldr">

構建東西很容易，但構建正確的東西卻很難。需求可追溯性 (Requirements traceability) 是一種確保每項工作都能追溯到所述需求的實踐 —— 這樣你就可以證明你正在解決真正的問題，而不僅僅是在產出內容。即使你從不運行正式的追蹤系統，也能從中受益 —— 這種心態本身就會改變你做決定的方式。許多敏捷團隊從不將其正式化 —— 但最優秀的團隊會本能地這樣思考。

</div>

## 🏗️ 兩種失敗方式

每個項目都有兩種截然不同的失敗方式：

1. **正確地構建了東西，但構建的是錯誤的東西** —— 產出的質量很高，但不符合實際需求。代碼很整潔、報告寫得很好、功能運行完美 —— 但它並沒有解決原本應該解決的問題。

2. **構建了正確的東西，但構建得不對** —— 找準了正確的問題，但產出的內容有 Bug、不一致或不完整。

這兩種失敗都很重要。但由 LLM 輔助的項目特別容易陷入第一種失敗模式。

第二種失敗模式通常是可見的。你可以看到爛代碼，審核員會發現錯誤，測試會失敗。有人會注意到報告內容自相矛盾。反饋循環很快。

第一種失敗模式則是不可見的。代碼能跑，報告讀起來很順，功能令人印象深刻。問題在於，這一切都與原本要達成的目標脫節 —— 而且僅僅看產出是看不出問題的。只有當你一直追求的業務成果未能實現時，你才會發現這一點。

LLM 同時加速了這兩種失敗模式。問題是：你正在管理哪一種？

## 🔗 什麼是需求可追溯性 (Requirements Traceability)？

需求可追溯性是一種能防範第一種失敗模式的思維方式。

核心理念是將每項工作與其服務的需求聯繫起來的**鏈條**：

**需求 → 設計決策 → 實施 → 驗證**

在最正式的版本中，每個需求都有一個 ID，每個設計決策都追溯到一個需求（例如：「這個模組之所以存在是因為需求 R4」），每個實施項追溯到一個設計決策，每項測試追溯到一個需求。在實踐中，除了受監管的行業外，很少有團隊能維持這種程度的正式化 —— 其實他們也不需要。價值不在於追踪系統，而在於養成詢問這個問題的習慣：**「這項工作服務於哪個需求？」** 如果你能回答項目中任何一項工作的這個問題 —— 無論是通過查閱表格、憑記憶，還是對照項目目標進行直覺判斷 —— 那麼這個心理模型就在發揮作用。

<div class="not-prose callout callout-tip">

事實上，大多數敏捷團隊、快速發展的初創公司和個人開發者從未維護過正式的需求追溯鏈 —— 儘管如此，許多人仍然交付了出色的產品。學習這個概念的原因不是為了給你的流程增加文書工作，而是為了在構建之前建立「我們為什麼要構建這個？」的條件反射。僅僅這種反射就能預防最昂貴的一類項目失敗。你如何實踐它 —— 以及是否將其正式化 —— 完全取決於你。

</div>


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-6">
<h3 class="text-xl font-bold font-headline mb-2">Requirements Traceability Chain</h3>
<p class="text-sm text-on-surface-variant">Click a requirement to trace it through the chain. Try "Feature Drift Mode" to spot orphaned work.</p>
</div>
<!-- Mode Toggle -->
<div class="flex gap-2 justify-center mb-6">
<button onclick="setRtMode('trace', this)" id="rt-btn-trace"
class="rt-mode-btn px-4 py-2 rounded-full text-xs font-bold border-2 border-outline-variant bg-surface-container-lowest transition-all hover:border-primary">
🔗 Trace Mode
</button>
<button onclick="setRtMode('drift', this)" id="rt-btn-drift"
class="rt-mode-btn px-4 py-2 rounded-full text-xs font-bold border-2 border-outline-variant bg-surface-container-lowest transition-all hover:border-primary">
🌊 Feature Drift Mode
</button>
</div>
<!-- Trace Mode -->
<div id="rt-trace-view">
<!-- Requirements Row -->
<div class="mb-4">
<div class="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-2 text-center">📋 Requirements — click to trace</div>
<div class="flex flex-wrap gap-2 justify-center" id="rt-reqs">
<button onclick="traceReq('R1', this)" class="rt-req px-4 py-2 rounded-full text-xs font-bold border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all">R1: User Login</button>
<button onclick="traceReq('R2', this)" class="rt-req px-4 py-2 rounded-full text-xs font-bold border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all">R2: Fast Search</button>
<button onclick="traceReq('R3', this)" class="rt-req px-4 py-2 rounded-full text-xs font-bold border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all">R3: Export to PDF</button>
</div>
</div>
<!-- Chain -->
<div id="rt-chain" class="hidden">
<div class="flex flex-col sm:flex-row items-stretch gap-2 justify-center">
<div id="rt-c-req" class="flex-1 rounded-xl p-4 border-2 border-outline-variant bg-surface-container-lowest text-xs text-center">
<div class="font-black text-[9px] uppercase tracking-wider text-on-surface-variant mb-1">REQUIREMENT</div>
<div id="rt-c-req-text" class="font-bold text-on-surface"></div>
<div id="rt-c-req-desc" class="text-on-surface-variant mt-1 text-[10px]"></div>
</div>
<div class="flex items-center justify-center text-on-surface-variant font-bold text-lg">→</div>
<div id="rt-c-design" class="flex-1 rounded-xl p-4 border-2 border-outline-variant bg-surface-container-lowest text-xs text-center">
<div class="font-black text-[9px] uppercase tracking-wider text-on-surface-variant mb-1">DESIGN DECISION</div>
<div id="rt-c-design-text" class="font-bold text-on-surface"></div>
<div id="rt-c-design-desc" class="text-on-surface-variant mt-1 text-[10px]"></div>
</div>
<div class="flex items-center justify-center text-on-surface-variant font-bold text-lg">→</div>
<div id="rt-c-impl" class="flex-1 rounded-xl p-4 border-2 border-outline-variant bg-surface-container-lowest text-xs text-center">
<div class="font-black text-[9px] uppercase tracking-wider text-on-surface-variant mb-1">IMPLEMENTATION</div>
<div id="rt-c-impl-text" class="font-bold text-on-surface"></div>
<div id="rt-c-impl-desc" class="text-on-surface-variant mt-1 text-[10px]"></div>
</div>
<div class="flex items-center justify-center text-on-surface-variant font-bold text-lg">→</div>
<div id="rt-c-test" class="flex-1 rounded-xl p-4 border-2 border-outline-variant bg-surface-container-lowest text-xs text-center">
<div class="font-black text-[9px] uppercase tracking-wider text-on-surface-variant mb-1">VERIFICATION</div>
<div id="rt-c-test-text" class="font-bold text-on-surface"></div>
<div id="rt-c-test-desc" class="text-on-surface-variant mt-1 text-[10px]"></div>
</div>
</div>
</div>
<div id="rt-chain-prompt" class="text-center mt-4">
<p class="text-xs text-on-surface-variant italic">Click a requirement above to see its full chain.</p>
</div>
</div>
<!-- Drift Mode -->
<div id="rt-drift-view" class="hidden">
<p class="text-xs text-on-surface-variant text-center mb-4">Five features were built. Which ones trace back to a stated requirement? Click each to find out.</p>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-3" id="rt-drift-items">
<button onclick="checkDrift(0, this)" class="rt-drift p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest text-left hover:border-primary transition-all text-xs">
<div class="font-bold mb-1">🔐 User login via email and Google OAuth</div>
<div class="text-on-surface-variant text-[10px]">Two login methods with password reset</div>
</button>
<button onclick="checkDrift(1, this)" class="rt-drift p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest text-left hover:border-primary transition-all text-xs">
<div class="font-bold mb-1">🎨 Animated background on the homepage</div>
<div class="text-on-surface-variant text-[10px]">Subtle particle effect, looked cool in the LLM demo</div>
</button>
<button onclick="checkDrift(2, this)" class="rt-drift p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest text-left hover:border-primary transition-all text-xs">
<div class="font-bold mb-1">⚡ Search results in under 2 seconds</div>
<div class="text-on-surface-variant text-[10px]">Indexed search with caching</div>
</button>
<button onclick="checkDrift(3, this)" class="rt-drift p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest text-left hover:border-primary transition-all text-xs">
<div class="font-bold mb-1">🌙 Dark mode toggle</div>
<div class="text-on-surface-variant text-[10px]">The LLM suggested it while building the UI</div>
</button>
<button onclick="checkDrift(4, this)" class="rt-drift p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest text-left hover:border-primary transition-all text-xs sm:col-span-2">
<div class="font-bold mb-1">📄 Export results to PDF</div>
<div class="text-on-surface-variant text-[10px]">Users asked for this in stakeholder interviews</div>
</button>
</div>
<div id="rt-drift-result" class="mt-4 rounded-xl p-4 text-center text-xs font-bold bg-surface-container-lowest border border-outline-variant text-on-surface-variant hidden"></div>
</div>
</div>
<script>
(function() {
const chains = {
R1: {
req: { text: 'R1: User Login', desc: 'Users can log in via email or Google OAuth with password reset — on mobile and desktop.' },
design: { text: 'Auth module', desc: 'Separate authentication service, OAuth integration via provider SDK, JWT session tokens.' },
impl: { text: 'auth.js + GoogleOAuth', desc: 'Login form, Google OAuth button, password reset flow, session token issuance.' },
test: { text: 'Auth test suite', desc: 'Login with email, login with Google, password reset, session expiry, mobile/desktop layout tests.' }
},
R2: {
req: { text: 'R2: Fast Search', desc: 'Search results must appear in under 2 seconds for 95% of queries.' },
design: { text: 'Indexed search + cache', desc: 'Inverted index built at write time. Redis cache for top 1000 queries. Query timeout: 1.8s.' },
impl: { text: 'search.js + RedisCache', desc: 'Index builder, cache warmer, query router, result formatter.' },
test: { text: 'Performance tests', desc: 'Load test: 100 concurrent users. P95 latency < 2s. Edge case: empty query, special chars.' }
},
R3: {
req: { text: 'R3: Export to PDF', desc: 'Users can export any search results page to a formatted PDF.' },
design: { text: 'PDF generation service', desc: 'Server-side render to headless browser, template for branded layout, max 10MB output.' },
impl: { text: 'export.js + pdf-template.html', desc: 'Export button on results page, PDF generation API endpoint, download link delivery.' },
test: { text: 'Export tests', desc: 'Export with 10 results, 100 results. Verify layout, verify branding, verify file size limit.' }
}
};
const driftData = [
{ traced: true, req: 'R1', note: '✅ Traced to R1: User Login. Stakeholder interviews defined this as a core requirement in the brief.' },
{ traced: false, req: null, note: '❌ No requirement found. This was generated because "it looked cool." It adds bundle size, slows load time, and serves no defined user need.' },
{ traced: true, req: 'R2', note: '✅ Traced to R2: Fast Search. Performance requirement defined before development.' },
{ traced: false, req: null, note: '❌ No requirement found. Dark mode was suggested by the LLM during UI generation. It may be valuable — but it should be added as an explicit requirement (R6?) with success criteria, not absorbed implicitly.' },
{ traced: true, req: 'R3', note: '✅ Traced to R3: Export to PDF. Defined in stakeholder interviews.' }
];
let driftChecked = 0;
window.setRtMode = function(mode, btn) {
document.querySelectorAll('.rt-mode-btn').forEach(b => {
b.classList.remove('border-primary', 'bg-primary/10');
b.classList.add('border-outline-variant', 'bg-surface-container-lowest');
});
btn.classList.remove('border-outline-variant', 'bg-surface-container-lowest');
btn.classList.add('border-primary', 'bg-primary/10');
document.getElementById('rt-trace-view').classList.toggle('hidden', mode !== 'trace');
document.getElementById('rt-drift-view').classList.toggle('hidden', mode !== 'drift');
};
window.traceReq = function(req, btn) {
const chain = chains[req];
document.querySelectorAll('.rt-req').forEach(b => {
b.classList.remove('border-primary', 'bg-primary/10');
b.classList.add('border-outline-variant', 'bg-surface-container-lowest');
});
btn.classList.remove('border-outline-variant', 'bg-surface-container-lowest');
btn.classList.add('border-primary', 'bg-primary/10');
['req', 'design', 'impl', 'test'].forEach(key => {
document.getElementById('rt-c-' + key + '-text').textContent = chain[key].text;
document.getElementById('rt-c-' + key + '-desc').textContent = chain[key].desc;
const el = document.getElementById('rt-c-' + key);
el.classList.remove('border-outline-variant');
el.classList.add('border-primary', 'bg-primary/5');
});
document.getElementById('rt-chain').classList.remove('hidden');
document.getElementById('rt-chain-prompt').classList.add('hidden');
};
window.checkDrift = function(index, btn) {
const d = driftData[index];
driftChecked++;
btn.disabled = true;
btn.classList.remove('border-outline-variant', 'hover:border-primary');
if (d.traced) {
btn.classList.add('border-green-500', 'bg-green-50');
btn.querySelector('.font-bold').textContent = '✅ ' + btn.querySelector('.font-bold').textContent.replace(/^[^ ]+ /, '');
} else {
btn.classList.add('border-red-400', 'bg-red-50');
}
const result = document.getElementById('rt-drift-result');
result.classList.remove('hidden');
result.textContent = d.note;
if (d.traced) {
result.className = 'mt-4 rounded-xl p-4 text-xs font-bold bg-green-50 border border-green-300 text-green-700';
} else {
result.className = 'mt-4 rounded-xl p-4 text-xs font-bold bg-red-50 border border-red-300 text-red-700';
}
};
})();
</script>

</div>


這同樣適用於軟件以外的領域：
- 在研究報告中：每個章節都追溯到第一階段定義的研究問題。
- 在產品發布中：每個功能都追溯到簡報中的用戶需求。
- 在培訓課程中：每個模組都追溯到一個學習目標。

如果你無法為某項工作完成這條鏈條，那是一個訊號 —— 而非失敗。這意味著需要詢問：「我們為什麼要做這件事？它服務於哪個已定義的需求？」

<div class="not-prose callout callout-dyk">

這種實踐根源於那些構建錯誤東西會付出慘痛代價的行業 —— 航空航天、醫療設備、汽車軟件。早在 LLM 出現前幾十年，每一行實施都應追溯到需求的原則就已經被正式化了。在那些行業，這是監管要求。對於其他所有人來說，這是一個強大的心理模型 —— 取其精髓，棄其繁文縟節。現在它變得更加重要，因為 LLM 生成內容如此之快，未經追溯的工作可能會比以往任何時候累積得更快。

</div>

## 🔍 兩種對話

對比同一個項目審核的兩個版本：

**沒有可追溯性：**

「我們在上次衝刺中添加了用戶個人資料自定義功能，因為這看起來像個不錯的功能。」它是否服務於入職目標 (R1)？還是留存目標 (R7)？它是否與優先發布核心用例 (R3) 的優先級相衝突？無從得知。團隊在猜測這項工作是否是正確的決定。

**具備可追溯性：**

「我們添加了用戶個人資料自定義功能以實施需求 R7 —— 即根據 2 月 12 日的持份者會議，用戶必須能夠設置通知偏好。」業務合理性非常清晰。你可以評估 R7 是否是目前的正確優先級。你可以根據 R7 的成功標準來衡量成敗。你可以在審核中為這項決策辯護。

區別不僅僅在於記錄保存，而在於有能力理性地、而非基於當時的感覺來做出和評估決策。

## 🌊 由 LLM 輔助項目中的功能偏移 (Feature Drift)

LLM 非常擅長生成看似合理的擴展功能。要求 LLM 「改進應用程序」，它就會生成改進方案 —— 那些看起來有用、運行正確、似乎是不錯補充的功能。

但 LLM 無法告訴你的是，每項改進服務於哪個需求。

**功能偏移 (Feature drift)** 是指那些執行良好但與已定義需求無關的工作的逐漸累積。每一項單獨看都很合理，但總體看來，整個項目已在無人決定改道的情況下偏離了最初的目標。

檢測機制很簡單：在接受任何生成的產出之前，詢問「這服務於哪個需求？」如果你答不上來，那麼這項工作在被接受之前需要給出合理理由 —— 而不是在被接受之後。

簡而言之：週末你向朋友們分享了你的項目，他們回饋了 50 個建議。現在怎麼辦？沒有需求框架，默認做法是構建那些看起來最有趣的，或者是最有說服力的人提出的建議。有了需求思維，你就有了過濾器：哪些建議與現有需求相關？哪些揭示了應該正式添加的真實缺口？哪些是好主意但屬於後期階段 —— 而非現在？你不需要構建所有 50 個，也不需要拒絕所有 50 個。框架給了你一個有原則的決策方式。

這不是要拒絕好的想法，而是要有意識地做決定。一個不服務於現有需求的好想法，要麼是：
- 證據表明應添加新需求（更新鏈條，然後繼續），或者
- 一個應推遲到後期階段的干擾項。

無論哪種方式，決策都是顯式做出的，而不是通過累積的產出隱式吸收的。計劃會變 —— 需求會更新，優先級會調整，範圍會演變。這都是預料之中的。可追溯性的心態並不要求一個完美、一成不變的計劃。它要求的是有意識的決策。當需求改變時，更新鏈條；當添加新功能時，添加需求。紀律在於審慎地做出每個決定，而不是抵制變化。

<div class="not-prose callout callout-error">

一個常見錯誤：將需求變更視為放棄可追溯性的理由。「需求變化太快，我們無法追踪」通常意味著一開始就沒有需求流程 —— 變更是通過代碼和產出隱式進行的，而不是在需求中顯式進行。在快速推进的項目中加入可追溯性更難，但後期補上仍有價值：它能強迫對現有的每項工作進行追溯性的合理解釋。

</div>

## 📄 構件：用戶故事 (User Stories) 與 PRD

如果你想為可追溯性建立一些結構，兩個輕量級工具會很有幫助：

**用戶故事 (User Stories)** 是從用戶角度編寫的單一需求：
*「作為一個 [用戶]，我想 [做某事]，以便 [我達成某個結果]。」*

它們被設計得很短。每個故事就是一個需求、一個用戶、一個結果。對於想要輕量級需求列表的團隊來說，用戶故事非常合適 —— 每個故事捕捉一個可追溯的需求。

**產品需求文檔 (PRD)** 將更大的一組需求集中在一個地方：項目的目的、服務的用戶、所需的每項能力、約束條件以及驗收標準。PRD 是一份活的文檔 —— 需求改變時更新，做決策時參考。

你不需要把它們搞得很正式。在共享文檔中列出編號的需求清單即可。甚至在項目的 README 文件中列出要點也比什麼都沒有好。最重要的是，需求必須存在於你的腦袋之外，並在接受工作前被參考 —— 哪怕是非正式的。

## 📝 核心概念

- **兩種失敗模式** —— 構建錯誤的東西（不可見）與構建得不對（可見）。LLM 同時加速了這兩者；可追溯性解決了第一種。
- **鏈條** —— 需求 → 設計決策 → 實施 → 驗證。一個用於檢查每項工作是否與已定義需求相關聯的心理模型。
- **功能偏移 (Feature drift)** —— 看似合理的內容在與需求脫節的情況下累積。在接受 LLM 產出前問問：「這服務於哪個需求？」
- **用戶故事 (User stories)** —— 格式為「作為一個 [用戶]，我想 [行動]，以便 [結果]」的單一需求。
- **PRD** —— 捕捉完整需求集的活文檔；在需求變更時更新，在決策時參考。

<div id="quiz-13-04" class="not-prose quiz-container my-12" data-quiz="13-04"></div>
