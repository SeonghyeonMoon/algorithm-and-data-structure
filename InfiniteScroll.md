# 무한 스크롤 구현

## 스크롤 높이 활용

```js
const onScroll = e => {
  const { scrollHeight, scrollTop, ClientHeight } = e.target.scrollingElement;
  if (scrollTop + clientHeight === scrollHeight) {
    fetchMore();
  }
};
```

성능 최적화로 debounce, throttle
throttle: 일정시간 간격으로 한번씩만 실행
debounce: 마지막 한 번만 실행