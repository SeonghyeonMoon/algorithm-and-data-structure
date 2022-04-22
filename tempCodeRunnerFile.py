def solution():
    n = int(input())
    if n == 1:
        return 1
    dp = [None for _ in range(n)]
    a, b = 1, 3
    for _ in range(n - 2):
        b, a = a * 2 + b, b
    return b

print(solution())