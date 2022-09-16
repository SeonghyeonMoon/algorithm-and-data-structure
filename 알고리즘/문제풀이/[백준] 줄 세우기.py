# nodemon --exec python3 main.py
# 위상정렬

from collections import defaultdict, deque
import sys

sys.setrecursionlimit(10**6)
sys.stdin = open("input.txt", "r")
input = sys.stdin.readline

n, m = map(int, input().split())

indegree = [0 for _ in range(n + 1)]
graph = defaultdict(list)
for _ in range(m):
    a, b = map(int, input().split())
    indegree[b] += 1
    graph[a].append(b)

queue = deque()

for i in range(1, n + 1):
    if not indegree[i]:
        queue.append(i)

answer = []
while queue:
    node = queue.popleft()
    answer.append(node)
    for connectedNode in graph[node]:
        indegree[connectedNode] -= 1
        if not indegree[connectedNode]:
            queue.append(connectedNode)

print(' '.join(map(str, answer)))
