// [백준] 가장 긴 증가하는 부분 수열 2

// 분류
// - LIS(Longest Increasing Subsequence)
// - DP
// - 이분 탐색

// 풀이

{
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
  let stdin = fs.readFileSync(filePath).toString().split('\n');
  const input = (() => {
    let line = 0;
    return () => stdin[line++].trim();
  })();

  const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return start;
  };

  const solution = (n, sequence) => {
    const result = [sequence[0]];

    for (const num of sequence.slice(1)) {
      if (num > result[result.length - 1]) {
        result.push(num);
      } else {
        result[binarySearch(result, num)] = num;
      }
    }

    return result.length;
  };

  const n = Number(input());
  const sequence = input().split(' ').map(Number);
  console.log(solution(n, sequence));
}
