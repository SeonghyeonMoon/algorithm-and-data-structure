function getDivisorCount(number) {
	let temp = new Set();

	for (let i = 1; i <= Math.sqrt(number); i++) {
		if (number % i === 0) {
			temp.add(i);
			temp.add(number / i);
		}
	}

	return temp.size;
}

function solution(number, limit, power) {
	let result = 0;

	for (let i = 1; i <= number; i++) {
		const divisorCount = getDivisorCount(i);
		result += divisorCount > limit ? power : divisorCount;
	}

	return result;
}

const [number, limit, power] = [10, 3, 2];

console.log(solution(number, limit, power));

// console.log(getNeedWeight(10, 3, 2));

console.log(1 + 2 + 2 + 3 + 2 + 2 + 2 + 2 + 3 + 2);
