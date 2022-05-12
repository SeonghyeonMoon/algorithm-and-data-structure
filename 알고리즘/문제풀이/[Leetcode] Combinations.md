# [Leetcode] [Combinations](https://leetcode.com/problems/combinations/submissions/)

```py
class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        nums = range(1, n + 1)
        result = []
        def combinations(data, arr):
            if len(data) == k or arr == '':
                result.append(data)
                return
            for idx, num in enumerate(arr):
                combinations(data + [num], arr[idx + 1:])
        combinations([], nums)
        return result
```