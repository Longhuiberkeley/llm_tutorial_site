/**
 * LLM Tutorial Site - Tailwind CSS Configuration
 * Shared configuration for all pages
 */

window.tailwind = {
    config: {
        theme: {
            extend: {
                colors: {
                    // Semantic Colors linked to CSS Variables in css/main.css
                    "background": "var(--background)",
                    "on-surface": "var(--on-surface)",
                    "on-surface-variant": "var(--on-surface-variant)",
                    
                    "surface-container-lowest": "var(--surface-container-lowest)",
                    "surface-container-low": "var(--surface-container-low)",
                    "surface-container": "var(--surface-container)",
                    "surface-container-highest": "var(--surface-container-highest)",
                    
                    "primary": "var(--primary)",
                    "on-primary": "var(--on-primary)",
                    
                    "accent": "var(--accent)",
                    "accent-light": "var(--accent-light)",
                    "accent-dark": "var(--accent-dark)",
                    
                    "primary-fixed": "var(--primary-fixed)",
                    "on-primary-fixed": "var(--on-primary-fixed)",
                    
                    "secondary-container": "var(--secondary-container)",
                    "on-secondary-container": "var(--on-secondary-container)",
                    
                    "tertiary-container": "var(--tertiary-container)",
                    "on-tertiary-container": "var(--on-tertiary-container)",
                    
                    "error-container": "var(--error-container)",
                    "on-error-container": "var(--on-error-container)",
                    
                    "outline-variant": "var(--outline-variant)",
                    "outline": "var(--outline)",
                },
                fontFamily: {
                    "headline": ["Plus Jakarta Sans"],
                    "body": ["Manrope"],
                    "label": ["Manrope"]
                },
                borderRadius: {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
                },
            },
        },
    }
};
