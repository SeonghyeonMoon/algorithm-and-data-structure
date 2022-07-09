# Union Find

## 경로 압축(Path Compression)
## Union by rank

```py
def find(parent, v):
    if parent[v] != v:
        parent[v] = find(parent[v])
    return parent[v]


def union(parent, a, b):
    a = find(a)
    b = find(b)
    if a != b:
        if rank[a] < rank[b]:
            parent[a] = b
        else:
            parent[b] = a
            if rank[a] == rank[b]:
                rank[b] += 1
```