/**
 * 
 * @param {string} str 
 * @returns bool
 */
export default function isogram(str) {
    const m = {};
    for (let letter of str.toLowerCase()) {
        m[letter] = m[letter] ? m[letter] + 1 : 1;
    }
    return !Object.values(m).some(i => i > 1);
}
