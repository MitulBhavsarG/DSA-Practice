// https://leetcode.com/problems/top-k-frequent-elements/
export function topKFrequent(nums: number[], k: number): number[] {
  const map: { [key: string]: number } = {}
  for (let num of nums) {
    if (map[num] === undefined) map[num] = 1
    else map[num]++
  }

  return (Object.keys(map) as any)
    .sort((a: string, b: string) => map[b] - map[a])
    .slice(0, k)
}
