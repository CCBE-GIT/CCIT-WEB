export default {
  state: {
    theme: localStorage.getItem('theme') || 'light'
  },
  mutations: {
    SET_THEME(state, theme) {
      state.theme = theme
      localStorage.setItem('theme', theme)
      document.documentElement.setAttribute('data-theme', theme)
    }
  },
  actions: {
    setTheme({ commit }, theme) {
      commit('SET_THEME', theme)
    },
    toggleTheme({ state, commit }) {
      const newTheme = state.theme === 'light' ? 'dark' : 'light'
      commit('SET_THEME', newTheme)
    }
  },
  getters: {
    currentTheme: state => state.theme,
    isDarkTheme: state => state.theme === 'dark'
  }
}