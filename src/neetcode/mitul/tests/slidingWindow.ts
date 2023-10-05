import { logger } from '../../../../util/logger'
import { lengthOfLongestSubstring } from '../../mitul/slidingWindow/lengthOfLongestSubstring'

export const lengthOfLongestSubstringTests = () => {
  logger.info(lengthOfLongestSubstring('abcabcbb'))
  logger.info(lengthOfLongestSubstring('bbbb'))
  logger.info(lengthOfLongestSubstring('pwwkew'))
}

export const slidingWindowTests = () => {
  lengthOfLongestSubstringTests()
}
