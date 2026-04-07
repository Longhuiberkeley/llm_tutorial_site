---
title: "7.3 向量嵌入 —— 將意義儲存為坐標"
description: "LLM 如何將意義表示為數字，從而實現按意義而非精確關鍵字進行搜尋。"
chapter: "第 7 章"
pageId: "07-03"
---

## 🎯 核心目標
- 教導嵌入 (Embeddings) 如何將意義捕捉為空間中的坐標。
- 透過動手練習展示坐標之間的距離如何揭示相似性。

<div class="not-prose callout callout-tldr">

嵌入 (Embeddings) 將單詞和句子的意義轉化為坐標。相似的意義 = 鄰近的坐標。這就是一種流行的 RAG 檢索類型——語義搜尋 (Semantic search)——如何在沒有關鍵字匹配的情況下找到相關文件。

</div>

## 空間中的單詞

當我們之前探索單詞距離時，我們確定了某些單詞在意義上比其他單詞「更近」—— *國王 (king)* 和 *女王 (queen)* 是鄰居；*國王 (king)* 和 *香蕉 (banana)* 則是陌生人。

嵌入 (Embeddings) 使這種直覺變得精確。每個單詞、句子或文件都會被轉換成一串數字——即它在多維空間中的坐標。意義相似的兩個文件，其坐標會靠得很近。

這就是語義 RAG 檢索運作的原因：它不是匹配關鍵字，而是找到坐標與你的問題坐標最近的文件。

## 🗺️ 試一試：地圖上的距離

以下是繪製在簡單 XY 圖表上的四個單詞：


<div class="not-prose">
<!-- Visual: XY Embeddings — Interactive distance explorer -->
<div class="bg-surface-container-low rounded-xl p-6 mb-8 max-w-3xl mx-auto shadow-sm">
<div class="text-center mb-4">
<h3 class="text-lg font-bold font-headline mb-1">Words as Coordinates</h3>
<p class="text-sm text-on-surface-variant">Click any word to see how far it is from the others</p>
</div>
<div class="flex flex-col md:flex-row gap-6 items-start justify-center">
<!-- SVG Plot -->
<div class="flex-none">
<svg id="embed-svg" viewBox="0 0 300 300" width="280" height="280" class="mx-auto block" style="font-family: inherit;">
<!-- Grid lines -->
<defs>
<pattern id="embed-grid" width="24" height="24" patternUnits="userSpaceOnUse" x="30" y="30">
<path d="M 24 0 L 0 0 0 24" fill="none" stroke="#e0dbd4" stroke-width="0.5"/>
</pattern>
</defs>
<rect x="30" y="6" width="264" height="264" fill="url(#embed-grid)"/>
<!-- Axes -->
<line x1="30" y1="270" x2="294" y2="270" stroke="#a09890" stroke-width="1.5"/>
<line x1="30" y1="6" x2="30" y2="270" stroke="#a09890" stroke-width="1.5"/>
<!-- Axis labels -->
<text x="162" y="292" text-anchor="middle" font-size="10" fill="#8a8078">Meaning dimension X</text>
<text x="10" y="138" text-anchor="middle" font-size="10" fill="#8a8078" transform="rotate(-90, 10, 138)">Meaning dimension Y</text>
<!-- Tick labels -->
<text x="54" y="284" text-anchor="middle" font-size="8" fill="#a09890">1</text>
<text x="102" y="284" text-anchor="middle" font-size="8" fill="#a09890">3</text>
<text x="174" y="284" text-anchor="middle" font-size="8" fill="#a09890">6</text>
<text x="246" y="284" text-anchor="middle" font-size="8" fill="#a09890">9</text>
<text x="22" y="174" text-anchor="end" font-size="8" fill="#a09890">4</text>
<text x="22" y="78" text-anchor="end" font-size="8" fill="#a09890">8</text>
<text x="22" y="54" text-anchor="end" font-size="8" fill="#a09890">9</text>
<text x="22" y="246" text-anchor="end" font-size="8" fill="#a09890">1</text>
<!-- Distance lines (hidden by default) -->
<line id="embed-line-cat" x1="0" y1="0" x2="0" y2="0" stroke="#CC785C" stroke-width="1.5" stroke-dasharray="4,3" opacity="0"/>
<line id="embed-line-lion" x1="0" y1="0" x2="0" y2="0" stroke="#CC785C" stroke-width="1.5" stroke-dasharray="4,3" opacity="0"/>
<line id="embed-line-tiger" x1="0" y1="0" x2="0" y2="0" stroke="#CC785C" stroke-width="1.5" stroke-dasharray="4,3" opacity="0"/>
<line id="embed-line-banana" x1="0" y1="0" x2="0" y2="0" stroke="#CC785C" stroke-width="1.5" stroke-dasharray="4,3" opacity="0"/>
<!-- Points — data-x/data-y are logical coords -->
<!-- banana at (9,1) -->
<g class="embed-point cursor-pointer" data-word="banana" data-x="9" data-y="1" onclick="embedClick('banana')">
<circle cx="246" cy="246" r="18" fill="#fef3c7" stroke="#f59e0b" stroke-width="2" class="transition-all"/>
<text cx="246" cy="246" x="246" y="250" text-anchor="middle" font-size="16">🍌</text>
</g>
<!-- cat at (1,4) -->
<g class="embed-point cursor-pointer" data-word="cat" data-x="1" data-y="4" onclick="embedClick('cat')">
<circle cx="54" cy="174" r="18" fill="#f0fdf4" stroke="#22c55e" stroke-width="2" class="transition-all"/>
<text cx="54" cy="174" x="54" y="178" text-anchor="middle" font-size="16">🐱</text>
</g>
<!-- lion at (3,8) -->
<g class="embed-point cursor-pointer" data-word="lion" data-x="3" data-y="8" onclick="embedClick('lion')">
<circle cx="102" cy="78" r="18" fill="#fff7ed" stroke="#f97316" stroke-width="2" class="transition-all"/>
<text cx="102" cy="78" x="102" y="82" text-anchor="middle" font-size="16">🦁</text>
</g>
<!-- tiger at (6,9) -->
<g class="embed-point cursor-pointer" data-word="tiger" data-x="6" data-y="9" onclick="embedClick('tiger')">
<circle cx="174" cy="54" r="18" fill="#fef2f2" stroke="#ef4444" stroke-width="2" class="transition-all"/>
<text cx="174" cy="54" x="174" y="58" text-anchor="middle" font-size="16">🐯</text>
</g>
</svg>
</div>
<!-- Distance panel -->
<div class="flex-1 min-w-0">
<div id="embed-distances" class="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant min-h-36">
<p class="text-sm text-on-surface-variant text-center mt-4 italic">👆 Click an animal to see its distances to all others</p>
</div>
<!-- Keyword failure demo -->
<div class="mt-4 bg-surface-container-lowest rounded-xl p-4 border border-outline-variant">
<div class="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-3 opacity-60">🔍 Keyword vs. Semantic Search</div>
<p class="text-xs text-on-surface-variant mb-3">These words all mean "cat" — but a keyword search for "cat" finds zero of them:</p>
<div class="flex flex-wrap gap-2 mb-3">
<span class="px-2 py-1 rounded-lg bg-error/10 border border-error/30 text-xs font-bold text-error">gato ✗</span>
<span class="px-2 py-1 rounded-lg bg-error/10 border border-error/30 text-xs font-bold text-error">kitten ✗</span>
<span class="px-2 py-1 rounded-lg bg-error/10 border border-error/30 text-xs font-bold text-error">felino ✗</span>
</div>
<p class="text-xs text-on-surface-variant">Semantic search finds them all — their <em>embeddings</em> land near 🐱 on the map.</p>
</div>
</div>
</div>
</div>
<script type="module">
import { init } from '/js/interactives/vector-embeddings.js';
init();
</script>

