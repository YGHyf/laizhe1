<template>
 		<header class="header">
 		<div class="header-left iconfont icon-fanhui" ></div>
	 	<router-link to="/list">
		 		<div class="header-title">
		 			输入城市/景点/游玩主题
		 		</div>
	 	</router-link>
	 	<router-link to="/city">
 		<div class="header-right">
 			北京
 		</div>
 		</router-link>
 	</header>
</template>

<script>
export default {
	
}
</script>

<style>
	.header {
		position: relative;
		height: .88rem;
		background: #00bcd4;
	}
	.header-left {
		float: left;
		width: .4rem;
		padding: 0 .2rem;
		line-height: .88rem;
		font-size: .4rem;
		color: #fff;
	}
	.header-title {
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
	.header-right {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		float: right;
		width: .88rem;
		line-height: .88rem;
		text-align: center;
		margin-right: .5rem;
		color: #fff;
	}
	.header-right::after {
		
		content: "\0020";
		position: absolute;
		border: .16rem solid #fff;
		border-color : #fff transparent transparent transparent; 
		top: .32rem;
		right: .1rem;
		
		
	}
</style>