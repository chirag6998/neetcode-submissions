class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if (matrix.length === 0) {
    return false;
}

        let nums = [];

        function findMatrix(firstIndex, lastIndex) {
            if (firstIndex > lastIndex) {
    return false;
}
            const middleElementIndex = Math.floor((lastIndex + firstIndex)/2)
            const matrixElement = matrix[middleElementIndex]
            const firstElement = matrixElement[0];
            const lastElement = matrixElement[matrixElement.length - 1]
            if (target > lastElement) {
                return findMatrix(middleElementIndex + 1, lastIndex);
            } else if (target < firstElement) {
                return findMatrix(firstIndex, middleElementIndex - 1);
            } else if (target == firstElement) {
                return true;
            } else if (target == lastElement) {
                return true;
            } else {
                
                nums = matrixElement;
                return binarySearch(0, nums.length - 1);
            }
        }

        function binarySearch(firstIndex, lastIndex) {
            if ((firstIndex == lastIndex && nums[firstIndex] != target) || firstIndex > lastIndex) {
                return false;
            }
            const pivotIndex = Math.floor((lastIndex + firstIndex)/2);
            if (nums[pivotIndex] == target) {
                return true;
            } else if (nums[pivotIndex] > target) {
                return binarySearch(firstIndex, pivotIndex - 1)
            } else {
                return binarySearch(pivotIndex + 1, nums.length - 1)
            }
        }

        return findMatrix(0, matrix.length - 1);
    }
}
