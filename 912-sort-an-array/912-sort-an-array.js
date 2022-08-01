/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let n = nums.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(nums[j] < nums[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = nums[i]; 
             nums[i] = nums[min];
             nums[min] = tmp;      
        }
    }
   
    
    return nums;
    
    
};