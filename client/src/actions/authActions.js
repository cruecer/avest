import * as authConstants from '../constants/authConstants';

export const showErrorMsg = (msg) => {
  return {
    type: authConstants.SHOW_ERROR_MSG,
    payload: msg
  }
}

export const toggleIsLoading = (boolean) => {
  return {
    type: authConstants.TOGGLE_IS_LOADING,
    payload: boolean
  }
}

export const toggleIsAuthed = (boolean) => {
  return {
    type: authConstants.TOGGLE_IS_AUTHED,
    payload: boolean
  }
}

export const authUser = (data) => {
  return {
    type: authConstants.AUTH_USER,
    payload: data
  }
}

export const logIn = (data) => {
  const credentials = JSON.stringify(data)
  return dispatch => {
    dispatch(toggleIsLoading(true));
    fetch('/login', {
      method: 'post',
      body: credentials
    }).then(response => response.json())
      .then(data => {
        if (!data.isError) {
          dispatch(toggleIsAuthed(true));
          dispatch(toggleIsLoading(false))
          dispatch(showErrorMsg(''));
          dispatch(authUser(data.user));
        } else {
          dispatch(showErrorMsg(data.errorMsg));
          dispatch(toggleIsLoading(false));
        }
      })
      .catch(err => {
        dispatch(toggleIsLoading(false));
        dispatch(showErrorMsg('Connection error'))
        throw new Error(err)
      })
  }
}

export const register = (data) => {
  const credentials = JSON.stringify(data)
  return dispatch => {
    dispatch(toggleIsLoading(true));
    fetch('/reg', {
      method: 'post',
      body: credentials
    }).then(response => response.json())
      .then(data => {
        if (!data.isError) {
          dispatch(toggleIsAuthed(true));
          dispatch(toggleIsLoading(false));
          dispatch(showErrorMsg(''));
          dispatch(authUser(data.user));
        } else {
          dispatch(showErrorMsg(data.errorMsg));
          dispatch(toggleIsLoading(false));
        }
      })
      .catch(err => {
        dispatch(toggleIsLoading(false));
        dispatch(showErrorMsg('Connection error'))
        throw new Error(err)
      })
  }
}
