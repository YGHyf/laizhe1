<template>
	 <div class="list-content">
	 		 <p class="list-content-top">
	 		 	<span class="list-content-topLeft">
	 		 		热门搜索
	 		 	</span>
	 		 	<span class="list-content-topRight iconfont icon-shuaxin">
	 		 		换一批
	 		 	</span>
	 		 </p>
	 		 
	 		 <span class="list-content-contentLeft iconfont icon-iconset0210"></span>
	 		 <ul class="list-contentul">
	 		 	<li><a href="#">宋城千古城</a></li>
	 		 	<li><a href="#">故宫</a></li>
	 		 	<li><a href="#">天门狐仙</a></li>
	 		 	<li><a href="#">张家界大峡谷</a></li>
	 		 	<li><a href="#">颐和园</a></li>
	 		 	<li><a href="#">拨浪鼓往返轮渡</a></li>
	 		 	<li><a href="#">香山公园</a></li>
	 		 </ul>
	 		 <ol class="list-contentol">
	 		 	<li class="list-contentol-li "><span class="iconfont icon-chengshi"></span></li>
	 		 	<li><a href="#">广州</a></li>
	 		 	<li><a href="#">上海</a></li>
	 		 	<li><a href="#">北京</a></li>
	 		 	<li><a href="#">三亚</a></li>
	 		 </ol>
	 		 <div class="list-content-bottom">
	 		 	搜索身边的景点
	 		 </div>
	 </div>
</template>

<script>

export default {
	
}
</script>

<style>
	.list-content{
		justify-content: center;
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}
	.list-content-top{
		width: 100%;
		height: .64rem;
	    line-height: .64rem;
	    padding: 0 .2rem;
	    background-color: #f0f5f6;
	}
	.list-content-topRight{
		float: right;
		color: #00BCD4;
	}
	.list-contentul{
		margin: .4rem 0;
		border-left: 1px solid #CCCCCC;
		overflow: hidden;
		padding-left: .2rem;
		margin-left: .15rem;
		width: 88%;
		float: left;
	}
	.list-contentul li{
		float: left;
		height: .2rem;
		text-align: center;
		padding: .2rem .1rem;
	}
	.list-contentul li a{
		color: #444;
		border-right: 1px solid #CCCCCC;
		padding-right: .2rem;
	}
	.list-content-contentLeft{
		margin-top: .7rem;
		margin-left: .2rem;
	}
	.list-contentol{
		width: 100%;
		border-top:1px solid #CCCCCC ;
		border-bottom:1px solid #CCCCCC ;
	}
	.list-contentol li{
		float: left;
		padding: .4rem .34rem;
	}
	.list-contentol-li{
		margin-left: -0.1rem;
	}
	.list-contentol li a{
		color: #444;
		border-right:1px solid #CCCCCC ;
		padding-right: .34rem;
	}
	.list-contentol span{
		border-right: 1px solid #ccc;
		padding: .2rem .07rem;
	}
	.list-content-bottom{
		text-align: center;
		margin-top: .4rem;
		width:6rem ;
		padding: 0.26rem;
		border: 1px solid #ccc;	
	}
</style>