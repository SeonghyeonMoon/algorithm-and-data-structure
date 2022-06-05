from heapq import heappop, heappush
import sys

# sys.stdin = open('input.txt')
input = sys.stdin.readline


def solution(land, height):
    N = len(land)
    visited = [[False for _ in range(N)] for _ in range(N)]
    moves = [(1, 0), (0, 1), (-1, 0), (0, -1)]

    queue = [(0, 0, 0)]
    visit_count = 0
    answer = 0
    while visit_count < N**2:
        cost, x, y = heappop(queue)
        if visited[x][y]:
            continue
        visited[x][y] = True
        visit_count += 1
        answer += cost
        for dx, dy in moves:
            nx, ny = x + dx, y + dy
            if not (0 <= nx < N and 0 <= ny < N):
                continue
            if abs(land[nx][ny] - land[x][y]) > height:
                heappush(queue, (abs(land[nx][ny] - land[x][y]), nx, ny))
            else:
                heappush(queue, (0, nx, ny))
    return answer


print(solution([[1, 4, 8, 10], [5, 5, 5, 5], [10, 10, 10, 10], [10, 10, 10, 20]], 3))
