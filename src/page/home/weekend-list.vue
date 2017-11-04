<template>
	<div class="weekend-box">
		<h2 class="weekend-text">周末去哪儿</h2>
		<dl class="weekend-list">
			<dd><img src="../../img/1.jpg" alt="由于您的网速不好，图片无法正常显示" /></dd>
			<dt>北京温泉排行榜</dt>
			<dt>细数北京温泉，温暖你的冬天</dt>
		</dl>
		<dl class="weekend-list">
			<dd><img src="../../img/2.jpg" alt="由于您的网速不好，图片无法正常显示" /></dd>
			<dt>寻找北京的皇城范儿</dt>
			<dt>数百年的宫廷庙宇，至今依旧威严霸气</dt>
		</dl>
		<dl class="weekend-list">
		<dd><img src="../../img/3.jpg" alt="由于您的网速不好，图片无法正常显示" /></dd>
			<dt>北京必游TOP10</dt>
			<dt>来北京必去的景点非这些地方莫属</dt>
		</dl>
		<dl class="weekend-list">
			<dd><img src="../../img/4.jpg" alt="由于您的网速不好，图片无法正常显示" /></dd>
			<dt>登高望远秋色佳</dt>
			<dt>山顶满眼彩色，此情此景醉了</dt>
		</dl>
		<dl class="weekend-list">
			<dd><img src="../../img/5.jpg" alt="由于您的网速不好，图片无法正常显示" /></dd>
			<dt>秋高气爽去礼佛</dt>
			<dt>秋风伴着美妙经声，品尝秋的另一番滋味</dt>
		</dl>
	</div>
</template>
<script>
	
</script>
<style>
	.weekend-text{
		width:100%;
	    height: .8rem;
	    padding-left: .26rem;
	    line-height: .8rem;
	    font-weight: normal;
	    color: #212121;
	    background:#f5f5f5;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.weekend-list>dd>img{
		width:100%;
	}
	.weekend-list>dt:nth-of-type(1){
	    padding-right: 1.4rem;
	    color: #212121;
	    font-size: .28rem;
	    line-height: .74rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    overflow: hidden;
        cursor: auto;
        padding-left:.56rem;
	}
	
	.weekend-list>dt:nth-of-type(2){
		overflow: hidden;
	    padding-right: 1.4rem;
	    color: #616161;
	    font-size: .24rem;
	    line-height: .66rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
        cursor: auto;
        padding-left:.56rem;
        
	}
</style>