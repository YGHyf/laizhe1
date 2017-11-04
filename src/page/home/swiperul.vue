<template>
  <swiper :options="swiperOption" ref="mySwiper">
   
    <swiper-slide class="shou-swiper">
    	<ul class="shou-swiperul">
    		<li><a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"><span>景点门票</span></a></li>
        <li><a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"><span>景点门票</span></a></li>
    		<li><a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"><span>景点门票</span></a></li>
    		<li><a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"><span>景点门票</span></a></li>
    		<li><a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"><span>景点门票</span></a></li>
    		<li><a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"><span>景点门票</span></a></li>
    		<li><a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"><span>景点门票</span></a></li>
    		<li><a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"><span>景点门票</span></a></li>
    	</ul>
    </swiper-slide>
    <swiper-slide class="shou-swiper">
    	<ul class="shou-swiperul">
    		<li><a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"><span>景点门票</span></a></li>
        <li><a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"><span>景点门票</span></a></li>
    		<li><a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"><span>景点门票</span></a></li>
    		<li><a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"><span>景点门票</span></a></li>
    		<li><a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"><span>景点门票</span></a></li>
    		<li><a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"><span>景点门票</span></a></li>
    		<li><a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"><span>景点门票</span></a></li>
    		<li><a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"><span>景点门票</span></a></li>
    	</ul>
    </swiper-slide>
   
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
		margin-top: .2rem;
		display: block;
	}
</style>