const solution = (begin, end) => {
  const result = [];
  for (let i = begin; i <= end; i++) {
    let maxDivisor = 1;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        if (i / j > 10_000_000) {
          continue;
        }
        maxDivisor = i / j;
        break;
      }
    }
    result.push(maxDivisor);
  }
  if (begin === 1) result[0] = 0;
  return result;
};

console.log(solution(1, 10));
