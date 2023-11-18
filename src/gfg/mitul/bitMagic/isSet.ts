export const isSet1 = (n: number, k: number) => {
  const kPower = Math.pow(2, k - 1)
  if ((n & kPower) === kPower) {
    return true
  }
  return false
}

export const isSet2 = (n: number, k: number) => {
  return ((n << (k - 1)) & 1) === 1
}
