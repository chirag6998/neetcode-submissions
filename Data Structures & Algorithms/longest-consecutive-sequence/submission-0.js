class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numsSet = new Set(nums)
        let longest = 0

        for (let num of numsSet) {
            if (!numsSet.has(num-1)) {
                let current = num;
                let length = 1;
                while (numsSet.has(current+1)) {
                    current++
                    length++
                }
                longest = Math.max(longest, length)
            }
        }
        return longest;
    }
}
