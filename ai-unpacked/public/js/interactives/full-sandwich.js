/**
 * Full Sandwich Interactive (chapter-03-03)
 * Shows hidden prompt layers + conversation turns in the bundle.
 */
export function init(config) {
  var turns = config.turns;
  var totalTurns = config.totalTurns;
  var strings = config.strings;

  var fsdvPeeking = false;

  window.fsdvTogglePeek = function() {
    fsdvPeeking = !fsdvPeeking;
    var btn = document.getElementById('fsdv-peek-btn');
    ['fsdv-layer1-hidden', 'fsdv-layer2-hidden'].forEach(function(id) {
      document.getElementById(id).classList.toggle('hidden', fsdvPeeking);
    });
    ['fsdv-layer1-text', 'fsdv-layer2-text'].forEach(function(id) {
      document.getElementById(id).classList.toggle('hidden', !fsdvPeeking);
    });
    btn.textContent = fsdvPeeking ? strings.peekHide : strings.peekShow;
    btn.style.backgroundColor = fsdvPeeking ? 'var(--primary)' : 'var(--surface-container-lowest)';
    btn.style.color = fsdvPeeking ? 'var(--on-primary)' : 'var(--primary)';
  };

  var current = 0;

  window.fsdvNext = function() {
    if (current >= turns.length) return;
    var turn = turns[current];
    current++;

    // Update LEFT chat
    var chat = document.getElementById('fsdv-chat');
    var placeholder = chat.querySelector('p');
    if (placeholder) placeholder.remove();
    var userEl = document.createElement('div');
    userEl.className = 'flex justify-end';
    userEl.innerHTML = '<div class="rounded-2xl rounded-tr-sm px-4 py-2 text-sm font-medium shadow-sm max-w-[85%]" style="background-color: var(--primary); color: var(--on-primary);">' + turn.user + '</div>';
    chat.appendChild(userEl);
    var llmEl = document.createElement('div');
    llmEl.className = 'flex justify-start';
    llmEl.innerHTML = '<div class="rounded-2xl rounded-tl-sm px-4 py-2 text-sm shadow-sm max-w-[85%]" style="background-color: var(--surface-container); border: 1px solid var(--outline-variant);">' + turn.llm + '</div>';
    chat.appendChild(llmEl);

    // Update RIGHT bundle
    var ph = document.getElementById('fsdv-bundle-placeholder');
    if (ph) ph.remove();
    var turnsEl = document.getElementById('fsdv-turns');
    var userMsg = document.createElement('div');
    userMsg.className = 'rounded-lg px-3 py-2 text-xs border fsdv-flash';
    userMsg.style.backgroundColor = 'var(--surface-container-lowest)';
    userMsg.innerHTML = '<span class="font-bold text-[10px] uppercase tracking-widest opacity-50">' + strings.turnLabel(current) + ' \u2014 ' + strings.userLabel + '</span><div class="mt-0.5">' + turn.user + '</div>';
    turnsEl.appendChild(userMsg);
    var llmMsg = document.createElement('div');
    llmMsg.className = 'rounded-lg px-3 py-2 text-xs border fsdv-flash';
    llmMsg.style.backgroundColor = 'var(--surface-container-lowest)';
    llmMsg.innerHTML = '<span class="font-bold text-[10px] uppercase tracking-widest opacity-50">' + strings.turnLabel(current) + ' \u2014 LLM</span><div class="mt-0.5 opacity-70">' + turn.llm + '</div>';
    turnsEl.appendChild(llmMsg);

    // Show LLM section
    document.getElementById('fsdv-llm-section').classList.remove('hidden');
    document.getElementById('fsdv-output').textContent = strings.outputLabel;

    // Update controls
    document.getElementById('fsdv-counter').textContent = strings.counterLabel(current, totalTurns);
    var btn = document.getElementById('fsdv-btn');
    if (current >= turns.length) {
      btn.textContent = strings.allDoneLabel(totalTurns);
      btn.disabled = true;
      btn.style.opacity = '0.5';
    } else {
      btn.textContent = strings.sendLabel(current + 1);
    }
  };
}
