# [프로그래머스] [전화번호 목록](https://programmers.co.kr/learn/courses/30/lessons/42577)

## 풀이

set의 in 연산이 O(1)인 점을 이용한 풀이

```py
def solution(phone_book):
    phone_book_set = set(phone_book)
    for phone_number in phone_book:
        for index in range(len(phone_number) - 1):
            if phone_number[:index + 1] in phone_book_set :
                return False
    return True
```

## 다른 풀이

문자열 순으로 정렬하면 앞 뒤로만 체크해도 startswith가 존재하는지 확인이 가능하다.

```py
def solution(phoneBook):
    phoneBook.sort()
    for p1, p2 in zip(phoneBook, phoneBook[1:]):
        if p2.startswith(p1):
            return False
    return True
```
