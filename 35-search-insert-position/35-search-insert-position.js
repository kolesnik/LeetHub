/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0
    let end = nums.length - 1;
    
    while(start < end) {
        const mid = ~~((start + end)/2);
        if(nums[mid] === target)
            return mid;
        
        target > nums[mid] ? start = mid + 1: end = mid ;   
    }
    
    if(start === end)
        return nums[start] >= target? start: start + 1
};