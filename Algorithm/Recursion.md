# Recursion(재귀)

## 관련 문제 풀이

1. 줄 서는 방법

1차 풀이
직접 하나씩 탐색 > 시간 초과
배열 담을 때 copy해야한다.

```py
def solution(n, k):
    arr = [x for x in range(n, 0, -1)]
    cnt = 1
    datas = [[]]
    while True:
        data = datas.pop()
        if len(data) == n:
            if cnt == k:
                return data
            else:
                cnt += 1
                continue
        for a in arr:
            if a in data:
                continue
            data.append(a)
            datas.append(data[:])
            data.pop()
```

2차 풀이
갯수만 factorial로 계산

```py
def solution(n, k):
    answer = []
    arr = [x for x in range(1, n + 1)]
    while n:
        num = math.factorial(n - 1)
        idx, k = divmod(k, num)
        if k == 0:
            answer.append(arr.pop(idx - 1))
        else:
            answer.append(arr.pop(idx))
        n -= 1
    return answer
```

최종 풀이

```py
def solution(n, k):
    answer = []
    arr = [x for x in range(1, n + 1)]
    while n:
        num = factorial(n - 1)
        idx = (k - 1) // num        
        answer.append(arr.pop(idx))
        k = k % num
        n -= 1
    return answer
```