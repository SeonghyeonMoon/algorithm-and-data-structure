# useReducer

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
