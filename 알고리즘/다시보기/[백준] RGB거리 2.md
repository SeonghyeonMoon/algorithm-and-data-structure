# [백준] RGB거리 2

```js
const solution = () => {
  const n = +input();
  const cost = Array.from({ length: n }, () => input().split(' ').map(Number));

  let result = Infinity;
  for (let i = 0; i < 3; i++) {
    let acc = cost[1].map((c) => c + cost[0][i]);
    acc[i] = Infinity;
    for (let j = 2; j < n; j++) {
      acc = cost[j].map((c, idx) => c + Math.min(acc[(idx + 1) % 3], acc[(idx + 2) % 3]));
    }
    result = Math.min(result, acc[(i + 1) % 3], acc[(i + 2) % 3]);
  }

  return result;
}

console.log(solution());

```