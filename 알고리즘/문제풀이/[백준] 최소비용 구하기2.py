import heapq
from collections import defaultdict
import sys

sys.stdin = open("input.txt", "r")
input = sys.stdin.readline
sys.setrecursionlimit(10**9)


def dijkstra(start, end, V):
    distance = [float("inf")] * (V + 1)
    distance[start] = 0
    queue = [(0, start, [start])]
    while queue:
        cost, now, history = heapq.heappop(queue)
        if distance[now] < cost:
            continue
        if now == end:
            print(distance[end])
            print(len(history))
            print(' '.join(map(str, (history))))
            return
        for next_cost, next in graph[now]:
            total_cost = cost + next_cost
            if distance[next] > total_cost:
                distance[next] = total_cost
                heapq.heappush(
                    queue, (total_cost, next, history + [next]))


n = int(input())
m = int(input())
graph = defaultdict(list)
for _ in range(m):
    start, end, cost = map(int, input().split())
    graph[start].append((cost, end))
start, end = map(int, input().split())
dijkstra(start, end, n)
