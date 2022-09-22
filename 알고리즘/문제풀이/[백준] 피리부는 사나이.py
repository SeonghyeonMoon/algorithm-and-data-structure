# nodemon --exec python3 main.py

import sys

sys.setrecursionlimit(10**6)
sys.stdin = open("input.txt", "r")
def input(): return sys.stdin.readline().rstrip()


def find_cycle(x, y):
    global answer
    visited = set()
    while True:
        if not graph[x][y]:
            for x, y in visited:
                graph[x][y] = False
            return
        if (x, y) in visited:
            answer += 1
            for x, y in visited:
                graph[x][y] = False
            return
        visited.add((x, y))
        dx, dy = move[graph[x][y]]
        x, y = x + dx, y + dy


n, m = map(int, input().split())
graph = [list(input()) for _ in range(n)]
move = {'D': (1, 0), 'L': (0, -1), 'U': (-1, 0), 'R': (0, 1)}
answer = 0
for x in range(n):
    for y in range(m):
        if graph[x][y]:
            find_cycle(x, y)

print(answer)
