/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let counter = new Map();
    
    let result = ''
    
    s.split('').forEach(char => {
        counter.has(char) ? counter.set(char, counter.get(char) + 1): counter.set(char, 1);
    });
    
    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        
        if(counter.get(char) === 0 || counter.get(char) === undefined) {
            result = char;
            break;
        } else {
            counter.set(char, counter.get(char) - 1);
        }
        
    }
    
    return result;
};