export function arraySortedOrNot(numbers: number[]) {
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i - 1] > numbers[i]) {
      return false
    }
  }
  return true
}
