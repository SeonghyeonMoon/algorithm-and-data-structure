# Typescript 

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