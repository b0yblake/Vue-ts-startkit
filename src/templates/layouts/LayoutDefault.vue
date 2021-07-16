<template>
	<div :class="$style.wrap">
		<!-- THE HEADER -->
		<TheHeader />
		<!-- //THE HEADER -->

		<!-- MAIN -->
		<main :class="$style.main">
			<slot />
		</main>
		<!-- //MAIN -->

		<!-- THE FOOTER -->
		<TheFooter />
		<!-- //THE FOOTER -->
	</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	name: `LayoutDefault`,
});
</script>

<style lang="scss" module>
.wrap {
	.main {
		position: relative;
	}
}
</style>
