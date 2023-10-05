// https://leetcode.com/problems/longest-consecutive-sequence/
export function longestConsecutive(nums: number[]): number {
  const set = new Set(nums)
  let longestConsecutive = 0
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i] - 1)) {
      let currentConsecutive = 1
      while (set.has(nums[i] + currentConsecutive)) {
        currentConsecutive++
      }
      longestConsecutive = Math.max(longestConsecutive, currentConsecutive)
    }
  }
  return longestConsecutive
}
