export function moveZeroes(numbers: number[]) {
  let p = -1
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
      if (p === -1) {
        p = i
      }
    } else if (p !== -1) {
      numbers[p] = numbers[i]
      numbers[i] = 0
      p++
    }
  }
  return numbers
}

export function moveZeroes2(numbers: number[]) {
  let count = 0
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== 0) {
      [numbers[count], numbers[i]] = [numbers[i], numbers[count]]
      count++
    }
  }
  return numbers
}
