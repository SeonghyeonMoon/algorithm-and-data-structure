# nodemon --exec python3 main.py

from bisect import bisect_left
import sys
sys.setrecursionlimit(10**6)
sys.stdin = open("input.txt", "r")
def input(): return sys.stdin.readline().rstrip()


n = int(input())
a = list(map(int, input().split()))

answer = [a[0]]

for i in range(1, n):
    if answer[-1] < a[i]:
        answer.append(a[i])
        continue

    index = bisect_left(answer, a[i])
    answer[index] = a[i]

print(len(answer))
