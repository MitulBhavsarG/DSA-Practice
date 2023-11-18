import { logger } from '../../../../util/logger'
import { countSetBits1, countSetBits2 } from '../bitMagic/countSetBits'
import { isSet1, isSet2 } from '../bitMagic/isSet'

export const isSetTests = () => {
  logger.info(isSet1(5, 1))
  logger.info(isSet1(8, 2))
  logger.info(isSet1(0, 3))

  logger.info(isSet2(5, 1))
  logger.info(isSet2(8, 2))
  logger.info(isSet2(0, 3))
}

export const countSetBitsTests = () => {
  logger.info(countSetBits1(0))
  logger.info(countSetBits1(1))
  logger.info(countSetBits1(5))
  logger.info(countSetBits1(7))
  logger.info(countSetBits1(15))
  logger.info(countSetBits1(16))

  
  logger.info(countSetBits2(0))
  logger.info(countSetBits2(1))
  logger.info(countSetBits2(5))
  logger.info(countSetBits2(7))
  logger.info(countSetBits2(15))
  logger.info(countSetBits2(16))
}

export const bitMagicTests = () => {
  // isSetTests()
  countSetBitsTests()
}
