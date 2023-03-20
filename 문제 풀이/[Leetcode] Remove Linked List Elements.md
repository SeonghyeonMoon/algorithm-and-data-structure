# [[Leetcode] 203. Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/)

## 풀이

재귀 함수를 통해서 val과 같은 값을 가진 노드를 제거하는 풀이.

```js
const removeElements = (head, val) => {
  if (!head) return null;
  head.next = removeElements(head.next, val);
  return head.val === val ? head.next : head;
};
```
