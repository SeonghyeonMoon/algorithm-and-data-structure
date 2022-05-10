[Leetcode] [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)

```py
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        current_node = ListNode(None)
        head = current_node
        node1 = list1
        node2 = list2
        while node1 and node2:
            if node1.val <= node2.val:
                current_node.next = node1
                node1 = node1.next
            else:
                current_node.next = node2
                node2 = node2.next
            current_node = current_node.next
        if node1:
            current_node.next = node1
        else:
            current_node.next = node2
        return head.next
```
