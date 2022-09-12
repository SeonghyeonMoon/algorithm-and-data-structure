import sys

sys.stdin = open("input.txt", "r")
input = sys.stdin.readline

n = int(input())

rgb = []
for _ in range(n):
    rgb.append(list(map(int, input().split())))

dp = [[[float('inf') for _ in range(3)] for _ in range(n)] for _ in range(3)]
for start_color in range(3):
    dp[start_color][0][start_color] = rgb[0][start_color]

for start_color in range(3):
    for x in range(1, n):
        for y in range(3):
            dp[start_color][x][y] = min(
                dp[start_color][x - 1][:y] + dp[start_color][x - 1][y + 1:]) + rgb[x][y]

for start_color in range(3):
    dp[start_color][-1][start_color] = float('inf')

print(min(*dp[0][-1], *dp[1][-1], *dp[2][-1]))
