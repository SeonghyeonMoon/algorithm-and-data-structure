from collections import deque
from math import ceil, floor
import sys
from tkinter import N
from typing import Counter
# sys.stdin = open('input.txt')
input = sys.stdin.readline



def solution(A, F, M):
    expected_sum = (len(A) + F) * M
    needed_sum = expected_sum - sum(A)
    if needed_sum > F * 6 or needed_sum < F * 1:
        return [0]
    if needed_sum % F:
        return [needed_sum % F + needed_sum // F] + [needed_sum // F for _ in range(F - 1)]
    return [needed_sum // F for _ in range(F)]



print(solution([1, 5, 6], 4, 3))