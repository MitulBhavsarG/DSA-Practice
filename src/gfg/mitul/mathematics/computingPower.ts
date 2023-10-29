export const computingPower1 = (n1: number, n2: number) => {
  let power = 1
  for (let i = 0; i < n2; i++) {
    power *= n1
  }
  return power
}

export const computingPower2 = (n1: number, n2: number): number => {
  if (n2 === 0) return 1
  let t = computingPower2(n1, Math.floor(n2 / 2))
  t *= t
  if (n2 % 2 === 0) return t
  else return t * n1
}
