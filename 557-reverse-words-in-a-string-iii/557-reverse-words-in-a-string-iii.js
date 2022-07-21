/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = s.split(' ');
    words.forEach((word, i) => {
        words[i] = word.split('').reverse().join('');
    });
    return words.join(' ');
};