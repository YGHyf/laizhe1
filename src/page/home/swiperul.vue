<template>
  <swiper :options="swiperOption" ref="mySwiper">
   
    <swiper-slide class="shou-swiper">
    	<ul class="shou-swiperul">
    		<li v-for="item in swiperInfo1"><router-link to="/yiriyou"><a href="#"><img :src="item.imgUrl"><span>{{item.title}}</span></a></router-link></li>
    	</ul>
    </swiper-slide>
    <swiper-slide class="shou-swiper">
    		<ul class="shou-swiperul">
    		<li v-for="item in swiperInfo1"><a href="#"><img :src="item.imgUrl"><span>{{item.title}}</span></a></li>       
    	</ul>
    </swiper-slide>
   
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper> 
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  export default { 
  	props: ["swiperInfo1"],
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
    },
     mounted() {
      this.swiper.slideTo(0, 1000, false)
    }
  }
</script>
<style>
   .shou-swiperul{
   	margin-bottom: .2rem;
   	padding-top: 0.3rem;
		display: flex;
		flex-wrap: wrap;
		justify-content:center;
		align-items: center;
   }
	.shou-swiperul li{
		padding: 0 0 0.4rem ;
		float:left;
		width: 25%;	
		text-align: center;
		height: 1.4rem;
	}
	.shou-swiperul li img{
		width: 0.66rem;	
	}
	.shou-swiperul li a span{
		color:#444444;
		margin-top: .2rem;
		display: block;
	}
</style>