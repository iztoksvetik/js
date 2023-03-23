/**
 * @param {string} s 
 * @returns string
 */
export default function firstNonRepeatingLetter(s) {
    for (let i = 0; i < s.length; i++) {
        if (!(s.toLowerCase().slice(0,i)+s.toLowerCase().slice(i+1)).includes(s[i].toLowerCase())) {
            return s[i];
        }
    }
    return '';
}
