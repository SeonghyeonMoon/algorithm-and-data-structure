const arr = [1, 2, 3];

const sum = Symbol('sum');

Array.prototype[sum] = function () {
    return this.reduce((result, number) => result + number, 0);
};

console.log(arr[sum]());

const e = {
    [Symbol.iterator]() {
        let cur = 1;
        const max = 10;
        return {
            next() {
                return {value: cur++, done: cur > max};
            },
        };
    },
};

console.log([...e]);
