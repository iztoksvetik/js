/**
 * @param {string} str 
 * @returns string
 */
export default function toCamelCase(str){
    let words = str.split(/[-_]/i);
    return words[0] + words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).slice(1).join('');
}
