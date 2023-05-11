// https://leetcode.com/problems/valid-palindrome/
function isCharNotAlphaNumeric(char: string) {
  const code = char.charCodeAt(0)
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return true
  }
  return false
}

export function isPalindrome(s: string): boolean {
  let l = 0,
    r = s.length - 1
  while (l < r) {
    if (isCharNotAlphaNumeric(s[l])) {
      l++
      continue
    }
    if (isCharNotAlphaNumeric(s[r])) {
      r--
      continue
    }
    if (s[l].toLocaleLowerCase() === s[r].toLocaleLowerCase()) {
      l++
      r--
    } else {
      return false
    }
  }
  return true
}
