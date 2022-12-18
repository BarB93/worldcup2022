export const calcSemifinal = ({teams, result, obj, user}) => {
  user.bet.semifinal.forEach(teamId => {
    const isIncludes = result.semifinal.includes(teamId)

    if(isIncludes) {
      const team = teams.find(team => team.id === teamId)
      obj.totalPoint++
      obj.result.semifinal.push({id: teamId, label: team.name})
    }
  })
}