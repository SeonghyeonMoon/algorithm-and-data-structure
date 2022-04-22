import sys
sys.stdin = open('input.txt')
input = sys.stdin.readline

n, m = map(int, input().split())
nums = [0] + list(map(int, input().split()))
for index in range(2, n + 1):
    nums[index] = nums[index - 1] + nums[index]
for _ in range(m):
    start, end = map(int, input().split())
    print(nums[end] - nums[start - 1])