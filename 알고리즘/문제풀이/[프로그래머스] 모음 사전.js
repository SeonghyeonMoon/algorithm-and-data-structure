const vowels = {
    A: 0,
    E: 1,
    I: 2,
    O: 3,
    U: 4
}

const solution = (word) => {
    let result = word.length;
    let gap = 0
    for (let i = 0; i < 5; i++) {
        gap = (gap * 5) + 1
        const letter = word[5 - i - 1];
        if (!letter) continue
        const index = vowels[letter];
        result += gap * index
    }
    return result
}

console.log(solution("EIO"));

