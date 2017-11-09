<template>
	
	 <div class="list-content">
	 		 <p class="list-content-top">
	 		 	<span class="list-content-topLeft">
	 		 		热门搜索
	 		 	</span>
	 		 	<span class="list-content-topRight iconfont icon-shuaxin" @click="ListContent">
	 		 		换一批
	 		 	</span>
	 		 </p>
	 		 <ul class="list-content-contentul" ><li v-for="item in listss">{{item}}</li></ul>
	 		 <span class="list-content-contentLeft iconfont icon-iconset0210"></span>
	 		 <ul class="list-contentul" v-if="con[0]">
	 		 	<li><a href="#" @click="handleClick">宋城千古城</a></li>
	 		 	<li><a href="#" @click="handleClick">故宫</a></li>
	 		 	<li><a href="#" @click="handleClick">天门狐仙</a></li>
	 		 	<li><a href="#" @click="handleClick">张家界大峡谷</a></li>
	 		 	<li><a href="#" @click="handleClick">颐和园</a></li>
	 		 	<li><a href="#" @click="handleClick">拨浪鼓往返轮渡</a></li>
	 		 	<li><a href="#" @click="handleClick">香山公园</a></li>
	 		 </ul>
	 		  <ul class="list-contentul" v-if="con[1]">
	 		 	<li><a href="#" @click="handleClick">天门狐仙</a></li>
	 		 	<li><a href="#" @click="handleClick">故宫</a></li>
	 		 	<li><a href="#" @click="handleClick">宋城千古城</a></li>
	 		 	<li><a href="#" @click="handleClick">香山公园</a></li>
	 		 	<li><a href="#" @click="handleClick">颐和园</a></li>
	 		 	<li><a href="#" @click="handleClick">张家界大峡谷</a></li>
	 		 	<li><a href="#" @click="handleClick">天安门</a></li>
	 		 </ul>
	 		  <ul class="list-contentul" v-if="con[2]">
	 		 	<li><a href="#" @click="handleClick">圆明园</a></li>
	 		 	<li><a href="#" @click="handleClick">故宫</a></li>
	 		 	<li><a href="#" @click="handleClick">天门</a></li>
	 		 	<li><a href="#" @click="handleClick">张家界大峡谷</a></li>
	 		 	<li><a href="#" @click="handleClick">颐和园</a></li>
	 		 	<li><a href="#" @click="handleClick">拨浪鼓往返轮渡</a></li>
	 		 	<li><a href="#" @click="handleClick">香山公园</a></li>
	 		 </ul>
	 		 <ol class="list-contentol" v-if="con1[0]">
	 		 	<li class="list-contentol-li "><span class="iconfont icon-chengshi"></span></li>
	 		 	<li><a href="#" @click="handleClick">广州</a></li>
	 		 	<li><a href="#" @click="handleClick">上海</a></li>
	 		 	<li><a href="#" @click="handleClick">北京</a></li>
	 		 	<li><a href="#" @click="handleClick">三亚</a></li>
	 		 </ol>
	 		 <ol class="list-contentol"  v-if="con1[1]">
	 		 	<li class="list-contentol-li "><span class="iconfont icon-chengshi"></span></li>
	 		 	<li><a href="#" @click="handleClick">拉萨</a></li>
	 		 	<li><a href="#" @click="handleClick">青岛</a></li>
	 		 	<li><a href="#" @click="handleClick">深圳</a></li>
	 		 	<li><a href="#" @click="handleClick">南京</a></li>
	 		 </ol>
	 		 <ol class="list-contentol"  v-if="con1[2]">
	 		 	<li class="list-contentol-li "><span class="iconfont icon-chengshi"></span></li>
	 		 	<li><a href="#" @click="handleClick">无锡</a></li>
	 		 	<li><a href="#" @click="handleClick">杭州</a></li>
	 		 	<li><a href="#" @click="handleClick">苏州</a></li>
	 		 	<li><a href="#" @click="handleClick">扬州</a></li>
	 		 </ol>
	 		 <div class="list-content-bottom">
	 		 	搜索身边的景点
	 		 </div>
	 </div>
	 
</template>

<script>

export default {
	data(){
		return{
		 con:[true,false,false],
		con1:[true,false,false],
		listss:[]
		}
	},
	methods:{
		ListContent:function(){	
			   if(this.con[0]){
			  	this.con=[false,true,false];
			  	this.con1=[false,true,false];
			  }else if(this.con[1]){
			  	this.con=[false,false,true];
			  	this.con1=[false,false,true]
			  }else if(this.con[2]){
			  	this.con=[true,false,false];
			  	this.con1=[true,false,false]  
			  }
		 },
		 handleClick:function(e){
		 	if(this.listss.indexOf(e.target.text)==-1){
		     this.listss.push(e.target.text);
		    }
		 },
		 
    }
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
	.list-content-contentul{
		width: 100%;
		padding: .2rem .2rem 0;
		border-bottom: 1px solid #ccc;
	}
	.list-content-contentul li{
		text-align: center;
		margin-bottom: .2rem;
		margin-right: .4rem;
		
		padding: .1rem .2rem;
		border: 1px solid #ccc;
		float: left;
	}

</style>