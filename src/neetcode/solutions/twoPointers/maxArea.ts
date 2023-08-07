// https://leetcode.com/problems/container-with-most-water/
// brut force
export function brutForceMaxArea(height: number[]): number {
  let maxArea = 0
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const currentHeight = Math.min(height[i], height[j])
      const currentArea = (j - i) * currentHeight
      maxArea = Math.max(currentArea, maxArea)
    }
  }
  return maxArea
}

export function maxArea(height: number[]): number {
  let maxArea = 0
  let left = 0,
    right = height.length - 1
  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right])
    maxArea = Math.max(maxArea, area)
    if (height[left] < height[right]) left++
    else right--
  }
  return maxArea
}
