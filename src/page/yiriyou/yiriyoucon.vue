<template>
    <div class="yiriyouCon">
    	    <a class="yiriyouConTopa iconfont icon-jiantou-copy-copy" @click="yiriyouConTopa"></a>
    	<div class="yiriyouConTop" v-if="con1">
    		<ul class="yiriyouConUl1" >	<li v-for="item in lists">{{item}}</li></ul>
    	</div>
    	<div class="yiriyouConTop1" v-if="con2" >
    		<p class="yiriyouConTop1p" >游玩景点（可多选）<span class="iconfont icon-angle-up" @click="yiriyouConTop1pspan"></span></p>
    		<ul class="yiriyouConTop1ul"  v-for="item in lists">
    		<li>{{item}}</li>
    		</ul>
    	</div>
    	<dl class="yiriyoudl1"></dl>
    	<dl class="yiriyoudl " v-for="item in yiriyoulist">
    		<dt class="yiriyoudt"><span>{{item.span}}</span><img src="http://img1.qunarzz.com/p/tts1/1605/35/f267ae654a8511f7.jpg_110x110_33358754.jpg"></dt>
    		<dd class="yiriyoudd1">{{item.title}}</dd>
    		<dd class="yiriyoudd2"><span style="color: #00BCD4;">{{item.span1}}</span><span>{{item.span2}}</span><span style="border-right: none;">{{item.span3}}</span></dd>
    		<dd class="yiriyoudd3"><span>{{item.span4}}</span><strong>{{item.strong}}</strong></dd>	
    	</dl>   
    	 <div class="footer" v-if="show">
    	   <button class="footerbtn iconfont icon-quanbufenlei">
    	   	  <span class="footerbtnsp">全部分类</span>   	 
    	   </button>
    	   <button class="footerbtn iconfont icon-shaixuan">
    	   	 <span class="footerbtnsp">筛选</span>
    	   </button>
    	   <button class="footerbtn iconfont icon-paixu">
    	   	 <span class="footerbtnsp">排序</span>
    	   </button>
         </div>

    </div>
   
</template>
<script>
export default {
	data(){
		return{
			lists:['八达岭长城','故宫','古北水镇','鸟巢','水利当','八达岭长城','故宫','古北水镇','鸟巢','水利当','八达岭长城','故宫','古北水镇','鸟巢','水利当','把雁塔','八达岭长城','故宫','古北水镇','鸟巢','水利当','把雁塔'],
			con1:true,
			con2:false,
			show:false,
			scrollTop1:0,
			scrollTop2:0,
			yiriyoulist:[{
				span:"可预定",
				img:"http://img1.qunarzz.com/p/tts1/1605/35/f267ae654a8511f7.jpg_110x110_33358754.jpg",
				title: "【休闲纯玩半日游】恭王府.含大戏楼+什刹海+黄包车半日游",
				span1:"北京出发",
				span2:"无自费",
				span3:"无购物",
				span4:"已售139",
				strong:"￥989"
			},
			{
				span:"可预定",
				img:"http://img1.qunarzz.com/p/tts1/1605/35/f267ae654a8511f7.jpg_110x110_33358754.jpg",
				title:"【半日游】恭王府.含大戏楼+什刹海+黄包车半日游",
				span1:"北京出发",
				span2:"无自费",
				span3:"无购物",
				span4:"已售139",
				strong:"￥689"
			},
			{
				span:"可预定",
				img:"http://img1.qunarzz.com/p/tts1/1605/35/f267ae654a8511f7.jpg_110x110_33358754.jpg",
				title:"【休闲纯玩半日游】恭王府.含大戏楼+什刹海+黄包车半日游",
				span1:"北京出发",
				span2:"无自费",
				span3:"无购物",
				span4:"已售139",
				strong:"￥589"
			},
			{
				span:"可预定",
				img:"http://img1.qunarzz.com/p/tts1/1605/35/f267ae654a8511f7.jpg_110x110_33358754.jpg",
				title:"【休闲纯玩半日游】恭王府.含大戏楼+什刹海+黄包车半日游",
				span1:"北京出发",
				span2:"无自费",
				span3:"无购物",
				span4:"已售139",
				strong:"￥189"
			},
			{
				span:"可预定",
				img:"http://img1.qunarzz.com/p/tts1/1605/35/f267ae654a8511f7.jpg_110x110_33358754.jpg",
				title:"【休闲纯玩半日游】恭王府.含大戏楼+什刹海+黄包车半日游",
				span1:"北京出发",
				span2:"无自费",
				span3:"无购物",
				span4:"已售139",
				strong:"￥189"
			},
			{
				span:"可预定",
				img:"http://img1.qunarzz.com/p/tts1/1605/35/f267ae654a8511f7.jpg_110x110_33358754.jpg",
				title:"【休闲纯玩半日游】恭王府.含大戏楼+什刹海+黄包车半日游",
				span1:"北京出发",
				span2:"无自费",
				span3:"无购物",
				span4:"已售139",
				strong:"￥189"
			},
			{
				span:"可预定",
				img:"http://img1.qunarzz.com/p/tts1/1605/35/f267ae654a8511f7.jpg_110x110_33358754.jpg",
				title:"【休闲纯玩半日游】恭王府.含大戏楼+什刹海+黄包车半日游",
				span1:"北京出发",
				span2:"无自费",
				span3:"无购物",
				span4:"已售139",
				strong:"￥189"
			},
			{
				span:"可预定",
				img:"http://img1.qunarzz.com/p/tts1/1605/35/f267ae654a8511f7.jpg_110x110_33358754.jpg",
				title:"【休闲纯玩半日游】恭王府.含大戏楼+什刹海+黄包车半日游",
				span1:"北京出发",
				span2:"无自费",
				span3:"无购物",
				span4:"已售139",
				strong:"￥189"
			},
			{
				span:"可预定",
				img:"http://img1.qunarzz.com/p/tts1/1605/35/f267ae654a8511f7.jpg_110x110_33358754.jpg",
				title:"恭王府.含大戏楼+什刹海+黄包车半日游",
				span1:"北京出发",
				span2:"自费",
				span3:"无购物",
				span4:"已售139",
				strong:"￥829"
			},
			{
				span:"可预定",
				img:"http://img1.qunarzz.com/p/tts1/1605/35/f267ae654a8511f7.jpg_110x110_33358754.jpg",
				title:"【休闲纯玩半日游】恭王府.含大戏楼+什刹海+黄包车半日游",
				span1:"北京出发",
				span2:"无自费",
				span3:"购物",
				span4:"已售139",
				strong:"￥891"
			}]
		}
	},

	methods:{
		yiriyouConTop1pspan:function(){
			this.con1 = true;
			this.con2 = false;
		},
	    yiriyouConTopa:function(){
	      this.con1 = false;
		  this.con2 = true;
	    },

	    handleScroll: function() {
	    
   			this.scrollTop1 = this.scrollTop2;  
		  	this.scrrfrollTop2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
		  	if(this.scrollTop1 <= this.scrollTop2) {
		  		this.show = true;
		  	    }else {
		  		this.show = false;
		  	}	  	   
	},
	
    },
    mounted:function(){
		window.addEventListener("scroll",this.handleScroll);
	    }
}
</script>

