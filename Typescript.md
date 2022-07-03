# Typescript

## Object Destructuring Typescript

```ts
const onChange = ({ target: { value } }: { target: { value: string } }) => {
  setInput(value);
};
```

## Typescript Record

Object type 지정용도

```ts
type Props = {
  [name: string]: number;
};
```

를

```ts
type Props = Record<string, number>;
```

이렇게 사용할 수 있다


## Typescript 유틸리티 타입

Partial 

type Sub = Partial<다른 타입>;
부분 집합 - 빈 객체 포함

Pick

type Sub = Pick<다른 타입, '속성1' | '속성2' | '속성3'>
몇 개의 속성을 선택

StrictNullChecks

TypeGuard

any보다 unknown + typeGuard 사용

TypeGuard 공부

declare?

## never 사용 예시
1. throw new Error();
2. return error()
3. while (true) - 무한루프
4. Typeguard

```ts
type Indexable<T> = T extends string ? T & { [index: string]: any } : never;

type ObjectIndexable = Indexable<{}>;
```
