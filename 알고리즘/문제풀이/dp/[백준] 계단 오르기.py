# [백준] [계단 오르기](https://www.acmicpc.net/problem/2579)
# DP
# case1 : 전 계단 | case2 : 전전 계단

def solution():
    n = int(input())
    if n < 3:
        return sum([int(input()) for _ in range(n)])
    stair = [0] + [int(input()) for _ in range(n)]
    dp = [0 for _ in range(n + 1)]
    dp[1] = stair[1]
    dp[2] = stair[1] + stair[2]
    for i in range(3, n + 1):
        dp[i] = max(dp[i - 3] + stair[i - 1], dp[i - 2]) + stair[i]
    return dp[n]