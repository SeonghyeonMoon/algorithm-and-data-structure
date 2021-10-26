## 관련 문제 풀이

1. 파일명 정렬
   정규식 활용하면 코드 줄이기 가능

```py
def solution(files):
    answer = []
    for file in files:
        HEAD, NUMBER, TAIL = '', '', ''
        ck = False
        for i in range(len(file)):
            if file[i].isdigit():
                NUMBER += file[i]
                ck = True
            elif ck == False:
                HEAD += file[i]
            else:
                TAIL = file[i:]
                break
        answer.append((HEAD, NUMBER, TAIL))
    answer.sort(key = lambda x: (x[0].lower(), int(x[1])))
    return [''.join(a) for a in answer]
```
