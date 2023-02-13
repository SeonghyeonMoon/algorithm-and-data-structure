import sys
sys.stdin = open("input.txt", "r")
input = sys.stdin.readline


def recursion(prev):
    result = []
    padding = ' ' * (len(prev[-1]) // 2 + 1)
    for row in prev:
        result.append(padding + row + padding)
    for row in prev:
        result.append(row + ' ' + row)
    return result


N = int(input()) // 3
answer = ["  *  ", " * * ", "*****"]
while N > 1:
    answer = recursion(answer)
    N //= 2
print('\n'.join(answer))
