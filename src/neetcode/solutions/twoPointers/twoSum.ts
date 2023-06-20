// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
export function twoSum(numbers: number[], target: number): number[] {
  let l = 0,
    r = numbers.length - 1
  while (l < r) {
    let sum = numbers[l] + numbers[r]
    if (sum === target) {
      return [l + 1, r + 1]
    } else if (sum < target) {
      l++
    } else {
      r--
    }
  }
  return [l + 1, r + 1]
}
