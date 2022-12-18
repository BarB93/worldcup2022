export const  calcOther = ({teams, result, obj, user}) => {
  user.bet.champion.forEach(teamId => {
    const isIncludes = result.champion.includes(teamId)
    console.log('champ', isIncludes)
    if(isIncludes) {
      obj.totalPoint++
      const team = teams.find(team => team.id === teamId)
      obj.result.champion.push({id: teamId, label: team.name})
    }
  })

  user.bet.thirdPlaceMatch.forEach(teamId => {
    const isIncludes = result.thirdPlaceMatch.includes(teamId)

    if(isIncludes) {
      obj.totalPoint++
      const team = teams.find(team => team.id === teamId)
      obj.result.thirdPlaceMatch.push({id: teamId, label: team.name})
    }
  })

  user.bet.thirdPlace.forEach(teamId => {
    const isIncludes = result.thirdPlace.includes(teamId)

    if(isIncludes) {
      obj.totalPoint++
      const team = teams.find(team => team.id === teamId)
      obj.result.thirdPlace.push({id: teamId, label: team.name})
    }
  })

}