/**
 * LLM Tutorial Site - Attention Arrows Visualization
 * Show how words "attend" to each other in a sentence
 */

document.addEventListener('DOMContentLoaded', () => {
    initAttentionViz();
});

function initAttentionViz() {
    const vizContainer = document.querySelector('.attention-viz');

    if (!vizContainer) {
        console.log('Attention visualization not found on this page');
        return;
    }

    // Example sentence: "The cat sat on the mat"
    const sentence = [
        { word: 'The', id: 0 },
        { word: 'cat', id: 1 },
        { word: 'sat', id: 2 },
        { word: 'on', id: 3 },
        { word: 'the', id: 4 },
        { word: 'mat', id: 5 },
    ];

    // Attention weights (simplified)
    const attentionWeights = {
        1: [0, 0.1, 0.7, 0.1, 0, 0.1], // cat attends to...
        2: [0.1, 0.6, 0.1, 0.1, 0, 0.1], // sat attends to...
        5: [0.1, 0.3, 0.1, 0.2, 0.1, 0.2], // mat attends to...
    };

    // Create sentence display
    const sentenceEl = document.createElement('div');
    sentenceEl.className = 'flex gap-4 flex-wrap justify-center';

    sentence.forEach(token => {
        const tokenEl = document.createElement('span');
        tokenEl.className = 'text-2xl font-bold cursor-pointer hover:text-primary transition-colors';
        tokenEl.textContent = token.word;
        tokenEl.dataset.tokenId = token.id;

        tokenEl.addEventListener('mouseenter', () => showAttention(token.id));
        tokenEl.addEventListener('mouseleave', hideAttention);

        sentenceEl.appendChild(tokenEl);
    });

    vizContainer.appendChild(sentenceEl);
}

function showAttention(tokenId) {
    console.log(`Showing attention for token: ${tokenId}`);
    // In a full implementation, this would draw SVG arrows
    // showing which words this token "attends" to
}

function hideAttention() {
    console.log('Hiding attention visualization');
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initAttentionViz };
}
