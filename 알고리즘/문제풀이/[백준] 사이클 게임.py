# nodemon --exec python3 main.py

import sys

sys.setrecursionlimit(10**6)
sys.stdin = open("input.txt", "r")
input = sys.stdin.readline


def find(v):
    if parent[v] != v:
        parent[v] = find(parent[v])
    return parent[v]


def union(a, b):
    a = find(a)
    b = find(b)
    if a != b:
        if rank[a] < rank[b]:
            parent[a] = b
        else:
            parent[b] = a
            if rank[a] == rank[b]:
                rank[b] += 1


n, m = map(int, input().split())
parent = [i for i in range(n + 1)]
rank = [1 for _ in range(n + 1)]

for i in range(1, m + 1):
    s, e = map(int, input().split())
    if find(s) != find(e):
        union(s, e)
    else:
        print(i)
        break
else:
    print(0)
