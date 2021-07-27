import { createSlice } from '@reduxjs/toolkit';
export interface CounterState {
    counter: number
  }
  
  const initialState: CounterState = {
    counter: 0,
  }
export const slice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: state => {
      state.counter += 1;
    },
    decrement: state => {
      state.counter -= 1;
    },
    incrementByAmount: (state, action) => {
      state.counter += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = slice.actions;

export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};
export const selectCount = state => state.counter.value;

export default slice.reducer;
