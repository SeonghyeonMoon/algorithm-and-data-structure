# React

## React 모듈 역할

1. React - React Component 생성 관련(ex: Createlement)
2. ReactDom - 컴포넌트 HTML 연결(ex: render)
3. render(그릴것, 그릴곳)

## 성능 최적화

1. 컴포넌트가 리렌더링 되는 것은 내부에 선언된 표현식도 매번 다시 선언되어 사용된다.
2. 불필요한 리렌더링 방지

## 리액트 커링 활용해서 handler 간단하게 등록하게

```tsx
import {MouseEvent} from 'react';

const data = [{id: 1, content: '1'}, {id: 2, content: '2'}, {id: 3, content: '3'}]

function Currying() {
    const handleClick = (content: string) => (e: MouseEvent<HTMLLIElement>) => {
        console.log(e, content);
    }
    return (
        <ul>
            {
                data.map(({id, content}) =>
                    <li key={id} onClick={handleClick(content)}>{content}</li>
                )
            }
        </ul>
    )
}

export default Currying
```