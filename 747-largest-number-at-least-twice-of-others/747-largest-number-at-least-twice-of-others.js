/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    //nums.sort((a,b) => a - b);
    let max1 = Math.max(nums[0], nums[1]);
    let max2 = Math.min(nums[0], nums[1]); 
    let res = nums[0] === max1 ? 0: 1 ;
    
    for(let i = 2; i < nums.length; i++) {
        if(nums[i] > max1) {
            max2 = max1;
            res = i;
            max1 = nums[i];
        } else if(nums[i] > max2) {
            max2 = nums[i];
        }
    }
    
    return max2 * 2 <= max1 ? res: -1
    
};