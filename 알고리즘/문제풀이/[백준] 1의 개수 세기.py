# nodemon --exec python3 main.py

import math
import sys
sys.setrecursionlimit(10**6)
sys.stdin = open("input.txt", "r")
def input(): return sys.stdin.readline().rstrip()


def solution(x):
    if x <= 0:
        return 0

    power = int(math.log2(x))
    next_power = 2 ** power
    if next_power == x:
        return power * x // 2 + 1

    diff = x - next_power
    return solution(next_power) + diff + solution(diff)


a, b = map(int, input().split())
print(solution(b) - solution(a - 1))
