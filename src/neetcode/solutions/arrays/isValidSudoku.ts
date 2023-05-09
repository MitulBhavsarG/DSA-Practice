// https://leetcode.com/problems/valid-sudoku/

const isValidRow = (row: number, board: string[][]) => {
  const set = new Set()
  for (let i = 0; i < board[0].length; i++) {
    if (board[row][i] === '.') {
      continue
    } else if (!set.has([board[row][i]][0])) set.add([board[row][i]][0])
    else return false
  }
  return true
}

const isValidColumn = (col: number, board: string[][]) => {
  const set = new Set()
  for (let i = 0; i < board[0].length; i++) {
    if (board[i][col] === '.') {
      continue
    } else if (!set.has([board[i][col]][0])) set.add([board[i][col]][0])
    else return false
  }
  return true
}

const isValidSquares = (board: string[][], row: number, col: number) => {
  const set = new Set()
  for (let i = row; i < row + 3; i++) {
    for (let j = col; j < col + 3; j++) {
      if (board[i][j] === '.') {
        continue
      } else if (!set.has([board[i][j]][0])) {
        set.add([board[i][j]][0])
      } else {
        return false
      }
    }
  }
  return true
}

export function isValidSudoku(board: string[][]): boolean {
  for (let row = 0; row < board[0].length; row++)
    if (!isValidRow(row, board)) {
      return false
    }

  for (let col = 0; col < board[0].length; col++)
    if (!isValidColumn(col, board)) {
      return false
    }

  for (let row = 0; row < board[0].length; row = row + 3) {
    for (let col = 0; col < board[0].length; col = col + 3) {
      if (!isValidSquares(board, row, col)) {
        return false
      }
    }
  }

  return true
}