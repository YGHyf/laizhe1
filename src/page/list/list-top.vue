<template>
 		<header class="list-top">
 		<div class="list-top-left   iconfont icon-fanhui" @click="listTopLeftClick"></div>
		 		<input class="list-top-title" autofocus="autofocus"  placeholder="输入城市/景点/游玩主题" />
 		<div class="list-top-right">
 			{{con}}
 		</div>
 	</header>
</template>

<script>
export default {
   data:function(){
   	return {
   		con:"搜索"
   	}
   },
   methods:{
   	listTopLeftClick:function(e){
   		 window.history.back()
   	 }
   }
}
</script>

<style>
	.list-top {
		position: relative;
		height: .88rem;
		background: #00bcd4;
	}
	.list-top-left {
		float: left;
		width: .4rem;
		padding: 0 .2rem;
		line-height: .88rem;
		font-size: .4rem;
		color: #fff;
	}
	.list-top-title {
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
	.list-top-title{
		border: none;
		border-radius: .1rem;
	}
	.list-top-right {
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