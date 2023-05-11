export function isValidSudoku(board: string[][]): boolean {
  const set = new Set()

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        const rowKey = `Row: ${i} Digit: ${board[i][j]}`
        const colKey = `Col: ${j} Digit: ${board[i][j]}`
        const boxKey = `Box: ${Math.floor(i / 3)}-${Math.floor(j / 3)} Digit: ${
          board[i][j]
        }`

        if (set.has(rowKey) || set.has(colKey) || set.has(boxKey)) return false

        set.add(rowKey).add(colKey).add(boxKey)
      }
    }
  }
  return true
}
