# nodemon --exec python3 main.py

import sys

sys.setrecursionlimit(10**6)
sys.stdin = open("input.txt", "r")
def input(): return sys.stdin.readline().rstrip()


n, m = map(int, input().split())
memory = list(map(int, input().split()))
cost = list(map(int, input().split()))

total_memory = sum(memory)
total_cost = sum(cost)

dp = [0 for _ in range(total_memory - m + 1)]

for x in range(1, n + 1):
    for y in range(total_memory - m, 0, -1):
        if y < memory[x - 1]:
            continue
        else:
            dp[y] = max(dp[y], dp[y - memory[x - 1]] + cost[x - 1])

print(total_cost - dp[-1])
