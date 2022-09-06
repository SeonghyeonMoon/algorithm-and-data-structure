import sys

sys.stdin = open("input.txt", "r")
input = sys.stdin.readline
sys.setrecursionlimit(10**9)


def find(v):
    if parent[v] != v:
        parent[v] = find(parent[v])
    return parent[v]


def union(a, b):
    global answer
    a = find(a)
    b = find(b)
    if a != b:
        if rank[a] < rank[b]:
            parent[a] = b
        else:
            parent[b] = a
            if rank[a] == rank[b]:
                rank[b] += 1


V, E = map(int, input().split())

parent = [0] * (V + 1)
for i in range(1, V + 1):
    parent[i] = i
rank = [1] * (V + 1)


edges = []
for _ in range(E):
    A, B, C = map(int, input().split())
    edges.append((C, A, B))
edges.sort()

answer = 0
for edge in edges:
    C, A, B = edge
    if find(A) != find(B):
        union(A, B)
        answer += C


print(answer)
