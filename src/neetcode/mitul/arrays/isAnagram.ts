// https://leetcode.com/problems/valid-anagram/
export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false

  const sChars = s.split('').sort()
  const tChars = t.split('').sort()
  for (let i = 0; i < sChars.length; i++) {
    if (sChars[i] !== tChars[i]) return false
  }
  return true
}
