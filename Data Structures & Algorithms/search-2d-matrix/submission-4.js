
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

        function findMatrix(firstIndex, lastIndex) {

            if (firstIndex > lastIndex) {
                return false;
            }

            const middleElementIndex = Math.floor(
                (firstIndex + lastIndex) / 2
            );

            const matrixElement = matrix[middleElementIndex];

            const firstElement = matrixElement[0];
            const lastElement = matrixElement[matrixElement.length - 1];

            if (target > lastElement) {
                return findMatrix(middleElementIndex + 1, lastIndex);
            }

            if (target < firstElement) {
                return findMatrix(firstIndex, middleElementIndex - 1);
            }

            return binarySearch(
                matrixElement,
                0,
                matrixElement.length - 1
            );
        }

        function binarySearch(nums, firstIndex, lastIndex) {

            if (firstIndex > lastIndex) {
                return false;
            }

            const pivotIndex = Math.floor(
                (firstIndex + lastIndex) / 2
            );

            if (nums[pivotIndex] === target) {
                return true;
            }

            if (nums[pivotIndex] > target) {
                return binarySearch(nums, firstIndex, pivotIndex - 1);
            }

            return binarySearch(nums, pivotIndex + 1, lastIndex);
        }

        return findMatrix(0, matrix.length - 1);
    }
}
