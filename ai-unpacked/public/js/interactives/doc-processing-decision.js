/**
 * Document Processing Decision Interactive
 * Chapter 09-03: Click to explore trade-offs of document processing approaches
 */
export function init(config) {
  const { options, hintInitial, hintAfter } = config;

  window.docDecide = function(idx, btn) {
    var d = options[idx];
    document.querySelectorAll('.doc-opt-btn').forEach(function(b) {
      b.style.borderColor = '';
      b.style.backgroundColor = '';
    });
    btn.style.borderColor = 'var(--accent)';
    btn.style.backgroundColor = 'color-mix(in srgb, var(--accent) 6%, white)';
    document.getElementById('dd-icon').textContent = d.icon;
    document.getElementById('dd-title').textContent = d.title;
    document.getElementById('dd-subtitle').textContent = d.subtitle;
    document.getElementById('dd-how').textContent = d.how;
    var prosEl = document.getElementById('dd-pros');
    prosEl.innerHTML = '';
    d.pros.forEach(function(p) {
      var div = document.createElement('div');
      div.textContent = p;
      prosEl.appendChild(div);
    });
    var consEl = document.getElementById('dd-cons');
    consEl.innerHTML = '';
    d.cons.forEach(function(c) {
      var div = document.createElement('div');
      div.textContent = c;
      consEl.appendChild(div);
    });
    document.getElementById('dd-bestfit').textContent = d.bestfit;
    var panel = document.getElementById('doc-detail-panel');
    panel.classList.remove('hidden');
    setTimeout(function() {
      panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 50);
    document.getElementById('dd-hint').textContent = hintAfter;
  };
}
