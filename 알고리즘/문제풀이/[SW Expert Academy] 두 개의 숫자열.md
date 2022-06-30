# [SW Expert Academy] [두 개의 숫자열](https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AV5PpoFaAS4DFAUq&categoryId=AV5PpoFaAS4DFAUq&categoryType=CODE&problemTitle=1959&orderBy=FIRST_REG_DATETIME&selectCodeLang=ALL&select-1=&pageSize=10&pageIndex=1#none)

```py
T = int(input())
for test_number in range(1, T + 1):
    N, M = map(int, input().split())
    A, B = list(map(int, input().split())), list(map(int, input().split()))
    if N < M:
        A, B, N, M = B, A, M, N
    answer = -float("INF")
    for i in range(N - M + 1):
        temp_sum = 0
        for a, b in zip(A[i : i + len(B)], B):
            temp_sum += a * b
        answer = max(answer, temp_sum)
    print(f"#{test_number} {answer}")
```
