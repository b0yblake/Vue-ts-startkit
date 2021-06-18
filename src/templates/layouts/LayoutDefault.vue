<template>
  <div :class="$style.wrap">
    <TheHeader />
    <TheNavigation />
    <main :class="$style.main">
      <!-- <div id="scene"></div> -->
      <slot/>
    </main>
    
    <TheFooter />
  </div>
</template>

<script>
export default {
  name: `LayoutDefault`,
};
</script>

<style lang="scss" module>

</style>