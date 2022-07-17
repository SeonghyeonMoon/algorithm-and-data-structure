const process = require('process');
console.log('현재 실행되고 있는 노드의 위치', process.execPath);
console.log('노드의 버전', process.version);
console.log('프로세스 아이디', process.pid);
console.log('프로세스 부모의 아이디', process.ppid);
console.log('플랫폼 정도', process.platform);
console.log('환경 변수', process.env);
console.log('얼마나 실행되었는지', process.uptime());
console.log('모듈 경로', process.cwd());
console.log('cpu 사용량', process.cpuUsage());

// Call Stack이 빌 때까지 기다림
setTimeout(() => {
	console.log('setTimeout');
}, 0);

setImmediate(() => {
	console.log('setImmediate');
});

// 테스크 큐 제일 앞부분에 넣어준다.
process.nextTick(() => {
	console.log('nextTick');
});

