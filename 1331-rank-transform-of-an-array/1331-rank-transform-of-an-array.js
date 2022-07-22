/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let copy = [...Array.from(new Set(arr))];
    copy.sort((a, b) => Number(a) - Number(b));
    return arr.map((num) => copy.indexOf(num) + 1);
};