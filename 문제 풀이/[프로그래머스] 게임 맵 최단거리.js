// visited를 사용하면 시간 초과

const move = [[0, 1], [1, 0], [0, -1], [-1, 0]];

const solution = (maps) => {
	const height = maps.length;
	const width = maps[0].length;
	const queue = [[0, 0, 1]];
	maps[0][0] = 0;
	while (queue.length) {
		const [x, y, d] = queue.shift();
		for (const [dx, dy] of move) {
			const [nx, ny] = [x + dx, y + dy];
			if (nx < 0 || nx >= height || ny < 0 || ny >= width || !maps[nx][ny]) continue;
			maps[nx][ny] = 0;
			if (nx === height - 1 && ny === width - 1) return d + 1;
			queue.push([nx, ny, d + 1]);
		}
	}

	return -1;
};

console.log(solution(	[[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]]));