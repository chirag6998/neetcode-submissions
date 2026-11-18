class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let left = 0;
        let have = 0;
        let tMap = new Map();

        for (let i = 0; i < t.length; i++) {
            tMap.set(t[i], (tMap.get(t[i]) || 0) + 1)
        }

        let need = tMap.size;
        let minLength = Infinity;
        let startIndex = 0;
        let sMap = new Map();

        for (let right = 0; right < s.length; right++) {
            sMap.set(s[right], (sMap.get(s[right]) || 0) + 1)
            if (tMap.has(s[right])) {
                if (tMap.get(s[right]) == sMap.get(s[right])) {
                    have = have + 1;
                }
                if (have === need) {
                    if (minLength > right - left + 1) {
                      startIndex = left;
                      minLength = right - left + 1
                    }
                    while (have === need) {
                        if (minLength > right - left + 1) {
                              startIndex = left;
                              minLength = right - left + 1
                            }
                        sMap.set(s[left], sMap.get(s[left]) - 1);
                        if (tMap.has(s[left]) && sMap.get(s[left]) < tMap.get(s[left])) have--;
                        left++;
                    }
                }
            }
        }

        return minLength === Infinity ? "" : s.substring(startIndex, startIndex + minLength);
    }
}
