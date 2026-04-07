/**
 * Jailbreak Reveal Interactive
 * Chapter 04-07: Hidden instruction attack demo (white-text-on-white)
 */
export function init() {
  var resume = document.getElementById('jb-resume');
  var revealed = false;

  resume.addEventListener('mouseup', function () {
    if (revealed) return;
    var selection = window.getSelection();
    if (selection && selection.toString().trim().length > 0) {
      jbShowSecret();
    }
  });

  resume.addEventListener('touchend', function () {
    if (revealed) return;
    setTimeout(function () {
      var selection = window.getSelection();
      if (selection && selection.toString().trim().length > 0) {
        jbShowSecret();
      }
    }, 300);
  });

  function jbShowSecret() {
    revealed = true;
    var secrets = document.querySelectorAll('.jb-secret');
    secrets.forEach(function (el) {
      el.style.background = 'var(--error-container)';
      el.style.color = 'var(--error)';
      el.style.padding = '2px 4px';
      el.style.borderRadius = '3px';
    });
    var ai = document.getElementById('jb-ai');
    if (ai) ai.classList.remove('hidden');
    var btn = document.getElementById('jb-btn');
    if (btn) btn.style.display = 'none';
  }

  window.jbShowSecret = jbShowSecret;
  window.jbReveal = function () { jbShowSecret(); };
}
