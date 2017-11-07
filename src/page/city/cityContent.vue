<template>
	<div>
	<header class="city-top">
 		<div class="city-top-left   iconfont icon-fanhui"></div>
 		    <input ref="guonei" class="city-top-title1" type="button" value="国内"  @click="handleguonei"/>  <input ref="guowai" class="city-top-title2" type="button" value="海外" @click="handleguowai" />
 			<input class="city-top-title" autofocus="autofocus"  placeholder="输入城市拼音或名称" />
 		
 	    </header>
	<footer>
	     <div class="cityContentD1">
	     	 <p class="cityContentP1">您的位置</p>
	     	 <ul class="cityContentUl1"><li>北京</li></ul>
	     </div>
	     <div class="cityContentD2" v-if="flag1">
	     	 <p class="cityContentP1"  ref="input1">热门城市</p>
	     	 <ul class="cityContentUl2"><li v-for="item in remenlist" style="float: left;">{{item}}</li></ul>
	     </div>
	     <div class="cityContentD3">
	     	 <ul class="cityContentUl3" ref="ula"><li v-for="item in lista" v-if="flag1">{{item}}</li><li v-for="item in lista1" v-if="flag">{{item}}</li></ul>
	     	 <ul class="cityContentUl3" ref="ulb"><li v-for="item in listb" v-if="flag1">{{item}}</li><li v-for="item in listb1" v-if="flag">{{item}}</li></ul>
	     	 <ul class="cityContentUl3" ref="ulc"><li v-for="item in listc" v-if="flag1">{{item}}</li><li v-for="item in listc1" v-if="flag">{{item}}</li></ul>
	     	 <ul class="cityContentUl3" ref="uld"><li v-for="item in listd" v-if="flag1">{{item}}</li><li v-for="item in listd1" v-if="flag">{{item}}</li></ul>
	     	 <ul class="cityContentUl3" ref="ule"><li v-for="item in liste" v-if="flag1">{{item}}</li><li v-for="item in liste1" v-if="flag">{{item}}</li></ul>
	     </div>
	     <div class="fixed">
	     	<ul class="fixedul">
	     		<li @click="ulatop">A</li>
	     		<li @click="ulbtop">B</li>
	     		<li @click="ulctop">C</li>
	     		<li @click="uldtop">D</li>
	     		<li @click="uletop">E</li>
	     	</ul>
	     </div>
     </footer>
    </div>
</template>
<script>

export default {
   data(){
   	return {
   	   remenlist:['西双版纳','北京','青岛','拉萨','昆明','西双版纳','北京','青岛','拉萨','昆明','西双版纳','北京','青岛','拉萨','昆明'],
   	   lista:["A","阿拉求1","阿拉求2","阿拉求3","阿拉求4","阿拉求5","阿拉求6","阿拉求7","阿拉求8","阿拉求9"],
   	   listb:["B","巴哈1","巴哈2","巴哈3","巴哈4","巴哈5","巴哈6","巴哈7","巴哈8","巴哈9"],
   	   listc:["C","沧州1","沧州2","沧州3","沧州4","沧州5","沧州6","沧州7","沧州8","沧州9"],
   	   listd:["D","大理1","大理2","大理3","大理4","大理5","大理6","大理7","大理8","大理9"],
   	   liste:["E","恩施1","恩施2","恩施3","恩施4","恩施5","恩施6","恩施7","恩施8","恩施9"],
   	   lista1:["A","阿拉求11111111","阿拉求2222222222","阿拉求333333333","阿拉求4444444","阿拉求555555555","阿拉求6666666","阿拉求777777","阿拉求8888888","阿拉求99999999"],
   	   listb1:["B","巴哈1111111111","巴哈2222222222222222","巴哈3333333","巴哈44444444","巴哈55555555","巴哈666666666","巴哈77777777","巴哈888888888","巴哈99999999"],
   	   listc1:["C","沧州11111111111","沧州22222222222","沧州333333333","沧州4444444","沧州55555555","沧州66666666","沧州77777777","沧州888888","沧州999999"],
   	   listd1:["D","大理111111111111","大理2222222222","大理3333333333","大理4444444444444","大理55555555","大理666666","大理7777777777","大理8888888","大理99999999"],
   	   liste1:["E","恩施111111111111","恩施22222222","恩施3333333333","恩施444444444","恩施55555555","恩施66666666","恩施77777777","恩施888888","恩施999999999"],
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
		margin-bottom: .5rem;
		color: #00BCD4;
	}
</style>