import { 
  ref,
  reactive,
  readonly,
} from 'vue'

interface StateTypes {
  initialState?:  any;
  newState?:      any;
}

const useState = (initialState: StateTypes) => {

  const state = ref(initialState) //local state
  const setState = (newState: StateTypes) => {
    state.value = newState
  };

  return [readonly(state), setState]
}

export default useState