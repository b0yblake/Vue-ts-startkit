import { 
  ref,
  readonly,
} from 'vue'

export default function useReducer(reducer, initialArg, init) {
  const state = ref(init ? init(initialArg) : initialArg)
  const dispatch = (action) => {
    state.value = reducer(state.value, action);
  }
  
  return [readonly(state), dispatch]
}

// ============
// CODE EXAMPLE
// ============
// <!-- src/components/Counter.vue -->
// <template>
//   <div>
//     Count: { state.count }
//     <button @click="dispatch({ type: 'decrement' })">
//       -
//     </button>
//     <button @click="dispatch({ type: 'increment' })">
//       +
//     </button>
//   </div>
// </template>

// <script>
// import { useReducer } from '../composables/reducer';

// const initialState = { count: 0 };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     default:
//       throw new Error('Wrong action type!');
//   }
// }

// export default {
//   setup() {
//     const [state, dispatch] = useReducer(reducer, initialState);
  
//     return {
//       dispatch,
//       state,
//     };
//   },
// };
// </script>
