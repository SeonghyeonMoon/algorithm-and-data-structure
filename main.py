import sys
from tkinter.tix import Tree
sys.stdin = open('input.txt')

from collections import defaultdict

N, M, B = map(int, input().split())
dic = defaultdict(int)

max_height = 0
min_height = 256 

for _ in range(N):
    for height in list(map(int, input().split())):
        dic[height] += 1

for key in dic.keys():
    max_height = max(max_height, key)
    min_height = min(min_height, key)

answer = [500 * 500 * 256, 0]
for height in range(min_height, max_height + 1):
    need_block = 0
    time = 0
    for target_height, target_number in dic.items():
        gap = target_height - height
        need_block -= target_number * gap
        if gap > 0:
            time += 2 * target_number * gap
        else:
            time -= 1 * target_number * gap
    if need_block > B:
        break
    if answer[0] >= time:
        answer = [time, height]

print(answer[0], answer[1])