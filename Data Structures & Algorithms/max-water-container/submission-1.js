class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let pointer1 = 0;
        let pointer2 = heights.length - 1;
        let area = 0;

        while (pointer1 < pointer2) {
            const minIndex = heights[pointer1] > heights[pointer2] ? pointer2 : heights[pointer2] > heights[pointer1] ? pointer1 : pointer2;
            let currentArea = (pointer2 - pointer1) * heights[minIndex];

            if (currentArea > area) area = currentArea;
            if (minIndex == pointer1) pointer1++;
            else pointer2--;
        }

        return area;
    }
}
