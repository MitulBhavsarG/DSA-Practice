// https://leetcode.com/problems/trapping-rain-water/
// export function trap(height: number[]): number {
//   let maxRight: number[] = []
//   let max = 0
//   for (let i = height.length - 1; i >= 0; i--) {
//     if (i === height.length - 1) {
//       maxRight[i] = 0
//       max = Math.max(max, height[i])
//     } else {
//       maxRight[i] = Math.max(max, maxRight[i + 1])
//       max = Math.max(maxRight[i + 1], height[i])
//     }
//   }

//   let trappedWater = 0

//   let maxLeftValue = 0
//   for (let i = 0; i < height.length; i++) {
//     const minLR = Math.min(maxLeftValue, maxRight[i])
//     const water = minLR - height[i]
//     if (water > 0) trappedWater += water
//     maxLeftValue = Math.max(maxLeftValue, height[i])
//     console.log(maxLeftValue)
//   }

//   return trappedWater
// }

export function trap(height: number[]): number {
  let trappedWater = 0,
    l = 0,
    r = height.length - 1,
    maxLeft = height[l],
    maxRight = height[r]

  while (l < r) {
    if (maxLeft < maxRight) {
      l += 1
      maxLeft = Math.max(maxLeft, height[l])
      trappedWater += maxLeft - height[l]
    } else {
      r -= 1
      maxRight = Math.max(maxRight, height[r])
      trappedWater += maxRight - height[r]
    }
  }

  return trappedWater
}
