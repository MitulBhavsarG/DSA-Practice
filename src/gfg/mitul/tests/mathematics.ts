import { logger } from '../../../../util/logger'
import { computingPower1, computingPower2 } from '../mathematics/computingPower'
import { countDigits } from '../mathematics/countDigits'
import { divisors1, divisors2, divisors3 } from '../mathematics/divisors'
import { factorial, factorialRecursively } from '../mathematics/factorial'
import { findGCD1, findGCD2, findGCD3 } from '../mathematics/findGCD'
import { findLCD1, findLCD2 } from '../mathematics/findLCD'
import { isPalindrome } from '../mathematics/isPalindrome'
import { isPrime1, isPrime2, isPrime3 } from '../mathematics/isPrime'
import { iterativePower } from '../mathematics/iterativePower'
import {
  primeFactors1,
  primeFactors2,
  primeFactors3,
  primeFactors4,
} from '../mathematics/primeFactors'
import { sieveOfEratosthenes1 } from '../mathematics/sieveOfEratosthenes'
import {
  trailingZeroInFactorial,
  trailingZeroInFactorialWithCount5,
} from '../mathematics/trailingZeroInFactorial'

export const countDigitsTests = () => {
  logger.info(countDigits(1))
  logger.info(countDigits(12))
  logger.info(countDigits(123))
  logger.info(countDigits(1234))
  logger.info(countDigits(12345))
}

export const isPalindromeTests = () => {
  logger.info(isPalindrome(1))
  logger.info(isPalindrome(12))
  logger.info(isPalindrome(121))
  logger.info(isPalindrome(1221))
  logger.info(isPalindrome(12345))
  logger.info(isPalindrome(12245))
}

export const factorialTests = () => {
  logger.info(factorial(1))
  logger.info(factorial(2))
  logger.info(factorial(3))
  logger.info(factorial(4))
  logger.info(factorial(5))
  logger.info(factorial(6))
}

export const factorialRecursivelyTests = () => {
  logger.info(factorialRecursively(0))
  logger.info(factorialRecursively(1))
  logger.info(factorialRecursively(2))
  logger.info(factorialRecursively(3))
  logger.info(factorialRecursively(4))
  logger.info(factorialRecursively(5))
  logger.info(factorialRecursively(6))
}

export const trailingZeroInFactorialTests = () => {
  logger.info(trailingZeroInFactorial(5)) // 1
  logger.info(trailingZeroInFactorial(10)) // 2
  logger.info(trailingZeroInFactorialWithCount5(100)) // 6
  logger.info(trailingZeroInFactorialWithCount5(200)) // 24
  logger.info(trailingZeroInFactorialWithCount5(251)) // 62
}

export const findGCDTests = () => {
  logger.info(findGCD1(10, 15)) // 5
  logger.info(findGCD2(10, 15)) // 5
  logger.info(findGCD3(10, 15)) // 5
}

export const findLCDTests = () => {
  logger.info(findLCD1(4, 6)) // 12
  logger.info(findLCD2(4, 6)) // 12
}

export const isPrimeTests = () => {
  logger.info(isPrime1(10)) // false
  logger.info(isPrime1(7)) // true
  logger.info(isPrime1(13)) // true

  logger.info(isPrime2(10)) // false
  logger.info(isPrime2(7)) // true
  logger.info(isPrime2(13)) // true

  logger.info(isPrime3(10)) // false
  logger.info(isPrime3(7)) // true
  logger.info(isPrime3(13)) // true
}

export const primeFactorsTests = () => {
  logger.info(primeFactors1(12)) // 2 2 3

  logger.info(primeFactors2(12)) // 2 2 3

  logger.info(primeFactors3(12)) // 2 2 3

  logger.info(primeFactors4(12)) // 2 2 3
}

export const divisorsTests = () => {
  logger.info(divisors1(7)) // 1 7
  logger.info(divisors1(15)) // 1 3 5 15
  logger.info(divisors1(100)) // 1 2 4 5 10 20 25 50 100

  logger.info(divisors2(7)) // 1 7
  logger.info(divisors2(15)) // 1 3 5 15
  logger.info(divisors2(100)) // 1 2 4 5 10 20 25 50 100

  logger.info(divisors3(7)) // 1 7
  logger.info(divisors3(15)) // 1 3 5 15
  logger.info(divisors3(100)) // 1 2 4 5 10 20 25 50 100
}

export const sieveOfEratosthenes1Tests = () => {
  logger.info(sieveOfEratosthenes1(50)) // 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47
}

export const computingPowerTests = () => {
  logger.info(computingPower1(2, 3)) // 8
  logger.info(computingPower1(3, 4)) // 81
  logger.info(computingPower1(5, 0)) // 1
  logger.info(computingPower1(5, 1)) // 5

  logger.info(computingPower2(2, 3)) // 8
  logger.info(computingPower2(3, 4)) // 81
  logger.info(computingPower2(5, 0)) // 1
  logger.info(computingPower2(5, 1)) // 5
}

export const iterativePowerPowerTests = () => {
  logger.info(iterativePower(2, 3)) // 8
  logger.info(iterativePower(3, 4)) // 81
  logger.info(iterativePower(5, 0)) // 1
  logger.info(iterativePower(5, 1)) // 5
}

export const mathematicsTests = () => {
  // countDigitsTests()
  // isPalindromeTests()
  // factorialTests()
  // factorialRecursivelyTests()
  // trailingZeroInFactorialTests()
  // findGCDTests()
  // findLCDTests()
  // isPrimeTests()
  // primeFactorsTests()
  // divisorsTests()
  // sieveOfEratosthenes1Tests()
  // computingPowerTests()
  iterativePowerPowerTests()
}
