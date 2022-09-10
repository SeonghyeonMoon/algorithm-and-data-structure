import sys

sys.stdin = open("input.txt", "r")
input = sys.stdin.readline
sys.setrecursionlimit(10**9)


def dfs(x, y):
    if cheeze[x][y] == 1:
        if (x, y) not in count_one:
            count_one.add((x, y))
        else:
            count_two.add((x, y))
        return
    if (x, y) in cache:
        return
    cache.add((x, y))
    for dx, dy in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
        nx, ny = x + dx, y + dy
        if 0 <= nx < N and 0 <= ny < M:
            dfs(nx, ny)


N, M = map(int, input().split())
cheeze = [list(map(int, input().split())) for _ in range(N)]
answer = -1
while True:
    answer += 1
    cache = set()
    count_one = set()
    count_two = set()
    dfs(0, 0)
    for x, y in count_two:
        cheeze[x][y] = 0
    if not count_two:
        print(answer)
        break
