import { isPrime3 } from './isPrime'

export const sieveOfEratosthenes1 = (n: number) => {
  for (let i = 2; i <= n; i++) {
    if (isPrime3(i)) process.stdout.write(`${i} `)
  }
  console.log('') // just for new line
}

export const sieveOfEratosthenes2 = (n: number) => {
  const isPrime = new Array(n).fill(true)

  for (let i = 2; i*i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * 2; j <= n; j = j + i) {
        isPrime[j] = false
      }
    }
  }

  for (let i = 2; i < isPrime.length; i++) {
    if (isPrime[i]) process.stdout.write(`${i} `)
  }
  console.log('')
}
