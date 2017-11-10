<template>
	<div>
		<scenic-header/>
		<div id="wrapper" class="main-component">
			<div id="scroller">
				<div id="loadNotice">松开重新加载</div>
				<scenic-nav/>
				<scenic-main/>
			</div>
		</div>
	</div>
</template>
<script>
import HeaderComponent from './header';
import NavComponent from './nav' ;
import MainComponent from './main';
var IScroll=require('../../../utils/iscroll-probe.js');
export default{
	components:{
		'scenic-header':HeaderComponent,
		'scenic-nav':NavComponent,
		'scenic-main':MainComponent
	},
	mounted(){
		var myScroll=new IScroll('#wrapper', { probeType: 1, mouseWheel: true })
		myScroll.on("scroll",()=>{
			if(myScroll.y>50){
				location.reload();
			}
		})
	}
}
</script>
<style>
#wrapper{
	position: absolute;
	top:0.88rem;
	height:100%;
	overflow: hidden;
}
#loadNotice{
	text-align: center;
	display: none;
}
</style>
