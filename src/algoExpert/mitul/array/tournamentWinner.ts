export function tournamentWinner(competitions: string[][], results: number[]) {
  const teamScore: any = {}
  let currentBestTeam: { name: string; score: string } | null = null

  for (let i = 0; i < competitions.length; i++) {
    let winner = results[i]

    const winnerTeamName =
      winner === 0 ? competitions[i][1] : competitions[i][0]

    if (!teamScore[winnerTeamName]) teamScore[winnerTeamName] = 0
    teamScore[winnerTeamName] += 3

    if (!currentBestTeam || currentBestTeam.score < teamScore[winnerTeamName]) {
      currentBestTeam = {
        name: winnerTeamName,
        score: teamScore[winnerTeamName],
      }
    }
  }
  return currentBestTeam?.name
}
