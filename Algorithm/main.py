import sys

sys.stdin = open("input.txt")


from collections import deque

def solution(maps):
    dx, dy = [0, 1, 0, -1], [1, 0, -1, 0]
    queue = deque([[0, 0, 0]])
    while True:
        x, y, move = queue.popleft()
        if maps[x][y] == 0:
            continue
        maps[x][y] = 0
        if x == 5 and y == 5:
            return move
        for i in range(4):
            xx, yy = x + dx[i], y + dy[i]
            if not (0 <= xx <= 4 and 0 <= yy <= 4):
                continue
            queue.append([xx, yy, move + 1])                
    return -1

print(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]))
