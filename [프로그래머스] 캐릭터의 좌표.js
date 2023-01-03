const move = {
  left: [-1, 0],
  up: [0, 1],
  right: [1, 0],
  down: [0, -1],
};

const isValidPosition = (x, y, board) => {
  const left = -(board[0] - 1) / 2;
  const top = (board[1] - 1) / 2;
  const right = (board[0] - 1) / 2;
  const bottom = -(board[1] - 1) / 2;

  return x >= left && x <= right && y >= bottom && y <= top;
};

const solution = (keyinput, board) =>
  keyinput.reduce(
    ([x, y], key) => {
      const [dx, dy] = move[key];
      const nx = x + dx;
      const ny = y + dy;
      return isValidPosition(nx, ny, board) ? [x + dx, y + dy] : [x, y];
    },
    [0, 0],
  );

console.log(solution(['left', 'right', 'up', 'right', 'right'], [11, 11]));
