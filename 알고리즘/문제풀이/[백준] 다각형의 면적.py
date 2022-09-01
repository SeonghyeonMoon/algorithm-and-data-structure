# 신발끈 공식

import sys

sys.stdin = open("input.txt", "r")
input = sys.stdin.readline
sys.setrecursionlimit(10**9)

N = int(input())
x_list = []
y_list = []
for _ in range(N):
    x, y = map(int, input().split())
    x_list.append(x)
    y_list.append(y)
x_list.append(x_list[0])
y_list.append(y_list[0])

answer = 0
for i in range(len(x_list) - 1):
    answer += x_list[i] * y_list[i + 1]
    answer -= x_list[i + 1] * y_list[i]

print(round(abs(answer) / 2, 1))
