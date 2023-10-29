// it's pending
export function checkInclusion(s1: string, s2: string): boolean {
  const counter1 = new Map<string, number>()
  let counter2 = new Map<string, number>()

  for (let i = 0; i < s1.length; i++) {
    counter1.set(s1[i], (counter1.get(s1[i]) || 0) + 1)
  }
  counter2 = counter1

  let isTrue = true
  for (let i = 0; i < s2.length; i++) {
    let currentCharCounter = counter2.get(s2[i])
    if (currentCharCounter) {
      if ((currentCharCounter || 0) > 0) {
        counter2.set(s2[i], (currentCharCounter || 1) - 1)
      } else {
        counter2.set(s2[i], (currentCharCounter || 1) - 1)
      }
    } else {
      counter2.forEach((val) => {
        if (val > 0) isTrue = false
      })
      break
    }
  }

  return isTrue
}
