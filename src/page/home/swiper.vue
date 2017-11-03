<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide class="shou-swiper">
    	<img class="shou-swiper-img" src="http://img1.qunarzz.com/piao/fusion/1710/f5/57137c621d75ba02.jpg_640x170_0d5202d3.jpg" />
    </swiper-slide>
    <swiper-slide class="shou-swiper">
    	<img class="shou-swiper-img" src="http://img1.qunarzz.com/piao/fusion/1710/94/e41712475cc4e702.jpg_640x170_f5dd3e83.jpg" />
    </swiper-slide>
    <swiper-slide class="shou-swiper">
    	<img class="shou-swiper-img" src="http://img1.qunarzz.com/piao/fusion/1710/f5/57137c621d75ba02.jpg_640x170_0d5202d3.jpg" />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper> 
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  export default { 
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