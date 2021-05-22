<script lang="ts">
import { 
  h,
  defineComponent,
} from 'vue'

export default defineComponent({
  name: "NotFound",
  setup() {
    return() => {
      h(
        'div',
        {},
        "Not Found Page!"
      )
    }
  },
})
</script>
