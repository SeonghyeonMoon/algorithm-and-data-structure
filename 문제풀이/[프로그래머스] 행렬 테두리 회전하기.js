const initiateBoard = (rows, columns) =>
  Array.from({ length: rows }, (_, i) =>
    Array.from({ length: columns }, (_, j) => i * columns + j + 1),
  );

const rotateAndGetMinNumber = (board, query) => {
  const [x1, y1, x2, y2] = query.map((num) => num - 1);
  const temp = board[x1][y1];
  let min = temp;
  for (let i = x1; i < x2; i++) {
    board[i][y1] = board[i + 1][y1];
    min = Math.min(min, board[i][y1]);
  }
  for (let i = y1; i < y2; i++) {
    board[x2][i] = board[x2][i + 1];
    min = Math.min(min, board[x2][i]);
  }
  for (let i = x2; i > x1; i--) {
    board[i][y2] = board[i - 1][y2];
    min = Math.min(min, board[i][y2]);
  }
  for (let i = y2; i > y1; i--) {
    board[x1][i] = board[x1][i - 1];
    min = Math.min(min, board[x1][i]);
  }
  board[x1][y1 + 1] = temp;
  return min;
};

const solution = (rows, columns, queries) => {
  const board = initiateBoard(rows, columns);
  return queries.map((query) => rotateAndGetMinNumber(board, query));
};

console.log(
  solution(6, 6, [
    [2, 2, 5, 4],
    [3, 3, 6, 6],
    [5, 1, 6, 3],
  ]),
);
