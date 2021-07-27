import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface NewBeeMallProductDetailState {
  loading: boolean;
  error: string | null;
  data: { resultCode: number; message: string; data: any[] };
}

const initialState: NewBeeMallProductDetailState = {
  loading: true,
  error: null,
  data: { resultCode: 0, message: "", data: [] },
};

export const fetchDetailDataActionCreator = createAsyncThunk(
  "detailNewBeeMall/fetchDetailDataActionCreator",
  async (goodsId: string, thunkAPI) => {
    const { data } = await axios.get(
      `http://localhost:8081/detailLeftImg/${goodsId}`
    );
    return data;
  }
);
export const newBeeMallDetailSlice = createSlice({
  name: "detailNewBeeMall",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDetailDataActionCreator.pending.type]: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    [fetchDetailDataActionCreator.fulfilled.type]: (state, action) => {
        //debugger;
      state.data = action.payload;
      //console.log("data",action.payload)
      state.loading = false;
      state.error = null;
    },
    [fetchDetailDataActionCreator.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      //   const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
  },
});
