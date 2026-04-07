/**
 * Training Stages Interactive (chapter-02-06)
 * Pre-training fill-in-the-blank + RLHF response picker.
 */
export function init(config) {
  var freqStyle = config.freqStyle;
  var ptData = config.ptData;
  var rlhfData = config.rlhfData;

  var ptCurrent = 0;
  var ptLastBtn = null;

  window.ptShow = function(idx) {
    ptCurrent = idx;
    ptLastBtn = null;
    for (var i = 0; i < 3; i++) {
      var btn = document.getElementById('pt-btn-' + i);
      if (i === idx) { btn.style.backgroundColor = 'var(--primary)'; btn.style.color = 'var(--on-primary)'; }
      else { btn.style.backgroundColor = ''; btn.style.color = ''; }
    }
    var d = ptData[idx];
    document.getElementById('pt-sentence-pre').textContent = d.pre + ' ';
    document.getElementById('pt-sentence-post').textContent = ' ' + d.post;
    var opts = document.getElementById('pt-options');
    opts.innerHTML = '';
    d.options.forEach(function(opt) {
      var b = document.createElement('button');
      b.className = 'py-3 px-4 rounded-xl border-2 border-outline-variant font-bold text-sm hover:border-primary transition-all active:scale-95 text-center';
      b.textContent = opt.word;
      b.onclick = function() { ptPick(opt, b); };
      opts.appendChild(b);
    });
    document.getElementById('pt-feedback').classList.add('hidden');
    document.getElementById('pt-feedback').textContent = '';
  };

  function ptPick(opt, btn) {
    var s = freqStyle[opt.freq];
    var fb = document.getElementById('pt-feedback');
    if (ptLastBtn && ptLastBtn !== btn) {
      ptLastBtn.style.borderColor = '';
      ptLastBtn.style.color = '';
      ptLastBtn.style.backgroundColor = '';
    }
    ptLastBtn = btn;
    btn.style.borderColor = s.border;
    btn.style.color = s.color;
    btn.style.backgroundColor = s.bg;
    fb.innerHTML = '<span class="font-bold">' + s.label + '</span> \u2014 ' + opt.note;
    fb.style.color = s.color;
    fb.style.backgroundColor = s.bg;
    fb.style.borderColor = s.border;
    fb.style.border = '1px solid ' + s.border;
    fb.classList.remove('hidden');
  }

  window.rlhfShow = function(idx) {
    for (var i = 0; i < 3; i++) {
      var btn = document.getElementById('rlhf-btn-' + i);
      if (i === idx) { btn.style.backgroundColor = 'var(--primary)'; btn.style.color = 'var(--on-primary)'; }
      else { btn.style.backgroundColor = ''; btn.style.color = ''; }
    }
    var d = rlhfData[idx];
    document.getElementById('rlhf-prompt').textContent = d.prompt;
    document.getElementById('rlhf-text-a').textContent = d.a.text;
    document.getElementById('rlhf-text-b').textContent = d.b.text;
    var ra = document.getElementById('rlhf-resp-a');
    var rb = document.getElementById('rlhf-resp-b');
    ra.style.borderColor = '';
    rb.style.borderColor = '';
    ra.style.backgroundColor = '';
    rb.style.backgroundColor = '';
    document.getElementById('rlhf-feedback').classList.add('hidden');
  };

  window.rlhfPick = function(choice) {
    var currentIdx = 0;
    [0, 1, 2].forEach(function(i) {
      var b = document.getElementById('rlhf-btn-' + i);
      if (b.style.backgroundColor && b.style.backgroundColor !== '') currentIdx = i;
    });
    var d = rlhfData[currentIdx];
    var ra = document.getElementById('rlhf-resp-a');
    var rb = document.getElementById('rlhf-resp-b');
    var fb = document.getElementById('rlhf-feedback');
    ra.style.borderColor = 'var(--outline-variant)';
    rb.style.borderColor = 'var(--outline-variant)';
    ra.style.backgroundColor = '';
    rb.style.backgroundColor = '';
    if (d.a.good) {
      ra.style.borderColor = 'var(--success, #388E3C)';
      ra.style.backgroundColor = 'color-mix(in srgb, #388E3C 5%, transparent)';
    }
    if (d.b.good) {
      rb.style.borderColor = 'var(--success, #388E3C)';
      rb.style.backgroundColor = 'color-mix(in srgb, #388E3C 5%, transparent)';
    }
    fb.textContent = d.feedback;
    fb.style.color = 'var(--on-surface)';
    fb.style.backgroundColor = 'color-mix(in srgb, var(--accent) 8%, transparent)';
    fb.classList.remove('hidden');
  };

  ptShow(0);
  rlhfShow(0);
}
