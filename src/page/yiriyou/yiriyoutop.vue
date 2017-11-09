<template>
 		<header class="yiriyou-top">
 		<div class="yiriyou-top-left   iconfont icon-fanhui" @click="yiriyouTopLeftClick"></div>
		 		<input class="yiriyou-top-title" autofocus="autofocus"  placeholder="一日游" /><a href="#" class="iconfont icon-cuowu yiriyou-top-titlea"></a>
 		<div class="yiriyou-top-right">
 			搜索
 		</div>
 	</header>
</template>
<script>
export default {
   
      methods:{
	      	yiriyouTopLeftClick(){
	      	     window.history.back()
	      	}
      }
      
}
</script>

<style>
	.yiriyou-top {
		position: relative;
		height: .88rem;
		background: #00bcd4;
	}
	.yiriyou-top-left {
		float: left;
		width: .4rem;
		padding: 0 .2rem;
		line-height: .88rem;
		font-size: .4rem;
		color: #fff;
	}
	.yiriyou-top-title {
		position: absolute;
		left: .8rem;
		width: 5.2rem;
		right: 1.28rem;
		top: .14rem;
		line-height: .6rem;
		background: #fff;
		border-radius: .06rem;
		text-indent: .2rem;
		color: #ccc;
	}
	.yiriyou-top-titlea{
      
		position: absolute;
		 top:.28rem;
		 left: 5.4rem;
	}
	.yiriyou-top-title{
		border: none;
		border-radius: .1rem;
	}
	.yiriyou-top-right {
		font-size: .4rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		float: right;
		width: .88rem;
		line-height: .88rem;
		text-align: center;
		margin-right: .3rem;
		color: #fff;
	}
</style>