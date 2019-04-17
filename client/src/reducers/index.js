import { combineReducers } from 'redux';

import authReducer from './authReducer';
import calculatorReducer from './calculatorReducer';
import resultReducer from './resultReducer';


export default combineReducers({
  auth: authReducer,
  calculator: calculatorReducer,
  result: resultReducer,
});
