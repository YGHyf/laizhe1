<template>
 		
</template>

<script>
export default {
   data:function(){
   	return {
   		con:"搜索"
   	}
   }
}
</script>

<style>
    .city-top1{
    	width: 100%;
    	background: #00BCD4;
    	z-index: 999;
    	position:fixed;
    }
	.city-top {
		position: relative;
		height: 1.8rem;
		background: #00bcd4;
	}
	.city-top-left {
		float: left;
		width: .4rem;
		padding: 0 .2rem;
		line-height: .88rem;
		font-size: .4rem;
		color: #fff;
	}
	.city-top-title {
		text-align: left;
		position: absolute;
		width: 5.2rem;
		right: 1.28rem;
		left: 5%;
		top: .14rem;
		line-height: .6rem;
		background: #fff;
		border-radius: .06rem;
		text-indent: .2rem;
		color: #ccc;
		width: 90%;
		margin-top: .8rem;
		border: none;
		border-radius: .1rem;
	}

	.city-top-right {
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
	.city-top-title1,.city-top-title2{
		color: #fff;
	     float: left;
		margin-top: .2rem;
		width: 1.6rem;border: 2px solid #fff;
		background: none;
	}
	.city-top-title1{
		color: #00BCD4;
		background: #fff;
		margin-left: 1.2rem;
		border-top-left-radius: .1rem;
		border-bottom-left-radius: .1rem;
	}
	.city-top-title2{
		
		border-top-right-radius: .1rem;
		border-bottom-right-radius: .1rem;
	}
</style>