import Vuex from 'vuex'
import Vue from 'vue'

import home from '../page/home/moudlehome.js';
import city from '../page/city/moudlecity.js';
Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
	home:home,
	city:city
	}
})

