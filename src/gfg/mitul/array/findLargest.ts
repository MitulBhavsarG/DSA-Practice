export function findLargest(numbers: number[]) {
  let largestNumberIndex = 0

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbers[largestNumberIndex]) {
      largestNumberIndex = i
    }
  }

  return largestNumberIndex
}
