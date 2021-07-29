import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface TabelogProductTopNoticeCommentState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: TabelogProductTopNoticeCommentState = {
  loading: true,
  error: null,
  data: null,
};
interface TopNoticeComment {
  id: any;
}
export const fetchTopNoticeCommentDataActionCreator = createAsyncThunk(
  "topNoticeCommentSlice/fetchTopNoticeCommentDataActionCreator",
  async (topNoticeComment: TopNoticeComment, thunkAPI) => {
    const { data } = await axios.post(`http://localhost:8081/topNoticeComment`, {
      id: topNoticeComment.id,
    });
    return data;
  }
);
export const tabelogTopNoticeCommentSlice = createSlice({
  name: "topNoticeCommentSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTopNoticeCommentDataActionCreator.pending.type]: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    [fetchTopNoticeCommentDataActionCreator.fulfilled.type]: (state, action) => {
      //debugger;
      state.data = action.payload.data[0];

      console.log("TopNoticeCommentTopNoticeComment", state.data);

      state.loading = false;
      state.error = null;
    },
    [fetchTopNoticeCommentDataActionCreator.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      //   const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
  },
});
