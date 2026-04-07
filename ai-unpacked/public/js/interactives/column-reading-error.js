/**
 * Column Reading Error Interactive
 * Chapter 09-01: Two-column paper reading error demo (vegetative electron microscopy)
 */
export function init(config) {
  const { resultCorrect, resultWrong } = config;
  var currentMode = null;

  window.vcreSetMode = function(mode) {
    if (currentMode === mode) return;
    currentMode = mode;
    var btnCorrect = document.getElementById('vcre-btn-correct');
    var btnWrong = document.getElementById('vcre-btn-wrong');
    var criticalRow = document.getElementById('vcre-critical-row');
    var result = document.getElementById('vcre-result');
    var badge1 = document.getElementById('vcre-badge-1');
    var badge2 = document.getElementById('vcre-badge-2');
    var leftCells = document.querySelectorAll('.vcre-col-border-left');
    var rightCells = document.querySelectorAll('.vcre-col-border-right');

    if (mode === 'correct') {
      btnCorrect.classList.add('bg-primary', 'text-on-primary', 'shadow-lg');
      btnCorrect.classList.remove('bg-surface-container-highest', 'text-on-surface');
      btnWrong.classList.add('bg-surface-container-highest', 'text-on-surface');
      btnWrong.classList.remove('bg-primary', 'text-on-primary', 'shadow-lg');
      criticalRow.classList.remove('vcre-bad-mode');
      badge1.style.opacity = '1';
      badge2.style.opacity = '1';
      leftCells.forEach(function(el) { el.classList.add('vcre-col-active'); });
      rightCells.forEach(function(el) { el.classList.remove('vcre-col-active'); });
      result.innerHTML = resultCorrect;
      result.style.borderColor = 'var(--outline-variant)';
    } else {
      btnWrong.classList.add('bg-primary', 'text-on-primary', 'shadow-lg');
      btnWrong.classList.remove('bg-surface-container-highest', 'text-on-surface');
      btnCorrect.classList.add('bg-surface-container-highest', 'text-on-surface');
      btnCorrect.classList.remove('bg-primary', 'text-on-primary', 'shadow-lg');
      criticalRow.classList.add('vcre-bad-mode');
      badge1.style.opacity = '0';
      badge2.style.opacity = '0';
      leftCells.forEach(function(el) { el.classList.remove('vcre-col-active'); });
      rightCells.forEach(function(el) { el.classList.remove('vcre-col-active'); });
      result.innerHTML = resultWrong;
      result.style.borderColor = 'var(--error)';
    }
  };

  window.vcreSetMode('correct');
}
