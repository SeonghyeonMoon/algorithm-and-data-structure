# Notation(진법)

## 10진수 > n진수
```py
def convert(n, q):
    answer = ""
    while n > 0:
        n, mod = divmod(n, q)
        answer += str(mod)
    return answer[::-1]
```

## n진수 > 10진수
```py
int(n, q)
```

## 관련 문제 풀이

1. 점프와 순간 이동(프로그래머스)  

0b100 / 2 = 0b10 처럼 자리수가 줄어든다. 
즉 마지막 자리가 1일 때 1을 빼고 진행하면 되므로 1의 갯수가 정답이 된다.  

```py
def solution(n):
  return bin(n).count('1')
```


2. 다음 큰 숫자(프로그래머스)

단순한 완전 탐색
```py
def solution(n):
    c = bin(n).count('1')
    for i in range(n+1,1000001):
        if bin(i).count('1') == c:
            return i
```
