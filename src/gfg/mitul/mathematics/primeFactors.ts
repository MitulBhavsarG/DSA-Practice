import { isPrime3 } from './isPrime'

// Output array is just for better displayPartsToString, don't consider it in space complexity

export const primeFactors1 = (n: number) => {
  let primeFactorList: number[] = []
  for (let i = 2; i < n; i++) {
    if (isPrime3(i)) {
      let x = i
      while (n % x === 0) {
        primeFactorList.push(i)
        x *= i
      }
    }
  }
  return primeFactorList
}

export const primeFactors2 = (n: number) => {
  let primeFactorList: number[] = []
  for (let i = 2; i * i < n; i++) {
    if (isPrime3(i)) {
      let x = i
      while (n % x === 0) {
        primeFactorList.push(i)
        x *= i
      }
    }
  }
  return primeFactorList
}

export const primeFactors3 = (n: number) => {
  if (n <= 1) return

  let primeFactorList: number[] = []
  for (let i = 2; i * i < n; i++) {
    while (n % i === 0) {
      primeFactorList.push(i)
      n = Math.floor(n / i)
    }
  }

  if (n > 1) primeFactorList.push(n)

  return primeFactorList
}

export const primeFactors4 = (n: number) => {
  if (n <= 1) return
  let primeFactorList: number[] = []
  while (n % 2 === 0) {
    primeFactorList.push(2)
    n = Math.floor(n / 2)
  }
  while (n % 3 === 0) {
    primeFactorList.push(3)
    n = Math.floor(n / 3)
  }

  for (let i = 5; i * i < n; i + 6) {
    while (n % i === 0) {
      primeFactorList.push(i)
      n = Math.floor(n / i)
    }
    while (n % (i + 2) === 0) {
      primeFactorList.push(i + 2)
      n = Math.floor(n / i + 2)
    }
  }

  if (n > 3) primeFactorList.push(n)

  return primeFactorList
}
