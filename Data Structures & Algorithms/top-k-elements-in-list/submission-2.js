class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numsMap = new Map();
        for (let num of nums) {
            if (numsMap.has(num)) numsMap.set(num, numsMap.get(num) + 1);
            else numsMap.set(num, 1)
        }
        const sortedKeys = [...numsMap.keys()].sort((a,b) => {
            return numsMap.get(b) - numsMap.get(a);
        })
        const result = [];
        for (let i = 0; i < k; i++) {
            result.push(sortedKeys[i]);
        }
        return result;
    }
}
