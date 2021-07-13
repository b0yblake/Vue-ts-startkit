<template>
  <div :class="$style.wrap">

    <TheHeader />
    
    <main :class="$style.main">
      <slot/>
    </main>
    
    <TheFooter />
  </div>
</template>

<script>
import {
  defineComponent
} from 'vue'
export default defineComponent({
  name: `LayoutDefault`
})
</script>

<style lang="scss" module>
</style>