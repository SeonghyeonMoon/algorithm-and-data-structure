# 지형 이동

## 풀이

```js
const solution = (land, height) => {
  const visited = Array.from({ length: land.length }, () => Array(land[0].length).fill(false));
  const minHeap = new MinHeap();
  minHeap.push([0, 0, 0]);

  let result = 0;

  const move = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  while (minHeap.length) {
    const [cost, x, y] = minHeap.pop();
    if (visited[x][y]) continue;
    visited[x][y] = true;
    result += cost;
    for (const [dx, dy] of move) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx < 0 || nx >= land.length || ny < 0 || ny >= land[0].length) continue;
      if (visited[nx][ny]) continue;
      const diff = Math.abs(land[x][y] - land[nx][ny]);
      if (diff <= height) {
        minHeap.push([0, nx, ny]);
      } else {
        minHeap.push([diff, nx, ny]);
      }
    }
  }

  return result;
}
```