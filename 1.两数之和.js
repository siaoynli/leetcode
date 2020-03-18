/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var tmp = []
    for (let index in nums) {
        var dif = target - nums[index]
        var c = tmp[dif]
        if (c) {
            return [c, index]
        }
        tmp[nums[index]] = index
    }
    return []
};
// @lc code=end

console.log(twoSum([2, 7, 11, 15], 9))