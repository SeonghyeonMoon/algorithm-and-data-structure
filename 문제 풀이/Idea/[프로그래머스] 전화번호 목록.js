// [프로그래머스] [전화번호 목록](https://programmers.co.kr/learn/courses/30/lessons/42577)

// 분류
// - 아이디어

// 풀이
// 문자열을 정렬한 후, 앞과 뒤의 문자열만 비교하면 된다.

const solution = (phoneBook) => {
  phoneBook.sort();
  for (let i = 1; i < phoneBook.length; i++) {
    const cur = phoneBook[i];
    const prev = phoneBook[i - 1];
    if (cur.startsWith(prev)) return false;
  }

  return true;
};

console.log(solution(['1', '12', '13', '2']));
