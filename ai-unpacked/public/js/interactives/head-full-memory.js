/**
 * Head Full Memory Interactive
 * Chapter 04-05: Memory distraction game + context window strategy switcher
 */
export function init(config) {
  const {
    math1Correct,
    math1Wrong,
    math2Correct,
    math2Wrong,
    math3Correct,
    math3Wrong,
    phoneCorrect,
    phoneWrong,
    humanCaption,
    baseConvo,
    truncRows,
    sumRow,
    slideRow,
    currentGenerating,
    strategyDescs
  } = config;

  function hfNext(step) {
    [1, 2, 3, 4, 5].forEach(function (s) {
      document.getElementById('hf-step-' + s).classList.add('hidden');
    });
    document.getElementById('hf-step-' + step).classList.remove('hidden');
  }

  function hfMath(btn, correct) {
    var allBtns = btn.closest('.grid').querySelectorAll('button');
    allBtns.forEach(function (b) { b.disabled = true; });
    var fb = document.getElementById('hf-math-feedback');
    if (correct) {
      btn.style.borderColor = 'var(--success, #388E3C)';
      btn.style.color = 'var(--success, #388E3C)';
      fb.style.color = 'var(--success, #388E3C)';
      fb.textContent = math1Correct;
    } else {
      btn.style.borderColor = 'var(--error)';
      btn.style.color = 'var(--error)';
      fb.style.color = 'var(--error)';
      fb.textContent = math1Wrong;
    }
    fb.classList.remove('hidden');
    setTimeout(function () { hfNext(3); }, 1800);
  }

  function hfMath2(btn, correct) {
    var allBtns = btn.closest('.grid').querySelectorAll('button');
    allBtns.forEach(function (b) { b.disabled = true; });
    var fb = document.getElementById('hf-math2-feedback');
    if (correct) {
      btn.style.borderColor = 'var(--success, #388E3C)';
      btn.style.color = 'var(--success, #388E3C)';
      fb.style.color = 'var(--success, #388E3C)';
      fb.textContent = math2Correct;
    } else {
      btn.style.borderColor = 'var(--error)';
      btn.style.color = 'var(--error)';
      fb.style.color = 'var(--error)';
      fb.textContent = math2Wrong;
    }
    fb.classList.remove('hidden');
    setTimeout(function () { hfNext(4); }, 1800);
  }

  function hfMath3(btn, correct) {
    var allBtns = btn.closest('.grid').querySelectorAll('button');
    allBtns.forEach(function (b) { b.disabled = true; });
    var fb = document.getElementById('hf-math3-feedback');
    if (correct) {
      btn.style.borderColor = 'var(--success, #388E3C)';
      btn.style.color = 'var(--success, #388E3C)';
      fb.style.color = 'var(--success, #388E3C)';
      fb.textContent = math3Correct;
    } else {
      btn.style.borderColor = 'var(--error)';
      btn.style.color = 'var(--error)';
      fb.style.color = 'var(--error)';
      fb.textContent = math3Wrong;
    }
    fb.classList.remove('hidden');
    setTimeout(function () { hfNext(5); }, 1800);
  }

  function hfPhone(btn, correct) {
    var allBtns = btn.closest('.grid').querySelectorAll('button');
    allBtns.forEach(function (b) { b.disabled = true; });
    var fb = document.getElementById('hf-phone-feedback');
    var caption = document.getElementById('hf-human-caption');
    if (correct) {
      btn.style.borderColor = 'var(--success, #388E3C)';
      btn.style.color = 'var(--success, #388E3C)';
      fb.style.color = 'var(--success, #388E3C)';
      fb.textContent = phoneCorrect;
    } else {
      btn.style.borderColor = 'var(--error)';
      btn.style.color = 'var(--error)';
      fb.style.color = 'var(--error)';
      fb.textContent = phoneWrong;
    }
    fb.classList.remove('hidden');
    caption.classList.remove('hidden');
  }

  function makeRow(role, text, style) {
    var prefix = role === 'user' ? '\uD83D\uDC64 ' : '\uD83E\uDD16 ';
    var base = 'rounded px-2 py-1 text-on-surface-variant';
    var extra = style || '';
    return '<div class="' + base + ' ' + extra + '">' + prefix + text + '</div>';
  }

  var hfContent = {
    trunc: {
      build: function () {
        var rows = [];
        truncRows.forEach(function (r) {
          rows.push('<div class="px-2 py-1 text-on-surface-variant opacity-30 line-through">' + r + '</div>');
        });
        rows.push('<div class="px-2 py-1 text-on-surface-variant opacity-40 line-through">' + baseConvo[2].text + '</div>');
        for (var i = 3; i < 9; i++) {
          rows.push(makeRow(baseConvo[i].role, baseConvo[i].text));
        }
        rows.push('<div class="rounded px-2 py-1 font-bold text-primary border border-primary/20 bg-primary/5">' + currentGenerating + '</div>');
        return rows;
      },
      desc: strategyDescs.trunc
    },
    sum: {
      build: function () {
        var rows = [];
        rows.push('<div class="rounded px-2 py-1 bg-primary/10 border border-primary/20 text-primary font-bold">' + sumRow + '</div>');
        for (var i = 4; i < 9; i++) {
          rows.push(makeRow(baseConvo[i].role, baseConvo[i].text));
        }
        rows.push('<div class="rounded px-2 py-1 font-bold text-primary border border-primary/20 bg-primary/5">' + currentGenerating + '</div>');
        return rows;
      },
      desc: strategyDescs.sum
    },
    slide: {
      build: function () {
        var rows = [];
        rows.push('<div class="rounded px-2 py-1 bg-primary/5 border border-primary/10 text-xs font-bold opacity-60 text-on-surface-variant">' + slideRow + '</div>');
        for (var i = 3; i < 9; i++) {
          rows.push(makeRow(baseConvo[i].role, baseConvo[i].text));
        }
        rows.push('<div class="rounded px-2 py-1 font-bold text-primary border border-primary/20 bg-primary/5">' + currentGenerating + '</div>');
        return rows;
      },
      desc: strategyDescs.slide
    }
  };

  function hfSwitch(type) {
    ['trunc', 'sum', 'slide'].forEach(function (t) {
      var btn = document.getElementById('hf-btn-' + t);
      if (t === type) {
        btn.classList.add('bg-primary', 'text-on-primary');
        btn.classList.remove('bg-surface-container-highest', 'text-on-surface');
      } else {
        btn.classList.add('bg-surface-container-highest', 'text-on-surface');
        btn.classList.remove('bg-primary', 'text-on-primary');
      }
    });
    var data = hfContent[type];
    document.getElementById('hf-tape').innerHTML = data.build().join('');
    document.getElementById('hf-tape-desc').textContent = data.desc;
  }

  // Expose to global scope for inline onclick handlers
  window.hfNext = hfNext;
  window.hfMath = hfMath;
  window.hfMath2 = hfMath2;
  window.hfMath3 = hfMath3;
  window.hfPhone = hfPhone;
  window.hfSwitch = hfSwitch;

  // Init default strategy
  hfSwitch('trunc');
}
