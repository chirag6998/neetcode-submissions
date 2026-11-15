class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let right = 0;
        let newSet = new Set();
        let maxLength = 0;

        for (let i = 0; i < s.length; i++) {
            if (newSet.has(s[i])) {
                while (newSet.has(s[i])) {
                    newSet.delete(s[left])
                    left = left + 1;
                }
            }
            newSet.add(s[i]);
            const newLength = right - left + 1
            if (newLength > maxLength) maxLength = newLength
            right = right + 1;
        }

        return maxLength;
    }
}
