import { containsDuplicate } from '../solutions/arrays/containsDuplicate'
import { logger } from '../../../util/logger'
import { lengthOfLongestSubstring } from '../solutions/slidingWindow/lengthOfLongestSubstring'

export const lengthOfLongestSubstringTests = () => {
  logger.info(lengthOfLongestSubstring('abcabcbb'))
  logger.info(lengthOfLongestSubstring('bbbb'))
  logger.info(lengthOfLongestSubstring('pwwkew'))
}

export const slidingWindowTests = () => {
  lengthOfLongestSubstringTests()
}
