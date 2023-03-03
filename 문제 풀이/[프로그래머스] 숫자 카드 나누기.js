const solution = (arrayA, arrayB) => {
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);

  const gcdA = arrayA.reduce((a, b) => gcd(a, b));
  const gcdB = arrayB.reduce((a, b) => gcd(a, b));

  const result = [0]
  if (arrayA.every((num) => num % gcdB)) result.push(gcdB);
  if (arrayB.every((num) => num % gcdA)) result.push(gcdA);

  return Math.max(...result);
};