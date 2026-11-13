class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let prefixArray = [0];
        let prefixMaxHeight = 0;
        for (let i = 1; i < height.length; i++) {
            prefixMaxHeight = Math.max(prefixMaxHeight, height[i - 1]);
            prefixArray.push(prefixMaxHeight);
        }

        let suffixArray = new Array(height.length).fill(0);
        let suffixMaxHeight = 0;
        for (let i = height.length - 2; i >= 0; i--) {
            suffixMaxHeight = Math.max(suffixMaxHeight, height[i + 1]);
            suffixArray[i] = suffixMaxHeight;
        }

        let water = 0
        for (let i = 0; i < height.length; i++) {
            let minHeight = Math.min(prefixArray[i], suffixArray[i]);
            water += Math.max(0, minHeight - height[i]);
        }

        return water;
    }
}
