<template>
	   <div>
        <yiriyou-top></yiriyou-top>
         <yiriyou-con></yiriyou-con>
        </div>
</template>

<script>

 import YiRiYouTop from "./yiriyoutop";
 import YiRiYouCon from "./yiriyoucon";
  
export default {

  components:{
  	"yiriyou-top":YiRiYouTop,
  	"yiriyou-con":YiRiYouCon
  }
	
}
</script>