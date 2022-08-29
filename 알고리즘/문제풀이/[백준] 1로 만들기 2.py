from collections import deque
import sys

sys.stdin = open("input.txt", "r")
input = sys.stdin.readline


def solution():
    N = int(input())
    cache = set()
    queue = deque([(N, 0, [N])])
    while queue:
        now, count, numbers = queue.popleft()

        if now == 1:
            print(count)
            print(' '.join(map(str, numbers)))
            return

        if now in cache:
            continue
        cache.add(now)

        if now > 1:
            queue.append((now - 1, count + 1, numbers + [now - 1]))
        if now % 3 == 0:
            queue.append((now // 3, count + 1, numbers + [now // 3]))
        if now % 2 == 0:
            queue.append((now // 2, count + 1, numbers + [now // 2]))


solution()
