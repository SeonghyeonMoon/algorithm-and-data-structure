const solution = (board) => {
  const height = board.length;
  const width = board[0].length;

  let maxLength = 0;

  for (let i = 0; i < height; i++) {
    if (board[i][0]) {
      maxLength = 1;
    }
  }

  for (let i = 1; i < width; i++) {
    if (board[0][i]) {
      maxLength = 1;
    }
  }

  for (let x = 1; x < height; x++) {
    for (let y = 1; y < width; y++) {
      if (board[x][y]) {
        board[x][y] =
          Math.min(board[x - 1][y - 1], board[x - 1][y], board[x][y - 1]) + 1;
        maxLength = Math.max(maxLength, board[x][y]);
      }
    }
  }

  return maxLength ** 2;
};

console.log(
  solution([
    [1, 0],
    [0, 0],
  ]),
);

console.log(
  solution([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
  ]),
);
