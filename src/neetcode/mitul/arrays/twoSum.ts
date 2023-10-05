// https://leetcode.com/problems/two-sum/
export function twoSum(nums: number[], target: number): number[] {
  const hash: { [key: string]: number } = {}
  for (let i = 0; i < nums.length; i++) {
    const currentValue = hash[target - nums[i]]
    if (currentValue !== undefined) return [currentValue, i]
    hash[nums[i]] = i
  }
  return []
}
