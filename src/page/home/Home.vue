<template>
	<div>

         <home-header />
         <swiper-content :swiperInfo="this.$store.state.swiperInfo"/>
         <swiperul-content/>
	     <home-fourPart/>
		 <weekend-list/>
	</div>
</template>

<script>
import HeaderComponent from "./header";
import SwiperComponent from "./swiper";
import SwiperulComponent from "./swiperul";
import FourPartComponent from "./FourPart";
import weekendList from "./weekend-list";
import axios from 'axios';

export default {

   components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"swiperul-content": SwiperulComponent,
		"home-fourPart":FourPartComponent,
		"weekend-list":weekendList
		},
		methods: {
		getHomeData() {
			    axios.get('/static/index.json')
				.then(this.handleGetDataSucc.bind(this))
				.catch(this.handleGetDataErr.bind(this))
		},

		handleGetDataSucc(response) {
			if (response.status === 200) {
				const {data}  = response.data;
				this.$store.commit("changeSwiperInfo",data.swiperInfo)
			}
		},

		handleGetDataErr(err) {
			console.log(err);
		}
	},

	mounted() {
		this.getHomeData();
	}

}


</script>