// [Leetcode] [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)

// 분류
// - Linked List

// 풀이

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const mergeTwoLists = (list1, list2) => {
  const result = new ListNode();
  let current = result;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  // 문제 저장 이유(Merge Sort에도 활용 가능)
  current.next = list1 || list2;
  return result.next;
};
