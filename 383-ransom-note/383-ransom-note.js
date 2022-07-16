/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let mapIndex = new Map();
    for(let i = 0; i < magazine.length; i++) {
         if(!mapIndex.has(magazine[i])) {
            mapIndex.set(magazine[i], 1);
        } else {
            mapIndex.set(magazine[i], mapIndex.get(magazine[i]) + 1);
        }
    }
    
     for(let i = 0; i < ransomNote.length; i++) {
         
        if(mapIndex.has(ransomNote[i]) && mapIndex.get(ransomNote[i]) > 0) {
            mapIndex.set(ransomNote[i],  mapIndex.get(ransomNote[i]) - 1);
        } else {
            return false
        }
     }
    
    return true;
};