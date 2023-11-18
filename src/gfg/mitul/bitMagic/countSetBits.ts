export const countSetBits1 = (n: number) => {
  let count = 0
  while (n !== 0) {
    count += n & 1
    // if ((n & 1) === 1) count++

    n = n >> 1
  }
  return count
}

export const countSetBits2 = (n: number) => {
  let count = 0
  while (n > 0) {
    n = n & (n - 1)

    count++
  }
  return count
}
