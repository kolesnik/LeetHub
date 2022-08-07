/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const m = ~~((l + r) / 2);
    nums[m] > nums[r] ? l = m + 1: r = m;
  }
  return nums[l];
};