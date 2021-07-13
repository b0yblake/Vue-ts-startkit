import { 
  ref,
  readonly,
} from 'vue'

export function useState(initialState) {
  const state = ref(initialState) //local state
  const setState = (newState) => {
    state.value = newState;
  };
  return [readonly(state), setState]
}
