export const isPalindrome = (n: number) => {
  let reverse = 0
  let temp = n
  while (temp > 0) {
    const lastDigit = temp % 10
    reverse = reverse * 10 + lastDigit
    temp = Math.floor(temp / 10)
  }

  return reverse === n
}
