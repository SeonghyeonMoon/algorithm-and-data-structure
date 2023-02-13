class MinHeap {
  heap = [];

  get length() {
    return this.heap.length;
  }

  push(value) {
    let targetIndex = this.heap.length;
    this.heap.push(value);
    let parentIndex = Math.floor((targetIndex - 1) / 2);
    while (targetIndex > 0 && this.heap[parentIndex] > value) {
      this.swap(parentIndex, targetIndex);
      targetIndex = parentIndex;
      parentIndex = Math.floor((targetIndex - 1) / 2);
    }
  }

  pop() {
    if (this.heap.length <= 1) return this.heap.pop();
    const result = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return result;
  }

  bubbleDown(index) {
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;
    let minIndex = index;
    if (this.heap[leftIndex] < this.heap[minIndex]) minIndex = leftIndex;
    if (this.heap[rightIndex] < this.heap[minIndex]) minIndex = rightIndex;
    if (minIndex !== index) {
      this.swap(minIndex, index);
      this.bubbleDown(minIndex);
    }
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}
