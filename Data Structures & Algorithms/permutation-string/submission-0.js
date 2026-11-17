class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let s1Map = new Map();
        for (let i = 0; i < s1.length; i++) {
            s1Map.set(s1[i], (s1Map.get(s1[i]) || 0) + 1)
        }
        let left = 0;
        let currentFMap = new Map()
        for (let right = 0; right < s2.length; right++) {
            currentFMap.set(s2[right], (currentFMap.get(s2[right]) || 0) + 1)
            if (right - left + 1 > s1.length) {
                currentFMap.set(s2[left], currentFMap.get(s2[left]) - 1)
                left++
            }
            const windowSize = right - left + 1;
            if (windowSize == s1.length) {
                let isFrequencyMatched = true;
                for (let [key, value] of s1Map) {
                    if (currentFMap.has(key)) {
                        if (currentFMap.get(key) != value) {
                            isFrequencyMatched = false;
                        }
                    } else isFrequencyMatched = false
                }
                if (isFrequencyMatched) return true;
            }
        }

        return false;
    }
}
