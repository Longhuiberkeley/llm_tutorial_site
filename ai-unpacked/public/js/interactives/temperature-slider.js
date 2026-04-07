/**
 * Temperature Slider Interactive (chapter-04-03)
 * Guessing game + creativity slider showing temperature effects.
 */
export function init(config) {
  var tempLevels = config.tempLevels;
  var warmupFeedback = config.warmupFeedback;

  window.tempSelect = function(word, pct, btn) {
    document.getElementById('temp-target').textContent = word;
    document.getElementById('temp-target').classList.remove('animate-pulse');
    var fb = document.getElementById('temp-warmup-feedback');
    fb.textContent = warmupFeedback;
    fb.classList.remove('hidden');
  };

  window.updateTemp = function(val) {
    var text = document.getElementById('temp-text');
    text.classList.add('opacity-0');
    setTimeout(function() {
      text.textContent = tempLevels[val];
      text.classList.remove('opacity-0');
    }, 200);
  };
}
