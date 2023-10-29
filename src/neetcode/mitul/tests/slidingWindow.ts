import { logger } from '../../../../util/logger'
import { lengthOfLongestSubstring } from '../../mitul/slidingWindow/lengthOfLongestSubstring'
import { characterReplacement } from '../slidingWindow/characterReplacement'
import { checkInclusion } from '../slidingWindow/checkInclusion'

export const lengthOfLongestSubstringTests = () => {
  logger.info(lengthOfLongestSubstring('dvdf'))
  logger.info(lengthOfLongestSubstring('au'))
  logger.info(lengthOfLongestSubstring(' '))
  logger.info(lengthOfLongestSubstring('0'))
  logger.info(lengthOfLongestSubstring('abcabcbb'))
  logger.info(lengthOfLongestSubstring('bbbb'))
  logger.info(lengthOfLongestSubstring('pwwkew'))
}

export const characterReplacementTests = () => {
  logger.info(characterReplacement('ABBB', 2)) // 4
  logger.info(characterReplacement('ABAB', 2)) // 4
  logger.info(characterReplacement('AABABBA', 1)) // 4
  logger.info(characterReplacement('ABCDEFG', 1)) // 2
  logger.info(characterReplacement('ABCDEFG', 0)) // 1
  logger.info(characterReplacement('ABCDEFG', 10)) // 7
}

export const checkInclusionTests = () => {
  logger.info(checkInclusion('ab', 'eidbaooo')) // true
  logger.info(checkInclusion('ab', 'eidboaoo')) // false
}

export const slidingWindowTests = () => {
  // lengthOfLongestSubstringTests()
  // characterReplacementTests()
  checkInclusionTests()
}
