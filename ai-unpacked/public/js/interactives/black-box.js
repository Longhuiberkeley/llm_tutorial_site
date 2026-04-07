/**
 * Black Box Quiz (chapter-03-01)
 * Guess what happens inside the LLM black box.
 */
export function init(config) {
  var strings = config.strings;

  window.bbGuess = function(btn, isCorrect) {
    var opts = document.querySelectorAll('#bb-options .quiz-option');
    opts.forEach(function(o) { o.disabled = true; o.onclick = null; });
    if (isCorrect) {
      btn.classList.add('correct');
      document.getElementById('bb-fb-text').innerHTML = strings.correctFeedback;
    } else {
      btn.classList.add('wrong');
      opts.forEach(function(o) {
        if (o.textContent.trim().startsWith('\uD83C\uDFAF')) o.classList.add('correct');
      });
      document.getElementById('bb-fb-text').innerHTML = strings.wrongFeedback;
    }
    document.getElementById('bb-feedback').classList.remove('hidden');
  };
}
