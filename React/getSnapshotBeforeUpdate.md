# getSnapshotBeforeUpdate

render의 결과물을 브라우저에 실제로 반영하기 직전에 호출

반환값 componentDidUpdate에서 세 번째 파라미터로 snapshot 값으로 전달 받을 수 있다.(주로 업데이트 직전의 값을 참고할 일이 있을 때 사용)

```js
getSnapshotBeforeUpdate(prevProps, prevState) {
  if(prevState.array !=== this.state.array) {
    const {scrollTop, scrollHeight} = this.list
    return {scrollTop, scrollHeight}
  }
}
```
