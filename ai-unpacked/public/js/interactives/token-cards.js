/**
 * LLM Tutorial Site - Token Cards Interactive
 * Tap-to-reveal tokenization of sentences
 */

document.addEventListener('DOMContentLoaded', () => {
    initTokenCards();
});

function initTokenCards() {
    const cards = document.querySelectorAll('.token-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            flipCard(card);
        });
    });
}

function flipCard(card) {
    const isFlipped = card.classList.contains('flipped');

    if (isFlipped) {
        card.classList.remove('flipped');
        card.querySelector('.card-front').classList.remove('hidden');
        card.querySelector('.card-back').classList.add('hidden');
    } else {
        card.classList.add('flipped');
        card.querySelector('.card-front').classList.add('hidden');
        card.querySelector('.card-back').classList.remove('hidden');
    }
}

/**
 * Create a token card element
 * @param {string} sentence - The original sentence
 * @param {Array} tokens - Array of token objects with text and id
 */
function createTokenCard(sentence, tokens) {
    const card = document.createElement('div');
    card.className = 'token-card bg-surface-container-lowest rounded-xl p-6 cursor-pointer hover:shadow-md transition-all';

    const front = document.createElement('div');
    front.className = 'card-front';
    front.innerHTML = `<p class="text-xl font-medium text-center">${sentence}</p><p class="text-sm text-on-surface-variant text-center mt-2">Tap to see tokens</p>`;

    const back = document.createElement('div');
    back.className = 'card-back hidden';
    back.innerHTML = `<div class="flex flex-wrap gap-2 justify-center">${tokens.map(t => `<span class="bg-primary/10 px-3 py-1 rounded-full text-sm font-medium">${t.text}</span>`).join('')}</div>`;

    card.appendChild(front);
    card.appendChild(back);

    return card;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initTokenCards, createTokenCard };
}
