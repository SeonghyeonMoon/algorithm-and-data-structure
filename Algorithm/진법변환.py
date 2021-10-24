# 10진수 > n진수
def convert(n, q):
    answer = ""
    while n > 0:
        n, mod = divmod(n, q)
        answer += str(mod)
    return answer[::-1]


# n진수 > 10진수
int(n, q)
