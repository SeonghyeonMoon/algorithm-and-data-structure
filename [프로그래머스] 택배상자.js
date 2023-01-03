function solution(orders) {
  const containerBelt = orders.reduce((result, o, index) => {
    result[o - 1] = index;
    return result;
  }, []);

  const subContainerBelt = [];
  let result = 0;
  let order = 0;
  for (const box of containerBelt) {
    if (box === order) {
      order++;
      result++;
    } else {
      subContainerBelt.push(box);
    }
    while (
      subContainerBelt.length &&
      subContainerBelt[subContainerBelt.length - 1] === order
    ) {
      subContainerBelt.pop();
      order++;
      result++;
    }
  }

  return result;
}

console.log(solution([5, 4, 3, 2, 1]));
