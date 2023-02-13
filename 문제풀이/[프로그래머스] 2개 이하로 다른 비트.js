const getSmallestLargeAndOneOrTwoBitsDifferentNumber = (number) => {
  if (number % 2 === 0) return number + 1;
  const binaryNumber = number.toString(2);
  const mostRightZeroBitIndex = binaryNumber.lastIndexOf('0');
  return number + 2 ** (binaryNumber.length - mostRightZeroBitIndex - 2);
};

const solution = (numbers) =>
  numbers.map((number) =>
    getSmallestLargeAndOneOrTwoBitsDifferentNumber(number),
  );

console.log(solution([2, 7]));
