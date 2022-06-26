import sys

sys.stdin = open("input.txt")
input = sys.stdin.readline


def find(A):
    if parent[A] != A:
        parent[A] = find(parent[A])
    return parent[A]


def union(A, B):
    A, B = find(A), find(B)
    if A == B:
        return
    parent[B] = find(A)
    count[A] = count[A] + count[B]


for _ in range(int(input())):
    parent = {}
    count = {}
    for _ in range(int(input())):
        A, B = input().split()
        if A not in parent:
            parent[A] = A
            count[A] = 1
        if B not in parent:
            parent[B] = B
            count[B] = 1
        union(A, B)
        print(count[find(A)])
