export const countDigits = (n: number) => {
  let count = 0

  while (n > 0) {
    n = Math.floor(n / 10)
    count++
  }

  return count
}
