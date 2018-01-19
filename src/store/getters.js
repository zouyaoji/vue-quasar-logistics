
const getters = {
  // 获取用户信息
  getUserInfo: state => state.user_Info,
  getIsLoginPage: state => state.isLoginPage,
  getMobileMode: state => state.isMobileMode,
  getMenuCollapse: state => state.isMenuCollapse,
  getIsLoadingRoute: state => state.isLoadingRoute,
  getPosts: state => state.posts
}

export default getters
