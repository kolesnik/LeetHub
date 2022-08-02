/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let n = nums.length;
        
    for(let i = 0; i < n; i++) {        
        for(let j = i+1; j < n; j++)
            if (nums[i] > nums[j]) {
                 const tmp = nums[i]; 
                 nums[i] = nums[j];
                 nums[j] = tmp;      
            }
        
    }
    
    return nums;
    
};