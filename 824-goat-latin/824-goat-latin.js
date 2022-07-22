/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    const sol = sentence.split(" ").map((word, index) => {
        if ("aeiouAEIOU".includes(word[0])) {
            return word + "m" + "a".repeat(index + 2);
        } else {
            return word.slice(1) + word[0] + "m" + "a".repeat(index + 2);
        }
    });
    return sol.join(" ");
};