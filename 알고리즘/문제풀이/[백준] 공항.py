# nodemon --exec python3 main.py

import sys
sys.setrecursionlimit(10**6)
def input(): return sys.stdin.readline().rstrip()


def find(v):
    if parent[v] != v:
        parent[v] = find(parent[v])
    return parent[v]


g = int(input())
p = int(input())
parent = [i for i in range(g + 1)]


answer = 0
for _ in range(p):
    gate_range = find(int(input()))
    if gate_range == 0:
        break
    parent[gate_range] = gate_range - 1
    answer += 1

print(answer)
