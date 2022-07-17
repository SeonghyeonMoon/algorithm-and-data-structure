const one2Ten = []

for (let i = 1; i < 11; i++) {
	one2Ten.push(i)
}

const sum = one2Ten.reduce((acc, cur) => acc + cur, 0);

console.log(sum);

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	// TODO: Log the answer in a database
	console.log(`Thank you for your valuable feedback: ${answer}`);

	rl.close();
});