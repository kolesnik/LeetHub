/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0
    let right = s.length - 1
    
    while (left < right) {
        if (s[left] !== s[right]) {
            let even = s.substring(left, right)
            let odd = s.substring(left + 1, right + 1)
            return even === even.split('').reverse().join('') || odd === odd.split('').reverse().join('')
        } else {
            left++;
            right--
        }
    }
    
    return true;
};