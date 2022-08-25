# File System

## Sync 차이점

### Sync가 아닐 때

```js
import fs from 'fs/promises';

const readFile = async () => {
  const data = await fs.readFile('./test.txt', 'utf8')
  console.log(data);
} 

readFile()
console.log(1);
```

readFile을 할 때 프로그램이 멈추지 않고, 1이 출력된 후 readFile이 끝난 후 data 출력

### Sync일 때

```js
import fs from 'fs';

const readFile = async () => {
  const data = fs.readFileSync('./test.txt', 'utf8')
  console.log(data);
} 

readFile()
console.log(1);
```

readFile을 할 때 프로그램이 멈추어 readFile이 끝난 후 data 출력 후 1이 출력

### 순서 보장

sync가 아닐 경우 순서가 보장되지 않기 때문에 각 작업을 await한다.

```js
import fs from 'fs/promises';

const writeFile = async () => {
  await fs.writeFile('./test.txt', 'Hi!!!');
};

const readFile = async () => {
  const data = await fs.readFile('./test.txt', 'utf8');
  console.log(data);
};

const main = async () => {
  await writeFile();
  await readFile();
  console.log(1);
};

main();
```
