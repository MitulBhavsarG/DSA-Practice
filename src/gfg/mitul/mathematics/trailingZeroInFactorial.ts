export const factorial = (n: number) => {
  if (n === 0) return 0
  let output = 1
  for (let i = 2; i <= n; i++) {
    output *= i
  }
  return output
}

export const trailingZeroInFactorial = (n: number) => {
  let fact = factorial(n)
  let count = 0

  while (fact > 0 && fact % 10 === 0) {
    fact = Math.floor(fact / 10)
    count++
  }

  return count
}

// count 5 and 2s to find out the trailing zeros as the trailing zero depends on this digits only
// 2s are going to be more but 5s are less so we can only count 5s and it should work
export const trailingZeroInFactorialWithCount5 = (n: number) => {
  let count = 0
  for (let i = 5; i <= n; i = i * 5) {
    count = count + Math.floor(n / i)
  }
  return count
}
