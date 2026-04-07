/**
 * Confetti Celebration
 * Chapter 14-00: Course completion confetti burst
 */
export function init() {
  // Load the confetti library dynamically
  if (typeof confetti === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js';
    script.onload = function() { fireConfetti(); };
    document.head.appendChild(script);
  } else {
    fireConfetti();
  }

  function fireConfetti() {
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    setTimeout(function() { confetti({ particleCount: 60, angle: 60, spread: 55, origin: { x: 0 } }); }, 300);
    setTimeout(function() { confetti({ particleCount: 60, angle: 120, spread: 55, origin: { x: 1 } }); }, 500);
  }
}
