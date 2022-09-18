# nodemon --exec python3 main.py

import sys

sys.setrecursionlimit(10**6)
sys.stdin = open("input.txt", "r")
def input(): return sys.stdin.readline().rstrip()


n = int(input())
ph = sorted(list(map(int, input().split())))

minSum = 3000000001
answer = []
for i in range(n - 2):
    l = i + 1
    r = n - 1
    while l < r:
        tempSum = ph[i] + ph[l] + ph[r]
        if abs(tempSum) < minSum:
            minSum = abs(tempSum)
            answer = [ph[i], ph[l], ph[r]]
        if tempSum < 0:
            l += 1
        else:
            r -= 1

print(' '.join(map(str, answer)))
