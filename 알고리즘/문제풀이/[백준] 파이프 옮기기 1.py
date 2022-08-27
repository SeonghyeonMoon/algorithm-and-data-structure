# BFS 문제로 예상 => DFS도 상관없다.
# Python에서 switch문 사용법 => match
# match문 pypy에서는 에러 발생
# 현재 방향이 모든 조건에 들어갈 필요가 없다 => match문 사용 X
# 90%에서 시간 초과 발생
# dp로 풀이 변경

import sys

sys.stdin = open("input.txt", "r")
input = sys.stdin.readline


def solution():
    N = int(input())
    house = [input().split() + ['1']
             for _ in range(N)] + [['1' for _ in range(N + 1)]]
    answer = 0

    def dfs(x, y, direction):
        nonlocal answer
        if x == y == N - 1:
            answer += 1
            return
        if house[x + 1][y] == house[x][y + 1] == house[x + 1][y + 1] == '0':
            dfs(x + 1, y + 1, 2)
        if direction != 1 and house[x][y + 1] == '0':
            dfs(x, y + 1, 0)
        if direction != 0 and house[x + 1][y] == '0':
            dfs(x + 1, y, 1)

    dfs(0, 1, 0)
    return print(answer)


# solution()


def solution2():
    N = int(input())
    house = [list(map(int, input().split())) for _ in range(N)]
    dp = [[[0 for _ in range(N)] for _ in range(N)] for _ in range(3)]
    dp[0][0][1] = 1

    for i in range(2, N):
        if house[0][i] == 0:
            dp[0][0][i] = dp[0][0][i - 1]

    for x in range(1, N):
        for y in range(1, N):
            if house[x][y] != 0:
                continue

            dp[0][x][y] = dp[0][x][y - 1] + dp[2][x][y - 1]
            dp[1][x][y] = dp[1][x - 1][y] + dp[2][x - 1][y]
            if house[x][y - 1] == house[x - 1][y] == 0:
                dp[2][x][y] = dp[0][x - 1][y - 1] + \
                    dp[1][x - 1][y - 1] + dp[2][x - 1][y - 1]

    print(sum(map(lambda x: x[-1][-1], dp)))


solution2()
