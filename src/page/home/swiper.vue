
<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide class="shou-swiper" v-for="item in swiperInfo" :key="item.id">
    	<img class=" shou-swiper-img swiper-img" :src="item.imgUrl">
    </swiper-slide>
 
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper> 
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  export default { 
  	 props: ["swiperInfo"],
    data() {
      return {      
        swiperOption: {
          autoplay: 3000,
          direction: 'horizontal', 
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          observeParents: true     
        }
      }
    },
	components: {
	    swiper,
	    swiperSlide
	  },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    }
  }
</script>
<style>
	.shou-swiper-img{
		width: 100%;
	}
	.shou-swiper{
		width:100% ;height:0; overflow:hidden ;padding-bottm:31.25%;
	}
</style>
