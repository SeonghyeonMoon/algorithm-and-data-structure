# nodemon --exec python3 main.py

from collections import defaultdict
import sys

sys.setrecursionlimit(10**6)
sys.stdin = open("input.txt", "r")
input = sys.stdin.readline

t = int(input())
n = int(input())
a = list(map(int, input().split()))
m = int(input())
b = list(map(int, input().split()))


aSubtotal = defaultdict(int)
for i in range(n):
    tempSum = a[i]
    aSubtotal[tempSum] += 1
    for j in range(i + 1, n):
        tempSum += a[j]
        aSubtotal[tempSum] += 1

bSubtotal = defaultdict(int)
for i in range(m):
    tempSum = b[i]
    bSubtotal[tempSum] += 1
    for j in range(i + 1, m):
        tempSum += b[j]
        bSubtotal[tempSum] += 1

answer = 0
for key, value in aSubtotal.items():
    pair = t - key
    if pair in bSubtotal:
        answer += value * bSubtotal[pair]

print(answer)