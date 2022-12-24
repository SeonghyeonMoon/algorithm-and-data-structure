# 좌표

page.X, page.Y - 전체 문서 기준 이벤트 페이지 좌표
screen.X, screen.Y - 모니터 기준 이벤트 화면 좌표
getBoundingClientRect() - 해당 엘리먼트 기준 좌표

# 스크롤

window.scrollX, window.scrollY - 현재 스크롤 위치
window.scrollBy({top: 100, behavior: 'smooth' }) - 스크롤 단위 이동
window.scrollTo(0, 100) - 스크롤 이동
요소.scrollIntoView() - 해당 엘리먼트로 스크롤 이동

# 윈도우 사이즈

window.innerWidth, window.innerHeight - 브라우저 창 사이즈
window.outerWidth, window.outerHeight - 브라우저 창 사이즈 + 툴바, 메뉴바 등
