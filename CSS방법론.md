# OOCSS(object Oriented CSS) 객체 지향 CSS
1. 레고처럼 자유로운 조합이 가능한 모듈의 집합을 만든다.

## 스트럭처와 스킨 분리
.btn-cancel (X)
.btn .cancel (O)
.btn에 공통 속성 정의

## 컨테이너와 콘텐츠 분리

#main .btn(X)
.btn(O)

# SMACSS(Scalable and Modular Archtecture for CSS)
1. css코드를 그 역할에 따라 분류(Base, Layout, Module, State, Theme)

## Base 규칙
프로젝트의 표준 스타일 ex) reset.css, 공통 배경색, 폰트 등

## Layout 규칙
헤더, 메인 푸터 등 웹사이트의 레이아웃을 구성하는 큰 모듈에 관한 규칙
대부분 특정 페이지에 한 차례만 사용하므로 ID 셀렉터를 활용한 스타일링을 허용
단 반복적으로 사용하는 모듈의 경우에는 클래스 셀럭터를 이용

## Module 규칙
타이틀, 버튼, 카드, 내비게이션 등이 포함되고 다른 페이지나 레이아웃 안에 삽입되더라도 부서지거나 달라지지 않고 사용할 수 있어야 한다.

## State 규칙
기존 스타일을 덮어쓰거나 확장하기 위해 사용
is- 접두사를 붙인다
자바스크립트에 의존한다.

## Theme 규칙
theme 접두사를 붙일것을 권장

# BEM(Block, Element Modifier)
UI를 독립된 블록으로 분리함으로써 복잡한 페이지에서도 간단하고 신속하게 개발
