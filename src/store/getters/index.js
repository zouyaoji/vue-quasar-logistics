
const getters = {
  // 获取用户信息
  getUserInfo: state => state.user_info,
  getIsLoginPage: state => state.isLoginPage,
  getMobileMode: state => state.mobileMode,
  getMenuCollapse: state => state.menuCollapse,
  getPosts: state => state.posts
}

export default getters
