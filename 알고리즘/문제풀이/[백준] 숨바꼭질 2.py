from collections import deque
import sys

sys.stdin = open("input.txt", "r")
input = sys.stdin.readline
sys.setrecursionlimit(10**9)


def solution():
    N, K = map(int, input().split())
    cache = {}
    queue = deque([(N, 0)])
    while queue:
        now, second = queue.popleft()

        if K in cache and second > cache[K]['second']:
            break

        if now not in cache:
            cache[now] = {'second': second, 'count': 0}
        elif cache[now]['second'] < second:
            continue
        cache[now]['count'] += 1

        if now > 0:
            queue.append((now - 1, second + 1))
        if now < K:
            queue.append((now + 1, second + 1))
            queue.append((now * 2, second + 1))

    print(cache[K]['second'])
    print(cache[K]["count"])


solution()
