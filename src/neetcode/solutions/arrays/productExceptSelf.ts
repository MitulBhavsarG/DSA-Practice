// https://leetcode.com/problems/product-of-array-except-self/
export function productExceptSelf(nums: number[]): number[] {
  let prefix: number[] = [],
    postfix: number[] = []

  for (let i = 0; i < nums.length; i++) {
    const prev = prefix[i - 1] === undefined ? 1 : prefix[i - 1]
    prefix.push(prev * nums[i])
  }

  for (let i = nums.length - 1, j = 0; i >= 0; i--, j++) {
    const prev = postfix[j - 1] === undefined ? 1 : postfix[j - 1]
    postfix.push(nums[i] * prev)
  }

  postfix = postfix.reverse()

  const output: number[] = []
  for (let i = 0; i < nums.length; i++) {
    const prefixMultiplicationValue =
      prefix[i - 1] === undefined ? 1 : prefix[i - 1]
    const postfixMultiplicationValue =
      postfix[i + 1] === undefined ? 1 : postfix[i + 1]
    output.push(prefixMultiplicationValue * postfixMultiplicationValue)
  }
  return output
}
