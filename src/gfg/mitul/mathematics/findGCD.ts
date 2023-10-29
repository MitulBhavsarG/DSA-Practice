export const findGCD1 = (n1: number, n2: number) => {
  let currentNumber = Math.min(n1, n2)

  while (currentNumber > 1) {
    if (n1 % currentNumber === 0 && n2 % currentNumber === 0)
      return currentNumber
    currentNumber--
  }
  return 1
}

export const findGCD2 = (n1: number, n2: number) => {
  while (n1 !== n2) {
    if (n1 > n2) n1 -= n2
    else n2 -= n1
  }
  return n1
}

export const findGCD3 = (n1: number, n2: number): number => {
  if (n2 === 0) return n1
  return findGCD3(n2, n2 % n1)
}
