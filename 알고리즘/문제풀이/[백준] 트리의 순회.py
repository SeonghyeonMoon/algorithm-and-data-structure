import sys

sys.stdin = open("input.txt", "r")
input = sys.stdin.readline

n = int(input())
inorder = list(input().split())
postorder = list(input().split())


def solution(inorder_start, inorder_end, postorder_start, postorder_end):
    if (inorder_start > inorder_end or postorder_start > postorder_end):
        return
    print('inorder', inorder[inorder_start:inorder_end + 1])
    print('postorder', postorder[postorder_start:postorder_end + 1])
    print(postorder_start, postorder_end)
    root_index = inorder.index(postorder[postorder_end])
    print('root', inorder[root_index])
    solution(inorder_start, root_index - 1, postorder_start, postorder_start +
             root_index - inorder_start - 1)
    solution(root_index + 1, inorder_end, root_index -
             inorder_start, postorder_end - 1)


solution(0, n - 1, 0, n - 1)
