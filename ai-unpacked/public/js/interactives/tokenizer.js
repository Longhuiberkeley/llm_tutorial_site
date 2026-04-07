/**
 * Tokenizer Interactive (chapter-02-01)
 * Shows how LLMs see text as chunks (tokens), not words.
 */
export function init(config) {
  var palette = config.palette;
  var sentences = config.sentences;
  var tokenLabel = config.tokenLabel;

  function tkShow(idx) {
    for (var i = 0; i < sentences.length; i++) {
      var btn = document.getElementById('tk-btn-' + i);
      if (i === idx) {
        btn.style.backgroundColor = 'var(--primary)';
        btn.style.color = 'var(--on-primary)';
      } else {
        btn.style.backgroundColor = '';
        btn.style.color = '';
        btn.classList.add('bg-surface-container-highest', 'text-on-surface');
        btn.classList.remove('bg-primary', 'text-on-primary');
      }
    }
    var s = sentences[idx];
    document.getElementById('tk-original').textContent = s.original;
    var chips = document.getElementById('tk-chips');
    chips.innerHTML = '';
    s.tokens.forEach(function(tok, i) {
      var color = palette[i % palette.length];
      var chip = document.createElement('span');
      chip.className = 'inline-block rounded-md px-2 py-1 text-sm font-bold border';
      chip.style.backgroundColor = color.bg;
      chip.style.color = color.text;
      chip.style.borderColor = color.text + '33';
      chip.textContent = tok.startsWith(' ') ? '\u2423' + tok.trim() : tok;
      if (tok === ' ') chip.textContent = '\u2423';
      chips.appendChild(chip);
    });
    var count = s.tokens.length;
    document.getElementById('tk-count').textContent = count + ' ' + tokenLabel(count);
    document.getElementById('tk-note').innerHTML = s.note;
  }

  window.tkShow = tkShow;
  tkShow(0);
}
