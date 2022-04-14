# Javascript Method

## array

1. arr.splice(i, n) - i번째부터 n개 삭제

2. arr.slice(i, e) - i번째부터 e - 1번째까지의 배열 반환

3. arr.shift/unshift = 맨 앞 데이터 삭제/추가

4. arr.find/filter/map/some((value(, idx)(, arr)) => {
   조건
   })
5. arr.reduce((prev, curr) => {
   curr, 시작값
   })

## 연속 숫자 배열 만들기

```js
const my_name = 'mean0';
const my_name_array = Array.from(my_name);
const num_array = Array.from(my_name, (item, index) => {
  return index;
});
```

```js
const new_array = Array.from({ length: 4 }, (item, index) => {
  return index;
});
```

## JSON

1. JSON.parse(json) - json > object 변환

2. JSON.stringify() - 값, 객체 > json 변환

## Function

1. parameter 명시하지 않더라도 arguments로 접근 가능

# 자바스크립트 정렬

## sort()

기본적으로 자바스크립트 정렬은 문자열 기준(유니코드 값 순서대로)으로 정렬을 한다.

```js
const arr = [3, 20, 1];
arr.sort();
console.log(arr); // [1, 20, 3]
```

원하는 방식으로 정렬하기 위해선 sort 내에 조건을 명시해야한다.

```js
const arr = [3, 20, 1];
arr.sort((a, b) => {
  if (a > b) return 1; // 양수를 리턴하면 a를 앞으로
  if (a == b) return 0; // 0을 리턴하면 순서를 바꾸지 않는다
  if (a < b) return -1; // 음수를 리턴하면 b를 앞으로
});
```

그래서 오름차순 정렬할 때에는

```js
const arr = [3, 20, 1];
arr.sort((a, b) => {
  return a - b;
});
```

내림차순 정렬 시에는

```js
const arr = [3, 20, 1];
arr.sort((a, b) => {
  return b - a;
});
```

를 사용한다.

객체나 배열 등 특정 조건 정렬 시에는

```js
arr.sort((a, b) => {
  return a.attribute > b.attribute ? 1 : -1;
});
```

이런 식으로 사용한다.

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
    console.log('Error');
  }
}
```
