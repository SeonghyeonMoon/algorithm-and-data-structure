const solution = (n, info) => {
    let result = [-1]
    let maxDiff = 0;
    let ryanInfo = new Array(11).fill(0);

    const dfs = (idx, diff, remainArrowNumber) => {
        if (remainArrowNumber === 0 || idx === -1) {
            if (diff > 0 && diff > maxDiff) {
                ryanInfo[10] += remainArrowNumber
                maxDiff = diff
                result = [...ryanInfo]
            }
            return
        }

        if (info[idx] === 0) {
            ryanInfo[idx] = 1
            dfs(idx - 1, diff + 10 - idx, remainArrowNumber - 1)
        }

        if (info[idx] > 0 && remainArrowNumber > info[idx]) {
            ryanInfo[idx] = info[idx] + 1
            dfs(idx - 1, diff + (10 - idx) * 2, remainArrowNumber - info[idx] - 1)
        }

        ryanInfo[idx] = 0
        dfs(idx - 1, diff, remainArrowNumber)
    }

    const apeachPoint = info.reduce((acc, cur, idx) => acc + (10 - idx) * !!cur, 0)
    dfs(10, -apeachPoint, n)
    return result
}

console.log(solution(3, [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0]));
