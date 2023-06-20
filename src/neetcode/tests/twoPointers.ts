import { containsDuplicate } from '../solutions/arrays/containsDuplicate'
import { logger } from '../../../util/logger'
import { isPalindrome } from '../solutions/twoPointers/validPalindrome'
import { twoSum } from '../solutions/twoPointers/twoSum'
import { threeSum } from '../solutions/twoPointers/threeSum'
import { maxArea } from '../solutions/twoPointers/maxArea'

export const twoSumTests = () => {
  logger.info(twoSum([2, 7, 11, 15], 9))
  logger.info(twoSum([2, 3, 4], 6))
  logger.info(twoSum([0, 0, 3, 4], 0))
  logger.info(twoSum([5, 25, 75], 100))
  logger.info(twoSum([3, 24, 50, 79, 88, 150, 345], 200))
  logger.info(twoSum([-1, 0], -1))
  logger.info(twoSum([1, 2, 2, 2, 2, 2, 2, 2, 3, 4, 5], 5))
}

export const threeSumTests = () => {
  logger.info(JSON.stringify(threeSum([-1, 0, 1, 2, -1, -4])))
  logger.info(JSON.stringify(threeSum([0, 1, 1])))
  logger.info(JSON.stringify(threeSum([0, 0, 0])))
}

export const maxAreaTests = () => {
  logger.info(JSON.stringify(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])))
  logger.info(JSON.stringify(maxArea([1, 1])))
}

export const twoPointersTests = () => {
  // twoSumTests()
  // threeSumTests()
  maxAreaTests()
}
