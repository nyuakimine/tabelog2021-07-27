import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface NewBeeMallProductOpenAndCloseState {
  loading: boolean;
  error: string | null;
  // data: any;
  //reviewUserInfo: {ids:any[],goodsId:number};
  initialList: any;
  showMoreList: any;
}
const initialState: NewBeeMallProductOpenAndCloseState = {
  loading: true,
  error: null,
  //data: [],
  //reviewUserInfo: {ids:[],goodsId:10700},
  initialList: null,
  showMoreList: null,
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
      debugger;
      if (state.initialList = null) {
        state.initialList = action.payload.data.list;
      } else {
        state.showMoreList = action.payload.data.list;
      }
      // if ((state.loading = true)) {
      //   state.data = action.payload.data.list;
      // } else {
      //   state.reviewUserInfo = action.payload.data;
      // }
      //state.reviewUserInfo = action.payload;
      //console.log("aaaaaaaaOpenAndClose", state.data);

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
