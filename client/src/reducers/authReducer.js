import initialState from './initialState';
import * as authConstants from '../constants/authConstants';

const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {

    case authConstants.TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };

      case authConstants.SHOW_ERROR_MSG:
      return {
        ...state,
        errorMsg: action.payload
      };

    case authConstants.AUTH_USER:
      return {
        ...state,
        isAuthed: true,
        user: action.payload
      }
      
    default: 
      return state;
  }
}

export default authReducer;