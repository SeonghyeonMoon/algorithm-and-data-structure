# [SW Expert Academy] [미로1](https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AV14vXUqAGMCFAYD&categoryId=AV14vXUqAGMCFAYD&categoryType=CODE&problemTitle=%EB%AF%B8%EB%A1%9C&orderBy=FIRST_REG_DATETIME&selectCodeLang=ALL&select-1=&pageSize=10&pageIndex=1)

```py
for _ in range(10):
    test_case = int(input())
    maze = []
    isPossible = False

    for x in range(16):
        row = list(map(int, input().rstrip()))
        for y in range(16):
            if row[y] == 2:
                start = (x, y)
            elif row[y] == 3:
                end = (x, y)
        maze.append(row)

    stack = [(start)]

    while stack:
        x, y = stack.pop()
        if (x, y) == end:
            isPossible = True
            break
        maze[x][y] = 1
        for dx, dy in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
            nx, ny = x + dx, y + dy
            if 0 <= nx < 16 and 0 <= ny < 16 and maze[nx][ny] != 1:
                stack.append((nx, ny))
    print(f'#{test_case} {1 if isPossible else 0}')
```
