function solution(a, b) {
    b /= gcd(a, b)
    while (!(b % 2)) {
        b /= 2;
    }
    while (!(b % 5)) {
        b /= 5;
    }
    return b === 1 ? 1 : 2;
}

function gcd(a, b) {
    if (!b) return a;
    return gcd(b, a % b);
}

console.log(solution(12, 21))

