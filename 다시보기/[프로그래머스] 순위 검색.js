const setTable = (prev, index, query) => {
  if (index === 3) {
    prev[query[index]] = prev[query[index]] || [];
    prev['-'] = prev['-'] || [];

    prev[query[index]].push(Number(query[index + 1]));
    prev['-'].push(Number(query[index + 1]));
    return;
  }

  prev[query[index]] = prev[query[index]] || {};
  prev['-'] = prev['-'] || {};

  setTable(prev[query[index]], index + 1, query);
  setTable(prev['-'], index + 1, query);
}

const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return arr.length - start;
}


const solution = (info, query) => {
  const table = {};

  for (const i of info) {
    const list = i.split(' ');
    setTable(table, 0, list);
  }

  const result = [];
  const set = new Set();
  for (const q of query) {
    const [lang, job, career, foodAndScore] = q.split(' and ');
    const [food, score] = foodAndScore.split(' ');

    if (table?.[lang]?.[job]?.[career]?.[food] === undefined) {
      result.push(0);
      continue;
    }

    const key = [lang, job, career, food].join('');
    if (!set.has(key)) {
      table[lang][job][career][food].sort((a, b) => a - b);
      set.add(key);
    }
    result.push(binarySearch(table[lang][job][career][food], Number(score)));
  }

  return result;
}

const info = ["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"];
const query = ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"];

console.log(solution(info, query));