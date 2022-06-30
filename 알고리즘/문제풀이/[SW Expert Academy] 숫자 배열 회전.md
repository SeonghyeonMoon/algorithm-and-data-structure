# [SW Expert Academy] [숫자 배열 회전](https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AV5Pq-OKAVYDFAUq)

따로 공간을 할당하지 않고 해결하고 싶어서 4개의 포인터를 잡아 회전시키는 방법을 사용하였다.

```py
from math import ceil

T = int(input())
for test_case in range(1, T + 1):
    N = int(input())
    procession = [list(map(int, input().split())) for _ in range(N)]
    answer = [[] for _ in range(N)]
    for _ in range(3):
        for x in range(N // 2):
            for y in range(ceil(N / 2)):
                x1, y1 = x, y
                x2, y2 = N - 1 - y1, x1
                x3, y3 = N - 1 - y2, x2
                x4, y4 = N - 1 - y3, x3

                (
                    procession[x1][y1],
                    procession[x2][y2],
                    procession[x3][y3],
                    procession[x4][y4],
                ) = (
                    procession[x2][y2],
                    procession[x3][y3],
                    procession[x4][y4],
                    procession[x1][y1],
                )

        for i in range(N):
            answer[i].append(''.join(map(str, procession[i])))

    print(f'#{test_case}')
    for row in answer:
        print(' '.join(row))
```
