const initialState = {
  auth: {
    user: {nickname: 'admin'}, //TODO: return null
    isAuthed: true, //TODO: return false
    isLoading: false,
    errorMsg: ''
  },
  calculator: {
    currencies: [{abb: 'USD', code: 145}, {abb: 'EUR', code: 292}, {abb: 'RUB', code: 298}],
    rates: []
  },
}

export default initialState;