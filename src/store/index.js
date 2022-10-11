import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  show: true,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    increase(state, action) {
      state.value += action.payload
    },
    toggleCounter(state) {
      state.show = !state.show
    },
  },
})

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
})

export const { increment, decrement, increase, toggleCounter } = counterSlice.actions
