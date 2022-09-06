import sys

sys.stdin = open("input.txt", "r")
input = sys.stdin.readline
sys.setrecursionlimit(10**9)


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


N, M = map(int, input().split())
edges = []
for _ in range(M):
    A, B, C = map(int, input().split())
    edges.append((C, A, B))
edges.sort()

parent = [i for i in range(N + 1)]
rank = [1 for _ in range(N + 1)]

answer = 0
temp_last_cost = 0
for edge in edges:
    C, A, B = edge
    if find(A) != find(B):
        union(A, B)
        answer += C
        temp_last_cost = C

print(answer - temp_last_cost)
