import math
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


n = int(input())
stars = []
edges = []
for i in range(n):
    x, y = map(float, input().split())
    for star in stars:
        distance = math.sqrt((x - star[1]) ** 2 + (y - star[2]) ** 2)
        edges.append((distance, i, star[0]))
    stars.append((i, x, y))
edges.sort()

parent = [i for i in range(n)]
rank = [1 for _ in range(n)]

answer = 0
for edge in edges:
    cost, a, b = edge
    if find(a) != find(b):
        union(a, b)
        answer += cost

print(round(answer, 2))
