// n = parseInt(prompt())

// coins = prompt().split(' ').map(coin => parseInt(coin)).sort((a, b) => b - a)
coins = [1, 1, 2, 3, 9]

checkNum = 1
for (const coin of coins) {
  if (coin > checkNum) break
  checkNum += coin
}
console.log(checkNum)