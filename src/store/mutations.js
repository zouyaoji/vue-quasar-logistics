
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
  setIsMobileMode (state, value) {
    state.isMobileMode = value
  },
  setIsMenuCollapse (state, value) {
    state.isMenuCollapse = value
  },
  setPosts (state, posts) {
    state.posts = posts
  },
  setIsLoadingRoute (state, value) {
    state.isLoadingRoute = value
  }
}

export default mutations
