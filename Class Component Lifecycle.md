# Class Component LifeCycle


## getDerivedStateFromProps

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

## shouldComponentUpdate

props나 state를 변경했을 때, 리렌더링을 할지 여부 지정
true 반환하면 리렌더링
false 반환하면 여기서 업데이트 중지

```js
shouldComponentUpdate(nextProps, nextState) {
  return nextState.number % 10 !== 4;
}
```

## getSnapshotBeforeUpdate

render의 결과물을 브라우저에 실제로 반영하기 직전에 호출

반환값 componentDidUpdate에서 세 번째 파라미터로 snapshot 값으로 전달 받을 수 있다.(주로 업데이트 직전의 값을 참고할 일이 있을 때 사용)

```js
getSnapshotBeforeUpdate(prevProps, prevState) {
  if(prevState.array !== this.state.array) {
    const {scrollTop, scrollHeight} = this.list
    return {scrollTop, scrollHeight}
  }
}
```
