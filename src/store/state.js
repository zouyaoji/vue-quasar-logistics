import { cookieStorage } from 'common/storage'

let state = {
  userInfo: cookieStorage.get('user_info'),
  isLoginPage: false,
  isMobileMode: false,
  isMenuCollapse: true,
  isLoadingRoute: false,
  posts: []
}

export default state
