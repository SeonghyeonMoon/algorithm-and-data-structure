# nodemon --exec python3 main.py

from copy import deepcopy
import sys
sys.setrecursionlimit(10**6)
sys.stdin = open("input.txt", "r")
def input(): return sys.stdin.readline().rstrip()


def move(move_type, move_count, board):
    global answer
    if move_count == 5:
        for x in range(n):
            for y in range(n):
                answer = max(answer, board[x][y])
        return
    board = deepcopy(board)

    if move_type == 'left':
        for x in range(n):
            top = 0
            prev = 0
            for y in range(n):
                if not board[x][y]:
                    continue
                if not prev:
                    prev = board[x][y]
                elif prev == board[x][y]:
                    board[x][top] = prev * 2
                    top += 1
                    prev = 0
                else:
                    board[x][top] = prev
                    top += 1
                    prev = board[x][y]
                board[x][y] = 0
            board[x][top] = prev

    elif move_type == 'right':
        for x in range(n):
            top = -1
            prev = 0
            for y in range(n - 1, -1, -1):
                if not board[x][y]:
                    continue
                if not prev:
                    prev = board[x][y]
                elif prev == board[x][y]:
                    board[x][top] = prev * 2
                    top -= 1
                    prev = 0
                else:
                    board[x][top] = prev
                    top -= 1
                    prev = board[x][y]
                board[x][y] = 0
            board[x][top] = prev

    elif move_type == 'up':
        for y in range(n):
            top = 0
            prev = 0
            for x in range(n):
                if not board[x][y]:
                    continue
                if not prev:
                    prev = board[x][y]
                elif prev == board[x][y]:
                    board[top][y] = prev * 2
                    top += 1
                    prev = 0
                else:
                    board[top][y] = prev
                    top += 1
                    prev = board[x][y]
                board[x][y] = 0
            board[top][y] = prev

    elif move_type == 'down':
        for y in range(n):
            top = -1
            prev = 0
            for x in range(n - 1, -1, -1):
                if not board[x][y]:
                    continue
                if not prev:
                    prev = board[x][y]
                elif prev == board[x][y]:
                    board[top][y] = prev * 2
                    top -= 1
                    prev = 0
                else:
                    board[top][y] = prev
                    top -= 1
                    prev = board[x][y]
                board[x][y] = 0
            board[top][y] = prev

    for move_type in ['left', 'right', 'up', 'down']:
        move(move_type, move_count + 1, board)


n = int(input())
board = [list(map(int, input().split())) for _ in range(n)]
answer = 0

for type in ['left', 'right', 'up', 'down']:
    move(type, 0, board)

print(answer)
