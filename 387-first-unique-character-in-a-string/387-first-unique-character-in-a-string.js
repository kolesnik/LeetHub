/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
     
    if (s.length === 0)
        return -1;
    
    const unique = new Map();
    const notUnique = new Map();
    let i = 0;
    let uniq = new Set();
    for (let letter of s) {
        if(unique.has(letter)) {
            unique.delete(letter);
            notUnique.set(letter, true);
        } else if(!notUnique.has(letter)){
            unique.set(letter, i);
        }
        i++;
    }
    
    
    if(unique.size === 0)
        return -1;
    
    return unique.values().next().value;
};