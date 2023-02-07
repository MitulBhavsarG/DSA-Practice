import { logger } from '../../../util/logger/logger'
import { containsDuplicate } from './ArrayHashing/containsDuplicate'
import { groupAnagrams } from './ArrayHashing/groupAnagrams'
import { isValidSudoku } from './ArrayHashing/isValidSudoku'
import { productExceptSelf } from './ArrayHashing/productExceptSelf'
import { topKFrequent } from './ArrayHashing/topKFrequent'
import { twoSum } from './ArrayHashing/twoSum'

function containsDuplicateTests() {
  logger.info(containsDuplicate([1, 2, 3, 4, 1])) // true
  logger.info(containsDuplicate([1, 2, 3, 4])) // false
}

function twoSumTests() {
  logger.info(twoSum([2, 7, 11, 15], 9)) // [0,1]
  logger.info(twoSum([3, 2, 4], 6)) // [1,2]
  logger.info(twoSum([3, 3], 6)) // [0,1]
}

function groupAnagramsTests() {
  logger.info(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])) // [["bat"],["nat","tan"],["ate","eat","tea"]]
  logger.info(groupAnagrams([''])) // [[""]]
  logger.info(groupAnagrams(['a'])) // [["a"]]
}

function topKFrequentTests() {
  logger.info(topKFrequent([1, 1, 1, 1, 2, 2, 3], 2)) // [1,2]
  logger.info(topKFrequent([1], 1)) // [1]
}

function productExceptSelfTests() {
  logger.info(productExceptSelf([1, 2, 3, 4])) // [24,12,8,6]
  logger.info(productExceptSelf([-1, 1, 0, -3, 3])) // [0,0,9,0,0]
}

function isValidSudokuTests() {
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
  ) // true

  logger.info(
    isValidSudoku([
      ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
      ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
      ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
      ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
      ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
      ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
      ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
      ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
      ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
    ]),
  ) // false
}

export function mitulTests() {
  containsDuplicateTests()
  twoSumTests()
  groupAnagramsTests()
  topKFrequentTests()
  productExceptSelfTests()
  isValidSudokuTests()
}
