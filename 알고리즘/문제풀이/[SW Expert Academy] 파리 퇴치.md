# [SW Expert Academy] [파리 퇴치](https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AV5PzOCKAigDFAUq)

2차원 누적합

```py
T = int(input())
for test_case in range(1, T + 1):
    N, M = map(int, input().split())
    flies = [[0 for _ in range(N + 1)]]
    for _ in range(N):
        flies.append([0] + list(map(int, input().split())))

    for x in range(1, N + 1):
        for y in range(1, N + 1):
            flies[x][y] += flies[x - 1][y] + flies[x][y - 1] - flies[x - 1][y - 1]

    answer = 0
    for x in range(M, N + 1):
        for y in range(M, N + 1):
            answer = max(answer, flies[x][y] - flies[x - M][y] - flies[x][y - M] + flies[x - M][y - M])

    print(f'#{test_case} {answer}')
```

```js
const fs = require('fs');
const stdin = fs.readFileSync('input.txt', 'utf-8').split('\n');

const input = (() => {
	let line = 0;
	return () => stdin[line++];
})();

const T = parseInt(input());

for (let testCase = 1; testCase < T + 1; testCase++) {
	console.log(`#${testCase} ${solution()}`);
}

function solution() {
	const [N, M] = input().split(' ').map(Number);
	const flies = [new Array(N + 1).fill(0)]
	for (let x = 0; x < N; x++) {
		flies.push([0].concat(input().split(' ').map(Number)));
	}
	for (let x = 1; x < N + 1; x++) {
		for (let y = 1; y < N + 1; y++) {
			flies[x][y] += flies[x - 1][y] + flies[x][y - 1] - flies[x - 1][y - 1];
		}
	}
	let answer = 0;
	for (let x = M; x < N + 1; x++) {
		for (let y = M; y < N + 1 ; y++) {
			const sum = flies[x][y] - flies[x - M][y] - flies[x][y - M] + flies[x - M][y - M]
			if (answer < sum) {
				answer = sum
			}
		}
	}
	console.table(flies)
	return answer;
}
```