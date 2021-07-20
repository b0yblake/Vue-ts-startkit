<template>
	<div class="home-layout">
		<LayoutDefault>
			Main home

			<v-app>
				<v-main class="bg-grey-lighten-3">
					<router-view />
				</v-main>
			</v-app>
		</LayoutDefault>
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
