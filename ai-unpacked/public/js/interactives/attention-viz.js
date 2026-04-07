/**
 * Attention Visualization - Chapter 2.2
 * Shows how every word "attends" to every other word with different strengths.
 * Shared between EN and ZH — only hintTemplate differs.
 */
export function initAttentionViz(config) {
  var weights = {
    'I':           { 'am': 0.6, 'an': 0.1, 'interesting': 0.4, 'person': 0.8 },
    'am':          { 'I': 0.7,  'an': 0.2, 'interesting': 0.3, 'person': 0.4 },
    'an':          { 'I': 0.1,  'am': 0.2, 'interesting': 0.8, 'person': 0.5 },
    'interesting': { 'I': 0.3,  'am': 0.2, 'an': 0.6,          'person': 0.9 },
    'person':      { 'I': 0.8,  'am': 0.3, 'an': 0.4,          'interesting': 0.9 }
  };
  var wordIds = ['I', 'am', 'an', 'interesting', 'person'];

  function getCenter(el) {
    var container = document.getElementById('attn-wrap-all');
    var cr = container.getBoundingClientRect();
    var er = el.getBoundingClientRect();
    return {
      x: er.left + er.width / 2 - cr.left,
      y: er.top + er.height / 2 - cr.top
    };
  }

  window.showAllAttention = function(focusWord, focusEl) {
    // Reset all word styles
    document.querySelectorAll('.attn-word-all').forEach(function(el) {
      el.style.backgroundColor = '';
      el.style.borderColor = 'transparent';
      el.style.color = '';
    });
    // Highlight clicked word
    focusEl.style.backgroundColor = 'color-mix(in srgb, var(--accent) 15%, transparent)';
    focusEl.style.borderColor = 'var(--accent)';
    var container = document.getElementById('attn-wrap-all');
    var svg = document.getElementById('attn-svg-all');
    // Remove old paths only (direct children, excluding <defs>)
    Array.from(svg.children).forEach(function(el) { if (el.tagName.toLowerCase() !== 'defs') el.remove(); });
    var from = getCenter(focusEl);
    var topTarget = '';
    var maxWeight = -1;
    var targetWeights = weights[focusWord] || {};
    wordIds.forEach(function(targetWord) {
      if (targetWord === focusWord) return;
      var weight = targetWeights[targetWord] || 0;
      if (weight > maxWeight) { maxWeight = weight; topTarget = targetWord; }
      var targetEl = document.getElementById('w-' + targetWord);
      if (!targetEl) return;
      var to = getCenter(targetEl);
      // Curved arc: lift proportional to weight
      var mx = (from.x + to.x) / 2;
      var lift = 25 + weight * 50;
      var my = Math.min(from.y, to.y) - lift;
      var strokeWidth = Math.max(0.8, weight * 8);
      var opacity = Math.max(0.08, weight * 0.85);
      var color = weight >= 0.6 ? 'var(--accent)' : 'var(--outline-variant)';
      var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M ' + from.x + ' ' + from.y + ' Q ' + mx + ' ' + my + ' ' + to.x + ' ' + to.y);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', color);
      path.setAttribute('stroke-width', strokeWidth);
      path.setAttribute('stroke-linecap', 'round');
      path.setAttribute('opacity', opacity);
      if (weight >= 0.4) {
        path.setAttribute('marker-end', 'url(#attn-arrow)');
      }
      svg.appendChild(path);
    });
    // Sync SVG viewBox to container dimensions
    var cr2 = container.getBoundingClientRect();
    svg.setAttribute('viewBox', '0 0 ' + cr2.width + ' ' + cr2.height);
    var hint = document.getElementById('attn-hint-all');
    if (topTarget) {
      hint.textContent = config.hintTemplate(focusWord, topTarget);
    }
  };
}
