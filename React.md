# React

## React 모듈 역할

1. React - React Component 생성 관련(ex|Createlement)

2. ReactDom - 컴포넌트 HTML 연결(ex| render)

3. render(그릴것, 그릴곳)

4. React event 이벤트={함수명()}이라고 작성하면 함수명()는 리턴값을 가짐 () => (함수명())으로 작성해야한다.

5. Component 반복 사용시 state 따로 관리

6. Props = Properties의 약자

## useEffect

렌더링 발생할 때마다 실행하고 싶지 않을 때

```js
useEffect(() => {
  console.log('effect'); // 마운트, 업데이트 시 실행
  return () => {
    console.log('cleanup'); // 업데이트, 언마운트 직전 실행
  };
}, []); // 배열 안 값이 업데이트 될때만 실행)
```

## 성능 최적화

1. 컴포넌트가 리렌더링 되는 것은 내부에 선언된 표현식도 매번 다시 선언되어 사용된다.

2. 불필요한 리렌더링 방지

### useMemo

배열 내부의 값이 바뀌지 않았다면 이전에 연산했던 결과값을 다시 사용하는 Hook

```js
const avg = useMemo(() => getAverage(list), [list]); // list가 변경될 때만 리렌더링
```

### useCallback

useMemo의 함수버전

### React.memo

props가 변경되었을 때만 컴포넌트 리렌더링

```js
export default React.memo(컴포넌트명); // props가 변경될 때만 리렌더링
```

## useReducer

상태 업데이트 로직을 컴포넌트 밖으로 분리 가능
리듀서로 로직을 분리했으니 다른곳에서도 쉽게 재사용을 할 수 있다
useState 의 setState 함수를 여러번 사용하지 않아도 된다

```js
const reducer = (state, action) => {
  switch (action.type) {
    case 'ACTION NAME':
      return state + 1;
    case 'ANOTHER NAME':
      return state - 1;
    default:
      // throw new Error('Unhandled action');
      return state
  }
}

const [state, dispatch] = useReducer(reducer, initialState)
const eventName = () => {
  dispatch({
    type: 'ACTION NAME';
  })
}
```

## useState

setState는 비동기로 작동해서 예상과 다르게 작동할 때가 있다. 그럴 때 두번 째 인수로 callback함수를 받아 setState가 끝나고 실행시킬 수 있었다.
그러나 hook에서는 그 기능이 사라졌고, 공식문서에 따르면 setState가 끝나고 실행하려면 useEffect를 사용하기를 권장한다고 적혀있다.

또한 연속적으로 setState를 실행하려면 update 함수가 필요하다.

```js
setState(state + 1);
setState(state + 1);
// (X)

setState(prevState => prevState + 1);
setState(prevState => prevState + 1);
// (O)
```

## 적용해 볼 것

1. 배열 추가할 때 spread 연산자 대신 concat 사용해보기
