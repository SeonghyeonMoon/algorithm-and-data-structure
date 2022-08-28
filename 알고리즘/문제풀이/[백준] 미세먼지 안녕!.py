import sys

sys.stdin = open("input.txt", "r")
input = sys.stdin.readline


R, C, T = map(int, input().split())
air_cleaner = []
room = []
for x in range(R):
    row = list(map(int, input().split()))
    for y in range(C):
        if row[y] == -1:
            air_cleaner.append(x)
    room.append(row)


def diffuse():
    global room
    new_room = [[0 for _ in range(C)] for _ in range(R)]
    for x in air_cleaner:
        new_room[x][0] = -1

    for x in range(R):
        for y in range(C):
            if room[x][y] == -1 or room[x][y] == 0:
                continue
            diffusion = room[x][y] // 5
            count = 0
            for dx, dy in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
                nx, ny = x + dx, y + dy
                if not (0 <= nx < R and 0 <= ny < C) or room[nx][ny] == -1:
                    continue
                new_room[nx][ny] += diffusion
                count += 1
            new_room[x][y] += room[x][y] - diffusion * count
    room = new_room


def circulate():
    x = air_cleaner[0]
    temp = 0
    for ny in range(1, C):
        room[x][ny], temp = temp, room[x][ny]
    for nx in range(x - 1, -1, -1):
        room[nx][C - 1], temp = temp, room[nx][C - 1]
    for ny in range(C - 2, -1, -1):
        room[0][ny], temp = temp, room[0][ny]
    for nx in range(1, x):
        room[nx][0], temp = temp, room[nx][0]

    x = air_cleaner[1]
    temp = 0
    for ny in range(1, C):
        room[x][ny], temp = temp, room[x][ny]
    for nx in range(x + 1, R):
        room[nx][C - 1], temp = temp, room[nx][C - 1]
    for ny in range(C - 2, -1, -1):
        room[R - 1][ny], temp = temp, room[R - 1][ny]
    for nx in range(R - 2, x, -1):
        room[nx][0], temp = temp, room[nx][0]


for _ in range(T):
    diffuse()
    circulate()

answer = 2
for x in range(R):
    for y in range(C):
        answer += room[x][y]
print(answer)
