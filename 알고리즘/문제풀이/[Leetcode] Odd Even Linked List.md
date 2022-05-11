# [Leetcode] [Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list/)

```py
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None:
            return None
        oddNode = head
        evenNode = head.next
        evenNodeHead = head.next

        while evenNode and evenNode.next:
            oddNode.next, evenNode.next = oddNode.next.next, evenNode.next.next
            oddNode, evenNode = oddNode.next, evenNode.next

        oddNode.next = evenNodeHead
        return head

```
