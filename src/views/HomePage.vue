<template>
	<div class="home-layout">
		<LayoutDefault> Main home </LayoutDefault>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LayoutDefault from "@/templates/layouts/LayoutDefault.vue";

export default defineComponent({
	name: "HomePage",
	components: {
		LayoutDefault,
	},
});
</script>
