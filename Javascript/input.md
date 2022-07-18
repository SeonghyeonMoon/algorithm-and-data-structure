# 자바스크립트로 인풋 받기

## Event를 통한 input 함수 

```js
const fs = require('fs');
const EventEmitter = require('events');

const emitter = new EventEmitter();
const inputData = fs.readFileSync('input.txt', 'utf-8').split('\n');

let lineIndex = 0;
let line;

emitter.on('input', () => {
	line = inputData[lineIndex++];
})

function input() {
	emitter.emit('input');
	return line
}

n = parseInt(input())
```

## Closure를 이용한 input 함수

```js
const fs = require('fs');
const stdin = fs.readFileSync('input.txt', 'utf-8').split('\n');

const input = (() => {
	let line = 0;
	return () => stdin[line++];
})();
```

