class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = nums.sort((a, b) => a - b);
        const result = [];

        for (let i = 0; i < sortedNums.length; i++) {
            if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
                continue;
            }
            let pointer1 = i + 1;
            let pointer2 = sortedNums.length - 1;
            let target = sortedNums[i] * -1;
            while(pointer1 < pointer2) {
                const sum = sortedNums[pointer1] + sortedNums[pointer2]
                if (sum < target) pointer1++;
                else if (sum > target) pointer2--;
                else {
                    result.push([sortedNums[i], sortedNums[pointer1], sortedNums[pointer2]]);
                    pointer1++;
                    pointer2--;

                    while (pointer1 < pointer2 && sortedNums[pointer1] == sortedNums[pointer1 - 1]) {
                        pointer1++;
                    }

                    while (pointer1 < pointer2 && sortedNums[pointer2] == sortedNums[pointer2 + 1]) {
                        pointer2--;
                    }
                }
            }
        }

        return result;
    }
}
