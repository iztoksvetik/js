/**
 * 
 * @param {[string]} walk 
 * @returns boolean
 */
export default function isValid(walk) {
    return  walk.length <= 10
            && walk.filter(x => x === 'n').length === walk.filter(x => x === 's').length
            && walk.filter(x => x === 'w').length === walk.filter(x => x === 'e').length;
            
}
