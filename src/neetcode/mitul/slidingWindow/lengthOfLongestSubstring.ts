export function lengthOfLongestSubstring1(s: string): number {
  let p1 = 0,
    p2 = 1,
    res = 0
  if (s.length <= 1) return s.length
  let duplicatedAt = -1
  while (p2 < s.length) {
    duplicatedAt = -1
    for (let i = p1; i < p2; i++) {
      if (s[i] === s[p2]) {
        duplicatedAt = i
        break
      }
    }

    if (duplicatedAt > -1) {
      res = Math.max(res, p2 - p1)
      p1 = duplicatedAt + 1
      p2 += 1
    } else {
      res = Math.max(res, p2 - p1 + 1)
      p2 += 1
    }
  }
  return res
}

// more compute required because of string operations
export function lengthOfLongestSubstring(s: string): number {
  let current = ''
  let res = 0

  for (const char of s) {
    current += char
    if (current.indexOf(char) === current.length - 1) {
      res = Math.max(res, current.length)
    } else {
      current = current.slice(current.indexOf(char) + 1)
    }
  }
  return res
}
