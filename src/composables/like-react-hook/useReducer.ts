import { 
  ref,
  readonly,
} from 'vue'

interface ReducerTypes {
  reducer?:     Function
  initialArg?:  any
  init():       void
  action?:      any
}

const useReducer = <T>(reducer: ReducerTypes, initialArg: ReducerTypes, init: ReducerTypes) : T[] => {
  const state = ref(init ? init(initialArg) : initialArg)
  const dispatch = (action: ReducerTypes)  => {
    state.value = reducer(state.value, action);
  }
  
  return [readonly(state), dispatch]
}

export default useReducer