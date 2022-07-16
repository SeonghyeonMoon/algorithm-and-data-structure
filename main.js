import { count, counter } from './counter';
counter()
console.log(count)

console.clear();

console.time('for loop');
for (let i = 0; i < 10; i++) {
	console.log(i);
}
console.timeEnd('for loop');

console.log(global);

console.log(1); // 개발
console.info(1); // 정보
console.warn(1); // 경보
console.error(1); // 에러

console.assert(2 === 3, 'not same!');

const student = { name: 'Moon', age: 29 };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: false, depth: 0 });

function a() {
	console.count('a function');
	// console.trace();
}

a();
a();
console.countReset('a function');
a();
a();


console.log(this);
console.log(this === module.exports)

