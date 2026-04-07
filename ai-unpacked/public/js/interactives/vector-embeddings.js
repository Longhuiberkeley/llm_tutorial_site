/**
 * Vector Embeddings Distance Explorer
 * Chapter 07-03: Interactive XY embeddings plot with distance calculation
 */
export function init() {
  const embedWords = {
    cat:    { cx: 54,  cy: 174, emoji: '\uD83D\uDC31', x: 1, y: 4 },
    lion:   { cx: 102, cy: 78,  emoji: '\uD83E\uDD81', x: 3, y: 8 },
    tiger:  { cx: 174, cy: 54,  emoji: '\uD83D\uDC2F', x: 6, y: 9 },
    banana: { cx: 246, cy: 246, emoji: '\uD83C\uDF4C', x: 9, y: 1 },
  };

  function dist(a, b) {
    const dx = embedWords[b].x - embedWords[a].x;
    const dy = embedWords[b].y - embedWords[a].y;
    return Math.sqrt(dx * dx + dy * dy).toFixed(1);
  }

  window.embedClick = function (word) {
    const src = embedWords[word];
    Object.keys(embedWords).forEach(w => {
      const line = document.getElementById('embed-line-' + w);
      if (line) line.setAttribute('opacity', '0');
    });
    const others = Object.keys(embedWords).filter(w => w !== word);
    others.forEach(other => {
      const tgt = embedWords[other];
      const line = document.getElementById('embed-line-' + other);
      if (line) {
        line.setAttribute('x1', src.cx);
        line.setAttribute('y1', src.cy);
        line.setAttribute('x2', tgt.cx);
        line.setAttribute('y2', tgt.cy);
        line.setAttribute('opacity', '0.7');
      }
    });
    const sorted = others.map(w => ({ word: w, d: parseFloat(dist(word, w)) }))
      .sort((a, b) => a.d - b.d);
    const colors = ['#22c55e', '#f97316', '#ef4444'];
    let html = '<div class="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-3 opacity-60">Distances from ' + src.emoji + ' ' + word + '</div>';
    html += '<div class="space-y-2">';
    sorted.forEach((item, i) => {
      const tgt = embedWords[item.word];
      const bar = Math.round((1 - item.d / 12) * 100);
      html += '<div>' +
        '<div class="flex items-center justify-between mb-1">' +
        '<span class="text-sm font-bold">' + tgt.emoji + ' ' + item.word + '</span>' +
        '<span class="text-sm font-mono font-bold" style="color:' + colors[i] + '">' + item.d + '</span>' +
        '</div>' +
        '<div class="h-2 rounded-full bg-outline-variant overflow-hidden">' +
        '<div class="h-2 rounded-full transition-all duration-500" style="width:' + bar + '%;background:' + colors[i] + '"></div>' +
        '</div></div>';
    });
    html += '</div>';
    html += '<p class="text-xs text-on-surface-variant mt-3 italic">' + (sorted[0].d < 5 ? '\uD83D\uDC3E Nearest neighbors share category (feline)' : '\uD83C\uDF0D Distant items share no meaningful category') + '</p>';
    document.getElementById('embed-distances').innerHTML = html;
  };
}
