export function findSecondLargest(numbers: number[]) {
  let res = -1,
    largest = 0
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[largest]) {
      res = largest
      largest = i
    } else if (numbers[i] !== numbers[largest]) {
      if (res == -1 || numbers[i] > numbers[res]) {
        res = i
      }
    }
  }
  return res
}
