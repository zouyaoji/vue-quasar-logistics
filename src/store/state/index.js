import { cookieStorage } from 'common/storage'

let state = {
  user_info: cookieStorage.get('user_info'),
  isLoginPage: false,
  mobileMode: false,
  menuCollapse: true,
  posts: []
}

export default state
