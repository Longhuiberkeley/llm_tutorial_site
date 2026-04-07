/**
 * Neural Network Interactive (chapter-02-05)
 * Adjust weights and see how predictions change.
 */
export function init(config) {
  var NS = 'http://www.w3.org/2000/svg';
  var chipColors = config.chipColors;
  var tokenLabels = config.tokenLabels;
  var candidates = config.candidates;
  var verdicts = config.verdicts;
  var feedbackText = config.feedbackText;
  var autoTrainLabel = config.autoTrainLabel;
  var trainingLabel = config.trainingLabel;
  var layerLabels = config.layerLabels;

  var IX = 55, H1X = 205, H2X = 355, OX = 505;
  var IY = [45, 110, 175, 240, 305];
  var H1Y = [30, 90, 150, 210, 270, 330];
  var H2Y = [45, 110, 175, 240, 305];
  var OY = [70, 150, 230, 310];
  var IR = 22, H1R = 11, H2R = 11, OR = 15;
  var h2oConns = [];
  var outGroups = [];
  var adjIdx = [];

  function el(tag, a) {
    var e = document.createElementNS(NS, tag);
    for (var k in a) e.setAttribute(k, a[k]);
    return e;
  }

  function buildTokens() {
    var c = document.getElementById('nn-tokens');
    tokenLabels.forEach(function(t, i) {
      var s = document.createElement('span');
      s.className = 'nn-token-chip';
      s.style.background = chipColors[i].bg;
      s.style.color = chipColors[i].text;
      s.style.animationDelay = (i * 0.1) + 's';
      s.textContent = t;
      c.appendChild(s);
    });
    var blank = document.createElement('span');
    blank.className = 'nn-token-chip';
    blank.style.background = '#e8e5e1';
    blank.style.color = '#9e9a95';
    blank.style.animationDelay = '0.5s';
    blank.textContent = '???';
    c.appendChild(blank);
  }

  function buildSVG() {
    var svg = document.getElementById('nn-diagram');
    layerLabels.forEach(function(l) {
      var t = el('text', { x: l.x, y: 16, 'text-anchor': 'middle', 'font-size': '8', 'font-weight': '700', fill: '#9e9a95', 'letter-spacing': '0.1em' });
      t.textContent = l.t;
      svg.appendChild(t);
    });
    for (var h = 0; h < H1Y.length; h++) {
      for (var i = 0; i < IY.length; i++) {
        var op = (0.04 + Math.random() * 0.10).toFixed(2);
        svg.appendChild(el('line', { x1: IX + IR, y1: IY[i], x2: H1X - H1R, y2: H1Y[h], stroke: '#cdc8c2', 'stroke-width': '0.7', opacity: op }));
      }
    }
    for (var h2 = 0; h2 < H2Y.length; h2++) {
      for (var h1 = 0; h1 < H1Y.length; h1++) {
        var op = (0.04 + Math.random() * 0.10).toFixed(2);
        svg.appendChild(el('line', { x1: H1X + H1R, y1: H1Y[h1], x2: H2X - H2R, y2: H2Y[h2], stroke: '#cdc8c2', 'stroke-width': '0.7', opacity: op }));
      }
    }
    for (var o = 0; o < OY.length; o++) {
      for (var h2 = 0; h2 < H2Y.length; h2++) {
        var str = 0.2 + Math.random() * 0.6;
        var line = el('line', { x1: H2X + H2R, y1: H2Y[h2], x2: OX - OR, y2: OY[o], stroke: '#cdc8c2', 'stroke-width': '1', opacity: '0.10' });
        svg.appendChild(line);
        h2oConns.push({ line: line, oi: o, h2i: h2, str: str });
      }
    }
    adjIdx = [0 * H2Y.length + 0, 1 * H2Y.length + 2, 0 * H2Y.length + 3];
    var wLabels = ['w\u2081', 'w\u2082', 'w\u2083'];
    adjIdx.forEach(function(idx, wi) {
      var c = h2oConns[idx];
      var x1 = H2X + H2R, y1 = H2Y[c.h2i], x2 = OX - OR, y2 = OY[c.oi];
      var mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
      var t = el('text', { x: mx, y: my - 6, 'text-anchor': 'middle', 'font-size': '8', 'font-weight': '700', fill: 'var(--primary,#8f482f)', opacity: '0.7' });
      t.textContent = wLabels[wi];
      svg.appendChild(t);
    });
    tokenLabels.forEach(function(w, i) {
      var g = el('g', {});
      g.appendChild(el('circle', { cx: IX, cy: IY[i], r: IR, fill: chipColors[i].bg, stroke: chipColors[i].text, 'stroke-width': '1.5', opacity: '0.9' }));
      var t = el('text', { x: IX, y: IY[i], 'text-anchor': 'middle', 'dominant-baseline': 'central', 'font-size': '11', 'font-weight': '700', fill: chipColors[i].text });
      t.textContent = w; g.appendChild(t);
      svg.appendChild(g);
    });
    for (var h = 0; h < H1Y.length; h++) {
      svg.appendChild(el('circle', { cx: H1X, cy: H1Y[h], r: H1R, fill: '#ebe8e4', stroke: '#d0ccc6', 'stroke-width': '1' }));
    }
    for (var h2 = 0; h2 < H2Y.length; h2++) {
      svg.appendChild(el('circle', { cx: H2X, cy: H2Y[h2], r: H2R, fill: '#ebe8e4', stroke: '#d0ccc6', 'stroke-width': '1' }));
    }
    for (var o = 0; o < candidates.length; o++) {
      var g = el('g', { id: 'nn-og-' + o });
      g.appendChild(el('circle', { cx: OX, cy: OY[o], r: OR, fill: '#f5f3f0', stroke: '#c8c2bc', 'stroke-width': '1.5', 'class': 'nn-oc' }));
      var t = el('text', { x: OX, y: OY[o], 'text-anchor': 'middle', 'dominant-baseline': 'central', 'font-size': '9', 'font-weight': '700', fill: '#1b1c1a' });
      t.textContent = candidates[o].word; g.appendChild(t);
      g.appendChild(el('rect', { x: OX + OR + 6, y: OY[o] - 3, width: 40, height: 6, rx: 3, fill: '#e8e5e1' }));
      g.appendChild(el('rect', { x: OX + OR + 6, y: OY[o] - 3, width: 0, height: 6, rx: 3, fill: '#c8c2bc', 'class': 'nn-bar' }));
      var pt = el('text', { x: OX + OR + 52, y: OY[o], 'text-anchor': 'start', 'dominant-baseline': 'central', 'font-size': '8', 'font-weight': '700', fill: '#9e9a95', 'class': 'nn-pct' });
      pt.textContent = '0%'; g.appendChild(pt);
      svg.appendChild(g);
      outGroups.push(g);
    }
  }

  function getW() {
    return [1, 2, 3].map(function(i) { return +document.getElementById('nn-slider-' + i).value; });
  }
  function scores(w) {
    var s = candidates.map(function(c) {
      return (w[0] * c.ideal[0] + w[1] * c.ideal[1] + w[2] * c.ideal[2]) * 0.015;
    });
    var mx = Math.max.apply(null, s);
    var ex = s.map(function(v) { return Math.exp(v - mx); });
    var sm = ex.reduce(function(a, b) { return a + b; }, 0);
    return ex.map(function(e) { return e / sm; });
  }

  function update() {
    var w = getW(), p = scores(w);
    var ti = 0; for (var i = 1; i < p.length; i++) if (p[i] > p[ti]) ti = i;
    for (var i = 1; i <= 3; i++) document.getElementById('nn-sval-' + i).textContent = document.getElementById('nn-slider-' + i).value;
    h2oConns.forEach(function(c, idx) {
      var isAdj = adjIdx.indexOf(idx) >= 0;
      if (isAdj) {
        var wIdx = adjIdx.indexOf(idx);
        var wVal = w[wIdx];
        c.line.setAttribute('stroke', '#8f482f');
        c.line.setAttribute('stroke-width', (1.5 + wVal * 0.25).toFixed(1));
        c.line.setAttribute('opacity', (0.25 + wVal * 0.07).toFixed(2));
      } else if (c.oi === ti) {
        c.line.setAttribute('stroke', '#5FA860');
        c.line.setAttribute('stroke-width', (0.8 + c.str * 1.2).toFixed(1));
        c.line.setAttribute('opacity', (c.str * 0.5).toFixed(2));
      } else {
        c.line.setAttribute('stroke', '#cdc8c2');
        c.line.setAttribute('stroke-width', '0.7');
        c.line.setAttribute('opacity', '0.06');
      }
    });
    outGroups.forEach(function(g, idx) {
      var circ = g.querySelector('.nn-oc');
      var bar = g.querySelector('.nn-bar');
      var pct = g.querySelector('.nn-pct');
      var prob = p[idx];
      bar.setAttribute('width', Math.max(prob * 40, 1).toFixed(1));
      pct.textContent = Math.round(prob * 100) + '%';
      if (idx === ti) {
        circ.setAttribute('fill', '#e8f5e9');
        circ.setAttribute('stroke', '#5FA860');
        circ.setAttribute('stroke-width', '2.5');
        g.setAttribute('filter', 'url(#nn-glow)');
        bar.setAttribute('fill', '#5FA860');
        pct.setAttribute('fill', '#2e7d32');
      } else {
        circ.setAttribute('fill', '#f5f3f0');
        circ.setAttribute('stroke', '#c8c2bc');
        circ.setAttribute('stroke-width', '1.5');
        g.removeAttribute('filter');
        bar.setAttribute('fill', '#c8c2bc');
        pct.setAttribute('fill', '#9e9a95');
      }
    });
    var cards = document.getElementById('nn-cards');
    cards.innerHTML = '';
    candidates.forEach(function(c, i) {
      var prob = p[i], isTop = i === ti;
      var pctVal = Math.round(prob * 100);
      if (pctVal < 1 && !isTop) pctVal = '<1';
      var d = document.createElement('div');
      d.className = 'flex items-center gap-3 bg-surface-container-lowest border-2 rounded-xl px-4 py-2 text-sm transition-all';
      d.style.borderColor = isTop ? 'var(--success)' : 'var(--outline-variant,#e0e0e0)';
      d.innerHTML =
        '<div class="text-lg shrink-0">' + c.emoji + '</div>' +
        '<span class="font-bold text-on-surface text-sm shrink-0 w-10">' + c.word + '</span>' +
        '<div class="flex-grow h-1.5 rounded-full bg-surface-container-low overflow-hidden">' +
        '<div class="h-full rounded-full transition-all duration-300" style="width:' + Math.max(prob * 100, 1) + '%;background:' + (isTop ? 'var(--success)' : 'var(--primary)') + ';opacity:' + (isTop ? '1' : '0.3') + '"></div>' +
        '</div>' +
        '<div class="text-sm font-bold tabular-nums shrink-0 w-10 text-right" style="color:' + (isTop ? 'var(--on-success-container,#2e7d32)' : 'var(--on-surface-variant)') + '">' + pctVal + '%</div>';
      cards.appendChild(d);
    });
    var v = document.getElementById('nn-verdict');
    if (ti === 0 && p[0] >= 0.50) {
      v.textContent = verdicts.correct;
      v.style.cssText = 'background:rgba(95,168,96,.15);color:#2e7d32;border:1px solid rgba(95,168,96,.4)';
    } else if (ti === 0 && p[0] >= 0.35) {
      v.textContent = verdicts.onTrack;
      v.style.cssText = 'background:rgba(255,193,7,.15);color:#f57f17;border:1px solid rgba(255,193,7,.4)';
    } else if (ti === 0) {
      v.textContent = verdicts.barely;
      v.style.cssText = 'background:rgba(255,193,7,.12);color:#f9a825;border:1px solid rgba(255,193,7,.3)';
    } else if (ti === 1) {
      v.textContent = verdicts.close;
      v.style.cssText = 'background:rgba(255,152,0,.12);color:#e65100;border:1px solid rgba(255,152,0,.4)';
    } else {
      v.textContent = verdicts.wayOff;
      v.style.cssText = 'background:rgba(214,92,92,.12);color:#c62828;border:1px solid rgba(214,92,92,.4)';
    }
  }
  window.nnUpdate = function() { update(); };

  var training = false;
  window.nnStartAutoTrain = function() {
    if (training) return; training = true;
    var btn = document.getElementById('nn-autotrain-btn');
    btn.disabled = true;
    btn.innerHTML = '<span class="material-symbols-outlined text-lg animate-spin">progress_activity</span> ' + trainingLabel;
    document.getElementById('nn-feedback').classList.add('hidden');
    var target = [9, 1, 9];
    var jc = 0;
    var ji = setInterval(function() {
      jc++;
      for (var i = 1; i <= 3; i++) {
        var s = document.getElementById('nn-slider-' + i);
        s.value = Math.max(0, Math.min(10, +s.value + Math.floor(Math.random() * 5) - 2));
      }
      update();
      if (jc >= 12) { clearInterval(ji); converge(target); }
    }, 100);
  };

  function converge(tgt) {
    var steps = 0;
    var ci = setInterval(function() {
      steps++; var done = true;
      for (var i = 0; i < 3; i++) {
        var s = document.getElementById('nn-slider-' + (i + 1));
        var cur = +s.value;
        if (cur !== tgt[i]) { s.value = cur + (cur < tgt[i] ? 1 : -1); done = false; }
      }
      update();
      if (done || steps >= 30) {
        clearInterval(ci); training = false;
        var btn = document.getElementById('nn-autotrain-btn');
        btn.disabled = false;
        btn.innerHTML = '<span class="material-symbols-outlined text-lg">auto_fix_high</span> ' + autoTrainLabel;
        var fb = document.getElementById('nn-feedback');
        fb.classList.remove('hidden');
        fb.innerHTML = feedbackText;
      }
    }, 180);
  }

  buildTokens();
  buildSVG();
  update();
}
