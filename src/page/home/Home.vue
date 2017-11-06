<template>
	<div>
		 <home-header/>
		 <home-main/>
	</div>
</template>

<script>
import HeaderComponent from "./header";
import MainComponent from "./main";
export default {
   components: {
		"home-header": HeaderComponent,
		"home-main":MainComponent
	}
}
</script>

<style>
       
</style>