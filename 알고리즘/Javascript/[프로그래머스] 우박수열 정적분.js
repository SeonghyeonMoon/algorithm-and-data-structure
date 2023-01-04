const getHeightList = (k) => {
  const result = [];
  while (k > 1) {
    result.push(k);
    if (k % 2) {
      k = k * 3 + 1;
      continue;
    }
    k /= 2;
  }
  result.push(1);
  return result;
};

const getAreaList = (graph) =>
  graph.slice(0, -1).map((height, index) => (height + graph.at(index + 1)) / 2);

const getCumAreaList = (areaList) =>
  areaList.reduce((result, area) => result.concat(result.at(-1) + area), [0]);

const getRangeArea = (range, cumArea) => {
  const [start, end] = range;
  return start > cumArea.length + end - 1
    ? -1
    : cumArea.at(end - 1) - cumArea.at(start);
};

const pipe =
  (...funcs) =>
  (v) =>
    funcs.reduce((res, func) => func(res), v);

const solution = (k, ranges) => {
  const cumAreaList = pipe(getHeightList, getAreaList, getCumAreaList)(k);
  return ranges.map((range) => getRangeArea(range, cumAreaList));
};

console.log(
  solution(5, [
    [0, 0],
    [0, -1],
    [2, -3],
    [3, -3],
  ]),
);
