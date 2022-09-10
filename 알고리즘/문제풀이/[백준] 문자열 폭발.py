import sys

sys.stdin = open("input.txt", "r")
input = sys.stdin.readline
sys.setrecursionlimit(10**9)

string = input().rstrip()
bomb = list(input())

stack = []
for char in string:
    stack.append(char)
    if stack[-len(bomb):] == bomb:
        for _ in range(len(bomb)):
            stack.pop()

print(''.join(stack) if stack else 'FRULA')
