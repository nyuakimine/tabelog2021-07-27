import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  qaPageNo: number;
}

const initialState: CounterState = {
  qaPageNo: 0,
};
export const qaPageNoSlice = createSlice({
  name: "qaPageNo",
  initialState,
  reducers: {

    increment: (state, action) => {
      //console.log("xxxx", action);
      state.qaPageNo += 1;
      if (state.qaPageNo > action.payload - 1) {
        state.qaPageNo = 0;
      }
    },
    decrement: (state, action) => {
      //console.log("aaaa", action);
      state.qaPageNo -= 1;
      if (state.qaPageNo < 0) {
        state.qaPageNo = action.payload - 1;
      }
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.qaPageNo += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = qaPageNoSlice.actions;

export default qaPageNoSlice.reducer;
