export function maxProfit(prices: number[]): number {
  let p1 = 0,
    p2 = 1,
    profit = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[p2] > prices[p1]) {
      profit = Math.max(profit, prices[p2] - prices[p1])
    } else {
      p1 = p2
    }
    p2++
  }
  return profit
}
