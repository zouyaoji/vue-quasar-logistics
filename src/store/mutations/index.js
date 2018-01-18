
import {cookieStorage} from 'common/storage'

let mutations = {
  setUserInfo (state, value) {
    state.user_info = value || {}
    if (value === null) {
      cookieStorage.remove('user_info')
    }
    else {
      cookieStorage.set('user_info', value)
    }
  },
  setIsLoginPage (state, value) {
    state.isLoginPage = value
  },
  setMobileMode (state, value) {
    state.mobileMode = value
  },
  setMenuCollapse (state, value) {
    state.menuCollapse = value
  },
  setPosts (state, posts) {
    state.posts = posts
  }
}

export default mutations
