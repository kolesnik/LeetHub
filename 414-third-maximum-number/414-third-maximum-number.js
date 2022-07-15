/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const uniq = new Set(nums);
    
    
    let res = Array.from(uniq).sort((a,b) => a - b);
    
    
    
    return  res.length > 2 ? res[res.length - 3]: res[res.length - 1];  
};