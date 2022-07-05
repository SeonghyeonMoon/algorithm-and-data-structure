# [SW Expert Academy] [Contact](https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AV15B1cKAKwCFAYD)

```py
from collections import defaultdict

for test_case in range(1, 11):
    length, start_number = map(int, input().split())
    data = list(map(int, input().split()))
    graph = defaultdict(list)
    for index in range(0, length, 2):
        graph[data[index]].append(data[index + 1])
    queue = [start_number]
    visited = {start_number}
    answer = start_number
    while queue:
        temp_set = set()
        for node in queue:
            answer = node
            for next_node in graph[node]:
                if next_node not in visited:
                    temp_set.add(next_node)
                    visited.add(next_node)
        queue = sorted(list(temp_set))
    print(f'#{test_case} {answer}')
```