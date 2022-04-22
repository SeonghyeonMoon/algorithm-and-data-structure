import sys
sys.stdin = open('input.txt')
input = sys.stdin.readline


n = int(input())

counter = {-1: 0, 0: 0, 1: 0}

graph = []
for _ in range(n):
    graph.append(list(map(int, input().split())))

def is_all_same(x, y, n):
    first_num = graph[x][y]
    for i in range(x, x + n):
        for j in range(y, y + n):
            if first_num != graph[i][j]:
                return 2
    return first_num

def solution(x, y, n):
    answer = is_all_same(x, y, n)
    if answer != 2:
        counter[answer] += 1
        return
    n //= 3
    for i in range(3):
        for j in range(3):
            solution(x + n * i, y + n * j, n)

solution(0, 0, n)
print(counter[-1])
print(counter[0])
print(counter[1])