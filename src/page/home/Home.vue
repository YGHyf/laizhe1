<template>
	<div>
         <home-header />
         <swiper-content/>
         <swiperul-content :swiperInfo1="this.$store.state.home.swiperInfo1"/>
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

export default {

   components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"swiperul-content": SwiperulComponent,
		"home-fourPart":FourPartComponent,
		"weekend-list":weekendList
		},

	mounted() {
		if(this.$store.getters.shouldGetData){
		    this.$store.dispatch("getSwiperInfo");
	    }
   }
}


</script>