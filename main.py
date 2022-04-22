import sys
sys.stdin = open('input.txt')
input = sys.stdin.readline

def solution(n):
    if n == 1: return 1
    a, b = 1, 3
    for _ in range(n - 2):
        b, a = (a * 2 + b) % 10007, b
    return b

print(solution(int(input())))