import { logger } from '../../../util/logger/logger'
import { containsDuplicate } from './ArrayHashing/containsDuplicate'
import { groupAnagrams } from './ArrayHashing/groupAnagrams'
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

export function mitulTests() {
  containsDuplicateTests()
  twoSumTests()
  groupAnagramsTests()
}
