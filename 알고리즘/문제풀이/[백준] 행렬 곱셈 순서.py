# nodemon --exec python3 main.py

import sys

sys.setrecursionlimit(10**6)
sys.stdin = open("input.txt", "r")
def input(): return sys.stdin.readline().rstrip()


n = int(input())
matrix = [list(map(int, input().split())) for _ in range(n)]

dp = [[float('inf') for _ in range(n)] for _ in range(n)]

for i in range(n):
    dp[i][i] = 0

for i in range(n - 1):
    dp[i][i + 1] = matrix[i][0] * matrix[i][1] * matrix[i + 1][1]

for diagonal in range(2, n):
    for i in range(n - diagonal):
        x = i
        y = i + diagonal
        for k in range(x, y):
            dp[x][y] = min(dp[x][y], dp[x][k] + dp[k+1][y] +
                           matrix[x][0] * matrix[k][1] * matrix[y][1])


print(dp[0][-1])
