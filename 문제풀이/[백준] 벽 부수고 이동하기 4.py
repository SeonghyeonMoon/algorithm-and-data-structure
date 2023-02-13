# nodemon --exec python3 main.py

import sys
sys.setrecursionlimit(10**6)
sys.stdin = open("input.txt", "r")
def input(): return sys.stdin.readline().rstrip()


def dfs(x, y):
    stack = [(x, y)]
    visited = set()
    while stack:
        x, y = stack.pop()
        if (x, y) in visited:
            continue
        visited.add((x, y))
        for dx, dy in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
            nx, ny = x + dx, y + dy
            if not (0 <= nx < n and 0 <= ny < m) or zido[nx][ny] != '0':
                continue
            stack.append((nx, ny))
    for x, y in visited:
        zido[x][y] = (len(visited), count)


n, m = map(int, input().split())
zido = [list(input()) for _ in range(n)]

count = 0
for x in range(n):
    for y in range(m):
        if zido[x][y] == '0':
            dfs(x, y)
            count += 1

for x in range(n):
    for y in range(m):
        if zido[x][y] == '1':
            temp = 1
            cache = set()
            for dx, dy in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
                nx, ny = x + dx, y + dy
                if not (0 <= nx < n and 0 <= ny < m) or zido[nx][ny] == '1':
                    continue
                if zido[nx][ny][1] in cache:
                    continue
                cache.add(zido[nx][ny][1])
                temp += zido[nx][ny][0]
            print(temp % 10, end='')
        else:
            print(0, end='')
    print()
