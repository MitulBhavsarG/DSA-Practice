import { logger } from '../../../../util/logger'
import { arraySortedOrNot } from '../array/arraySortedOrNot'
import { findLargest } from '../array/findLargest'
import { findSecondLargest } from '../array/findSecondLargest'
import { moveZeroes, moveZeroes2 } from '../array/moveZeroes'
import { removeDuplicates } from '../array/removeDuplicates'
import { reverseArray } from '../array/reverseArray'
import { rotate } from '../array/rotate'

export const findLargestTests = () => {
  logger.info(findLargest([1, 2, 3, 4, 5]))
  logger.info(findLargest([5, 4, 3, 2, 1]))
  logger.info(findLargest([1, 2, 3, 2, 1]))
  logger.info(findLargest([70, 83, 82, 39, 81]))
}

export const findSecondLargestTests = () => {
  logger.info(findSecondLargest([1, 2, 3, 4, 5]))
  logger.info(findSecondLargest([5, 4, 3, 2, 1]))
  logger.info(findSecondLargest([1, 2, 3, 2, 1]))
  logger.info(findSecondLargest([70, 83, 82, 39, 81]))
  logger.info(findSecondLargest([1, 1, 1, 1, 1, 1]))
}

export const arraySortedOrNotTests = () => {
  logger.info(arraySortedOrNot([1]))
  logger.info(arraySortedOrNot([1, 2, 3, 4, 5]))
  logger.info(arraySortedOrNot([5, 4, 3, 2, 1]))
  logger.info(arraySortedOrNot([1, 2, 3, 2, 1]))
  logger.info(arraySortedOrNot([1, 2, 3, 3, 4, 5]))
  logger.info(arraySortedOrNot([1, 1, 1, 1, 1, 1]))
}

export const reverseArrayTests = () => {
  logger.info(reverseArray([1]))
  logger.info(reverseArray([1, 2, 3, 4, 5]))
  logger.info(reverseArray([5, 4, 3, 2, 1]))
  logger.info(reverseArray([1, 2, 3, 2, 1]))
  logger.info(reverseArray([1, 1, 1, 1, 1, 1]))
}

export const removeDuplicatesTests = () => {
  logger.info(removeDuplicates([1]))
  logger.info(removeDuplicates([1, 1, 2, 2, 3, 4, 5]))
  logger.info(removeDuplicates([1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 5]))
  logger.info(removeDuplicates([1, 2, 3, 4, 5]))
}

export const moveZeroesTests = () => {
  logger.info(moveZeroes([0, 1, 0, 3, 12]))
  logger.info(moveZeroes([0]))
  logger.info(moveZeroes([10]))

  logger.info(moveZeroes([8, 5, 0, 10, 0, 20]))
  logger.info(moveZeroes([0, 0, 0, 0, 10, 0]))
  logger.info(moveZeroes([10, 20]))

  
  logger.info(moveZeroes2([0, 1, 0, 3, 12]))
  logger.info(moveZeroes2([0]))
  logger.info(moveZeroes2([10]))

  logger.info(moveZeroes2([8, 5, 0, 10, 0, 20]))
  logger.info(moveZeroes2([0, 0, 0, 0, 10, 0]))
  logger.info(moveZeroes2([10, 20]))
}

export const rotateTests = () => {
  logger.info(rotate([1], 1))
  logger.info(rotate([1, 2, 3], 1))
  logger.info(rotate([1, 2, 3, 4, 5], 1))
  logger.info(rotate([1, 2, 3, 4, 5], 2))
  logger.info(rotate([1, 2, 3, 4, 5], 3))
  logger.info(rotate([1, 2, 3, 4, 5], 4))
  logger.info(rotate([1, 2, 3, 4, 5], 5))
}

export const arrayTests = () => {
  // findLargestTests()
  // findSecondLargestTests()
  // arraySortedOrNotTests()
  // reverseArrayTests()
  // removeDuplicatesTests()
  // moveZeroesTests()
  rotateTests()
}
