function countString(str) {
    const count = {};
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        count[letter] = (count[letter] || 0) + 1;
    }
    return count;
}

function solution(X, Y) {
    const countX = countString(X);
    const countY = countString(Y);
    const minCount = {};

    for (const letter in countX) {
        if (countY[letter]) {
            minCount[letter] = Math.min(countX[letter], countY[letter]);
        }
    }

    if (Object.keys(minCount).length === 0) {
        return '-1';
    }

    if (Object.keys(minCount).length === 1 && minCount[0]) {
        return '0';
    }

    let result = ''
    for (const letter of Object.keys(minCount).sort().reverse()) {
        result += letter.repeat(minCount[letter]);
    }
    return result;
}

console.log(solution("100", "2345"));