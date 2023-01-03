const solution = (k, d) => {
  let result = 0;
  for (let x = 0; x <= d; x += k) {
    const maxY = Math.sqrt(d ** 2 - x ** 2);
    result += Math.floor(maxY / k) + 1;
  }
  return result;
};

console.log(solution(2, 4));
