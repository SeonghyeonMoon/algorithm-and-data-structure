class Queue {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	enqueue(value) {
		const newNode = { value };

		if (!this.length) {
			this.head = newNode;
			this.tail = newNode;
			this.length += 1;
			return;
		}

		this.tail.next = newNode;
		this.tail = newNode;
		this.length += 1;
	}

	dequeue() {
		const result = this.head.value;
		this.head = this.head.next;
		this.length -= 1;
		return result;
	}
}

function solution(maps) {
	const queue = new Queue();
	queue.enqueue([0, 0, 1]);
	while (queue.length) {
		const [x, y, count] = queue.dequeue();
		if (x === maps.length - 1 && y === maps[0].length - 1) {
			return count;
		}
		maps[x][y] = 0;
		for (const [dx, dy] of [
			[1, 0],
			[-1, 0],
			[0, 1],
			[0, -1],
		]) {
			const [nx, ny] = [x + dx, y + dy];
			if (nx < 0 || nx >= maps.length || ny < 0 || ny >= maps[0].length || !maps[nx][ny]) {
				continue;
			}
			maps[nx][ny] = 0;
			queue.enqueue([nx, ny, count + 1]);
		}
	}
	return -1;
}

const maps = [
	[1, 0, 1, 1, 1],
	[1, 0, 1, 0, 1],
	[1, 0, 1, 1, 1],
	[1, 1, 1, 0, 1],
	[0, 0, 0, 0, 1],
];

console.log(solution(maps));
