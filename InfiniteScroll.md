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

## React Infinite Scroll 구현

정석적인 방법인지는 모르겠으나, 정상 작동하는 것으로 보인다.

```js
import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Prac = () => {
  const [arr, setArr] = useState([1, 2, 3, 4]);
  const lastBox = useRef(null);

  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      const lastNum = arr[arr.length - 1];
      setArr([...arr, lastNum + 1, lastNum + 2, lastNum + 3, lastNum + 4]);
      setLoading(false);
    }, 3000);
  }, [arr]);

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      if (entries[0].isIntersecting) {
        fetchData();
      }
    };
    const observer = new IntersectionObserver(handleIntersection);
    if (lastBox.current) {
      observer.observe(lastBox.current);
    }
    return () => observer.disconnect();
  }, [fetchData]);

  return (
    <>
      {arr.map(num => (
        <Box key={num}>{num}</Box>
      ))}
      <LoadBox ref={lastBox}>{loading ? 'loading' : null}</LoadBox>
    </>
  );
};

export default Prac;

const Box = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid black;
  margin: 30px;
`;

const LoadBox = styled.div`
  width: 100%;
  height: 10px;
`;
```
