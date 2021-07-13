import { 
  ref,
  reactive,
  readonly,
} from 'vue'
import { PokeInterface } from '@/@types/PokeTypes.interface'

const stateDialogPage = ref(false) //global state
const isToggleDialog = (newState: boolean) => stateDialogPage.value = newState ? newState : false
const stateRawPokedex = reactive<{ data: PokeInterface }>({ data: {} });


const useDialogState = {
  stateDialogPage: readonly(stateDialogPage),
  isToggleDialog,
  stateRawPokedex
}

export default useDialogState