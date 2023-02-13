# 로직 | 그리디 - 작은 가방부터 가장 비싼 보석을 넣어준다

# nodemon --exec python3 main.py

import sys
from heapq import heappop, heappush
sys.setrecursionlimit(10**6)
sys.stdin = open("input.txt", "r")
def input(): return sys.stdin.readline().rstrip()


n, k = map(int, input().split())
jewels = sorted([list(map(int, input().split())) for _ in range(n)])
bags = sorted([int(input()) for _ in range(k)])

lower_weight_jewels = []
answer = 0
for bag in bags:
    while jewels and jewels[0][0] <= bag:
        heappush(lower_weight_jewels, - heappop(jewels)[1])
    if lower_weight_jewels:
        answer -= heappop(lower_weight_jewels)
print(answer)
