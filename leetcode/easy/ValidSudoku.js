/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const N = board.length;
  for (let i = 0; i < N; i++) {
    if (!isRowValid(board, i)) return false;
  }
  for (let j = 0; j < N; j++) {
    if (!isColumnValid(board, j)) return false;
  }
  for (let i = 0; i < N / 3; i++) {
    for (let j = 0; j < N / 3; j++) {
      if (!isSquareValid(board, i, j)) return false;
    }
  }

  return true;
};

function isRowValid(board, i) {
  const digits = new Set();
  for (let digit of board[i]) {
    if (digit === ".") continue;
    if (digits.has(digit)) return false;
    digits.add(digit);
  }
  return true;
}

function isColumnValid(board, j) {
  const digits = new Set();
  for (let i = 0; i < board.length; i++) {
    const digit = board[i][j];
    if (digit === ".") continue;
    if (digits.has(digit)) return false;
    digits.add(digit);
  }
  return true;
}

function isSquareValid(board, rowIndex, columnIndex) {
  const digits = new Set();
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const digit = board[3 * rowIndex + i][3 * columnIndex + j];
      if (digit === ".") continue;
      if (digits.has(digit)) return false;
      digits.add(digit);
    }
  }
  return true;
}
