# shouldComponentUpdate

props나 state를 변경했을 때, 리렌더링을 할지 여부 지정

true 반환하면 리렌더링
false 반환하면 여기서 업데이트 중지

```js
shouldComponentUpdate(nextProps, nextState) {
  return nextState.number % 10 !== 4;
}
```