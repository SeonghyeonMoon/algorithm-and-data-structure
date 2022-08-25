# 연속 증가 배열을 정순, 역순으로 만들어서 두 배열의 인덱스의 합이 가장 큰 경우를 반환
# O(n^2)이라 시간 초과를 예상했지만 빠르게 통과되었다. => 조건이 1 ~ 1000이었다.

import sys

sys.stdin = open("input.txt", "r")
input = sys.stdin.readline
sys.setrecursionlimit(10**9)

N = int(input())
A = list(map(int, input().split()))

asc = [1 for _ in range(N)]
desc = [1 for _ in range(N)]

for i in range(1, N):
    for j in range(0, i):
        if A[i] > A[j] and asc[i] < asc[j] + 1:
            asc[i] = asc[j] + 1

for i in range(N - 2, -1, -1):
    for j in range(N - 1, i, -1):
        if A[i] > A[j] and desc[i] < desc[j] + 1:
            desc[i] = desc[j] + 1

answer = max([asc[i] + desc[i] for i in range(N)]) - 1
print(answer)

print('N', N)
print('A', A)
print('asc', asc)
print('desc', desc)
print('answer', answer)
