# Map

```js
let arr = [1, 2, 3, 4, 5];

let newArr = arr.map((v, i, a) => {
  console.log(v, i, a)
  return v * v
})

console.log(newArr)
```