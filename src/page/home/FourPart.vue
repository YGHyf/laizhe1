<template>
	<div>
	
		<ol class="clearfix">
			<li>
				<span class="iconfont icon-dingwei"></span>
				<i>定位失败</i>
			</li>
			<li>
				<span class="iconfont icon-wangluo"></span>
				<i>五折泡温泉</i>
			</li>
		</ol>
		
		<ul class="clearfix1">
			<li></li>
			<li></li>
		</ul>
	
	</div>
</template>
<style>
	.clearfix:after{
		display: block;
		clear:both;
		content: ".";
		height:0;
		overflow:hidden;
		visibility: hidden;
	}
	.clearfix{
		zoom:1;
		}
		
	.clearfix{
		background:white;
	  }
	  
	.clearfix li{
		 float:left;
		width:50%;
		height:.98rem;
		
		text-align: center;
		line-height: .98rem;
	}
	.clearfix1 li{
		background:palevioletred;
          float:left;
		width:50%;
		height:1.4rem;
		font-size:.28rem;
		color:#212121;
		
	}
	.clearfix1 li span{
		display:inline-block;
	
	}
	.clearfix1 li:nth-child(1){
		background:url(http://img1.qunarzz.com/piao/fusion/1710/a2/e395615b16fb1302.png) ;
		background-size:100%,100%;
	}
	.clearfix1 li:nth-child(2){
		background:url(http://img1.qunarzz.com/piao/fusion/1710/54/1685d2108b652302.png) ;
		background-size:100%,100%;
	}
	
	
	
</style>