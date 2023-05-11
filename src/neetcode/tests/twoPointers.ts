import { containsDuplicate } from '../solutions/arrays/containsDuplicate'
import { logger } from '../../../util/logger'
import { isPalindrome } from '../solutions/twoPointers/validPalindrome'
import { twoSum } from '../solutions/twoPointers/twoSum'

export const twoSumTests = () => {
  // logger.info(twoSum([2, 7, 11, 15], 9))
  // logger.info(twoSum([2, 3, 4], 6))
  // logger.info(twoSum([0, 0, 3, 4], 0))
  // logger.info(twoSum([5, 25, 75], 100))
  logger.info(twoSum([3, 24, 50, 79, 88, 150, 345], 200))
  // logger.info(twoSum([-1, 0], -1))
  // logger.info(twoSum([1, 2, 2, 2, 2, 2, 2, 2, 3, 4, 5], 5))
}

export const twoPointersTests = () => {
  twoSumTests()
}
