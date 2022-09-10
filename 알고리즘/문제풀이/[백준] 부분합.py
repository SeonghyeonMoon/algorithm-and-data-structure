import sys

sys.stdin = open("input.txt", "r")
input = sys.stdin.readline
sys.setrecursionlimit(10**9)

N, S = map(int, input().split())
numbers = list(map(int, input().split()))

left = right = 0
answer = N + 1
tempSum = numbers[0]
length = 1
while True:
    if tempSum >= S:
        if length < answer:
            answer = right - left + 1
        tempSum -= numbers[left]
        length -= 1
        left += 1
    else:
        right += 1
        if right >= N:
            break
        length += 1
        tempSum += numbers[right]

print(answer if answer != N + 1 else 0)
