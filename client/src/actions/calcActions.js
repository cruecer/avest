import * as calcConstants from '../constants/calcConstants';

export const saveRate = (rate) => {
  return {
    type: calcConstants.SAVE_RATE,
    payload: rate
  }
}

export const loadRates = (currencies) => {
  return dispatch => {
    currencies.map(currencie => {
      fetch(`http://www.nbrb.by/API/ExRates/Rates/${currencie.abb}?ParamMode=2`)
      .then(response => response.json())
      .then(data => dispatch(saveRate(data)))
    })
  }
}