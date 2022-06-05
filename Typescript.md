## Object Destructuring Typescript

```ts
const onChange = ({ target: { value } }: { target: { value: string } }) => {
  setInput(value);
};
```