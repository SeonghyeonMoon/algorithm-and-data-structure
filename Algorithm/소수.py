# 소수 판별(에라토스테네스의 체)

def get_prime_number(n):
    ck = [False] * 2 + [True for i in range(n - 1)]
    for i in range(2, int((n + 1) ** 0.5) + 1):
        if ck[i] == True:
            for j in range(i * i, n + 1, i):
                ck[j] = False
    return ck
