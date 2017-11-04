<template>
	<div>
	     <home-header/>
	     <home-fourPart/>
	 </div>
</template>

<script>
import HeaderComponent from "./header";
import FourPartComponent from "./FourPart";
export default {
   components: {
		"home-header": HeaderComponent,
		"home-fourPart":FourPartComponent
	}
}
</script>

<style>
       
</style>