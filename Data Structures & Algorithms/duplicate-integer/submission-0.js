class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let newSet = new Set()
        for (let i of nums) {
            if (newSet.has(i)) {
                return true;
            } else newSet.add(i)
        }
        return false;
    }
}
