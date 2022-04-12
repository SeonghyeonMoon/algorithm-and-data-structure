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
