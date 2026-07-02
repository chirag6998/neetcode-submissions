class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefixArr = [1];
        for (let i = 0; i < nums.length - 1; i++) {
            prefixArr[i+1] = prefixArr[i] * nums[i];
        }
        let suffixArr = new Array(nums.length).fill(1);
        for (let i = nums.length - 1; i > 0; i--) {
            suffixArr[i-1] = suffixArr[i] * nums[i];
        }
        const result = [];
        for (let i = 0; i < suffixArr.length; i++) {
            result[i] = prefixArr[i] * suffixArr[i];
        }
        return result;
    }
}
