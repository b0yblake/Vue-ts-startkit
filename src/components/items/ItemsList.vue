<template>
  <div class="flex ">
    <h3 class="text-bold">{{ title }}</h3>
    
    <ul>
      <li v-for="(item, index) in listItem" :key="`${item.name}_${index}`">{{ item.name }}</li>
    </ul>

  </div>


  Count: {{ count }}

</template>
<script lang="ts">
import {
  ref,
  defineComponent,
  PropType,
} from 'vue'

export default defineComponent({
  name: "ItemsList",
  props: {
    listItem: {
      type: Array as PropType<any[]>,
      required: true,
      validator: (listItem: any) => {
        return listItem.map(item => !!item.name)
      }
    },
    title: {
      type: String,
      required: true,
      validator: (title: String) => {
        return !!title
      }
    }
  },
  setup() {
    const count = ref(0);

    return {
      count,
    }
  },
})
</script>
