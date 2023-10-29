function decimalToBinary(decimal: number) {
  return (decimal >>> 0).toString(2)
}

export const iterativePower = (n1: number, n2: number) => {
  let power = 1
  while (n2 > 0) {
    if (decimalToBinary(n2).endsWith('1')) {
      power *= n1
    }
    n1 *= n1
    n2 = Math.floor(n2 / 2) // It can be written as n2 >> 1
  }
  return power
}
