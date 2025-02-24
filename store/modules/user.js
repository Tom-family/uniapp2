import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = {
	namespaced: true,
	state: {
		count: 0,
	},
	mutations: {
		increment(state) {
			state.count++
		},
		setUserInfo(state, userInfo) {
			state.userInfo = userInfo
		}
	},
	actions: {
		async incrementAsync({commit}, params) {
			await new Promise(resolve => setTimeout(resolve, 1000))
			commit('increment')
		}
	},
}

export default store