<style>

.icon-jiantou-copy-copy{
	color: #344344;
	padding-top: .1rem;
	font-size: .5rem;
	margin-right: .1rem;
}
.yiriyouConTopp{
	position: relative;
}
.yiriyouConTopa{
	position: absolute;
	background: #ccc;
	padding: .15rem;
	right:-0.2rem;
	top: .88rem;
	z-index: 999;
}
.yiriyoudl{
	
	padding: 0 .2rem;
	overflow: hidden;
}
.yiriyoudt{
	position: relative;
	float:left;
	margin-right: .3rem;
}
.yiriyoudt img{
	width: 1.8rem;
	height: 1.9rem;
}
.yiriyoudd1{
	line-height: .5rem;
	font-weight: bold;
    font-size: .3rem;
    overflow: hidden;
	margin-left: .3rem;
}
.yiriyoudd2 span{
   color: #212121;
   display: inline-block;
   margin-top: .2rem;
   padding:0  .2rem;
   border-right: 1px solid #CACACA;
}
.yiriyoudd3{
	border-bottom: 1px solid #ccc;
	display: flex;
	justify-content: space-between;
	margin-top: .2rem;
	padding-bottom: .2rem;
}
.yiriyoudd3 span{
	color: #CCCCCC;
}
.yiriyoudd3 strong{
	font-weight: bold;
	color: #eaaa00;
	margin-right: .2rem;
}
.yiriyoudt span{
    padding: .04rem .1rem;
	position: absolute;
	top: -0.05rem;
	left: -0.04rem;
    color: #fff;
	background: #42B983;
}
.yiriyouConUl1{
	width: 750%;
	height: .5rem;
	padding: .2rem 0rem 0rem;
}
.yiriyouConUl1 li{
	width: 1.6rem;
	border-radius: .04rem;
    background: #fff;
	float: left;
	padding: .1rem .2rem;
	margin: 0 .2rem;
}
.yiriyouConTop{
	
	width: 100%;
    overflow-x: auto;
	position: absolute;
	background: #ccc;
	height: .8rem;
}
.yiriyouConTop1{	
	width: 100%;
	z-index: 9999;
	position: absolute;
	padding: .4rem 0 .4rem .4rem;
	background: #ccc;
	overflow: hidden;
}
.yiriyouConTop1p span{
	float: right;
	margin-right: .3rem;
	height: .8rem;
	width: .7rem;
	font-size: .58rem;
}
.yiriyouConTop1ul{
   width: 100%;
  margin-top: .6rem;
}

.yiriyouConTop1ul li{
	float: left;	
	background: #fff;
	padding: .2rem .3rem;
	margin-right: .2rem;
	margin-top: .2rem;
}
.yiriyoudl1{
   padding-top: .9rem;
}

.footer{
	display: flex;
	height:1.5rem ;
	width: 100%;
	background: #212121;
	opacity: .9;
	position: fixed;
	bottom: 0;
}
.footerbtn{
	
	flex: 1;
	border: none;
	background: none;
	color: #fff;
	font-size: .36rem;
	
}

.footerbtn .footerbtnsp{
	display: block;

}


</style>