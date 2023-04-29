// [프로그래머스] 가장 큰 사각형

// 분류
// - DP
// - 아이디어

// 풀이

const solution = (board) => {
  const h = board.length;
  const w = board[0].length;

  let maxLength = board[0][0];
  for (let i = 1; i < h; i++) {
    if (board[i][0] || board[0][i]) {
      maxLength = 1;
      break;
    }
  }

  for (let x = 1; x < h; x++) {
    for (let y = 1; y < w; y++) {
      if (board[x][y]) {
        board[x][y] = Math.min(board[x - 1][y - 1], board[x - 1][y], board[x][y - 1]) + 1;
        maxLength = Math.max(maxLength, board[x][y]);
      }
    }
  }

  return maxLength ** 2;
};
