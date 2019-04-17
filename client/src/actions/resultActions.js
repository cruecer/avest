import * as resultConstants from '../constants/resultConstants';
import { loadRates } from './calcActions';

export const clearRates = () => {
  return {
    type: resultConstants.CLEAR_RATES,
  }
}

export const reloadRates = (currencies) => {
  return dispatch => {
    dispatch(clearRates());
    dispatch(loadRates(currencies));
  }
}

export const calculateResult = (number, data) => {
  return {
    type: resultConstants.CALCULATE_RESULT,
    number: number,
    data: data
  }
}