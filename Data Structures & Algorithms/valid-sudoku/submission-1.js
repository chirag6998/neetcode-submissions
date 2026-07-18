class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        for (let row of board) {
            const rowSet = new Set()
            for (let element of row) {
                if (element !== ".") {
                    //check existing element
                    if (rowSet.has(element)) return false;
                    rowSet.add(element);
                }
            }
        }

        let j = 0;
        while (j < 9) {
            const colSet = new Set()
            for (let row of board) {
               if (row[j] !== ".") {
                    //check existing element
                    if (colSet.has(row[j])) return false
                    colSet.add(row[j])
                } 
            }
            j=j+1;
        }

        for (let boxRow = 0; boxRow < 9; boxRow += 3) {
        for (let boxCol = 0; boxCol < 9; boxCol += 3) {
            const boxSet = new Set();

            for (let i = boxRow; i < boxRow + 3; i++) {
                for (let j = boxCol; j < boxCol + 3; j++) {
                    const value = board[i][j];

                    if (value !== ".") {
                        if (boxSet.has(value)) return false;
                        boxSet.add(value);
                    }
                }
            }
        }
    }

        return true
    }
}
