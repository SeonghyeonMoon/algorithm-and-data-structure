const solution = (topping) => {
  const topping1 = new Set([topping[0]]);
  const topping2Count = topping.slice(1).reduce((result, number) => {
    result[number] = (result[number] || 0) + 1;
    return result;
  }, {});

  let result = 0;
  let topping1KindsCount = 1;
  let topping2KindsCount = Object.values(topping2Count).filter(
    (count) => count,
  ).length;

  let index = 1;
  while (topping1KindsCount <= topping2KindsCount) {
    if (topping1KindsCount === topping2KindsCount) result++;
    if (!topping1.has(topping[index])) {
      topping1.add(topping[index]);
      topping1KindsCount++;
    }
    topping2Count[topping[index]] -= 1;
    if (topping2Count[topping[index]] === 0) {
      topping2KindsCount--;
    }
    index += 1;
  }
  return result;
};

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));
