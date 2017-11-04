<template>
	<div>
         <home-header/>
         <swiper-content/>
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

export default {
   components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"swiperul-content": SwiperulComponent,
		"home-fourPart":FourPartComponent,
		"weekend-list":weekendList
		}
}
</script>