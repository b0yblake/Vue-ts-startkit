<script lang="ts">
import { 
  h,
  defineComponent,
} from 'vue'

export default defineComponent({
  name: "About",
  setup() {
    return() => {
      h(
        'div',
        {},
        "About page"
      )
    }
  },
})
</script>
