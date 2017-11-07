<template>
  <swiper :options="swiperOption" ref="mySwiper">
   
    <swiper-slide class="shou-swiper">
    	<ul class="shou-swiperul">
    		<li><a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"><span>景点门票</span></a></li>
        <li><a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png"><span>植物园</span></a></li>
    		<li><a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png"><span>故宫</span></a></li>
    		<li><router-link to="/yiriyou">
    			<a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png">
    			<span>一日游</span>
    	    </a></router-link></li>
    		<li><a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png"><span>必游榜单</span></a></li>
    		<li><a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1611/6d/ee9eb965690ce402.png"><span>秋色美</span></a></li>
    		<li><a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png"><span>游乐场</span></a></li>
    		<li><a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png"><span>泡温泉</span></a></li>
    	</ul>
    </swiper-slide>
    <swiper-slide class="shou-swiper">
    		<ul class="shou-swiperul">
    		<li><a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"><span>景点门票</span></a></li>
        <li><a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png"><span>植物园</span></a></li>
    		<li><a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png"><span>故宫</span></a></li>
    		<li><a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png"><span>一日游</span></a></li>
    		<li><a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png"><span>必游榜单</span></a></li>
    		<li><a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1611/6d/ee9eb965690ce402.png"><span>秋色美</span></a></li>
    		<li><a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png"><span>游乐场</span></a></li>
    		<li><a href="#"><img src="http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png"><span>泡温泉</span></a></li>
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
		color:#444444;
		margin-top: .2rem;
		display: block;
	}
</style>