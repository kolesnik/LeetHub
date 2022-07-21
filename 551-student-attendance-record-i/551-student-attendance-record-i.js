/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let countA = 0;
    for (let i = 0; i < s.length && countA < 2; i++) {
        if(s.charAt(i) === 'A')
            countA++;
        if(i <= s.length - 3 && s.charAt(i) === 'L' && s.charAt(i + 1) === 'L' && s.charAt(i + 2) === 'L')
            return false;
    }
    return countA < 2;
};