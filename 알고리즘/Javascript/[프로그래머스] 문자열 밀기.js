// 문자열일나 배열 회전 문제

// 풀이 1
function solution(A, B) {
	for (let i = 0; i < A.length; i++) {
		if (A.slice(-i) + A.slice(0, -i) === B) {
			return i;
		}
	}
	return -1;
}

// 풀이 2
function solution(A, B) {
	return (B + B).indexOf(A);
}

// console.log(solution('hello', 'ohell'));
