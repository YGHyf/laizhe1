import axios from 'axios';
export default {
	 state:{
			cityInfo:[],
			cityInfo1:{}
	 },
	 
	 actions:{
	 	getCityInfo(context){
	 		axios.get('/static/city.json')
				.then((response)=>{
					  if (response.status === 200) {
				      const {data}  = response.data;
				      context.commit("changeCityInfo",data)
			        }
				})	
	 	    }
	    },
	 mutations:{
	 	    changeCityInfo:(state,data)=>{	
	 	    state.cityInfo = data.cityInfo; 
	 	    state.cityInfo1= data.cityInfo1; 
	 	}
	}
}