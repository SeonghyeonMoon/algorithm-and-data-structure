# Promise

프로미스는 동작(함수)가 아니라 상태를 나타낸 하나의 물체(객체)

프로미스 객체 생성하면 내부 코드 바로 실행 => 함수에 포함 시켜서 사용

1. 생성

```js
const promise = new Promise((resolve, reject) => {
  // heavy work
  resolve();
});
```

를

```js
function makePromise() {
  return new Promise((resolve, reject) => {
    // heavy work
    resolve();
  });
}
```

로 수정

then 값만 전달해도 사용 가능(Promise 객체 X)

2. 사용

```js
promise.then(value => {
  console.log(value)
})
.catch(error => {
  console.log(error)
})
.finally(() => {
  console.log('finally)
})

```

3. 함수 앞에 async붙이면 Promise 객체 반환

```js
async function makePromise() {
  let promise = new Promise((resolve, reject) => {
    let 연산 = 1 + 1;
    resolve();
  });
  // return Promise.reject('실패했어요') 실패 반환 하고 싶을 때
  try {
    let result = await promise;
    console.log(result);
  } catch {
    console.log("Error");
  }
}
```
