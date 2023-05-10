import { containsDuplicate } from '../solutions/arrays/containsDuplicate'
import { logger } from '../../../util/logger'
import { isAnagram } from '../solutions/arrays/isAnagram'
import { twoSum } from '../solutions/arrays/twoSum'

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

export const arrayTests = () => {
  // containsDuplicateTests()
  // isAnagramTests()
  twoSumTests()
}
