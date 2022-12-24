# nodemon --exec python3 main.py

from collections import defaultdict
from itertools import combinations
import sys
sys.setrecursionlimit(10**6)
sys.stdin = open("input.txt", "r")
def input(): return sys.stdin.readline().rstrip()


n, s = map(int, input().split())
integers = list(map(int, input().split()))

left_sum = defaultdict(int)
right_sum = defaultdict(int)

answer = 0
for i in range(1, n // 2 + 1):
    for combination in combinations(integers[:n // 2], i):
        combination_sum = sum(combination)
        if combination_sum == s:
            answer += 1
        left_sum[sum(combination)] += 1

for i in range(1, n - (n // 2) + 1):
    for combination in combinations(integers[n // 2:], i):
        combination_sum = sum(combination)
        if combination_sum == s:
            answer += 1
        answer += left_sum[s - sum(combination)]

print(answer)
