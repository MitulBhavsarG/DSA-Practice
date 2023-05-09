// https://leetcode.com/problems/two-sum/

export function twoSum(nums: number[], target: number) {
  const values: { [key: string]: number } = {}
  for (let i = 0; i < nums.length; i++) {
    const currentValue = target - nums[i]
    if (currentValue in values) {
      return [values[currentValue], i]
    }
    values[nums[i]] = i
  }
}