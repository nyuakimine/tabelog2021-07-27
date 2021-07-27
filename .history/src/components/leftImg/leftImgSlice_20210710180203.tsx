import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Item from "antd/lib/list/Item";

// interface Array<T>{
//     last(): T|undefined
// }
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
    clickImg: (state, action) => {
      state.counter = action.payload;
    },
    increment: (state, action) => {
      //console.log("xxxx", action);
      state.counter += 1;
      if (state.counter > action.payload - 1) {
        state.counter = 0;
      }
    },
    decrement: (state, action) => {
      //console.log("aaaa", action);
      state.counter -= 1;
      if (state.counter < 0) {
        state.counter = action.payload - 1;
      }
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.counter += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,clickImg } = slice.actions;

export default slice.reducer;
