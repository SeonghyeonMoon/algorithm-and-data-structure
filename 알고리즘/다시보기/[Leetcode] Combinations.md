# [Leetcode] [Combinations](https://leetcode.com/problems/combinations/submissions/)

```ts
const combine = (n: number, k: number): number[][] => {
  const numbers = Array.from({ length: n }, (_, i) => i + 1);

  const result: number[][] = [];
  const dfs = (start: number, end: number, path: number[]): void => {
    if (path.length === k) {
      result.push(path.slice());
      return;
    }
    for (let i = start; i <= end; i++) {
      path.push(numbers[i]);
      dfs(i + 1, end, path);
      path.pop();
    }
  };
  dfs(0, n - 1, []);

  return result;
};

console.log(combine(4, 2));
```

## 풀이

원본 배열을 numbers에 저장하고, DFS를 통해 조합을 구한다.
