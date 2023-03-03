# [백준] LCS 2

## 풀이

LCS 알고리즘을 그대로 쓰지만 숫자 대신 문자 자체를 저장하는 문제였다.

```js
const solution = () => {
  const [str1, str2] = [input(), input()];
  const [n, m] = [str1.length, str2.length];

  const dp = Array.from({ length : n + 1 }, () => Array(m + 1).fill(''));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + str1.at(i - 1);
        continue;
      }

      if (dp[i][j].length < dp[i - 1][j].length) {
        dp[i][j] = dp[i - 1][j];
      }

      if (dp[i][j].length < dp[i][j - 1].length) {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }

  const result = dp.at(-1).at(-1);
  console.log(result.length);
  console.log(result);
}

solution();
```