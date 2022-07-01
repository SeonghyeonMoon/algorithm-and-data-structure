# [SW Expert Academy] [스도쿠 검증](https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AV5Psz16AYEDFAUq)

xor 활용해서 숫자 유무 확인

```py
T = int(input())
for test_case in range(1, T + 1):
    sudoku = [list(map(int, input().split())) for _ in range(9)]
    ck = False
    xor = 0
    for number in range(10):
        xor ^= number

    def check_vertically(y):
        temp = xor
        for x in range(9):
            temp ^= sudoku[x][y]
        return temp == 0

    def check_horizontally(x):
        temp = xor
        for y in range(9):
            temp ^= sudoku[x][y]
        return temp == 0

    def check_square(i):
        temp = xor
        x0, y0 = i // 3, i % 3
        for dx in range(3):
            for dy in range(3):
                temp ^= sudoku[x0 * 3 + dx][y0 * 3 + dy]
        return temp == 0

    for i in range(9):
        if check_vertically(i) and check_horizontally(i) and check_square(i):
            continue
        ck = True
        break

    print(f'#{test_case} {0 if ck else 1}')
```
