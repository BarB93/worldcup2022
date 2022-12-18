import { createSlice } from '@reduxjs/toolkit'
import {countries} from '../../consts/countries'

export const appSlice = createSlice({
  name: 'counter',
  initialState: {
    teams: [
      {id: countries.NETHERLANDS, name: 'Нидерланды'},
      {id: countries.SENEGAL, name: 'Сенегал'},
      {id: countries.ECUADOR, name: 'Эквадор'},
      {id: countries.QATAR, name: 'Катар'},

      {id: countries.ENGLAND, name: 'Англия'},
      {id: countries.USA, name: 'США'},
      {id: countries.IRAN, name: 'Иран'},
      {id: countries.WALES, name: 'Уэльс'},

      {id: countries.ARGENTINA, name: 'Аргентина'},
      {id: countries.POLAND, name: 'Польша'},
      {id: countries.MEXICO, name: 'Мексика'},
      {id: countries.SAUDI_ARABIA, name: 'Саудовская Аравия'},

      {id: countries.FRANCE, name: 'Франция'},
      {id: countries.AUSTRALIA, name: 'Австралия'},
      {id: countries.TUNISIA, name: 'Тунис'},
      {id: countries.DENMARK, name: 'Дания'},

      {id: countries.JAPAN, name: 'Япония'},
      {id: countries.SPAIN, name: 'Испания'},
      {id: countries.GERMANY, name: 'Германия'},
      {id: countries.COSTA_RICA, name: 'Коста-Рика'},

      {id: countries.MOROCCO, name: 'Марокко'},
      {id: countries.CROATIA, name: 'Хорватия'},
      {id: countries.BELGIUM, name: 'Бельгия'},
      {id: countries.CANADA, name: 'Канада'},

      {id: countries.BRAZIL, name: 'Бразилия'},
      {id: countries.SWITZERLAND, name: 'Швейцария'},
      {id: countries.CAMEROON, name: 'Камерун'},
      {id: countries.SERBIA, name: 'Сербия'},

      {id: countries.PORTUGAL, name: 'Португалия'},
      {id: countries.SOUTH_KOREA, name: 'Южная Корея'},
      {id: countries.URUGUAY, name: 'Уругвай'},
      {id: countries.GHANA, name: 'Гана'},
    ],
    result: {
      groups: {
        a: {
          isFinish: true,
          teams: [
            {id: countries.NETHERLANDS, points: 7},
            {id: countries.SENEGAL, points: 6},
            {id: countries.ECUADOR, points: 4},
            {id: countries.QATAR, points: 0},
          ],
        },
        b: {
          isFinish: true,
          teams: [
            {id: countries.ENGLAND, points: 7},
            {id: countries.USA, points: 5},
            {id: countries.IRAN, points: 3},
            {id: countries.WALES, points: 1},
          ],
        },
        c: {
          isFinish: true,
          teams: [
            {id: countries.ARGENTINA, points: 6},
            {id: countries.POLAND, points: 4},
            {id: countries.MEXICO, points: 4},
            {id: countries.SAUDI_ARABIA, points: 3},
          ],
        },
        d: {
          isFinish: true,
          teams: [
            {id: countries.FRANCE, points: 6},
            {id: countries.AUSTRALIA, points: 6},
            {id: countries.TUNISIA, points: 4},
            {id: countries.DENMARK, points: 1},
          ],
        },
        e: {
          isFinish: true,
          teams: [
            {id: countries.JAPAN, points: 6},
            {id: countries.SPAIN, points: 4},
            {id: countries.GERMANY, points: 4},
            {id: countries.COSTA_RICA, points: 3},
          ],
        },
        f: {
          isFinish: true,
          teams: [
            {id: countries.MOROCCO, points: 7},
            {id: countries.CROATIA, points: 5},
            {id: countries.BELGIUM, points: 4},
            {id: countries.CANADA, points: 0},
          ],
        },
        g: {
          isFinish: true,
          teams: [
            {id: countries.BRAZIL, points: 6},
            {id: countries.SWITZERLAND, points: 6},
            {id: countries.CAMEROON, points: 4},
            {id: countries.SERBIA, points: 1},
          ],
        },
        h: {
          isFinish: true,
          teams: [
            {id: countries.PORTUGAL, points: 6},
            {id: countries.SOUTH_KOREA, points: 4},
            {id: countries.URUGUAY, points: 4},
            {id: countries.GHANA, points: 3},
          ],
        },
      },
      quarterfinal: [
        countries.NETHERLANDS,
        countries.ARGENTINA,
        countries.CROATIA,
        countries.BRAZIL,
        countries.ENGLAND,
        countries.FRANCE,
        countries.MOROCCO,
        countries.PORTUGAL,
      ],
      semifinal: [
        countries.CROATIA,
        countries.ARGENTINA,
        countries.FRANCE,
        countries.MOROCCO,
      ],
      final: [
        countries.ARGENTINA,
        countries.FRANCE,
      ],
      champion: [
        countries.ARGENTINA,
      ],
      thirdPlaceMatch: [
        countries.CROATIA,
        countries.MOROCCO,
      ],
      thirdPlace: [
        countries.CROATIA,
      ]

    },
    users: [
      {
        id: 2,
        name: 'Джос',
        bet: {
          groups: {
            a: [countries.NETHERLANDS, countries.SENEGAL],
            b: [countries.USA, countries.IRAN],
            c: [countries.ARGENTINA, countries.MEXICO],
            d: [countries.FRANCE, countries.DENMARK],
            e: [countries.SPAIN, countries.GERMANY],
            f: [countries.BELGIUM, countries.CROATIA],
            g: [countries.BRAZIL, countries.CAMEROON],
            h: [countries.URUGUAY, countries.GHANA]
          },
          quarterfinal: [
            countries.NETHERLANDS,
            countries.ARGENTINA,
            countries.SPAIN,
            countries.BRAZIL,
            countries.SENEGAL,
            countries.FRANCE,
            countries.BELGIUM,
            countries.URUGUAY,
          ],
          semifinal: [countries.ARGENTINA, countries.FRANCE, countries.SPAIN, countries.URUGUAY],
          final: [countries.ARGENTINA, countries.SPAIN],
          champion: [countries.ARGENTINA],
          thirdPlaceMatch: [countries.FRANCE, countries.URUGUAY],
          thirdPlace: [countries.URUGUAY]
        }
      },
      {
        id: 3,
        name: 'Илья',
        bet: {
          groups: {
            a: [countries.ECUADOR, countries.NETHERLANDS],
            b: [countries.ENGLAND, countries.WALES],
            c: [countries.ARGENTINA, countries.MEXICO],
            d: [countries.FRANCE, countries.DENMARK],
            e: [countries.GERMANY, countries.SPAIN],
            f: [countries.CROATIA, countries.BELGIUM],
            g: [countries.BRAZIL, countries.SWITZERLAND],
            h: [countries.URUGUAY, countries.PORTUGAL],
          },
          quarterfinal: [
              countries.ECUADOR,
              countries.ARGENTINA,
              countries.GERMANY,
              countries.BRAZIL,
              countries.ENGLAND,
              countries.FRANCE,
              countries.CROATIA,
              countries.URUGUAY
          ],
          semifinal: [countries.ARGENTINA, countries.FRANCE, countries.GERMANY, countries.URUGUAY],
          final: [countries.FRANCE, countries.GERMANY],
          champion: [countries.GERMANY],
          thirdPlaceMatch: [countries.ARGENTINA, countries.URUGUAY],
          thirdPlace: [countries.ARGENTINA]
        }
      },
      {
        id: 4,
        name: 'Юлия',
        bet: {
          groups: {
            a: [countries.NETHERLANDS, countries.QATAR],
            b: [countries.ENGLAND, countries.USA],
            c: [countries.ARGENTINA, countries.MEXICO],
            d: [countries.FRANCE, countries.DENMARK],
            e: [countries.SPAIN, countries.GERMANY],
            f: [countries.BELGIUM, countries.CROATIA],
            g: [countries.BRAZIL, countries.SERBIA],
            h: [countries.PORTUGAL, countries.URUGUAY],
          },
          quarterfinal: [
            countries.NETHERLANDS, countries.DENMARK,
            countries.SPAIN, countries.BRAZIL,
            countries.ENGLAND, countries.FRANCE,
            countries.GERMANY, countries.PORTUGAL
          ],
          semifinal: [
            countries.DENMARK, countries.FRANCE,
            countries.BRAZIL, countries.GERMANY,
          ],
          final: [countries.FRANCE, countries.BRAZIL],
          champion: [countries.FRANCE],
          thirdPlaceMatch: [countries.DENMARK, countries.GERMANY],
          thirdPlace: [countries.GERMANY]
        }
      },
      {
        id: 5,
        name: 'Давид',
        bet: {
          groups: {
            a: [countries.NETHERLANDS, countries.SENEGAL],
            b: [countries.ENGLAND, countries.WALES],
            c: [countries.ARGENTINA, countries.POLAND],
            d: [countries.FRANCE, countries.DENMARK],
            e: [countries.SPAIN, countries.GERMANY],
            f: [countries.BELGIUM, countries.CROATIA],
            g: [countries.BRAZIL, countries.SWITZERLAND],
            h: [countries.PORTUGAL, countries.URUGUAY],
          },
          quarterfinal: [
            countries.NETHERLANDS, countries.ARGENTINA,
            countries.SPAIN, countries.BRAZIL,
            countries.ENGLAND, countries.FRANCE,
            countries.GERMANY, countries.PORTUGAL,
          ],
          semifinal: [
            countries.ARGENTINA, countries.FRANCE,
            countries.BRAZIL, countries.GERMANY,
          ],
          final: [countries.ARGENTINA, countries.BRAZIL,],
          champion: [countries.BRAZIL],
          thirdPlaceMatch: [countries.FRANCE, countries.GERMANY],
          thirdPlace: [countries.FRANCE]
        }
      },
      {
        id: 6,
        name: 'Сергей',
        bet: {
          groups: {
            a: [countries.NETHERLANDS, countries.ECUADOR],
            b: [countries.ENGLAND, countries.USA],
            c: [countries.ARGENTINA, countries.MEXICO],
            d: [countries.FRANCE, countries.DENMARK],
            e: [countries.SPAIN, countries.GERMANY],
            f: [countries.BELGIUM, countries.CROATIA],
            g: [countries.BRAZIL, countries.SWITZERLAND],
            h: [countries.PORTUGAL, countries.URUGUAY],
          },
          quarterfinal: [
            countries.NETHERLANDS, countries.ARGENTINA,
            countries.SPAIN, countries.BRAZIL,
            countries.ENGLAND, countries.FRANCE,
            countries.BELGIUM, countries.PORTUGAL,
          ],
          semifinal: [
            countries.ENGLAND, countries.ARGENTINA,
            countries.SPAIN, countries.BELGIUM,
          ],
          final: [countries.ENGLAND, countries.SPAIN],
          champion: [countries.SPAIN],
          thirdPlaceMatch: [countries.BELGIUM, countries.ARGENTINA],
          thirdPlace: [countries.BELGIUM]
        }
      },
      {
        id: 7,
        name: 'Андрей',
        bet: {
          groups: {
            a: [countries.NETHERLANDS, countries.ECUADOR],
            b: [countries.ENGLAND, countries.USA],
            c: [countries.ARGENTINA, countries.MEXICO],
            d: [countries.DENMARK, countries.FRANCE],
            e: [countries.SPAIN, countries.GERMANY],
            f: [countries.BELGIUM, countries.CROATIA],
            g: [countries.BRAZIL, countries.SERBIA],
            h: [countries.PORTUGAL, countries.URUGUAY],
          },
          quarterfinal: [
            countries.NETHERLANDS, countries.ARGENTINA,
            countries.SPAIN, countries.BRAZIL,
            countries.ECUADOR, countries.DENMARK,
            countries.GERMANY, countries.SERBIA,
          ],
          semifinal: [
            countries.ARGENTINA, countries.DENMARK,
            countries.BRAZIL, countries.SERBIA
          ],
          final: [countries.ARGENTINA, countries.SERBIA],
          champion: [countries.ARGENTINA],
          thirdPlaceMatch: [countries.DENMARK, countries.BRAZIL],
          thirdPlace: [countries.BRAZIL]
        }
      },
      {
        id: 1,
        name: 'Борис',
        bet: {
          groups: {
            a: [countries.NETHERLANDS, countries.QATAR],
            b: [countries.ENGLAND, countries.WALES],
            c: [countries.ARGENTINA, countries.POLAND],
            d: [countries.FRANCE, countries.DENMARK],
            e: [countries.GERMANY, countries.SPAIN],
            f: [countries.BELGIUM, countries.CROATIA],
            g: [countries.BRAZIL, countries.SWITZERLAND],
            h: [countries.PORTUGAL, countries.URUGUAY]
          },
          quarterfinal: [
            countries.NETHERLANDS,
            countries.ARGENTINA,
            countries.GERMANY,
            countries.BRAZIL,
            countries.ENGLAND,
            countries.FRANCE,
            countries.SPAIN,
            countries.PORTUGAL,
          ],
          semifinal: [countries.ARGENTINA, countries.FRANCE, countries.BRAZIL, countries.SPAIN],
          final: [countries.ARGENTINA, countries.BRAZIL],
          champion: [countries.BRAZIL],
          thirdPlaceMatch: [countries.FRANCE, countries.SPAIN],
          thirdPlace: [countries.SPAIN]
        }
      },
    ]

  },
  reducers: {

  }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = appSlice.actions

export default appSlice.reducer