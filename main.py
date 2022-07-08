import sys

sys.stdin = open("input.txt", "r")
input = sys.stdin.readline

print(1)

import sys
from collections import defaultdict

sys.stdin = open("input.txt")

T = int(input())

for test_case in range(1, T + 1):
    N, M, K = map(int, input().split())
    wall = [[0 for _ in range(N)] for _ in range(M)]
    color_counter = defaultdict(int)
    color_counter[0] = N * M

    def check():
        for x in range(x1, x2 + 1):
            for y in range(y1, y2 + 1):
                if wall[x][y] > m:
                    return False
        return True

    def convert(number, limit):
        if number < 0:
            return 0
        if number >= limit:
            return limit - 1
        return number

    for _ in range(K):
        x1, y1, x2, y2, m = map(int, input().split())
        x1, y1, x2, y2 = convert(x1, N), convert(y1, M), convert(x2, N), convert(y2, M)

        if not check():
            continue
        for x in range(x1, x2 + 1):
            for y in range(y1, y2 + 1):
                color_counter[wall[x][y]] -= 1
                color_counter[m] += 1
                wall[x][y] = m

    print(f'#{test_case} {max(color_counter.values())}')

