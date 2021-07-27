import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface NewBeeMallProductReviewState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: NewBeeMallProductReviewState = {
  loading: true,
  error: null,
  data: null,
};

export const fetchReviewDataActionCreator = createAsyncThunk(
  "reviewListSlice/fetchReviewDataActionCreator",
  async (goodsId: string, thunkAPI) => {
    const { data } = await axios.get(
      `http://localhost:8081/reviewList/${goodsId}`
    );
    return data;
  }
);
export const newBeeMallReviewSlice = createSlice({
  name: "reviewListSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchReviewDataActionCreator.pending.type]: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    [fetchReviewDataActionCreator.fulfilled.type]: (state, action) => {
        //debugger;
      state.data = action.payload;

      console.log("aaaaaaaaReview",state.data)

      state.loading = false;
      state.error = null;
    },
    [fetchReviewDataActionCreator.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      //   const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
  },
});
