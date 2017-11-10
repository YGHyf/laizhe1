import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import List from '@/page/list/list'
import YiRiYou from "@/page/yiriyou/yiriyou"
import CiTy from '@/page/city/city'
import Scenic from '@/page/scenic/scenic'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
    	path:'/list',
    	name:'list',
    	component:List
    },{
    	 	path:'/yiriyou',
    	  name:"yiriyou",
    	 component:YiRiYou
    },
    {
    	 	path:'/city',
    	  name:"city",
    	 component:CiTy
    },
    {
    	path:'/scenic',
    	name:"scenic",
    	component:Scenic
    }
  ]
})
