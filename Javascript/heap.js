class MinHeap {
	constructor() {
		this.heap = [];
	}

	swap(a, b) {
		[this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
	}

	heappush(value) {
		let targetIndex = this.heap.length;
		this.heap.push(value);
		let parentIndex = Math.floor((targetIndex - 1) / 2);
		while (targetIndex > 0 && this.heap[parentIndex] > value) {
			this.swap(parentIndex, targetIndex);
			targetIndex = parentIndex;
			parentIndex = Math.floor((targetIndex - 1) / 2);
		}
	}

	heappop() {
		if (this.heap.length < 1) {
			return null;
		}

		const minValue = this.heap[0];
		this.heap[0] = this.heap.at(-1);
		this.heap.pop();

		let targetIndex = 0;
		let leftChildIndex = targetIndex * 2 + 1;
		let rightChildIndex = targetIndex * 2 + 2;

		do {
			if (this.heap[leftChildIndex] === undefined) {
				return minValue;
			}

			if (this.heap[rightChildIndex] === undefined) {
				if (this.heap[leftChildIndex] < this.heap[targetIndex]) {
					this.swap(leftChildIndex, targetIndex);
					targetIndex = leftChildIndex;
					continue;
				} else {
					return minValue;
				}
			}
			const minChildIndex = this.heap[leftChildIndex] < this.heap[rightChildIndex] ? leftChildIndex : rightChildIndex;
			this.swap(minChildIndex, targetIndex);
			targetIndex = minChildIndex;
			leftChildIndex = targetIndex * 2 + 1;
			rightChildIndex = targetIndex * 2 + 2;
		} while (this.heap[leftChildIndex] < this.heap[targetIndex] || this.heap[rightChildIndex] < this.heap[targetIndex]);
		return minValue;
	}

	get minValue() {
		return this.heap[0];
	}
}

function solution(k, score) {
	const result = [];
	const minHeap = new MinHeap(k);

	score.forEach((s) => {
		if (minHeap.heap.length < k) {
			minHeap.heappush(s);
			result.push(minHeap.minValue);
			return;
		}
		if (minHeap.minValue < s) {
			minHeap.heappop();
			minHeap.heappush(s);
		}
		result.push(minHeap.minValue);
	});

	return result;
}

console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
