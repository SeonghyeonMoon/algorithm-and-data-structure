import sys

sys.stdin = open("input.txt", "r")
input = sys.stdin.readline

T = int(input())
for test_case in range(1, T + 1):
    N, M = map(int, input().split())
    flies = [[0 for _ in range(N + 1)]]
    for _ in range(N):
        flies.append([0] + list(map(int, input().split())))

    for x in range(1, N + 1):
        for y in range(1, N + 1):
            flies[x][y] += flies[x - 1][y] + flies[x][y - 1] - flies[x - 1][y - 1]

    answer = 0
    for x in range(M, N + 1):
        for y in range(M, N + 1):
            answer = max(answer, flies[x][y] - flies[x - M][y] - flies[x][y - M] + flies[x - M][y - M])
    for row in flies:
        print(row)
    print(f'#{test_case} {answer}')


