import sys
import heapq

sys.stdin = open("input.txt", "r")
input = sys.stdin.readline


def binary_search(target, start, end, arr):
    if start > end:
        return end
    mid = (start + end) // 2
    # 데이터 구하는 부분만 수정
    data = arr[mid]
    if data >= target:
        start = mid + 1
    else:
        end = mid - 1
    return binary_search(target, start, end)

V
k, n = map(int, input().split())
arr = []
for _ in range(k):
    arr.append(int(input()))
end = max(arr)
print(binary_search(n, 0, max(arr)))
