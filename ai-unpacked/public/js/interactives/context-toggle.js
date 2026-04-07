/**
 * Context Toggle Interactive (chapter-02-04)
 * Visualizes what different token counts actually look like.
 */
export function init(config) {
  var capacityData = config.capacityData;

  window.updateCapacity = function(val) {
    document.querySelectorAll('.cap-btn').forEach(function(btn, idx) {
      if (idx === val) {
        btn.classList.add('bg-primary', 'text-on-primary', 'shadow-lg');
        btn.classList.remove('bg-surface-container-highest', 'text-on-surface');
      } else {
        btn.classList.add('bg-surface-container-highest', 'text-on-surface');
        btn.classList.remove('bg-primary', 'text-on-primary', 'shadow-lg');
      }
    });
    var data = capacityData[val];
    var visual = document.getElementById('capacity-visual');
    var title = document.getElementById('capacity-title');
    var desc = document.getElementById('capacity-desc');
    visual.style.transform = 'scale(0.8)';
    visual.style.opacity = '0';
    setTimeout(function() {
      visual.innerHTML = data.visual;
      title.innerHTML = data.title;
      desc.innerHTML = data.desc;
      title.style.color = data.color;
      visual.style.transform = 'scale(1.1)';
      visual.style.opacity = '1';
      setTimeout(function() {
        visual.style.transform = 'scale(1)';
      }, 150);
    }, 150);
  };
}
