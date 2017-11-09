<template>
	<div>
        <list-header/>
        <list-content/>
    </div>
</template>

<script>

import ListComponent from "./list-top";
import ListContentComponent from "./list-content";
export default {
   components: {
		"list-header": ListComponent,
		"list-content": ListContentComponent
	},
	mounted(){
		
	}
}
</script>