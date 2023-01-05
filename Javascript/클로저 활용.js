const makeCounter = () => {
	let count = 0;
	return () => count++;
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1());
console.log(counter1());
console.log(counter1());

console.log(counter2());
console.log(counter2());
console.log(counter2());

const sum = (num1) => (num2) => num1 + num2;
console.log(sum(5)(2));

let arr = [1, 2, 3, 4, 5, 6, 7];

const inBetween = (min, max) => (number) => min <= number && number <= max;

console.log(arr.filter(inBetween(3, 6)));

const inArray = (arr) => (number) => number in arr;

console.log(arr.filter(inArray([1, 2, 10])));

let users = [
	{ name: 'John', age: 20, surname: 'Johnson' },
	{ name: 'Pete', age: 18, surname: 'Peterson' },
	{ name: 'Ann', age: 19, surname: 'Hathaway' },
];

const byField = (property) => (a, b) => a[property] > b[property] ? 1 : -1;

users.sort(byField('name'));
console.log(users);

function makeArmy() {
	let shooters = [];

	for (let i = 0; i < 10; i++) {
		let shooter = function () {
			console.log(i);
		};
		shooters.push(shooter);
	}
	return shooters;
}

let army = makeArmy();

army[0]();
army[5]();
