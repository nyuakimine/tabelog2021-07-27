import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface NewBeeMallProductQaPagingState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: NewBeeMallProductQaPagingState = {
  loading: true,
  error: null,
  data: null,
};

export const fetchQaPagingDataActionCreator = createAsyncThunk(
  "descSlice/fetchQaPagingDataActionCreator",
  async (goodsId: string, thunkAPI) => {
    const { data } = await axios.get(
      `http://localhost:8081/qaPaging`
    );
    return data;
  }
);
export const newBeeMallQaPagingSlice = createSlice({
  name: "descSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchQaPagingDataActionCreator.pending.type]: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    [fetchQaPagingDataActionCreator.fulfilled.type]: (state, action) => {
        //debugger;
      state.data = action.payload.data;

      console.log("aaaaaaaaQaPaging",state.data)

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
