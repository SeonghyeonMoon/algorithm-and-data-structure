from collections import defaultdict, deque
from math import ceil, floor
import sys
from tkinter import N
from typing import Counter
# sys.stdin = open('input.txt')
input = sys.stdin.readline


replies = ["FFCCAAFCCAAA", "AAAABBBBCCCC", "ABCABCABCABC"]
n = 4
k = 2


def solution2(reply):
    for length in range(n, len(reply) // 2 + 1):
        for index in range(len(reply) - length + 1):
            temp = reply[index:index + length]
            l, r = index + length, index + length * 2
            answer = 1
            while r < len(reply) + 1:
                if reply[l:r] == temp:
                    answer += 1
                    l += length
                    r += length
                else:
                    break
            if answer >= k:
                return 0
    return 1

result = []
for reply in replies:
    result.append(solution2(reply))

print(result)