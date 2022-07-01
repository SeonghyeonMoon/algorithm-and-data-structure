# [SW Expert Academy] [보급로](https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AV15QRX6APsCFAYD&categoryId=AV15QRX6APsCFAYD&categoryType=CODE&problemTitle=%EB%B3%B4%EA%B8%89%EB%A1%9C&orderBy=FIRST_REG_DATETIME&selectCodeLang=ALL&select-1=&pageSize=10&pageIndex=1)

DP로 풀이 시도 > 실패 > 다익스트라로 풀이

```py
from heapq import heappop, heappush

T = int(input())
for test_case in range(1, T + 1):
    N = int(input())
    damages = [list(map(int, input().rstrip())) for _ in range(N)]
    distance = [[float('INF') for _ in range(N)] for _ in range(N)]
    distance[0][0] = 0
    heap = [(0, 0, 0)]
    while heap:
        cost, x, y = heappop(heap)
        if (x, y) == (N - 1, N - 1):
            print(f'#{test_case} {cost}')
            break
        for dx, dy in [(0, 1), (1, 0), (0, -1), (-1, 0)]:
            nx, ny = x + dx, y + dy
            if 0 <= nx < N and 0 <= ny < N:
                next_cost = cost + damages[nx][ny]
                if distance[nx][ny] > next_cost:
                    distance[nx][ny] = next_cost
                    heappush(heap, (next_cost, nx, ny))
```
