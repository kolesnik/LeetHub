/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const fistRow = new Set('qwertyuiop'.split(''));
    const secondRow = new Set('asdfghjkl'.split(''));
    const thirdRow = new Set('zxcvbnm'.split(''));
    let result = [];
    
    words.forEach(word => {
        let first = true, second = true, third = true;
        const loverCase = word.toLowerCase();
        for(let i = 0; i < word.length && (first || second || third) ; i++) {
            if(first && !fistRow.has(loverCase.charAt(i)))
                first = false;
            if(second && !secondRow.has(loverCase.charAt(i)))
                second = false;
            
             if(third && !thirdRow.has(loverCase.charAt(i)))
                third = false;
        }
        
        if(first || second || third)
            result.push(word);
    });
    return result;
};