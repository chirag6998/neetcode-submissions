class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            numsMap.set(nums[i], i);
        }
        for (let j = 0; j < nums.length; j++) {
            let element = numsMap.get(target - nums[j]);
            if (element && j !== element) {
                return [j, element];
            }
        }
    }
}
