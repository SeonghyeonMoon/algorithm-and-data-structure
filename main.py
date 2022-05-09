from collections import deque
import sys
sys.stdin = open('input.txt')
input = sys.stdin.readline


graph = {}

for i in range(4):
    input_data = list(map(int, input().split()))
    for j in range(4):
        number = input_data[2 * j]
        direction = input_data[2 * j + 1]
        graph[number] = [i, j, direction]

print(graph)