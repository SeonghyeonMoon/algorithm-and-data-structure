# [Leetcode] 203. [Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/)

```js
const removeElements = (head, val) => {
  if (!head) return null;
  head.next = removeElements(head.next, val);
  return head.val === val ? head.next : head;
};
```
