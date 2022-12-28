const checkPop = (x, y, board) =>
  board[x][y] === board[x][y + 1] &&
  board[x][y] === board[x + 1][y] &&
  board[x][y] === board[x + 1][y + 1];

const addPopCandidate = (popCandidates, x, y) => {
  popCandidates.push([x, y]);
  popCandidates.push([x, y + 1]);
  popCandidates.push([x + 1, y]);
  popCandidates.push([x + 1, y + 1]);
};

const rearrange = (m, n, board) => {
  for (let y = 0; y < n; y++) {
    const stack = [];
    for (let x = m - 1; x >= 0; x--) {
      if (board[x][y] !== 0) {
        stack.push(board[x][y]);
      }
    }
    while (stack.length < m) {
      stack.push(0);
    }
    for (let x = 0; x < m; x++) {
      board[x][y] = stack.pop();
    }
  }
};

const countZero = (m, n, board) => {
  let result = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 0) {
        result++;
      }
    }
  }
  return result;
};

const solution = (m, n, board) => {
  for (let i = 0; i < m; i++) {
    board[i] = board[i].split('');
  }

  while (true) {
    const popCandidates = [];
    for (let x = 0; x < m - 1; x++) {
      for (let y = 0; y < n - 1; y++) {
        if (board[x][y] !== 0 && checkPop(x, y, board)) {
          addPopCandidate(popCandidates, x, y);
        }
      }
    }
    if (popCandidates.length === 0) {
      return countZero(m, n, board);
    }
    popCandidates.forEach(([x, y]) => {
      board[x][y] = 0;
    });
    rearrange(m, n, board);
  }
};

console.log(solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF']));
