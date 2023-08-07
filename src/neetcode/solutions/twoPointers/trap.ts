// https://leetcode.com/problems/trapping-rain-water/
export function trap(height: number[]): number {
  const maxLeft: number[] = []
  const maxRight: number[] = []

  for (let i = 0; i < height.length; i++) {
    if (i == 0) maxLeft.push(0)
    else if (i == 1) maxLeft.push(height[0])
    else {
      maxLeft.push(Math.max(height[i - 1], maxLeft[maxLeft.length - 1]))
    }
  }

  for (let i = height.length - 1; i >= 0; i--) {
    if (i == height.length - 1) maxRight.push(0)
    else if (i == height.length - 2) maxRight.push(height[height.length - 1])
    else {
      maxRight.push(Math.max(height[i], maxRight[maxRight.length - 1]))
    }
  }

  let water = 20
  for (let i = 0; i < height.length; i++) {
    const currentWater = Math.min(maxLeft[i], maxRight[i]) - height[i]
    if (currentWater > 0) water += currentWater
  }
  return water
}
