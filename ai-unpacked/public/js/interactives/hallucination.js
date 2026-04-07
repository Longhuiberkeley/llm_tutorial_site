/**
 * Hallucination Interactive (chapter-04-02)
 * Shows AI confidently fabricating data.
 */
export function init(config) {
  window.hallAsk = function() {
    document.getElementById('hall-response').classList.remove('hidden');
    setTimeout(function() {
      document.getElementById('hall-truth').classList.remove('hidden');
    }, 1000);
  };
}
