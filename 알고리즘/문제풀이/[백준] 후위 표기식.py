# https://www.acmicpc.net/problem/1918
# 우선 순위 (, ) => *, / => +, -
# 연산자가 들어왔을 때 stack에 있는 해당 연산자보다 우선 순위가 높은 연산자를 모두 처리

import sys

sys.stdin = open("input.txt", "r")
input = sys.stdin.readline


def solution(inpix):
    result = ''
    stack = []
    for char in inpix:
        if char.isalpha():
            result += char
        elif char == '(':
            stack.append(char)
        elif char in ['*', '/']:
            while stack and stack[-1] in ['*', '/']:
                result += stack.pop()
            stack.append(char)
        elif char in ['+', '-']:
            while stack and stack[-1] != '(':
                result += stack.pop()
            stack.append(char)
        elif char == ')':
            while stack and stack[-1] != '(':
                result += stack.pop()
            stack.pop()
    while stack:
        result += stack.pop()
    return result


inpix = input()
print(solution(inpix))
