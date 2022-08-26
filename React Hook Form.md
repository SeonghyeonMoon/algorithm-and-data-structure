# React Hook Form

## Install

```bash
yarn add react-hook-form
```

## Basic Usage

기본적으로 useForm을 import 하여 내부 메소드를 사용한다.

```jsx
import { useForm } from "react-hook-form";

const { register, handleSubmit } = useForm();
```

form tag에 handleSubmit으로 callback을 감싼다.
input tag에 {...register("tag id")}를 설정한다.

```jsx
<form onSubmit={handleSubmit(submit callback 함수)}>

<input
  id="email"
  type="email"
  {...register("email")}
/>
```

## 중복 제출 방지

useForm의 formState에서 isSubmitting으로 제출 버튼을 disabled 시킬 수 있다.

```jsx
const {
  formState: { isSubmitting },
} = useForm();

// 제출에 1초 걸리도록
const onSubmit = async (data) => {
  await new Promise((res) => {
    setTimeout(res, 1000);
  });
  alert(JSON.stringify(data));
};

<button type="submit" disabled={isSubmitting}>
  로그인
</button>
```

## Validation

```jsx
<input
  id='username'
  type='text'
  placeholder='username'
  {...register('username', {
    required: 'Username을 입력해야합니다.',
    pattern: { 
      value: /\S+@\S+\.\S+/, 
      message: 'username의 형식 잘못' 
    },
    minLength: {
      value: 5,
      message: '5자 이상',
    },
  })}
/>
```

## Error 화면 보여주기

```jsx
<InputBox>
  <Label htmlFor='email'>이메일</Label>
  <Input
    id='email'
    type='text'
    placeholder='이메일'
    isInvalid={!!errors.email} // props로 테두리 상태 바꾸기
    {...register('email', {
      required: '이메일을 입력해주세요.',
      pattern: { value: /\S+@\S+\.\S+/, message: '이메일 형식이 아닙니다.' },
    })}
  />
  {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
</InputBox>
```