<template>
	<div>
 <home-header/>
 <swiper-content/>
 <swiperul-content/>
 </div>
</template>

<script>
import HeaderComponent from "./header";
import SwiperComponent from "./swiper";
import SwiperulComponent from "./swiperul";

export default {
   components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"swiperul-content": SwiperulComponent
		
	}
}
</script>