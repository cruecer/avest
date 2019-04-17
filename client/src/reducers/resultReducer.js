import initialState from './initialState';
import * as resultConstants from '../constants/resultConstants';
import isNumber from '../helper/isNumber';

const resultReducer = (state = initialState.result, action) => {
  switch (action.type) {

    case resultConstants.CLEAR_RATES:
      return {
        ...state,
        rates: [],
      } 

    case resultConstants.RELOAD_RATES:
      return {
        ...state,
        rates: [...state.rates, action.payload],
      }

    case resultConstants.CALCULATE_RESULT:
      if (isNumber(action.number)) {
        return {
          ...state,
          data: [
            {...state.baseCurrencie, Cur_Sum: +action.number * state.baseCurrencie.Cur_OfficialRate},
            ...action.data.map(item => {
              return {
                ...item,
                Cur_Sum: (+action.number / item.Cur_OfficialRate * item.Cur_Scale).toFixed(2)
              }
            })
          ]
        }
      } else {
        return {
          ...state,
          BYNvalue: []
        }
      }
    
    default: 
      return state;
  }
}

export default resultReducer;