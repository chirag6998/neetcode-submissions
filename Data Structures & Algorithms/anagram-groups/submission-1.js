class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const strsMap = new Map();
        for (const str of strs) {
            const sortedStr = str.split('').sort().join('');
            const mapVal = strsMap.get(sortedStr);
            if (mapVal) mapVal.push(str);
            else strsMap.set(sortedStr, [str])
        }
        return [...strsMap.values()]
    }
}
