# [Programmers] [무지의 먹방 라이브](https://programmers.co.kr/learn/courses/30/lessons/42891)

## 풀이

```js
const solution = (foodTimes, k) => {
  let sum = 0;
  const count = {};
  for (const foodTime of foodTimes) {
    sum += foodTime;
    count[foodTime] = (count[foodTime] || 0) + 1;
  }

  if (sum <= k) return -1;

  let prev = 0;
  let remainFoodCount = foodTimes.length;
  for (const curr of Object.keys(count).sort((a, b) => a - b)) {
    const foodCount = count[curr];
    if (k < remainFoodCount * (curr - prev)) {
      k %= remainFoodCount;
      for (let i = 0; i < foodTimes.length; i++) {
        if (foodTimes[i] >= curr && k-- === 0) return i + 1;
      }
    }

    k -= remainFoodCount * (curr - prev);
    prev = curr;
    remainFoodCount -= foodCount;
  }
}
```