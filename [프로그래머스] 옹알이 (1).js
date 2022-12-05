// has, 

const possible = new Set(['aya', 'ye', 'woo', 'ma']);

function isPossible(string) {
	let temp = '';
	for (let i = 0; i < string.length; i++) {
		temp += string[i];
		if (possible.has(temp)) {
			temp = '';
		}
	}
	return !temp;
}

function solution(babbling) {
	return babbling.reduce((result, string) => result + (isPossible(string) && 1), 0);
}

console.log(solution(['aya', 'yee', 'u', 'maa', 'wyeoo']));
