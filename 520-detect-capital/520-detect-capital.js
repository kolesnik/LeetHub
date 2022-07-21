/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let  count = 0;
    for (let i = 0; i < word.length; i++) {
        const c = word.charAt(i);
        if (c >= 'A' && c <= 'Z') {
            count ++;
        }
        if (!(count == 0 || (count == 1 && word.charAt(0) >= 'A' && word.charAt(0) <= 'Z') || count == i + 1)) {
            return false; 
        }
    }
    return true;
    
};