/**
 * Attention Weights Visualization - Chapter 2.3
 * Shows pronoun resolution with attention weight bars.
 * Shared between EN and ZH — JS is identical (no language-specific strings).
 */
export function initAttentionWeights() {
  function getCenter(el) {
    var container = document.getElementById('aw-wrap');
    var cr = container.getBoundingClientRect();
    var er = el.getBoundingClientRect();
    return {
      x: er.left + er.width / 2 - cr.left,
      y: er.top + er.height / 2 - cr.top
    };
  }

  window.showAw = function(btn) {
    btn.style.borderColor = 'var(--primary)';
    // Highlight key words in sentence
    document.getElementById('aw-cat').style.color = 'var(--primary)';
    document.getElementById('aw-cat').style.fontWeight = '900';
    document.getElementById('aw-tired').style.color = 'var(--accent)';
    // Show bars
    document.getElementById('aw-bars').style.opacity = '1';
    // Draw arrows
    var svg = document.getElementById('aw-svg');
    // Clear old arrows (preserve <defs>)
    Array.from(svg.children).forEach(function(el) { if (el.tagName.toLowerCase() !== 'defs') el.remove(); });
    var from = getCenter(btn);
    var targets = [
      { id: 'aw-cat', weight: 0.84, color: 'var(--primary)' },
      { id: 'aw-tired', weight: 0.10, color: 'var(--accent)' },
      { id: 'aw-mat', weight: 0.04, color: 'var(--outline)' }
    ];
    targets.forEach(function(t) {
      var targetEl = document.getElementById(t.id);
      if (!targetEl) return;
      var to = getCenter(targetEl);
      var mx = (from.x + to.x) / 2;
      var lift = 20 + t.weight * 40;
      var my = Math.min(from.y, to.y) - lift;
      var strokeWidth = Math.max(1, t.weight * 10);
      var opacity = Math.max(0.1, t.weight * 1.1);
      var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M ' + from.x + ' ' + from.y + ' Q ' + mx + ' ' + my + ' ' + to.x + ' ' + to.y);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', t.color);
      path.setAttribute('stroke-width', strokeWidth);
      path.setAttribute('stroke-linecap', 'round');
      path.setAttribute('opacity', opacity);
      if (t.weight >= 0.1) {
        var markerId = t.color.includes('accent') ? 'aw-arrow-accent' : 'aw-arrow';
        path.setAttribute('marker-end', 'url(#' + markerId + ')');
      }
      svg.appendChild(path);
    });
    // Sync SVG viewBox to container dimensions
    var containerRect = document.getElementById('aw-wrap').getBoundingClientRect();
    svg.setAttribute('viewBox', '0 0 ' + containerRect.width + ' ' + containerRect.height);
    // Animate bars — delay lets browser register width:0 before transition fires
    setTimeout(function() {
      document.getElementById('aw-bar-cat').style.width = '84%';
      document.getElementById('aw-bar-tired').style.width = '10%';
      document.getElementById('aw-bar-mat').style.width = '4%';
      document.getElementById('aw-bar-was').style.width = '1%';
      document.getElementById('aw-bar-warm').style.width = '1%';
      document.getElementById('aw-bar-others').style.width = '0.5%';
    }, 60);
  };
}
