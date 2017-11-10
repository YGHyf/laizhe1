<template>
	<div class='nav-box'>
		<div class="nav-left">
			全部分类
		</div>
		<div class="nav-right">
			智能排序
		</div>
	</div>
</template>
<script>
	export default{
		
	}
</script>
<style>
	.nav-box{
		height:0.80rem;
		border-top: 0.02rem solid #e1e2eb;
		border-bottom: 0.02rem solid #e1e2eb;
	}
	.nav-left,.nav-right{
		width: 50%;
		text-align: center;
		line-height: 0.80rem;
	}
	.nav-left{
		float: left;
		border-right:0.01rem solid  #e1e2eb;
		box-sizing: border-box;
	}
	.nav-right{
		float:right;
		border-left:0.01rem solid  #e1e2eb;
		box-sizing: border-box;  
	}
</style>