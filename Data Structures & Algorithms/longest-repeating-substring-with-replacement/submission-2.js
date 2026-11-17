class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let maxF = new Map();
        let maxFreq = 0;
        let maxWindow = 0;

        for (let right = 0; right < s.length; right++) {
            maxF.set(s[right], (maxF.get(s[right]) || 0) + 1);
            maxFreq = Math.max(maxFreq, maxF.get(s[right]));
            let currentWindow = right - left + 1;
            let replacements = currentWindow - maxFreq;
            if (replacements > k) {
                maxF.set(s[left], maxF.get(s[left]) - 1);
                left++;
            }

            maxWindow = Math.max(maxWindow, right - left + 1);
        }

        return maxWindow;
    }
}
