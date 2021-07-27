import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface TabelogProductCommentTotalState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: TabelogProductCommentTotalState = {
  loading: true,
  error: null,
  data: null,
};

export const fetchCommentTotalDataActionCreator = createAsyncThunk(
  "commentTotalListSlice/fetchCommentTotalDataActionCreator",
  async (commentTotal: string, thunkAPI) => {
    const { data } = await axios.post(`http://localhost:8081/tbCommentTotal`, );
    return data;
  }
);
export const tabelogCommentTotalSlice = createSlice({
  name: "commentTotalListSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCommentTotalDataActionCreator.pending.type]: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    [fetchCommentTotalDataActionCreator.fulfilled.type]: (state, action) => {
      //debugger;
      state.data = action.payload.data;

      console.log("CommentTotalCommentTotal", state.data);

      state.loading = false;
      state.error = null;
    },
    [fetchCommentTotalDataActionCreator.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      //   const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
  },
});
