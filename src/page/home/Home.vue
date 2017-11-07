<template>
	<div>
		 <index-header/>
		 <index-swiper/>
         <index-icon-swiper/>
         <index-activity/>
	     <index-hotsale/>
		 <index-weekend/>

	</div>
</template>

<script>
import Header from "./header";
import Swiper from "./swiper";
import IconSwiperul from "./iconSwiper";
import Activity from "./activity";
import Recommend from "./FourPart";
import WeekendList from "./weekend-list";
import axios from "axios"
export default {
   components: {
		"index-header": Header,
		"index-swiper": Swiper,
		"index-icon-swiper": IconSwiperul,
		"index-activity":Activity,
		"index-hotsale":Recommend,
		"index-weekend":WeekendList
	},
	mounted:function(){
		axios.get('/user?ID=12345')
		  .then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
  });
	}
}
</script>

<style>
       
</style>
