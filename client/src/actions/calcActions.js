import * as calcConstants from '../constants/calcConstants';

export const saveRate = (rate) => {
  return {
    type: calcConstants.SAVE_RATE,
    payload: rate
  }
}

export const addNumber = (number) => {
  return {
    type: calcConstants.ADD_NUMBER,
    payload: number
  }
}

export const delNumber = () => {
  return {
    type: calcConstants.DEL_NUMBER,
  }
}

export const clearNumber = () => {
  return {
    type: calcConstants.CLEAR_NUMBER,
  }
}

export const addDot = (dot) => {
  return {
    type: calcConstants.ADD_DOT,
    payload: dot
  }
}

export const loadRates = (currencies) => {
  return dispatch => {
    currencies.map(currencie => {
      fetch(`http://www.nbrb.by/API/ExRates/Rates/${currencie.abb}?ParamMode=2`)
      .then(response => response.json())
      .then(data => dispatch(saveRate(data)))
      .catch(err => {
        dispatch(loadRates(currencie))
        throw new Error(err)
      })
    })
  }
}