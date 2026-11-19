class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if (nums[0] > target) return -1;
        function binarySearch(firstIndex, lastIndex) {
            if (firstIndex == lastIndex && nums[firstIndex] != target) {
                return -1;
            }
            const pivotIndex = Math.floor((lastIndex + firstIndex)/2);
            if (nums[pivotIndex] == target) {
                return pivotIndex;
            } else if (nums[pivotIndex] > target) {
                return binarySearch(firstIndex, pivotIndex - 1)
            } else {
                return binarySearch(pivotIndex + 1, nums.length - 1)
            }
        }
        return binarySearch(0, nums.length - 1, target);
    }
}