const fs = require('fs');
const EventEmitter = require('events');

const emitter = new EventEmitter();
const inputData = fs.readFileSync('input.txt', 'utf-8').split('\n');

let lineIndex = 0;
let line;

emitter.on('input', () => {
	line = inputData[lineIndex++];
})

function input() {
	emitter.emit('input');
	return line
}

n = parseInt(input())

console.log(n);


maze = []
for (let i = 0; i < n; i++) {
	maze.push(input().split(''));
}
console.log(maze);


