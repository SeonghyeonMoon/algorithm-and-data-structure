[백준] [ACM Craft](https://www.acmicpc.net/problem/1005)

DFS에 max 개념을 추가한 풀이

```py
from collections import defaultdict

def solution():
    N, K = map(int, input().split())
    times = [None] + list(map(int, input().split()))
    graph = defaultdict(list)
    for _ in range(K):
        start, end = map(int, input().split())
        graph[end].append(start)

    def recursion(node):
        if node not in graph:
            return times[node]
        answer = []
        for next_node in graph[node]:
            answer.append(recursion(next_node))
        times[node] += max(answer)
        del graph[node]
        return times[node]

    print(recursion(int(input())))

for _ in range(int(input())):
    solution()
```
