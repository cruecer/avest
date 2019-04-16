const userDataResponse = (user) => {
  return {
    nickname: user.nickName,
    email: user.email,
  }
}

module.exports = userDataResponse;