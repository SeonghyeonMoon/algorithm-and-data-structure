# [SW Expert Academy] [어디에 단어가 들어갈 수 있을까](https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AV5PuPq6AaQDFAUq)

```py
T = int(input())
for test_case in range(1, T + 1):
    N, K = map(int, input().split())
    puzzle = []
    for _ in range(N):
        puzzle.append(list(map(int, input().split())))

    def is_correct_position_by_horizontally(x, y):
        if (x == 0 or puzzle[x - 1][y] == 0) and x <= N - K:
            for i in range(K):
                if puzzle[x + i][y] == 0:
                    return False
            else:
                if x != N - K and puzzle[x + K][y] == 1:
                    return False
                return True

    def is_correct_position_by_vertically(x, y):
        if (y == 0 or puzzle[x][y - 1] == 0) and y <= N - K:
            for i in range(K):
                if puzzle[x][y + i] == 0:
                    return False
            else:
                if y != N - K and puzzle[x][y + K] == 1:
                    return False
                return True

    answer = 0
    for x in range(N):
        for y in range(N):
            if is_correct_position_by_horizontally(x, y):
                answer += 1
            if is_correct_position_by_vertically(x, y):
                answer += 1

    print(f'#{test_case} {answer}')
```
