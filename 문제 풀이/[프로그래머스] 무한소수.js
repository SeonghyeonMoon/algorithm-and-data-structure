const gcd = (a, b) => b ? gcd(b, a % b) : a;

const solution = (a, b) => {
  b /= gcd(a, b)
  while (!(b % 2)) b /= 2;
  while (!(b % 5)) b /= 5;
  return b === 1 ? 1 : 2;
};


console.log(solution(12, 21))

