// https://leetcode.com/problems/product-of-array-except-self/

export function productExceptSelf(nums: number[]): number[] {
  const forward: number[] = []
  let backward: number[] = []

  for (let i = 0; i < nums.length; i++) {
    if (forward.length === 0) forward.push(nums[i])
    else forward.push(forward[forward.length - 1] * nums[i])
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (backward.length === 0) backward.push(nums[i])
    else backward.push(backward[backward.length - 1] * nums[i])
  }
  backward = backward.reverse()

  const ret: number[] = []
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) ret.push(backward[i + 1])
    else if (i === nums.length - 1) ret.push(forward[i - 1])
    else {
      ret.push(forward[i - 1] * backward[i + 1])
    }
  }
  return ret
}
