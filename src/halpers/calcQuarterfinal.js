export const calcQuarterfinal = ({teams, result, obj, user}) => {
  user.bet.quarterfinal.forEach(teamId => {
    const isIncludes = result.quarterfinal.includes(teamId)

    if(isIncludes) {
      const team = teams.find(team => team.id === teamId)
      obj.totalPoint++
      obj.result.quarterfinal.push({id: teamId, label: team.name})
    }
  })
}