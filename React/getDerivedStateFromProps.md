# getDerivedStateFromProps

derived - 유래, 파생

props로 받아 온 것을 state에 동기화시키는 용도

컴포넌트가 마운트될 때와 업데이트될 때 호출

```js
static getDerivedStateFromProps(nextProps, prevState) {
  if (nextProps.value !== prevState.value) {
    return { value: nextProps.value }
  }
  return null; // state를 변경할 필요가 없으면 null을 반환
}
```
