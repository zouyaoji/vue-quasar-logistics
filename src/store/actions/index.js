
export default {
  // 设置用户信息和登录
  setUserInfo ({ commit }, value) {
    commit('setUserInfo', value)
  },
  setIsLoginPage ({ commit }, value) {
    commit('setIsLoginPage', value)
  }
}
