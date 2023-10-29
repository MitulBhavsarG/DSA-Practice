import { isPrime3 } from './isPrime'

export const sieveOfEratosthenes1 = (n: number) => {
  const numbers: number[] = []
  for (let i = 1; i <= n; i++) {
    if (isPrime3(i)) numbers.push(i)
  }
  return numbers
}
