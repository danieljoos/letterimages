/*
 * Letter Images - Fallback Profile Images
 * https://github.com/danieljoos/letterimages
 */

/**
 * The available letterimages themes.
 */
export const themes = ['teal', 'blue', 'purple', 'orange', 'grey'];

/**
 * Resolves a theme from the given name.
 * This is a simple implementation of the DJB hash function.
 *
 * @param {string} name
 */
function resolveTheme(name) {
    var hash = 5381;
    for (var i = 0; i < name.length; ++i) {
        hash = ((hash << 5) + hash) + name.charCodeAt(i);
    }
    return themes[Math.abs(hash) % themes.length];
}

/**
 * Adds the letterimages theme classes to the class lists of the given elements.
 * An element is ignored if there is already a letterimages theme class set.
 * 
 * @param {NodeList} nodes - A list of letterimages DOM nodes.
 */
export function setThemeClasses(nodes) {
    nodes.forEach(node => {
        if (!(node instanceof HTMLElement)) { return; }
        const hasThemeClass = themes.reduce((res, theme) => {
            return res || node.classList.contains(`letterimages-${theme}`);
        }, false);
        if (hasThemeClass) { return; }
        const name = node.dataset.name || '?';
        const theme = resolveTheme(name);
        node.classList.add(`letterimages-${theme}`);
    });
}

/**
 * Sets the letterimages theme classes to all elements with the `letterimages` class.
 */
export default function letterimages() {
    setThemeClasses(document.querySelectorAll('.letterimages'));
}
