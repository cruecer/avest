import initialState from './initialState';
import * as calcConstants from '../constants/calcConstants';

const calculatorReducer = (state = initialState.calculator, action) => {
  switch (action.type) {

    case calcConstants.SAVE_RATE:
    return {
      ...state,
      rates: [...state.rates, action.payload]
    };

    default: 
      return state;
  }
}

export default calculatorReducer;