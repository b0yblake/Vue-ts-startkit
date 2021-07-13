import { 
  ref,
  readonly,
} from 'vue'

const stateDialogTheme = ref(false) //global state
const currentThemeStyle = ref('light') //global theme
const setStateDialogTheme = (newState: boolean) => stateDialogTheme.value = newState
const setCurrentTheme = (newTheme: string) => currentThemeStyle.value = newTheme

const useDialogThemeState = {
  stateDialogTheme: readonly(stateDialogTheme),
  currentThemeStyle,
  setStateDialogTheme,
  setCurrentTheme
}

export default useDialogThemeState