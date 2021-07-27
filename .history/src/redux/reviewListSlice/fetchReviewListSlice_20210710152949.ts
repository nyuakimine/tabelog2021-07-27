import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface NewBeeMallProductReviewState {
  loading: boolean;
  error: string | null;
  reviewData: any;
}

const initialState: NewBeeMallProductReviewState = {
  loading: true,
  error: null,
  reviewData: null,
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
      state.reviewData = action.payload.reviewData;

      console.log("aaaaaaaaReview",state.reviewData)

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