</div>


點擊任何動物以查看其與其他動物的距離。注意三種貓科動物是如何聚集在一起的——獅子、貓和老虎都佔據地圖的同一個區域——而香蕉則落在自己遙遠的角落。

**數學證實了直覺早已知曉的事情** —— 同一類別的動物比動物與水果之間有更多的共同點。

## 擴大規模

在這次練習中，我們使用了 2 個維度。真實的嵌入使用 **數百或數千個維度** —— 不僅捕捉意義的一個方面，還同時捕捉多個方面：主題、情感、正式程度、領域等等。

數學原理完全相同（點之間的距離），只是空間變得大得多。

<div class="not-prose callout callout-dyk">

當你搜尋並找到相關結果，卻沒有使用完全正確的關鍵字時，那就是嵌入 (Embeddings) 在起作用。「公司休假政策」能找到關於「特許假 (PTO)」和「年假」的文件，因為它們在意義上很接近——而不是因為單詞匹配。

</div>

## 為什麼這能實現語義 RAG 檢索

RAG 是一種模式：檢索相關文件，然後讓 LLM 根據文件回答問題。檢索步驟可以使用多種方法。這是大多數人在提到「RAG」時所想像的方法——由嵌入驅動的語義搜尋。

向量資料庫 (Vector databases) 為知識庫中的每份文件儲存嵌入。當問題提出時：

1. 將問題轉換為嵌入（一組坐標）。
2. 找到嵌入最接近的文件。
3. 返回排名靠前的匹配項——按意義而非關鍵字重疊進行排序。

Sarah 搜尋「建築延誤案例」能找到 *所有* 相關案例，即使有些案例使用了「承包商未能按期完成」這樣的短語。

但檢索步驟也可以使用關鍵字搜尋、SQL 查詢或多種方法的混合。RAG 模式保持不變——改變的只是搜尋引擎。

## 📝 關鍵概念

- **嵌入 (Embeddings)：** 將文本意義捕捉為坐標的數字。
- **相似意義 → 鄰近坐標 → 距離小。**
- **向量資料庫 (Vector databases)：** 儲存嵌入，以便在大規模情況下進行快速相似度查找。
- **語義搜尋 (Semantic search)：** 按意義而非匹配精確單詞進行尋找——RAG 模式中的一種檢索方法。
- **維度 (Dimensions)：** 真實嵌入使用數百個維度——概念相同，空間大得多。

<div class="not-prose my-12">
<!--
Quiz Box Component
Generated by build.js from :::quiz blocks in markdown.
-->
<div id="quiz-07-03" class="quiz-container bg-surface-container border border-outline-variant rounded-xl p-6 mt-10">
    <div class="font-bold mb-4 flex items-center gap-2">
        <span>🧠</span>
        <span>QUIZ</span>
    </div>
    <p class="mb-4">向量嵌入如何實現語義搜尋？</p>
    <div class="space-y-2">
                <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            它們將文件中的關鍵字與查詢中的關鍵字進行匹配
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="true">
            它們將意義轉換為數字坐標，使相似的概念在空間中靠近
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            它們使用詞典來尋找搜尋術語的同義詞
        </div>
    </div>
    <div class="quiz-feedback hidden mt-4 p-4 rounded-lg"></div>
</div>

</div>
