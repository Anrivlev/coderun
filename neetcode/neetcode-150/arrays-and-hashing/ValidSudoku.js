class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const m = board.length;
    const n = board[0].length;
    for (let i = 0; i < m; i++) {
      if (!this.isValidRow(board[i])) return false;
    }
    for (let j = 0; j < n; j++) {
      if (!this.isValidColumn(board, j)) return false;
    }
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (!this.isValidSquare(board, i, j)) return false;
      }
    }
    return true;
  }

  isValidRow(row) {
    const unique = new Set();
    for (const elem of row) {
      if (elem === ".") continue;
      if (unique.has(elem)) return false;
      unique.add(elem);
    }
    return true;
  }

  isValidColumn(board, columnIndex) {
    const unique = new Set();
    for (let i = 0; i < board.length; i++) {
      const elem = board[i][columnIndex];
      if (elem === ".") continue;
      if (unique.has(elem)) return false;
      unique.add(elem);
    }
    return true;
  }

  isValidSquare(board, squareI, squareJ) {
    const unique = new Set();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const elem = board[squareI * 3 + i][squareJ * 3 + j];
        if (elem === ".") continue;
        if (unique.has(elem)) return false;
        unique.add(elem);
      }
    }
    return true;
  }
}
