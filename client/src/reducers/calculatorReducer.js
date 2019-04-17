import initialState from './initialState';
import * as calcConstants from '../constants/calcConstants';
import checkFractional from '../helper/checkFractional';

const calculatorReducer = (state = initialState.calculator, action) => {
  switch (action.type) {

    case calcConstants.SAVE_RATE:
    if (state.rates.findIndex(item => item.Cur_ID === action.payload.Cur_ID) !== -1) {
      return {
        ...state,
      }
    } else
    return {
      ...state,
      rates: [...state.rates, action.payload]
    };

    case calcConstants.ADD_NUMBER:
      if (state.BYNvalue.length === 0 && action.payload === 0) {
        return {
          ...state
        }
      } else if (checkFractional(state.BYNvalue)) {
        return {
          ...state,
          BYNvalue: [...state.BYNvalue, action.payload]
        }
      } else {
        return {
          ...state,
        }
      }
 
    
    case calcConstants.DEL_NUMBER:
      if (state.BYNvalue.length) {
        return {
          ...state,
          BYNvalue: [...state.BYNvalue.slice(0, state.BYNvalue.length - 1)]
        }
      } else
      return {
        ...state
      }

    case calcConstants.CLEAR_NUMBER:
      if (state.BYNvalue.length) {
        return {
          ...state,
          BYNvalue: []
        }
      } else
      return {
        ...state
      }

    case calcConstants.ADD_DOT:
      if (state.BYNvalue.length && state.BYNvalue.indexOf('.') === -1) {
        return {
          ...state,
          BYNvalue: [...state.BYNvalue, action.payload]
        }
      } else
      return {
        ...state
      }
    
      default: 
      return state;
  }
}

export default calculatorReducer;