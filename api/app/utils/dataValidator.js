const dataValidator = (data) => {
  let result = {
    isError: false,
    errorMsg: ''
  }
  for (let field in data) {
    switch (field) {
      case 'email':
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(data[field])) {
          result.isError = true;
          result.errorMsg = 'Wrong email';
          return result
        } else break
      
      case 'nickname':
        if (data[field].length < 3) {
          result.isError = true;
          result.errorMsg = 'First name is too short';
          return result
        } else break

      case 'password' || 'confirm':
        if (data.password && data.confirm) {
          if (data.password === data.confirm && data[field].length >= 8) {
             break
            } else {
              result.isError = true;
              result.errorMsg = 'Password is too short or does not match';
              return result;
            }
        } else if (data[field].length < 8) {
          result.isError = true;
          result.errorMsg = 'Password is too short';
          return result
        } else break
    }
  }
  return result;
}

module.exports = dataValidator;