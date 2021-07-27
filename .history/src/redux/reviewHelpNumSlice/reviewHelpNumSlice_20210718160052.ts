import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {fetchOpenAndCloseDataActionCreator} from "../OpenCloseReviewSlice/openCloseReviewSlice"
import { RouteComponentProps, useParams } from "react-router-dom";
interface NewBeeMallProductHelpNumState {
  loading: boolean;
  error: string | null;
  data: any;

}

const initialState: NewBeeMallProductHelpNumState = {
  loading: true,
  error: null,
  data: null,
};
interface goodsReviewHelpNum {
  reviewId: number;
  ids: number[];
  goodsId :string;
}

export const fetchHelpNumDataActionCreator = createAsyncThunk(
  "helpNumSlice/fetchHelpNumDataActionCreator",
  async (goodsReviewHelpNum:goodsReviewHelpNum, thunkAPI) => {
    debugger;
    const { data } = await axios.post(
      `http://localhost:8081/helpNum`,{reviewId:goodsReviewHelpNum.reviewId},{
        headers: {
          'Content-Type': 'application/json',
      }
      }
    );
    if(data!=null){
      debugger;
    thunkAPI.dispatch(fetchOpenAndCloseDataActionCreator({ids:goodsReviewHelpNum.ids,goodsId:goodsReviewHelpNum.goodsId}))
    }
    return data;
  }
);
export const newBeeMallHelpNumSlice = createSlice({
  name: "helpNumSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchHelpNumDataActionCreator.pending.type]: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    [fetchHelpNumDataActionCreator.fulfilled.type]: (state, action) => {
        //debugger;
      state.data = action.payload.data;

      console.log("aaaaaaaaHelpNum",state.data)

      state.loading = false;
      state.error = null;
    },
    [fetchHelpNumDataActionCreator.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      //   const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
  },
});
