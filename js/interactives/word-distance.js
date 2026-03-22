/**
 * LLM Tutorial Site - Word Distance Interactive
 * Hover over words to see connections in meaning-space
 */

document.addEventListener('DOMContentLoaded', () => {
    initWordDistanceDemo();
});

function initWordDistanceDemo() {
    // Find the word distance interactive element
    const demoContainer = document.querySelector('.word-distance-demo');

    if (!demoContainer) {
        console.log('Word distance demo not found on this page');
        return;
    }

    // Word data with predefined connections
    const words = [
        { id: 'lion', emoji: '🦁', x: 30, y: 40, connections: ['tiger', 'cat'] },
        { id: 'tiger', emoji: '🐯', x: 50, y: 35, connections: ['lion', 'cat'] },
        { id: 'cat', emoji: '🐱', x: 40, y: 60, connections: ['lion', 'tiger', 'pet'] },
        { id: 'pet', emoji: '🐾', x: 60, y: 55, connections: ['cat', 'dog'] },
        { id: 'dog', emoji: '🐕', x: 70, y: 45, connections: ['pet'] },
        { id: 'banana', emoji: '🍌', x: 20, y: 70, connections: [] },
        { id: 'car', emoji: '🚗', x: 80, y: 70, connections: [] },
    ];

    // Create word elements
    words.forEach(word => {
        const wordEl = document.createElement('div');
        wordEl.className = 'word-node absolute cursor-pointer transition-all hover:scale-110';
        wordEl.style.left = `${word.x}%`;
        wordEl.style.top = `${word.y}%`;
        wordEl.style.transform = 'translate(-50%, -50%)';
        wordEl.innerHTML = `<span class="text-4xl">${word.emoji}</span>`;
        wordEl.dataset.wordId = word.id;

        wordEl.addEventListener('mouseenter', () => showConnections(word.id));
        wordEl.addEventListener('mouseleave', hideConnections);

        demoContainer.appendChild(wordEl);
    });
}

function showConnections(wordId) {
    // Highlight connected words
    document.querySelectorAll('.word-node').forEach(node => {
        if (node.dataset.wordId === wordId) {
            node.classList.add('z-10');
        }
    });

    // Show connection lines (SVG would be ideal here)
    console.log(`Showing connections for: ${wordId}`);
}

function hideConnections() {
    document.querySelectorAll('.word-node').forEach(node => {
        node.classList.remove('z-10');
    });
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initWordDistanceDemo };
}
