# 지형 이동

## 1차 시도

DFS로 지형을 쪼갠 후 다른 지형끼리 최소의 경로를 탐색하려 했으나 비효율적이라고 생각되어 중지

```py
def solution(land, height):
    N = len(land)
    visited = [[False for _ in range(N)] for _ in range(N)]
    dx, dy = [1, 0, -1, 0], [0, 1, 0, -1]

    def DFS(x, y):
        stack = [[x, y]]
        while stack:
            x, y = stack.pop()
            if visited[x][y]:
                continue
            visited[x][y] = True
            for i in range(4):
                nx, ny = x + dx[i], y + dy[i]
                if (
                    (0 <= nx < N and 0 <= ny < N)
                    and not visited[nx][ny]
                    and abs(land[x][y] - land[nx][ny]) <= height
                ):
                    stack.append([nx, ny])

    count = 0
    for x in range(N):
        for y in range(N):
            if visited[x][y]:
                continue
            DFS(x, y)
            print(visited)
            count += 1
    print(count)
    return count

solution([[1, 4, 8, 10], [5, 5, 5, 5], [10, 10, 10, 10], [10, 10, 10, 20]], 3)
```

## 2차 시도

우선순위 큐를 통한 풀이

```py
from heapq import heappop, heappush

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
```
