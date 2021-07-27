import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface CounterState {
  counter: number;
}

const initialState: CounterState = {
  counter: 0,
};
export const slice = createSlice({
  name: "leftImg",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
      if (state.counter > state.counter) {
        state.counter = 0;
      }
    },
    decrement: (state) => {
      state.counter -= 1;
      if (state.counter < 0) {
        state.counter = 2;
      }
    },
    // clickImg:()=>{
    //     state.counter;
    // },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.counter += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = slice.actions;

export default slice.reducer;
