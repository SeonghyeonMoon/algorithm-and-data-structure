## 테스트를 하는 이유?

0. 자신감
1. 기능 정상 동작
2. 요구 사항 만족
3. 이슈에 대해 예측
4. 버그를 빠르게 발견
5. 자신감 있게 리팩토링
6. 손쉬운 유지 보수
7. 코드의 품질 향상
8. 코드간 의존성을 낮춤
9. 좋은 문서화
10. 시간을 절약

## 테스트 피라미드?

단위 테스트(함수, 모듈, 클래스) > 통합 테스트(상호작용, 모듈들, 클래스들) > E2E Test(UI 테스트, 사용자 테스트)
Cheap <> Expensive
Fast <> Slow

## TDD가 필요할 때

1. 요구사항이 명확할 때
2. 비지니스 로직
3. 협업시 명세서 역할
4. 설계에 대한 고민이 필요

## Jest

```js
const sum = require('./sum')

test('테스트 제목', () => {
  expect(sum(1, 2)).toBe(3);
})
```