import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface NewBeeMallProductOpenAndCloseState {
  loading: boolean;
  error: string | null;
  data: any;
  reviewUserInfo: {ids:any[],goodsId:number,page:number};
 // reviewUserInfo: any;
  //page:any;
}
const initialState: NewBeeMallProductOpenAndCloseState = {
  loading: true,
  error: null,
  data: null,
  reviewUserInfo: {ids:[],goodsId:10700,page:1},
  //reviewUserInfo:1
  //page:1
};

export const fetchOpenAndCloseDataActionCreator = createAsyncThunk(
  "openCloseReviewSlice/fetchOpenAndCloseDataActionCreator",
  async (reviewUserInfo: any, thunkAPI) => {
    const { data } = await axios.post(
      `http://localhost:8081/showAndCloseReview`,
      {
        reviewUserInfo: reviewUserInfo,
      }
    );
    return data;
  }
);
//reviewList
//showAndCloseOpenAndClose
export const newBeeMallOpenAndCloseSlice = createSlice({
  name: "openCloseReviewSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOpenAndCloseDataActionCreator.pending.type]: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    [fetchOpenAndCloseDataActionCreator.fulfilled.type]: (state, action) => {
      //debugger;
      state.data = action.payload.data.list;
      //state.reviewUserInfo = action.payload;
      console.log("aaaaaaaaOpenAndClose", state.data);

      state.loading = false;
      state.error = null;
    },
    [fetchOpenAndCloseDataActionCreator.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      //   const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
  },
});
