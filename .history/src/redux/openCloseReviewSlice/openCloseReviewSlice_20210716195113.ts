import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface NewBeeMallProductHelpNumState {
  loading: boolean;
  error: string | null;
  data:  any ;
  
}
const initialState: NewBeeMallProductHelpNumState = {
  loading: true,
  error: null,
  data: null,
};


export const fetchHelpNumDataActionCreator = createAsyncThunk(

  "openCloseReviewSlice/fetchHelpNumDataActionCreator",
  async (reviewUserInfo: any, thunkAPI) => {
    const { data } = await axios.post(
      `http://localhost:8081/showAndCloseReview`,reviewUserInfo
    );
    return data;
  }
);

//reviewList
//showAndCloseHelpNum
export const newBeeMallHelpNumSlice = createSlice({
  name: "openCloseReviewSlice",
  initialState,
  reducers: {
 
  },
  extraReducers: {
    [fetchHelpNumDataActionCreator.pending.type]: (state) => {
      //debugger;
      // return { ...state, loading: true };
      state.loading = true;
    },
    [fetchHelpNumDataActionCreator.fulfilled.type]: (state, action) => {
      //debugger;
      state.data = action.payload.data;
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