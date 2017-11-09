<template>
	<div class="city-top-all">
	<header class="city-top">
		<div class="city-top1">
 		    <div class="city-top-left   iconfont icon-fanhui" @click="cityTopLeftClick"></div>
 		    <input ref="guonei" class="city-top-title1" type="button" value="国内"  @click="handleguonei"/>  <input ref="guowai" class="city-top-title2" type="button" value="海外" @click="handleguowai" />
 	    </div>
 			<input class="city-top-title" autofocus="autofocus"  placeholder="输入城市拼音或名称" />
 	    </header>
	<footer>
	     <div class="cityContentD1">
	     	 <p class="cityContentP1">您的位置</p>
	     	 <ul class="cityContentUl1"><li>北京</li></ul>
	     </div>
	     <div class="cityContentD2" v-if="flag1">
	     	 <p class="cityContentP1"  ref="input1">热门城市</p>
	     	 <ul class="cityContentUl2"><li v-for="item in cityInfo.title" style="float: left;">{{item}}</li></ul>
	     </div>
	     <div class="cityContentD3">
	     	 <ul class="cityContentUl3" ref="ula"><li v-for="item in cityInfo.cityInfo1.A" v-if="flag1">{{item}}</li><li v-for="item in cityInfo.cityInfo2.A" v-if="flag">{{item}}</li></ul>
	     	 <ul class="cityContentUl3" ref="ulb"><li v-for="item in cityInfo.cityInfo1.B" v-if="flag1">{{item}}</li><li v-for="item in cityInfo.cityInfo2.B" v-if="flag">{{item}}</li></ul>
	     	 <ul class="cityContentUl3" ref="ulc"><li v-for="item in cityInfo.cityInfo1.C" v-if="flag1">{{item}}</li><li v-for="item in cityInfo.cityInfo2.C" v-if="flag">{{item}}</li></ul>
	     	 <ul class="cityContentUl3" ref="uld"><li v-for="item in cityInfo.cityInfo1.D" v-if="flag1">{{item}}</li><li v-for="item in cityInfo.cityInfo2.D" v-if="flag">{{item}}</li></ul>
	     	 <ul class="cityContentUl3" ref="ule"><li v-for="item in cityInfo.cityInfo1.E" v-if="flag1">{{item}}</li><li v-for="item in cityInfo.cityInfo2.E" v-if="flag">{{item}}</li></ul>
	     	 <ul class="cityContentUl3" ref="ulf"><li v-for="item in cityInfo.cityInfo1.F" v-if="flag1">{{item}}</li><li v-for="item in cityInfo.cityInfo2.F" v-if="flag">{{item}}</li></ul>
	     	 <ul class="cityContentUl3" ref="ulx"><li v-for="item in cityInfo.cityInfo1.X" v-if="flag1">{{item}}</li><li v-for="item in cityInfo.cityInfo2.X" v-if="flag">{{item}}</li></ul>
	     	 <ul class="cityContentUl3" ref="uly"><li v-for="item in cityInfo.cityInfo1.Y" v-if="flag1">{{item}}</li><li v-for="item in cityInfo.cityInfo2.Y" v-if="flag">{{item}}</li></ul>
	     	 <ul class="cityContentUl3" ref="ulz"><li v-for="item in cityInfo.cityInfo1.Z" v-if="flag1">{{item}}</li><li v-for="item in cityInfo.cityInfo2.Z" v-if="flag">{{item}}</li></ul>
	     </div>
	     <div class="fixed">
	     	<ul class="fixedul" >
	     		<li @touchstart="ulatop">A</li>
	     		<li @touchstart="ulbtop">B</li>
	     		<li @touchmove="ulctop" >C</li>
	     		<li @touchstart="uldtop">D</li>
	     		<li @touchstart="uletop">E</li>
	     		<li @touchstart="ulftop">F</li>
	     		<li @touchstart="ulxtop">X</li>
	     		<li @touchstart="ulytop">Y</li>
	     		<li @touchstart="ulztop">Z</li>
	     	</ul>
	     </div>
     </footer>
    </div>
</template>
<script>

export default {
	
   data(){
   	return {
   	   flag:false,
   	   flag1:true
   	   }
    },
   methods:{
      ulatop:function(){
             document.documentElement.scrollTop=this.$refs.ula.offsetTop;
   	  },
   	  ulbtop:function(){
        	 document.documentElement.scrollTop=this.$refs.ulb.offsetTop;
   	  },
   	  ulctop:function(){
   	  	     	 document.documentElement.scrollTop=this.$refs.ulc.offsetTop;
   	  },
   	  uldtop:function(){
        	 document.documentElement.scrollTop=this.$refs.uld.offsetTop;
        	
   	  },
   	  uletop:function(){
        	 document.documentElement.scrollTop=this.$refs.ule.offsetTop;
   	  },
   	  ulftop:function(){
        	 document.documentElement.scrollTop=this.$refs.ulf.offsetTop;
   	  },
   	  ulxtop:function(){
        	 document.documentElement.scrollTop=this.$refs.ulx.offsetTop;
   	  },
   	  ulytop:function(){
        	 document.documentElement.scrollTop=this.$refs.uly.offsetTop;
   	  },
   	  ulztop:function(){
        	 document.documentElement.scrollTop=this.$refs.ulz.offsetTop;
   	  },
   	  cityTopLeftClick:function(e){	  
   	  	     window.history.back();
   	  },
   	  handleguonei:function(e){
   	  	   this.flag=false,
   	  	   this.flag1=true,
   	  	   e.target.style.background="#fff",
   	  	   e.target.style.color="#00BCD4",
   	  	   this.$refs.guowai.style.background="#00BCD4",
   	  	   this.$refs.guowai.style.color="#fff"
   	  },
   	  handleguowai:function(e){
	   	  	this.flag1=false,
	   	  	this.flag=true,
	   	  	e.target.style.background="#fff",
	   	  	e.target.style.color="#00BCD4",
	   	  	this.$refs.guonei.style.background="#00BCD4",
	   	  	this.$refs.guonei.style.color="#fff"
   	    }
  	 },
       computed:{
          cityInfo(){        
       	    return this.$store.state.city.cityInfo;
        }    	   
      }
    }

</script>

<style>
    
	footer{
	   position: relative;		
	}
     .cityContentD2{
     	overflow: hidden;
     }
    .cityContentUl1{
    	border-top:1px solid #CACACA ;
    	border-bottom:1px solid #CACACA ;
    	padding: .2rem 0rem .2rem .4rem;
    }
    .cityContentUl1 li{
    	width: .6rem;
    	padding: .1rem .4rem;
    	border-radius: .1rem;
    	border: 1px solid #CACACA;
    }
    .cityContentP1{
    	background: #F5F5F5;
    	padding:.2rem .4rem;
    }
    .cityContentUl2{
    	overflow: hidden;
    	border-top: 1px solid #CACACA;
    	border-bottom:1px solid #CACACA ;
    	padding: .2rem .8rem .2rem .4rem;
    	
    }
	.cityContentUl2>li{
		border-radius: .1rem;
		margin-top: .2rem;
		margin-right: .2rem;
		padding: .1rem .4rem;
		border: 1px solid #CACACA;
	}
	.cityContentUl3 li{
		padding: .2rem .4rem;
		border-bottom: 1px solid #CACACA;
	}
	.cityContentUl3 li:nth-of-type(1){
		background: #F5F5F5;
	}
	.fixed{
		height: 6rem;
		position: fixed;
		top: 4rem;
		right: .2rem;
	}
	.fixedul li{
	   padding-bottom: .5rem;
		color: #00BCD4;
	}
</style>