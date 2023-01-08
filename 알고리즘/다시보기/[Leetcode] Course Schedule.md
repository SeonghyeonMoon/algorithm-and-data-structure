# [Leetcode] [Course Schedule](https://leetcode.com/problems/course-schedule/)

전형적인 위상 정렬 문제다.

## 구현 

```js
const canFinish = (numCourses, prerequisites) => {
  const graph = prerequisites.reduce((acc, [a, b]) => {
    !acc[a] && (acc[a] = []);
    acc[a].push(b);
    return acc;
  }, {});

  const inDegree = prerequisites.reduce(
    (acc, [_, b]) => {
      acc[b] += 1;
      return acc;
    },
    Array.from({ length: numCourses }, () => 0),
  );

  const visited = Array.from({ length: numCourses }, () => false);

  const zeroInDegrees = inDegree.reduce((acc, val, idx) => {
    if (val === 0) {
      visited[idx] = true;
      acc.push(idx);
    }
    return acc;
  }, []);

  while (zeroInDegrees.length) {
    const node = zeroInDegrees.pop();
    for (const neighbor of graph[node] || []) {
      inDegree[neighbor] -= 1;
      if (inDegree[neighbor] === 0) {
        visited[neighbor] = true;
        zeroInDegrees.push(neighbor);
      }
    }
  }

  return !inDegree.some((val) => val !== 0);
};
```
