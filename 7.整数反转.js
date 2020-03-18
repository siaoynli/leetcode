/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var flag = x < 0 ? true : false;

    var result = (flag ? -x : x).toString().split("").reverse().join("");
    var result = (flag ? -result : +result)

    var outRange = result > Math.pow(-2, 31) && result < (Math.pow(2, 31) - 1);

    return outRange ? result : 0;

};
// @lc code=end

console.log(reverse(153423))