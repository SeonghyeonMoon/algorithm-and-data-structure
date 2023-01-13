const solution = (line) => {
  const integerMeets = [];
  for (let i = 0; i < line.length - 1; i++) {
    for (let j = i + 1; j < line.length; j++) {
      const [a, b, e] = line[i];
      const [c, d, f] = line[j];
      const mod = a * d - b * c;
      if (mod === 0) continue;
      const xNum = b * f - e * d;
      const yNum = e * c - a * f;
      if (xNum % mod || yNum % mod) continue;
      integerMeets.push([xNum / mod, yNum / mod]);
    }
  }

  const minX = Math.min(...integerMeets.map(([x, y]) => x));
  이;
  const maxX = Math.max(...integerMeets.map(([x, y]) => x));
  const minY = Math.min(...integerMeets.map(([x, y]) => y));
  const maxY = Math.max(...integerMeets.map(([x, y]) => y));

  const width = maxX - minX + 1;
  const height = maxY - minY + 1;
  const graph = Array.from({ length: height }, () => Array.from({ length: width }, () => '.'));

  for (const [x, y] of integerMeets) {
    graph[y - minY][x - minX] = '*';
  }

  return graph.map((row) => row.join('')).reverse();
};

console.table(
  solution([
    [0, 1, -1],
    [1, 0, -1],
    [1, 0, 1],
  ]),
);
