import { containsDuplicate } from '../solutions/arrays/containsDuplicate'
import { logger } from '../../../util/logger'
import { isAnagram } from '../solutions/arrays/isAnagram'
import { twoSum } from '../solutions/arrays/twoSum'
import { productExceptSelf } from '../solutions/arrays/productExceptSelf'
import { isValidSudoku } from '../solutions/arrays/isValidSudoku'

export const containsDuplicateTests = () => {
  logger.info(containsDuplicate([1, 2, 3, 1]))
  logger.info(containsDuplicate([1, 2, 3]))
}

export const isAnagramTests = () => {
  logger.info(isAnagram('anagram', 'nagaram'))
  logger.info(isAnagram('rat', 'car'))
}

export const twoSumTests = () => {
  logger.info(twoSum([2, 7, 11, 15], 9))
  logger.info(twoSum([3, 2, 4], 6))
}

export const productExceptSelfTests = () => {
  logger.info(productExceptSelf([1, 2, 3, 4]))
  logger.info(productExceptSelf([-1, 1, 0, -3, 3]))
}

export const isValidSudokuTests = () => {
  logger.info(
    isValidSudoku([
      ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
      ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
      ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
      ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
      ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
      ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
      ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
      ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
      ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
    ]),
  )

  logger.info(
    isValidSudoku([
      ['2', '3', '.', '.', '7', '.', '.', '.', '.'],
      ['6', '2', '.', '1', '9', '5', '.', '.', '.'],
      ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
      ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
      ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
      ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
      ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
      ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
      ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
    ]),
  )
}
export const arrayTests = () => {
  // containsDuplicateTests()
  // isAnagramTests()
  // twoSumTests()
  // productExceptSelfTests()
  isValidSudokuTests()
}
