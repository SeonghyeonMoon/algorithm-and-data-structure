# Dynamic Programming

1. Kadane's Algorithm

## 관련 문제 풀이

1. 평범한 배낭(Knapsack)

```py
n, k = map(int, input().split())
stuff = [[]]

for _ in range(n):
    stuff.append(list(map(int, input().split())))

DP = [[0 for _ in range(k + 1)] for _ in range(n + 1)]

for i in range(1, n + 1):
    for j in range(1, k + 1):
        w = stuff[i][0]
        v = stuff[i][1]
        if j < w:
            DP[i][j] = DP[i - 1][j]
        else:
            DP[i][j] = max(v + DP[i - 1][j - w], DP[i - 1][j])
print(DP[n][k])
print(DP)
```

2. 거스름 돈

```py
def solution(n, money):
    answer = 0
    DP = [[0 for _ in range(n + 1)] for _ in range(len(money) + 1)]
    for i in range(len(money) + 1):
        DP[i][0] = 1

    for i in range(len(money)):
        for j in range(n + 1):
            if j < money[i]:
                DP[i + 1][j] = DP[i][j]
            else:
                DP[i + 1][j] = DP[i][j] + DP[i + 1][j - money[i]]

    return DP[-1][-1]
```

다른풀이

```py
def solution(n, money):
    arr = [1] + [0]*n
    for m in money:
        for i in range(m, n+1):
            arr[i] += arr[i-m]
    return arr.pop()
```
