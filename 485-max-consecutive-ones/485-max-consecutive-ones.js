/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let cur = 0;
    nums.forEach(num => {
        if(num === 1) {
            cur++;
            max = Math.max(max, cur);
        } else {
            cur = 0;
        }
    })
    
    return max;
    
};