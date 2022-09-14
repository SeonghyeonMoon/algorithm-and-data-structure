# nodemon --exec python3 main.py

import sys

sys.setrecursionlimit(10**6)
sys.stdin = open("input.txt", "r")
input = sys.stdin.readline


def getPrimeNuber(n):
    ck = [False] * 2 + [True for i in range(n - 1)]
    for i in range(2, int((n + 1) ** 0.5) + 1):
        if ck[i]:
            for j in range(i * i, n + 1, i):
                ck[j] = False
    return [x for x in range(n + 1) if ck[x]]


n = int(input())
if n == 1:
    print(0)
    sys.exit()
primes = getPrimeNuber(n)
left = right = 0
tempSum = primes[0]
answer = 0

while True:
    if tempSum <= n:
        if tempSum == n:
            answer += 1
        right += 1
        if right >= len(primes):
            break
        tempSum += primes[right]
    elif tempSum > n:
        tempSum -= primes[left]
        left += 1

print(answer)
