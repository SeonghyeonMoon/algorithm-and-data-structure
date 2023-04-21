// [프로그래머스] 합성수 찾기

// 분류
// - 수학(소수)

{
  // 풀이 1(명령형 풀이)

  // n이 합성수인지 판별하기 위해서는 n까지 모든 수를 나눠볼 필요없이, 2부터 n의 제곱근까지만 확인하면 그 이상으로는 앞에서 이미 확인되었기 때문에 판별 가능하다.
  // ex) n이 16일 때 2 * 8에서 8은 이미 판별되었고, 16의 제곱근인 4 이후로는 확인할 필요가 없다.

  const solution = (n) => {
    let result = 0;

    for (let i = 2; i <= n; i++) {
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j !== 0) {
          result += 1;
          break;
        }
      }
    }

    return result;
  };
}

{
  // 풀이 2(내장 함수를 활용한 함수형 풀이)

  const range = (s, e) => Array.from({ length: e ? e - s : s }, (_, idx) => (e ? idx + s : idx));

  const isNotPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (!(n % i)) return true;
    }
  };

  const solution = (n) => range(2, n + 1).filter(isNotPrime).length;
}
