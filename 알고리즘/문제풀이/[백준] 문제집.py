# nodemon --exec python3 main.py

from collections import defaultdict
import sys
sys.setrecursionlimit(10**6)
sys.stdin = open("input.txt", "r")
def input(): return sys.stdin.readline().rstrip()


n, m = map(int, input().split())
indegree = [0 for _ in range(n + 1)]
graph = defaultdict(list)

for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    indegree[b] += 1

answer = []
while len(answer) < n:
    for i in range(1, n + 1):
        if indegree[i] == 0:
            answer.append(i)
            for problem_number in graph[i]:
                indegree[problem_number] -= 1
            indegree[i] = 1
            break

print(*answer)
