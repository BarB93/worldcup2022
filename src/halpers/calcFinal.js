export const calcFinal = ({teams, result, obj, user}) => {
  user.bet.final.forEach(teamId => {
    const isIncludes = result.final.includes(teamId)

    if(isIncludes) {
      obj.totalPoint++
      const team = teams.find(team => team.id === teamId)
      obj.result.final.push({id: teamId, label: team.name})
    }
  })
}