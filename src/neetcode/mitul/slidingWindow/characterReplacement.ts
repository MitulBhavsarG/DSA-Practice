// this doesn't work for ABBB input
// export function characterReplacement(s: string, k: number): number {
//   let p1 = 0,
//     p2 = 1
//   let currentK = k
//   let maxCount = 1

//   while (p2 < s.length) {
//     if (s[p1] === s[p2]) {
//       p2 += 1
//       maxCount = Math.max(maxCount, p2 - p1)
//     } else {
//       if (currentK > 0) {
//         currentK -= 1
//         p2 += 1
//         maxCount = Math.max(maxCount, p2 - p1)
//       } else {
//         maxCount = Math.max(maxCount, p2 - p1)
//         p1 += 1
//         p2 = p1 + 1
//         currentK = k
//       }
//     }
//   }

//   return maxCount
// }

export function characterReplacement(s: string, k: number): number {
  let count = new Map<string, number>()
  let res = 0,
    l = 0

  const getMax = () => {
    let max = 0
    count.forEach((value) => {
      max = Math.max(value, max)
    })
    return max
  }

  for (let r = 0; r < s.length; r++) {
    count.set(s[r], ((count.get(s[r]) || 0) + 1))
    
    while ((r - l + 1 - getMax()) > k) {
      count.set(s[l], ((count.get(s[l]) || 1) - 1))
      l += 1
    }

    res = Math.max(res, r - l + 1)
  }

  return res
}
