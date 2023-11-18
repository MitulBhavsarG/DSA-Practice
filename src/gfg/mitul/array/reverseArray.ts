export function reverseArray(numbers: number[]) {
  let s = 0,
    e = numbers.length - 1
  while (s < e) {
    let t = numbers[s]
    numbers[s] = numbers[e]
    numbers[e] = t
    s++
    e--
  }
  return numbers
}
