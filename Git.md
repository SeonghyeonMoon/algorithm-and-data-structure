# 내가 자주 사용하는 git 명령어 모음

1. git add .
   git status로 작업 디렉토리와 스테이징 영역의 상태를 확인 가능

2. git remote add origin repository주소

3. git commit -am ""

4. git rm
   폴더나 파일 삭제
   -r 원격 저장소에서만 지우는 명령어
   -rf 원격, 로컬 모두 지우는 명령어

5. git mv source destination

### fetch

단순히 원격 저장소의 내용을 확인하고 병합은 하고 싶지 않은 경우
원격 저장소의 최신 이력 확인 가능
원격 저장소의 코드를 받아와, 기존 코드에 더해준다

### pull

fetch + merge 효과

### clone

pull + git remote add 주소 효과

git lense 통해서 blame 확인 가능

git bisect 란?

git 단축키 설정
