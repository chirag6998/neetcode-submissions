class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const spaceRemovedArray = s.replace(/[^0-9A-Za-z]/g, "").toLowerCase();
        const arrayLength = spaceRemovedArray.length;
        const loopLength = Math.round(arrayLength/2);

        for (let i = 0; i < loopLength; i++) {
            if(spaceRemovedArray[i] != spaceRemovedArray[arrayLength-(i+1)]) {
                return false;
            }
        }

        return true;
    }
}
