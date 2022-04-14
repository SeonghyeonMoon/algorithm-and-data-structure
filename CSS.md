# CSS 방법론

## OOCSS(object Oriented CSS) 객체 지향 CSS
1. 레고처럼 자유로운 조합이 가능한 모듈의 집합을 만든다.

### 스트럭처와 스킨 분리
.btn-cancel (X)
.btn .cancel (O)
.btn에 공통 속성 정의

### 컨테이너와 콘텐츠 분리

#main .btn(X)
.btn(O)

## SMACSS(Scalable and Modular Archtecture for CSS)
1. css코드를 그 역할에 따라 분류(Base, Layout, Module, State, Theme)

### Base 규칙
프로젝트의 표준 스타일 ex) reset.css, 공통 배경색, 폰트 등

### Layout 규칙
헤더, 메인 푸터 등 웹사이트의 레이아웃을 구성하는 큰 모듈에 관한 규칙
대부분 특정 페이지에 한 차례만 사용하므로 ID 셀렉터를 활용한 스타일링을 허용
단 반복적으로 사용하는 모듈의 경우에는 클래스 셀럭터를 이용

### Module 규칙
타이틀, 버튼, 카드, 내비게이션 등이 포함되고 다른 페이지나 레이아웃 안에 삽입되더라도 부서지거나 달라지지 않고 사용할 수 있어야 한다.

### State 규칙
기존 스타일을 덮어쓰거나 확장하기 위해 사용
is- 접두사를 붙인다
자바스크립트에 의존한다.

### Theme 규칙
theme 접두사를 붙일것을 권장

## BEM(Block, Element Modifier)
UI를 독립된 블록으로 분리함으로써 복잡한 페이지에서도 간단하고 신속하게 개발

# em과 rem에 대하여

## [CSS 단위 rem, em, px 사용하는 기준 | 반응형웹](https://www.youtube.com/watch?v=S5uMXoGogkk)

예를 들어 아래와 같은 버튼을 만든다고 가정하였을때 font-size에 따라서 padding이 비례해서 들어가면, font-size는 html문서에 따라 rem, padding은 button의 font-size에 따라 em으로 설정함으로써 구현할 수 있다.

<button style='font-size:2rem; padding: 0.3em 0.5em;border-radius:0.3em; border: 2px solid #ccc'>버튼</button>

```html
<button>버튼</button>
```

```css
button {
  font-size: 10rem;
  padding: 0.3em 0.5em;
}
```

## [프론트엔드 필수 반응형 CSS 단위 총정리 (EM과 REM) | Responsive CSS Units](https://www.youtube.com/watch?v=7Z3t1OWOpHo)

px을 사용하면 사용자가 browser setting에서 font-size 수정하여도 변화가 없다.

em과 %는 비슷한 개념

## [프론트엔드 필수 반응형 CSS 단위 em 과 rem | 예제 프로젝트를 통해 정리 하세요 ✨](https://www.youtube.com/watch?v=xWMKz9NCD0k)

부모사이즈에 따라 달라져야한다면 %, em
부모와 상관없이 브라우저 사이즈에 대해 반응해야 한다면 rem, v*

요소의 너비와 높이에 따라서 사이즈가 달라져야한다면 v*, %
폰트사이즈에 따라서 사이즈가 달라져야한다면 em, rem

rem - font-size  
em - padding(단, 고정적 padding은 rem)


[[코딩 독학] 반응형웹을 적용하기 전 고려해야 할 것들 | 반응형 웹 만들기 | viewport | media query](https://www.youtube.com/watch?v=MKBWugYsk88)

반응형이 무조건적인 것이 아니다. 모바일, 데스크탑 용을 따로 만드는 것도 방법, 반응형웹을 도입할 때는 신중해야한다.

[#15 반응형을 위한 css 단위 이해하기 %, em, rem, vw, vh - 웹 코딩 강좌](https://www.youtube.com/watch?v=SmzghM3l228&list=WL&index=26)


Javascript Deep Dive 

https://poiemaweb.com/

https://www.youtube.com/c/poiemaweb
