# 1. 입력값의 갯수가 주어지지 않았을 때 받는 방법
# 2. do not use bare 'except' 해결

import sys

sys.stdin = open("input.txt", "r")
input = sys.stdin.readline
sys.setrecursionlimit(10**9)


def preorder_to_postorder(preorder):
    if not preorder:
        return

    root = preorder[0]
    for i in range(1, len(preorder)):
        if preorder[i] > root:
            left = preorder[1:i]
            right = preorder[i:]
            preorder_to_postorder(left)
            preorder_to_postorder(right)
            break
    else:
        left = preorder[1:]
        preorder_to_postorder(left)

    print(root)


def solution():
    preorder = []
    while True:
        try:
            preorder.append(int(input()))
        except Exception:
            break
    preorder_to_postorder(preorder)


solution()
