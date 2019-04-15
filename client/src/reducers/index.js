import { combineReducers } from 'redux';

import authReducer from './authReducer';
import calculatorReducer from './calculatorReducer';


export default combineReducers({
  auth: authReducer,
  calculator: calculatorReducer,
});
