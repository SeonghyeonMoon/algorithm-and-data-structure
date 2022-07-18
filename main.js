const fs = require('fs');
const stdin = fs.readFileSync('input.txt', 'utf-8').split('\n');

const input = (() => {
	let line = 0;
	return () => stdin[line++];
})();

const [N, M] = input().split(' ').map(Number);

const marbles = Array(N).fill(null).map(() => Array(N).fill(Infinity));

for (let i = 0; i < M; i++) {
	const [marble1, marble2] = input().split(' ').map(Number);
	console.log(marble1, marble2);
	marbles[marble1 - 1][marble2 - 1] = 1;
	marbles[marble2 - 1][marble1 - 1] = -1;
}

console.log(marbles);