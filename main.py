import sys

sys.stdin = open("input.txt")
input = sys.stdin.readline

h, m = map(int, input().split())
m += int(input())

if m >= 60:
    h += m // 60
    m = m % 60

if h >= 24:
    h -= 24

print(h, m)
