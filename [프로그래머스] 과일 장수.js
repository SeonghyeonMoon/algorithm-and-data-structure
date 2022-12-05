function solution(k, m, score) {
	let result = 0;
	const sortedScore = score.sort();
	for (let i = score.length % m; i < score.length; i += m) {
		result += sortedScore[i] * m;
	}
	return result;
}

const [k, m, score] = [4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]];

console.log(solution(k, m, score));
