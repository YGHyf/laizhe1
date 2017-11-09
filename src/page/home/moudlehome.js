import axios from 'axios';
export default {
	 state:{
			swiperInfo: [],
			swiperInfo1: []
	 },
	 
	 actions:{
	 	getSwiperInfo(context){
	 		axios.get('/static/index.json')
				.then((response)=>{
					if (response.status === 200) {
				      const {data}  = response.data;
				      context.commit("changeSwiperInfo",data)
			        }
				})	
	 	}
	 },
	 mutations:{
	 	changeSwiperInfo:(state,data)=>{
		 	state.swiperInfo = data.swiperInfo;
		 	state.swiperInfo1 = data.swiperInfo1
	 	}
	 },
	 getters:{
	 	shouldGetData(state){
	 		if(!state.swiperInfo.length&&
	 		   !state.swiperInfo1.length){
	 		   	return true;
	 		   }else{
	 		   	return false;
	 		   }	 		
	 	}
	 }
}