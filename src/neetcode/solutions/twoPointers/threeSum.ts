// https://leetcode.com/problems/3sum/
export function threeSum(nums: number[]): number[][] {
  const res: number[][] = []
  nums = nums.sort((a, b) => a - b)
  for (let left = 0; left < nums.length; left++) {
    if (left > 0 && nums[left] === nums[left - 1]) continue
    if (nums[left] > 0) break

    let mid = left + 1
    let right = nums.length - 1

    while (mid < right) {
      let sum = nums[left] + nums[mid] + nums[right]
      if (sum < 0) mid++
      if (sum > 0) right--
      if (sum === 0) {
        res.push([nums[left], nums[mid], nums[right]])
        mid++

        while (nums[mid] === nums[mid - 1] && left < right) mid++
      }
    }
  }
  return res
}
