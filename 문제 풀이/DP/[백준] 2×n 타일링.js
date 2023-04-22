// [백준] [2×n 타일링](https://www.acmicpc.net/problem/11726)

// 분류
// - DP

// 풀이

// 전형적인 DP문제로 점화식을 세워 문제를 해결해야한다.
// f(n) = n칸의 길이의 타일을 놓는 방법의 수라고 할 때,
// f(n) = f(n - 1) * f(1) + f(n - 2) * f(2) 라고 생각할 수 있지만, 이는 중복이 발생한다.
// 중복이란 n-1칸의 길이의 타일에 2x1 블럭을 추가하는 경우와 n-2칸의 길이의 타일에 2x1 블럭 2개를 추가하는 경우이다.
// 중복을 제거하면 f(n) = f(n - 1) * f(1) + f(n - 2) * (f(2) - 1)이 된다.
// 그래서 2×n 타일링 문제의 경우 f(n) = f(n - 1) + f(n - 2)이 성립한다(f(2) = 2).

{
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
  let stdin = fs.readFileSync(filePath).toString().split('\n');
  const input = (() => {
    let line = 0;
    return () => stdin[line++].trim();
  })();

  const solution = (n) => {
    if (n === 1) return 1;
    let [a, b] = [1, 2];
    for (let i = 2; i < n; i++) {
      [b, a] = [(a + b) % 10007, b];
    }
    return b;
  };
}

// [백준] [2×n 타일링 2](https://www.acmicpc.net/problem/11727)

{
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
  let stdin = fs.readFileSync(filePath).toString().split('\n');
  const input = (() => {
    let line = 0;
    return () => stdin[line++].trim();
  })();

  const solution = (n) => {
    if (n === 1) return 1;
    let [a, b] = [1, 3];
    for (let i = 2; i < n; i++) {
      [b, a] = [(a * 2 + b) % 10007, b];
    }
    return b;
  };
}

// 풀이

// 2×n 타일링 2 문제의 경우 f(n) = f(n - 1) + f(n - 2) * 2가 성립한다(f(2) = 3).
