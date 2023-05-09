import { containsDuplicate } from "../solutions/arrays/containsDuplicate"
import { logger } from "../../../util/logger/logger"

export const containsDuplicateTests = () => {
    logger.info(containsDuplicate([1, 2, 3, 1]))
    logger.info(containsDuplicate([1, 2, 3]))
}

export const arrayTests = () => {
    containsDuplicateTests()
}