<template>
	<div>
        <city-header/> 
        <city-content/>
     </div>
</template>

<script>

import CityTop from "./cityTop";
import CityContent from "./cityContent";
export default {
   components: {
		"city-header": CityTop,
		"city-content":CityContent
	},
	mounted() {
		this.$store.dispatch("getCityInfo");
	}
}
</script>