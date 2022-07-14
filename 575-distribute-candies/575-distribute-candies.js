/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const candies = new Set(candyType);
    return Math.min(candies.size, candyType.length / 2);
};