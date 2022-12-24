const solution = (str) => {
	const result = [];

	const stringAdder = (str) => {
		if (str === undefined) {
			return result.join(' ');
		}
		result.push(str);
		return stringAdder;
	};

	return stringAdder(str);
};

console.log(solution('Hello')('World')());
