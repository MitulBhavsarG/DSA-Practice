export function removeDuplicates(numbers: number[]) {
  let p = 0

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[p] !== numbers[i]) {
      p++
      numbers[p] = numbers[i]
    }
  }
  return ++p
}
