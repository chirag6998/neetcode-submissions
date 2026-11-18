class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let left = 0;
        let maxMap = new Map();
        let maxArr = [];
        
        for (let right = 0; right < nums.length; right++) {
            let element = nums[right];
            for (let [key, val] of maxMap) {
                if (element >= val) {
                    maxMap.delete(key);
                }
            }
            
            maxMap.set(right, element);
            if (right - left + 1 === k) {
                let largest = -Infinity;
                for (let [key, val] of maxMap) {
                    largest = Math.max(largest, val)
                }
                maxArr.push(largest);
                if (maxMap.has(left)) {
                    maxMap.delete(left);
                }
                left = left + 1;
            }
        }

        return maxArr;
    }
}