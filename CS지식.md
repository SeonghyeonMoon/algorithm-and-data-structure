# 웹 질문

## 호이스팅이란 무엇인가요?

변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미한다.
var의 경우 호이스팅시 undefined로 변수를 초기화한다.
반면, let, const로 선언된 변수는 초기화하지 않는다.
추가 키워드) Reference Error, TDZ(Temporal Dead Zone)

## 브라우저에 URL을 입력했을 때 발생하는 일

도메인 네임을 입력하면 DNS 서버에서 해당 IP를 찾아 요청을 하고, HTTP와 TCP를 통해 해당 웹 서버에서 자원을 사용자에게 전송해줍니다. 해당 자원을 DOM, CSSOM 등으로 파싱하여 렌더 트리를 생성하고 화면에 보여줍니다. 후에 Javascript가 렌더 트리에 영향을 주면 리플로팅 및 리페인팅 과정을 통해 화면을 재구성합니다.

## 객체지향 프로그래밍

프로그래밍 패러다임 중 하나로, 프로그래밍에서 필요한 데이터를 추상화시켜 상태와 행위를 가진 객체를 만들고, 그 객체들 간의 유기적인 상호작용을 통해 로직을 구성하는 프로그래밍 방법이다.

장점 - 코드 재사용, 유지 보수성, 대형 프로젝트
단점 - 상대적으로 느린 속도, 객체가 많다면 용량이 커진다, 설계 시 많은 시간과 노력

### 추상화

공통의 속성이나 기능을 묶어 이름을 붙이는 것
중복적인 요소 또는 로직을 공통화하고, 결과적으로 재사용성을 높인다.

### 클래스와 인스턴스

클래스 - 추상화를 통해 정의한 것
인스턴스 - 클래스에서 정의한 것을 토대로 실제 메모리에 할당한 것

## JWT

Header, Payload, Signature

### Header

typ 토큰의 타입
alg 알고리즘 방식

## 클로저

클로저는 반환된 내부함수가 자신이 선언됐을 때의 환경(Lexical environment)인 스코프를 기억하여 자신이 선언됐을 때의 환경(스코프) 밖에서 호출되어도 그 환경(스코프)에 접근할 수 있는 함수

## 라이프 사이클

마운트, 업데이트, 언마운트

Constructor
Props > state
update should?
render
didMount/update
unmount

## RESTAPI 정의

Representational State Transfer
자원을 이름으로 구분하여 해당 자원의 상태(정보)를 주고 받는 모든 것

## 브라우저의 역할

브라우저의 주요 기능은 사용자가 선택한 자원을 서버에 요청하고 브라우저에 표시하는 것. 자원은 HTML문서지만 PDF나 이미지같은 형태일 수 있다.

## 용어 정리

1. MVC - Model(Data 관련), View(시각화), Controller(M V 연결, 전반적 제어)

2. ASCII - American Standard Code for Information Interchange 최초의 표준 문자열 인코딩 방식

## React Query

0. 장점 - 비동기 코드 감소, 전역 상태 관리 간소화, 캐싱, 리패칭 구현

1. Stale - 최신화가 필요한 데이터

2. staleTime, cacheTime의 기본값은 0, 5분

리액트 쿼리의 장점 - 비동기 코드 감소, 전역 상태 관리 간소화, 캐싱, 리패칭 구현

## Context API의 문제점

provider로 감싼 모든 자식 컴포넌트들이 리렌더링되는 문제점이 있는데 이를 해결하기 위해서는 Provider Hell이 발생한다.

## HLS

HTTP Live Streaming
파일 조각을 나누고 http 통신으로 전송하는 방식

## Semantic Tag 사용 이유

1. SEO
2. 웹 접근성
3. 유지보수성

## MSA

MSA - Microservices Architecture Components의 약자로 Monolithic Architecture의 반대되는 개념

Monolithic Architecture란 SW의 모든 구성요소가 한 프로젝트에 통합되어있는 형태의 구조

아직까지는 많은 소프트웨어가 Monolithic 형태로 구현되어 있고, 소규모 프로젝트에는 Monolithic Architecture가 훨씬 합리적입니다. 간단한 Architecture이고, 유지보수가 용이하다

하지만 일정 규모 이상의 서비스, 혹은 수백명의 개발자가 투입되는 프로젝트에서 Monolithic Architecture은 뚜렷한 한계를 보입니다.

서비스/프로젝트가 커지면 커질수록, 영향도 파악 및 전체 시스템 구조의 파악에 어려움이 있습니다.
빌드 시간 및 테스트시간, 그리고 배포시간이 기하급수적으로 늘어나게 됩니다.
서비스를 부분적으로 scale-out하기가 힘듭니다.
부분의 장애가 전체 서비스의 장애로 이어지는 경우가 발생하게됩니다.

정리하면 작은 서비스로 분할하여 독립적으로 역할 배포될 수 있는 구조로 만든 것

## 디바운싱 쓰로틀링

쓰로틀링 - 마지막 함수가 호출된 후 일정 시간이 지나기 전에 다시 호출되지 않도록 하는 것
디바운싱 - 연이어 호출되는 함수들 중 마지막 함수(또는 제일 처음)만 호출하도록 하는 것

## Git

fetch
pull = fetch + merge
clone = pull + remote add

### commit convention

- feat : 새로운 기능 추가
- fix : 버그 수정
- docs : 문서 수정
- style : 코드 formatting, 세미콜론(;) 누락, 코드 변경이 없는 경우
- refactor : 코드 리팩토링
- test : 테스트 코드, 리팩토링 테스트 코드 추가
- chore : 빌드 업무 수정, 패키지 매니저 수정
