export function lengthOfLongestSubstring(s: string): number {
  let p1 = 0,
    p2 = 1,
    length = 0
  for (let i = 0; i < s.length; i++) {
    let j = p1
    while (j < p2) {
      if (s[j] === s[p2]) {
        length = Math.max(length, p2 - p1)
        break
      }
      length = Math.max(length, j - p1)
      j++
    }
  }
  return length
}
