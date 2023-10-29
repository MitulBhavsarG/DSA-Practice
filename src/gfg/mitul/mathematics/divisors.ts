export const divisors1 = (n: number) => {
  const divisorList: number[] = []
  for (let i = 1; i * 2 <= n; i++) {
    if (n % i === 0) divisorList.push(i)
  }
  divisorList.push(n)
  return divisorList
}

export const divisors2 = (n: number) => {
  const divisorList: number[] = []
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      divisorList.push(i)
      if (i != Math.floor(n / i)) {
        divisorList.push(Math.floor(n / i))
      }
    }
  }
  return divisorList
}

export const divisors3 = (n: number) => {
  const divisorList: number[] = []
  let i = 1
  for (; i * i <= n; i++) {
    if (n % i === 0) {
      divisorList.push(i)
    }
  }

  for (; i >= 1; i--) {
    if (n % i === 0) {
      divisorList.push(Math.floor(n / i))
    }
  }
  return divisorList
}
