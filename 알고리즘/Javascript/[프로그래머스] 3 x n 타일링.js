const sum = (arr) => arr.reduce((res, num) => res + num, 0);

const solution = (n) => {
  if (n % 2) return 0;
  n /= 2;
  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[1] = 3;
  dp[2] = 11;
  if (n < 3) return dp[n];
  for (let i = 3; i <= n; i++) {
    dp[i] = (3 * dp[i - 1] + sum(dp.slice(1, i - 1)) * 2 + 2) % 1000000007;
  }
  console.log(dp);
  return dp.at(-1);
};