export function rotateBy1(numbers: number[]) {
  let first = numbers[0]
  let i = 1
  for (; i < numbers.length; i++) {
    numbers[i - 1] = numbers[i]
  }
  numbers[i - 1] = first
  return numbers
}

export function rotate(numbers: number[], k: number) {
  for (let i = 0; i < k; i++) {
    numbers = rotateBy1(numbers)
  }

  return numbers
}
