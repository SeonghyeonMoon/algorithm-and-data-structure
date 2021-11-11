# useEffect

```js
useEffect(() => {
  console.log('effect') // 마운트, 업데이트 시 실행
  return () => {
    console.log('cleanup') // 업데이트, 언마운트 직전 실행
  }
}, [] // 배열 안 값이 업데이트 될때만 실행)
```
