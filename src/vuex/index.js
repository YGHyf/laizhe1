import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
	 state:{ 	  
			swiperInfo: []
	},
	 
	 actions:{},
	 mutations:{
	 	changeSwiperInfo:(state,data)=>{
	 		state.swiperInfo = data
	 	}
	 },
	 getters:{}
})

