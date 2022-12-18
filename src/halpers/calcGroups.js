export const calcGroups = ({teams, result, obj, user}) => {
  // A
  const a1 = result.groups.a.teams[0]
  const a1Bet = user.bet.groups.a[0]
  if( a1Bet === a1.id) {
    const team = teams.find(team => team.id === a1.id)
    obj.result.groups.push({id: a1.id, label: `${team.name} - A1`})
    obj.totalPoint++
  }

  const a2 = result.groups.a.teams[1]
  const a2Bet = user.bet.groups.a[1]
  if( a2Bet === a2.id) {
    const team = teams.find(team => team.id === a2.id)
    obj.result.groups.push({id: a2.id, label: `${team.name} - A2`})
    obj.totalPoint++
  }

  // B
  const b1 = result.groups.b.teams[0]
  const b1Bet = user.bet.groups.b[0]
  if( b1Bet === b1.id) {
    const team = teams.find(team => team.id === b1.id)
    obj.result.groups.push({id: b1.id, label: `${team.name} - B1`})
    obj.totalPoint++
  }

  const b2 = result.groups.b.teams[1]
  const b2Bet = user.bet.groups.b[1]
  if( b2Bet === b2.id) {
    const team = teams.find(team => team.id === b2.id)
    obj.result.groups.push({id: b2.id, label: `${team.name} - B2`})
    obj.totalPoint++
  }

  // C
  const c1 = result.groups.c.teams[0]
  const c1Bet = user.bet.groups.c[0]
  if( c1Bet === c1.id) {
    const team = teams.find(team => team.id === c1.id)
    obj.result.groups.push({id: c1.id, label: `${team.name} - C1`})
    obj.totalPoint++
  }

  const c2 = result.groups.c.teams[1]
  const c2Bet = user.bet.groups.c[1]
  if( c2Bet === c2.id) {
    const team = teams.find(team => team.id === c2.id)
    obj.result.groups.push({id: c2.id, label: `${team.name} - C2`})
    obj.totalPoint++
  }

  // D
  const d1 = result.groups.d.teams[0]
  const d1Bet = user.bet.groups.d[0]
  if( d1Bet === d1.id) {
    const team = teams.find(team => team.id === d1.id)
    obj.result.groups.push({id: d1.id, label: `${team.name} - D1`})
    obj.totalPoint++
  }

  const d2 = result.groups.d.teams[1]
  const d2Bet = user.bet.groups.d[1]
  if( d2Bet === d2.id) {
    const team = teams.find(team => team.id === d2.id)
    obj.result.groups.push({id: d2.id, label: `${team.name} - D2`})
    obj.totalPoint++
  }

  // E
  const e1 = result.groups.e.teams[0]
  const e1Bet = user.bet.groups.e[0]
  if( e1Bet === e1.id) {
    const team = teams.find(team => team.id === e1.id)
    obj.result.groups.push({id: e1.id, label: `${team.name} - E1`})
    obj.totalPoint++
  }

  const e2 = result.groups.e.teams[1]
  const e2Bet = user.bet.groups.e[1]
  if( e2Bet === e2.id) {
    const team = teams.find(team => team.id === e2.id)
    obj.result.groups.push({id: e2.id, label: `${team.name} - E2`})
    obj.totalPoint++
  }

  // F
  const f1 = result.groups.f.teams[0]
  const f1Bet = user.bet.groups.f[0]
  if( f1Bet === f1.id) {
    const team = teams.find(team => team.id === f1.id)
    obj.result.groups.push({id: f1.id, label: `${team.name} - F1`})
    obj.totalPoint++
  }

  const f2 = result.groups.f.teams[1]
  const f2Bet = user.bet.groups.f[1]
  if( f2Bet === f2.id) {
    const team = teams.find(team => team.id === f2.id)
    obj.result.groups.push({id: f2.id, label: `${team.name} - F2`})
    obj.totalPoint++
  }

  // G
  const g1 = result.groups.g.teams[0]
  const g1Bet = user.bet.groups.g[0]
  if( g1Bet === g1.id) {
    const team = teams.find(team => team.id === g1.id)
    obj.result.groups.push({id: g1.id, label: `${team.name} - G1`})
    obj.totalPoint++
  }

  const g2 = result.groups.g.teams[1]
  const g2Bet = user.bet.groups.g[1]
  if( g2Bet === g2.id) {
    const team = teams.find(team => team.id === g2.id)
    obj.result.groups.push({id: g2.id, label: `${team.name} - G2`})
    obj.totalPoint++
  }

  // H
  const h1 = result.groups.h.teams[0]
  const h1Bet = user.bet.groups.h[0]
  if( h1Bet === h1.id) {
    const team = teams.find(team => team.id === h1.id)
    obj.result.groups.push({id: h1.id, label: `${team.name} - H1`})
    obj.totalPoint++
  }

  const h2 = result.groups.h.teams[1]
  const h2Bet = user.bet.groups.h[1]
  if( h2Bet === h2.id) {
    const team = teams.find(team => team.id === h2.id)
    obj.result.groups.push({id: h2.id, label: `${team.name} - H2`})
    obj.totalPoint++
  }
}