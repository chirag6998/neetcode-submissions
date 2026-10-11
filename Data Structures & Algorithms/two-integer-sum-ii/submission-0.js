class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let start = 0
        let end = numbers.length - 1
        const result = []
        while (start !== end) {
            if (numbers[start] + numbers[end] > target) {
                end = end - 1;
            } else if (numbers[start] + numbers[end] < target) {
                start = start + 1;
            } else {
                result.push(start+1, end+1)
                break;
            }
        }
        return result;
    }
}
