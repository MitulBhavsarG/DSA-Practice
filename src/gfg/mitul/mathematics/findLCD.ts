import { findGCD3 } from './findGCD'

export const findLCD1 = (n1: number, n2: number) => {
  let currentNumber = Math.max(n1, n2)

  while (true) {
    if (currentNumber % n1 === 0 && currentNumber % n2 === 0) break
    currentNumber++
  }
  return currentNumber
}

// This is a formula
export const findLCD2 = (n1: number, n2: number) => {
  return (n1 * n2) / findGCD3(n1, n2)
}