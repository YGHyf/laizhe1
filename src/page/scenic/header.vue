<template>
	<header class="header">
		<div class="header-left"><</div>
		<input type="text" class="header-input" placeholder="北京"/>
		<div class="header-search">搜索</div>
	</header>
</template>
<script>
export default{
	
}
</script>

<style>
	@import url("../../router/reset.css");
	.header{
		position: fixed;
		width: 100%;
		z-index: 2;
		top:0;
		height:0.88rem;
		background:#00bcd4 ;
	}
	.header-left{
		float:left;
		line-height: 0.88rem;
		color:#fff;
		margin-left: 0.18rem;
	}
	.header-input{
		width:4.4rem;
		height:0.6rem;
		border: none;
		margin:0.13rem 0.1rem 0.12rem 0.44rem;
		border-radius:0.04rem;
		padding-left: 0.2rem;
	}
	.header-search{
		float:right;
		color:#fff;
		line-height: 0.88rem;
		font-size:0.3rem;
		margin-right: 0.22rem;
	}
</style>