/**
 * @param {string} text 
 * @returns string
 */
export default function position(text) {
    return text.toLowerCase().split('').map(t => t.charCodeAt(0) - 96).filter(c => c > 0 && c < 27).join(' ');
}
