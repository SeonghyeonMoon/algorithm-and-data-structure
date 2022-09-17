# nodemon --exec python3 main.py

import sys

sys.setrecursionlimit(10**6)
sys.stdin = open("input.txt", "r")
def input(): return sys.stdin.readline().rstrip()


def move(command, position):
    if position == command:
        return 1
    if position == 0:
        return 2
    if abs(position - command) != 2:
        return 3
    return 4


MAX = 400000
commands = list(map(int, input().split()))
commands.pop()
n = len(commands)
if n == 0:
    print(0)
    exit()

dp = [[[MAX + 1 for _ in range(5)] for _ in range(5)] for _ in range(n + 1)]
dp[-1][0][0] = 0

for i in range(n):
    for r in range(5):
        for k in range(5):
            add = move(commands[i], k)
            dp[i][commands[i]][r] = min(
                dp[i][commands[i]][r], dp[i - 1][k][r] + add)

    for l in range(5):
        for k in range(5):
            add = move(commands[i], k)
            dp[i][l][commands[i]] = min(
                dp[i][l][commands[i]], dp[i - 1][l][k] + add)
    print(dp[i])

m = MAX + 1
for l in range(5):
    for r in range(5):
        m = min(m, dp[n - 1][l][r])
print(m)
