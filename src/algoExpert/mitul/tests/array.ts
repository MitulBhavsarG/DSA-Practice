import { logger } from '../../../../util/logger'
import { tournamentWinner } from '../array/tournamentWinner'

export const tournamentWinnerTests = () => {
  logger.info(
    tournamentWinner(
      [
        ['HTML', 'C#'],
        ['C#', 'Python'],
        ['Python', 'HTML'],
      ],
      [0, 0, 1],
    ),
  ) // Python
}

export const arrayTests = () => {
  tournamentWinnerTests()
}
