# Node js 테스트(Jest)

## 테스트를 하는 이유

1. **자신감** - 테스트를 통해서 확신을 가지고 손쉽고 빠르게 코드를 수정하거나 자신감 있게 리팩토링이 가능
2. 좋은 문서화 - 테스트 자체가 코드의 기능에 대한 설명이 된다.
3. 이슈에 대한 예측 - 테스트를 미리 설계하면서 발생할 이슈에 대해 예측할 수 있다.

## TDD

테스트를 설계하고, 그를 통과 할 정도로만 개발을 반복하는 방법

즉 TDD가 아닌 것과 그런 것의 차이는 개발한 코드를 확인용으로 Test를 실행하냐, Test 통과 자체를 개발의 목표로 삼는 것이냐의 차이일 뿐 **모든 개발에서는 테스트가 필수적**이다.  

## 유닛 테스트

### Test Runner

테스트를 실행 후 결과 생성

ex) Mocha

### Assertion

테스트 조건, 비교를 통한 테스트 로직

ex) Chai, expect.js, better-assert

둘 다 한번에 지원하는 것이 **Jest**

## Jest 초기 설정

```bash
npm i -g jest // Jest CLI를 사용하기 위해서 Global Install
jest --init // Jest 초기화
npm i -D jest
```

### Package.json

```json
{
	...
	"scripts": {
		"test": "jest" // 1번 실행
		"test": "jest --watchAll" // 파일 수정 될 때마다 전체 테스트 실행
		"test": "jest --watch" // 커밋 된 파일에 대해서는 테스트 실행 안 함
	}
	...
}
```

## 사용법

```jsx
test("테스트 설명", () => {
  expect("검증 대상").toXxx("기대 결과");
});
```

## Matcher

### toBe 값

```jsx
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
```

### toEqual 객체

```jsx
test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});
```

### Truthiness

```jsx
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
```

### Number

```jsx
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
});
```

### Strings

```jsx
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});
```

### Array

```jsx
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});
```

### Error

```jsx
test('error', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);
  expect(() => compileAndroidCode()).toThrow('error message');
});
```

## Test 예시

```jsx
const Memory = require('../Memory.js');

// 관련있는 테스트를 그룹으로 만들어 준다.
// 그룹 내에서도 그룹 생성 가능
describe('Memory', () => { 
	// 테스트 마다 공통으로 전에 실행해야될 코드
	let memory;
  beforeEach(() => {
    memory = new Memory();
    memory.init(10, 10);
		// const memory = new Memory(); 이렇게 선언하면 블럭이 달라 테스트에서 참조할 수 없음 
  });
	
	// 그룹명을 지칭하며 위에서 사용한 test와 같은 의미를 가진다.
  it('memory init', () => {
    expect({memory.typeSize).toEqual({});
  });
	
	it('Stack Memory Error', () => {
    memory.init(1, 10)
    memory.setSize("str", 8)
    expect(() => {
      memory.malloc("str", 2)
    }).toThrow('Stack Memory 부족');
  })
	...
});
```

## Mock

mocking은 단위 테스트를 작성할 때, 해당 코드가 의존하는 부분을 가짜(mock)로 대체하는 기법을 말한다. 일반적으로 테스트하려는 코드가 의존하는 부분을 직접 생성하기가 너무 부담스러운 경우 mocking이 많이 사용된다.

### 테스트 할 함수

```jsx
function check(predicate, onSuccess, onFail) {
  if (predicate()) {
    onSuccess('yes');
  } else {
    onFail('no');
  }
}

module.exports = check;
```

### 테스트 코드

```jsx
const check = require('../check');

describe('check', () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it('should call onSuccess when predicate is true', () => {
    check(() => true, onSuccess, onFail);

    // expect(onSuccess.mock.calls.length).toBe(1);
    expect(onSuccess).toHaveBeenCalledTimes(1);
    // expect(onSuccess.mock.calls[0][0]).toBe('yes');
    expect(onSuccess).toHaveBeenCalledWith('yes');
    // expect(onFail.mock.calls.length).toBe(0);
    expect(onFail).toHaveBeenCalledTimes(0);
  });

  it('should call onFail when predicate is false', () => {
    check(() => false, onSuccess, onFail);

    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onFail).toHaveBeenCalledWith('no');
    expect(onSuccess).toHaveBeenCalledTimes(0);
  });
});
```