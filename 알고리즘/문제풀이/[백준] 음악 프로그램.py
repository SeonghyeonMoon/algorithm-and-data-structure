# nodemon --exec python3 main.py

from collections import defaultdict, deque
import sys

sys.setrecursionlimit(10**6)
sys.stdin = open("input.txt", "r")
def input(): return sys.stdin.readline().rstrip()


n, m = map(int, input().split())
indegree = [0 for _ in range(n + 1)]
graph = defaultdict(list)
for _ in range(m):
    order = list(map(int, input().split()))[1:]
    for i in range(len(order) - 1):
        indegree[order[i]] += 1
    for i in range(1, len(order)):
        graph[order[i]].append(order[i - 1])

queue = deque()
for i in range(n + 1):
    if indegree[i]:
        continue
    queue.append(i)

answer = []
while queue:
    node = queue.popleft()
    answer.append(node)
    for target in graph[node]:
        indegree[target] -= 1
        if indegree[target]:
            continue
        queue.append(target)

if len(answer) != n + 1:
    print(0)
else:
    print(*answer[:0:-1], sep='\n')
