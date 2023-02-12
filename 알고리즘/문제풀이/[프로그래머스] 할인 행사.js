const check = (needCount) => {
  for (let key in needCount) {
    if (needCount[key] > 0) {
      return false;
    }
  }
  return true;
};

const solution = (want, number, discount) => {
  const needCount = want.reduce((res, item, index) => {
    res[item] = number[index];
    return res;
  }, {});

  for (let i = 0; i < 10; i++) {
    const item = discount[i];
    if (item in needCount) {
      needCount[item] -= 1;
    }
  }

  let result = 0;
  let leftIdx = 0;
  let rightIdx = 10;
  for (let i = 0; i < discount.length - 10; i++) {
    check(needCount) && result++;
    if (discount[leftIdx] in needCount) {
      needCount[discount[leftIdx]] += 1;
    }
    needCount[discount[rightIdx]] -= 1;
    leftIdx++;
    rightIdx++;
  }
  check(needCount) && result++;

  return result;
};

console.log(
  solution(
    ['banana', 'apple', 'rice', 'pork', 'pot'],
    [3, 2, 2, 2, 1],
    [
      'chicken',
      'apple',
      'apple',
      'banana',
      'rice',
      'apple',
      'pork',
      'banana',
      'pork',
      'rice',
      'pot',
      'banana',
      'apple',
      'banana',
    ],
  ),
);
