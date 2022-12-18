import { Collapse } from 'antd';
import {useSelector} from "react-redux";

import {calcGroups} from "./halpers/calcGroups";
import {calcQuarterfinal} from "./halpers/calcQuarterfinal";
import {calcSemifinal} from "./halpers/calcSemifinal";
import {calcFinal} from "./halpers/calcFinal";
import {calcOther} from "./halpers/calcOther";

const { Panel } = Collapse;

function App() {
  const {users, result, teams} = useSelector(state => state.app)

  const res = []

  users.forEach((user => {
    const obj = {
      name: user.name,
      totalPoint: 0,
      result: {
        groups: [],
        quarterfinal: [],
        semifinal: [],
        final: [],
        champion: [],
        thirdPlaceMatch: [],
        thirdPlace: []
      }
    }

    calcGroups({
      teams,
      result,
      user,
      obj
    })

    calcQuarterfinal(
      {
        teams,
        result,
        user,
        obj
      }
    )

    calcSemifinal(
      {
        teams,
        result,
        user,
        obj
      }
    )

    calcFinal(
      {
        teams,
        result,
        user,
        obj
      }
    )

    calcOther(
      {
        teams,
        result,
        user,
        obj
      }
    )

    res.push(obj)
  }))

  res.sort((a, b) => {
    if(a.totalPoint > b.totalPoint) {
      return -1
    }

    if(a.totalPoint < b.totalPoint) {
      return 1
    }

    if(a.totalPoint === b.totalPoint) {
      return 0
    }
  })


  // console.log('res', res)

  const items = res.map((user, index) => (
    <Panel key={user.name} header={`${index+1}. ${user.name} - ${user.totalPoint} баллов`}>
      <div>
        <h3>Группы ({user.result.groups.length} баллов)</h3>
        <ul>
          {user.result.groups.map(team => <li>{team.label}</li>)}
        </ul>
        <hr/>
      </div>

      <div>
        <h3>Четвертьфиналы ({user.result.quarterfinal.length} балла)</h3>
        <ul>
          {user.result.quarterfinal.map(team => <li>{team.label}</li>)}
        </ul>
        <hr/>
      </div>

      <div>
        <h3>Полуфиналы ({user.result.semifinal.length} балла)</h3>
        <ul>
          {user.result.semifinal.map(team => <li>{team.label}</li>)}
        </ul>
        <hr/>
      </div>

      <div>
        <h3>Финал ({user.result.final.length} балл)</h3>
        <ul>
          {user.result.final.map(team => <li>{team.label}</li>)}
        </ul>
        <hr/>
      </div>

      <div>
        <h3>Чемпион ({user.result.champion.length} балл)</h3>
        <ul>
          {user.result.champion.map(team => <li>{team.label}</li>)}
        </ul>
        <hr/>
      </div>

      <div>
        <h3>Матч за 3-е место ({user.result.thirdPlaceMatch.length} балл)</h3>
        <ul>
          {user.result.thirdPlaceMatch.map(team => <li>{team.label}</li>)}
        </ul>
        <hr/>
      </div>

      <div>
        <h3>Бронза ({user.result.thirdPlace.length} балл)</h3>
        <ul>
          {user.result.thirdPlace.map(team => <li>{team.label}</li>)}
        </ul>
      </div>
    </Panel>
  ))


  return (
    <div className="App">
      <Collapse>
        {items}
      </Collapse>
    </div>
  );
  

}

export default App;
