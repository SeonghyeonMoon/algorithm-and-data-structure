const getCombinations = (arr, selectNum) => {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.slice(idx + 1);
    const combinationArr = getCombinations(restArr, selectNum - 1);
    const combineFix = combinationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });

  return result;
};

const solution = (infoList, queryList) => {
  const result = [];
  const table = {};

  for (const info of infoList) {
    const [language, position, career, food, score] = info.split(' ');
    let key = language + position + career + food;
    if (table[key]) {
      table[key].push(Number(score));
    } else {
      table[key] = [Number(score)];
    }
    for (let i = 1; i <= 4; i++) {
      const combinations = getCombinations([0, 1, 2, 3], i);
      for (const combination of combinations) {
        let key = [language, position, career, food];
        for (const index of combination) {
          key[index] = '-';
        }
        key = key.join('');
        if (table[key]) {
          table[key].push(Number(score));
        } else {
          table[key] = [Number(score)];
        }
      }
    }
  }

  for (const key in table) {
    table[key].sort((a, b) => a - b);
  }

  for (const query of queryList) {
    const [language, position, career, food, score] = query
      .split(' ')
      .filter((q) => q !== 'and');
    const key = [language, position, career, food].join('');
    const scores = table[key];
    if (scores) {
      let start = 0;
      let end = scores.length;
      while (start < end) {
        const mid = Math.floor((start + end) / 2);
        if (scores[mid] >= score) {
          end = mid;
        } else {
          start = mid + 1;
        }
      }
      result.push(scores.length - start);
    } else {
      result.push(0);
    }
  }

  return result;
};

console.log(
  solution(
    [
      'java backend junior pizza 150',
      'python frontend senior chicken 210',
      'python frontend senior chicken 150',
      'cpp backend senior pizza 260',
      'java backend junior chicken 80',
      'python backend senior chicken 50',
    ],
    [
      'java and backend and junior and pizza 100',
      'python and frontend and senior and chicken 200',
      'cpp and - and senior and pizza 250',
      '- and backend and senior and - 150',
      '- and - and - and chicken 100',
      '- and - and - and - 150',
    ],
  ),
);
