const getCombinations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });

  return results;
};

const isSubset = (arr, candidates) =>
  candidates.some((candidate) => candidate.every((v) => arr.includes(v)));

const solution = (relation) => {
  const columns = relation[0].length;
  const rows = relation.length;
  const candidates = [];
  for (let i = 1; i <= columns; i++) {
    const combinations = getCombinations(
      Array.from({ length: columns }, (_, i) => i),
      i,
    );
    const temp = [];
    for (const combination of combinations) {
      if (isSubset(combination, candidates)) continue;
      const set = new Set(
        relation.map((row) =>
          combination.map((column) => row[column]).join(''),
        ),
      );
      if (set.size === rows) {
        temp.push(combination);
      }
    }
    candidates.push(...temp);
  }
  return candidates.length;
};

console.log(
  solution([
    ['100', 'ryan', 'music', '2'],
    ['200', 'apeach', 'math', '2'],
    ['300', 'tube', 'computer', '3'],
    ['400', 'con', 'computer', '4'],
    ['500', 'muzi', 'music', '3'],
    ['600', 'apeach', 'music', '2'],
  ]),
);
