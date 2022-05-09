# [백준][ac](https://www.acmicpc.net/problem/5430)

```py
from collections import deque
import sys
input = sys.stdin.readline

def solution():
    p = input().rstrip()
    n = int(input())
    numbers = deque(input()[1:-2].split(','))

    if n == 0:
        numbers = []
    is_reversed = False
    for function in p:
        if function == 'R':
            is_reversed = not is_reversed
        else:
            if not numbers:
                return 'error'
            if is_reversed:
                numbers.pop()
            else:
                numbers.popleft()
    if is_reversed:
        numbers.reverse()
    return f'[{",".join(numbers)}]'

T = int(input())
for _ in range(T):
    print(solution())
```
