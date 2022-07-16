/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let mapIndex = new Map();
    const words = s.split(" ");
    if(words.length !== pattern.length)
        return false;
    
    
    for(let i = 0; i < words.length; i++){
         const word = words[i]
        if(!mapIndex.has(pattern[i] + 'p')) {
            mapIndex.set(pattern[i] + 'p', i);
        }
        if(!mapIndex.has(word)) {
            mapIndex.set(word, i);
        }
        
        if(mapIndex.get(pattern[i] + 'p') !== mapIndex.get(word))
            return false;            
    }
    return true;
};