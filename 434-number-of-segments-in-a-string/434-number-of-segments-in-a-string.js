/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    const words = s.trim().split(/\s+/)
    return s.trim() === "" ? 0: words.length;
};