/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    let count = 0;
    s = s.replace(/-/g, '').toUpperCase().split("")
    for (let i = s.length - 1; i > 0; i--) {
        count++;
        if (count === k) {
            s.splice(i, 0, "-");
            count = 0;
        }
    }
    return s = s.join("");
};