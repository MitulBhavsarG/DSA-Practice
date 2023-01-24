import { logger } from '../../../util/logger/logger'
import { containsDuplicate } from './ArrayHashing/containsDuplicate'

function containsDuplicateTests() {
  logger.info(containsDuplicate([1, 2, 3, 4, 1])) // true
  logger.info(containsDuplicate([1, 2, 3, 4])) // false
}

export function deepTests() {
  containsDuplicateTests()
}
