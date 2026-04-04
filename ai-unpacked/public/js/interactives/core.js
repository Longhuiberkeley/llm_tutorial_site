/**
 * LLM Tutorial Site - Core Interactive Engine
 * Shared utilities for SVG drawing, animations, and glow effects
 */

window.LLMInteractives = {
    /**
     * Draw a connecting line between two elements
     * @param {string} containerId - SVG container ID
     * @param {Element} el1 - Start element
     * @param {Element} el2 - End element
     * @returns {SVGLineElement}
     */
    drawLine: function(svgContainer, el1, el2) {
        const rect1 = el1.getBoundingClientRect();
        const rect2 = el2.getBoundingClientRect();
        const svgRect = svgContainer.getBoundingClientRect();

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', rect1.left + rect1.width / 2 - svgRect.left);
        line.setAttribute('y1', rect1.top + rect1.height / 2 - svgRect.top);
        line.setAttribute('x2', rect2.left + rect2.width / 2 - svgRect.left);
        line.setAttribute('y2', rect2.top + rect2.height / 2 - svgRect.top);
        line.setAttribute('class', 'connection-line');
        
        svgContainer.appendChild(line);
        return line;
    },

    /**
     * Add glow effect to an element
     * @param {Element} el 
     */
    addGlow: function(el) {
        el.classList.add('glow-pulse');
    },

    /**
     * Remove glow effect
     * @param {Element} el 
     */
    removeGlow: function(el) {
        el.classList.remove('glow-pulse');
    }
};
