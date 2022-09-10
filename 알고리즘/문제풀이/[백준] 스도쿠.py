import sys

sys.stdin = open("input.txt", "r")
input = sys.stdin.readline

sudoku = [list(map(int, list(input().rstrip()))) for _ in range(9)]
blank = []

for x in range(9):
    for y in range(9):
        if sudoku[x][y] == 0:
            blank.append((x, y))


def bt(n):
    if n == len(blank):
        for row in sudoku:
            print(*row, sep='')
        sys.exit()
    x, y = blank[n]
    s = [i for i in range(1, 10)]
    for i in range(9):
        if sudoku[x][i] in s:
            s.remove(sudoku[x][i])
        if sudoku[i][y] in s:
            s.remove(sudoku[i][y])
    b = x // 3
    c = y // 3
    for i in range(3):
        for j in range(3):
            if sudoku[i + b * 3][j + c * 3] in s:
                s.remove(sudoku[i + b * 3][j + c * 3])

    for i in s:
        sudoku[x][y] = i
        bt(n + 1)
    sudoku[x][y] = 0


bt(0)
for row in sudoku:
    print(''.join(map(str, row)))
