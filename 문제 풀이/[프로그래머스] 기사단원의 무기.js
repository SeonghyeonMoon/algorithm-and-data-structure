const getDivisorCount = (num, limit) => {
	let result = 2;
	const sqrt = Math.sqrt(num);
	for (let j = 2; j < sqrt; j++) {
		if (num % j) continue;
		result += 2;
		if (result > limit) break;
	}
	if (num % sqrt === 0) result += 1;
	return result;
}

const solution = (number, limit, power) => {
	let result = 1;

	for (let i = 2; i <= number; i++) {
		const count = getDivisorCount(i, limit);
		result += count > limit ? power : count;
	}

	return result
};

const [number, limit, power] = [10, 3, 2];

console.log(solution(number, limit, power));
