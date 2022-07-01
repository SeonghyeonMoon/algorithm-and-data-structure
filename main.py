from collections import defaultdict, deque
import sys

sys.stdin = open("input.txt", "r")
input = sys.stdin.readline

for test_case in range(1, 2):
    N, start_number = map(int, input().split())
    data = list(map(int, input().split()))
    graph = defaultdict(list)
    for index in range(0, N, 2):
        from_number, to_number = data[index:index+2]
        graph[from_number].append(to_number)

    for key in graph.keys():
        graph[key].sort()

    print(graph)
    queue = deque([start_number])
    visited = set()
    answer = start_number
    while queue:
        answer = max(queue)
        temp = []
        now = queue.popleft()
        for next_number in graph[now]:
            if next_number in visited:
                continue
            visited.add(next_number)
            queue.append(next_number)
    print(answer)        