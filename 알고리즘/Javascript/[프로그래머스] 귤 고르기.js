// const countNumber = (numArr) => numArr.reduce((acc, cur) => ({...acc, [cur]: acc[cur] ? acc[cur] + 1 : 1}), {})
// reduce 내부에서 ...을 사용하면 성능 저하가 크게 발생한다.
const countNumber = (numArr) => numArr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] ?? 0) + 1
    return acc
}, {})

const sortValues = (obj) => Object.values(obj).sort((a, b) => b - a)

const solution = (k, tangerine) => {
    const count = countNumber(tangerine)
    const sortedCount = sortValues(count)
    let tempSum = 0
    for (let i = 0; i < sortedCount.length; i++) {
        if (tempSum >= k) {
            return i
        }
        tempSum += sortedCount[i]
    }
    return sortedCount.length
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]))