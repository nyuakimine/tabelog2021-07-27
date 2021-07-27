import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface NewBeeMallProductDetailTitleState {
  loading: boolean;
  error: string | null;
  data: any;

}

const initialState: NewBeeMallProductDetailTitleState = {
  loading: true,
  error: null,
  data: null,
};

export const fetchDetailTitleDataActionCreator = createAsyncThunk(
  "detailTitleListSlice/fetchDetailTitleDataActionCreator",
  async (detailTitleUserInfo: string, thunkAPI) => {
    const { data } = await axios.get(
      `http://localhost:8081/detailTitleList`
    );
    return data;
  }
);
//detailTitleList
//showAndCloseDetailTitle
export const newBeeMallDetailTitleSlice = createSlice({
  name: "detailTitleListSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDetailTitleDataActionCreator.pending.type]: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    [fetchDetailTitleDataActionCreator.fulfilled.type]: (state, action) => {
        //debugger;
      state.data = action.payload.data;

      console.log("aaaaaaaaDetailTitle",state.data)

      state.loading = false;
      state.error = null;
    },
    [fetchDetailTitleDataActionCreator.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      //   const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
  },
});
