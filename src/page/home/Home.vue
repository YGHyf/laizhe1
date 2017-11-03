<template>
<div>
	 <home-header/>
	 <weekend-list/>
</div>
</template>

<script>
import HeaderComponent from "./header";
import weekendList from "./weekend-list";
export default {
   components: {
		"home-header": HeaderComponent,
		"weekend-list":weekendList
	}
}
</script>

<style>
       
</style>