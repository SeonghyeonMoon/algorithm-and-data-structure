## 1장
요구사항 분석 > 적절한 자료구조 > 적절한 알고리즘

## 2장
랜더링 - HTML, CSS, 자바스크립트로 작성된 문서를 해석해서 브라우저에 시각적으로 출혁하는 것

Ajax - 시작은 XMLHttpRequest
자바스크립트 = ECMAScript + Web API

## 4장
실행 컨텍스트(p41)? 23장이 실행 컨텍스트

## 5장
세미콜론을 안 붙이는 조건(괄호로 묶은 코드 블록 {...})

## 6장
LF(Line Feed), CR(Carriage Return)
윈도우 - CRLF
유닉스 - LF

undefined란 선언 이후 값이 할당 된적이 없다는 뜻
변수 사용 시 주의사항(p73)

## 7장
?. 옵셔널 체이닝 9장
?? null 병합 연산자 9장

## 8장
고차 함수
암묵적 형변환 9장

## 9장

x.toString()
parseInt('0')
parseFloat('10.5')
단축평가
null or undefined인지 확인
let value = elem && elem.value

옵셔널 체이닝 연산자

let value = elem?.length;
person.job && person.job.manager && person.job.manager.name
person.job.manager.name > person?.job?.manager?.name

function 함수명(str) {
  str = str || '';
  return str.length
}

function 함수명(str = '') {
  return str.length
}

null 병합 연산자(''이나 0일때도 || 쓰고싶을 때)

str = str ?? '';

## 10장

{
  increase: function () {
  }
}

{
  increase() {
  }
}
객체 = 클래스와 인스턴스를 포함한 개념
객체 리터럴의 {}은 코드블록이 아니다 > {};이 붙는다
일급객체

## 11장

숫자는 8바이트 고정
문자는 2바이트씩 10글자면 20바이트