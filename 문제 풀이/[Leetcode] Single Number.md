# [[Leetcode] 136. Single Number](https://leetcode.com/problems/single-number/)

## 풀이

XOR을 두 번하면 원래 자기 자신이 된다는 특성을 활용해서 짝이 아닌 수를 찾는 풀이.

```js
const singleNumber = (nums) => nums.reduce((a, b) => a ^ b);
```
