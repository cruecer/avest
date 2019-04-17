import { now } from "moment";

const initialState = {
  auth: {
    user: {nickname: 'admin'}, //TODO: return null
    isAuthed: true, //TODO: return false
    isLoading: false,
    errorMsg: ''
  },
  calculator: {
    currencies: [{abb: 'USD', code: 145}, {abb: 'EUR', code: 292}, {abb: 'RUB', code: 298}],
    rates: [],
    BYNvalue: [],
  },
  result: {
    baseCurrencie: {
      Cur_Abbreviation: "BYN",
      Cur_ID: 933,
      Cur_Name: "Белорусский рубль",
      Cur_OfficialRate: 1,
      Cur_Scale: 1,
      Date: new Date()
    },
    data: [],
  }
}

export default initialState;