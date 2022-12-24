const arr = {
    from: 1,
    to: 10,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return {done: false, value: this.current++};
        } else {
            return {done: true};
        }
    },
};

for (const n of arr) {
    console.log(n);
}
console.log('---------------');

const arr2 = [1, 2, 3];
const iterator = arr2[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

class Range {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    }

    next() {
        return this.current <= this.to ? {done: false, value: this.current++} : {done: true};
    }
}

const arr3 = new Range(1, 10);
for (const number of arr3) {
    console.log(number);
}
