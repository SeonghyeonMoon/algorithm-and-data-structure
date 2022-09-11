import sys

sys.stdin = open("input.txt", "r")
input = sys.stdin.readline

N = int(input())
number = input().split()

dp = [[0 for _ in range(N)] for _ in range(N)]

for i in range(N):
    dp[i][i] = 1

for i in range(N - 1):
    if number[i] == number[i + 1]:
        dp[i][i + 1] = 1

for k in range(2, N):
    for x in range(N - k):
        y = k + x
        if dp[x + 1][y - 1] and number[x] == number[y]:
            dp[x][y] = 1

M = int(input())
for _ in range(M):
    S, E = map(int, input().split())
    print(dp[S - 1][E - 1])
