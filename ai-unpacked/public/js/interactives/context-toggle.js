/**
 * LLM Tutorial Site - Context Toggle Interactive
 * Switch between two scenes to show how context changes meaning
 */

document.addEventListener('DOMContentLoaded', () => {
    initContextToggle();
});

function initContextToggle() {
    const toggleButtons = document.querySelectorAll('.context-toggle-btn');

    toggleButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const sceneId = e.currentTarget.dataset.scene;
            showScene(sceneId);
        });
    });
}

function showScene(sceneId) {
    // Hide all scenes
    document.querySelectorAll('.context-scene').forEach(scene => {
        scene.classList.add('hidden');
        scene.classList.remove('fade-in');
    });

    // Show selected scene
    const selectedScene = document.querySelector(`.context-scene[data-scene="${sceneId}"]`);
    if (selectedScene) {
        selectedScene.classList.remove('hidden');
        selectedScene.classList.add('fade-in');
    }

    // Update button states
    document.querySelectorAll('.context-toggle-btn').forEach(btn => {
        if (btn.dataset.scene === sceneId) {
            btn.classList.add('bg-primary', 'text-on-primary');
            btn.classList.remove('bg-surface-container', 'text-on-surface');
        } else {
            btn.classList.remove('bg-primary', 'text-on-primary');
            btn.classList.add('bg-surface-container', 'text-on-surface');
        }
    });
}

/**
 * Create a context toggle component
 * @param {string} id - Unique identifier for this toggle
 * @param {Array} scenes - Array of scene objects with id, title, and content
 */
function createContextToggle(id, scenes) {
    const container = document.createElement('div');
    container.className = 'context-toggle mb-8';
    container.id = id;

    // Create toggle buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'flex gap-2 mb-4';

    scenes.forEach((scene, index) => {
        const btn = document.createElement('button');
        btn.className = `context-toggle-btn px-4 py-2 rounded-lg font-medium transition-all ${index === 0 ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface'}`;
        btn.dataset.scene = scene.id;
        btn.textContent = scene.title;
        buttonContainer.appendChild(btn);
    });

    // Create scene content area
    const sceneContainer = document.createElement('div');
    sceneContainer.className = 'bg-surface-container-lowest rounded-xl p-6';

    scenes.forEach((scene, index) => {
        const sceneEl = document.createElement('div');
        sceneEl.className = `context-scene ${index === 0 ? '' : 'hidden'}`;
        sceneEl.dataset.scene = scene.id;
        sceneEl.innerHTML = scene.content;
        sceneContainer.appendChild(sceneEl);
    });

    container.appendChild(buttonContainer);
    container.appendChild(sceneContainer);

    return container;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initContextToggle, createContextToggle };
}
