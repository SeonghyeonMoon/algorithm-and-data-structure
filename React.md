# React

## React 모듈 역할

1. React - React Component 생성 관련(ex|Createlement)

2. ReactDom - 컴포넌트 HTML 연결(ex| render)

3. render(그릴것, 그릴곳)

4. React event 이벤트={함수명()}이라고 작성하면 함수명()는 리턴값을 가짐 () => (함수명())으로 작성해야한다.

5. Component 반복 사용시 state 따로 관리

6. Props = Properties의 약자

## 성능 최적화

1. 컴포넌트가 리렌더링 되는 것은 내부에 선언된 표현식도 매번 다시 선언되어 사용된다.

2. 불필요한 리렌더링 방지

### useMemo

배열 내부의 값이 바뀌지 않았다면 이전에 연산했던 결과값을 다시 사용하는 Hook

```js
const avg = useMemo(() => getAverage(list), [list]); // list가 변경될 때만 리렌더링
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
