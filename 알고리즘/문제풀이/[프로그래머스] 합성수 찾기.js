function solution(n) {
	const count = Array.from({ length: n }, () => 0);
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= n / i; j++) {
			count[i * j - 1] += 1;
		}
	}
	console.log(count);
	return count.filter((c) => c >= 3);
}

console.log(solution(15));
