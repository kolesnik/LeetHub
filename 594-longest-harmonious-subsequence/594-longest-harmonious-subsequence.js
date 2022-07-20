/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let hashMap = new Map();
    let res = 0;
    nums.forEach( num => {
        hashMap.set(num, hashMap.has(num) ? hashMap.get(num) + 1: 1);
    });
    
    hashMap.forEach((val, key) => {
        if(hashMap.has(key + 1))
            res = Math.max(res, val + hashMap.get(key+1));  
    });
    
    return res;
};