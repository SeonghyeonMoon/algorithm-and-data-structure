# [프로그래머스] [파괴되지 않은 건물](https://programmers.co.kr/learn/courses/30/lessons/92344)

## 알고리즘 분류

2차원 배열, imos알고리즘

## 풀이

누적합과 비슷한 imos 알고리즘으로 풀이

```js
const solution = (board, skill) => {
  const imos = Array.from(Array(board.length + 1), () => Array(board[0].length + 1).fill(0));

  for (let [type, r1, c1, r2, c2, degree] of skill) {
    degree = type === 1 ? -degree : degree;
    imos[r1][c1] += degree;
    imos[r1][c2 + 1] -= degree;
    imos[r2 + 1][c1] -= degree;
    imos[r2 + 1][c2 + 1] += degree;
  }

  for (let x = 0; x < board.length; x++) {
    let temp = 0;
    for (let y = 0; y < board[0].length; y++) {
      temp += imos[x][y];
      imos[x][y] = temp;
    }
  }

  for (let y = 0; y < board[0].length; y++) {
    let temp = 0;
    for (let x = 0; x < board.length; x++) {
      temp += imos[x][y];
      imos[x][y] = temp;
    }
  }

  let result = 0;
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[0].length; y++) {
      if (board[x][y] + imos[x][y] > 0) result++;
    }
  }

  return result;
}
```