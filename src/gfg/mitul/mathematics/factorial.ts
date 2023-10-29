export const factorial = (n: number) => {
  if (n === 0) return 0
  let output = 1
  for (let i = 2; i <= n; i++) {
    output *= i
  }
  return output
}

export const factorialRecursively = (n: number): number => {
  if (n === 0 || n === 1 || n === 2) return n
  return factorialRecursively(n - 1) * n
}
