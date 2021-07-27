import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface NewBeeMallProductQaState {
  loading: boolean;
  error: string | null;
  qaData: any;
}

const initialState: NewBeeMallProductQaState = {
  loading: true,
  error: null,
  qaData: null,
};

export const fetchQaDataActionCreator = createAsyncThunk(
  "descSlice/fetchQaDataActionCreator",
  async (goodsId: string, thunkAPI) => {
    const { data } = await axios.get(
      `http://localhost:8081/qaList/${goodsId}`
    );
    return data;
  }
);
export const newBeeMallQaSlice = createSlice({
  name: "descSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchQaDataActionCreator.pending.type]: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    [fetchQaDataActionCreator.fulfilled.type]: (state, action) => {
        //debugger;
      state.qaData = action.payload.qaData;

      console.log("aaaaaaaa",state.qaData)

      state.loading = false;
      state.error = null;
    },
    [fetchQaDataActionCreator.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      //   const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
  },
});
