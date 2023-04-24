// [백준] [계단 오르기](https://www.acmicpc.net/problem/2579)

// 분류
// - DP

// 풀이

// dp[i]: i번째 계단을 밟았을 때의 최대 점수
// case1: 전 계단을 밟은 경우
// case2: 전전 계단을 밟은 경우

{
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
  let stdin = fs.readFileSync(filePath).toString().split('\n');
  const input = (() => {
    let line = 0;
    return () => stdin[line++].trim();
  })();

  const solution = (n, scores) => {
    const dp = Array(n).fill(0);
    dp[0] = scores[0];
    dp[1] = scores[0] + scores[1];
    dp[2] = Math.max(scores[0], scores[1]) + scores[2];

    for (let i = 3; i < n; i++) {
      dp[i] = Math.max(dp[i - 2], dp[i - 3] + scores[i - 1]) + scores[i];
    }

    return dp[n - 1];
  };

  const n = Number(input());
  const scores = Array.from({ length: n }, () => +input());

  console.log(solution(n, scores));
}
