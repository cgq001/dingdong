import Vue from 'vue'
import Vuex from 'vuex'
import user from './user.js' // 用户信息
import car from './car.js' //购物车
Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		user:user,
		car
	},
	 state: {
		 
	},
	 mutations: {
	   
	},
	 actions: {

	}
})