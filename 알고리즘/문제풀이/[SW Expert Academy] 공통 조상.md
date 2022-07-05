# [SW Expert Academy] [공통 조상](https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AV15PTkqAPYCFAYD)

```py
from collections import defaultdict

for test_case in range(1, int(input()) + 1):
    V, E, A, B = map(int, input().split())
    parent = {}
    children = defaultdict(list)
    edges = list(map(int, input().split()))
    for index in range(0, 2 * E - 1, 2):
        parent[edges[index + 1]] = edges[index]
        children[edges[index]].append(edges[index + 1])

    parents_of_A = [A]
    node = A
    while node in parent:
        node = parent[node]
        parents_of_A.append(node)

    parents_of_B = [B]
    node = B
    while node in parent:
        node = parent[node]
        parents_of_B.append(node)

    nearest_parent = parents_of_A[-1]
    while parents_of_A[-1] == parents_of_B[-1]:
        nearest_parent = parents_of_A.pop()
        parents_of_B.pop()

    stack = [nearest_parent]
    size_of_sub_tree = 1
    while stack:
        node = stack.pop()
        stack.extend(children[node])
        size_of_sub_tree += len(children[node])

    print(f'#{test_case}', nearest_parent, size_of_sub_tree)
```