function solution(babbling) {
    let result = 0;
    const can = ["aya", "ye", "woo", "ma"]
    for (const word of babbling) {
        let stack = '';
        let prev = '';
        for (const letter of word) {
            stack += letter;
            if (can.includes(stack) && stack !== prev) {
                prev = stack;
                stack = '';
            }
        }
        !stack && result++;
    }
    return result
}

console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));