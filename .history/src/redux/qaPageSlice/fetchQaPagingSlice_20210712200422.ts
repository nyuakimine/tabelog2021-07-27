import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface NewBeeMallProductQaPagingState {
  loading: boolean;
  error: string | null;
  data: any;
  page: any;
}

const initialState: NewBeeMallProductQaPagingState = {
  loading: true,
  error: null,
  data: null,
  page: 1,
};

export const fetchQaPagingDataActionCreator = createAsyncThunk(
  "qaPageSlice/fetchQaPagingDataActionCreator",
  async (page: number, thunkAPI) => {
    
    const { data } = await axios.post(
      `http://localhost:8081/qaPaging`,{page : page}
    );
    thunkAPI.dispatch(decrement(data));
    //thunkAPI.dispatch(increment(data));
    return data;
  }
);
export const newBeeMallQaPagingSlice = createSlice({
  name: "qaPageSlice",
  initialState,
  reducers: {

    increment: (state, action) => {
      //console.log("xxxx", action);
      state.page += 1;
      // if (state.qaPageNo > action.payload.data - 1) {
      //   state.qaPageNo = 0;
      // }
    },
    decrement: (state, action) => {
      //console.log("aaaa", action);
      state.page -= 1;
      // if (state.qaPageNo < 0) {
      //   state.qaPageNo = action.payload.data - 1;
      // }
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.page += action.payload;
    },
  },
  extraReducers: {
    [fetchQaPagingDataActionCreator.pending.type]: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    [fetchQaPagingDataActionCreator.fulfilled.type]: (state, action) => {
      //debugger;
      console.log("lllllllQaPaging", action.payload);
      state.data = action.payload.data.list;

   

      // state.page = action.payload.page;

      state.loading = false;
      state.error = null;
    },
    [fetchQaPagingDataActionCreator.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      //   const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { increment, decrement, incrementByAmount } = newBeeMallQaPagingSlice.actions;

export default newBeeMallQaPagingSlice.reducer;