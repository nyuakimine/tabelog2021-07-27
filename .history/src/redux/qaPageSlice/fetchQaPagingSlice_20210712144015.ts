import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface NewBeeMallProductQaPagingState {
  loading: boolean;
  error: string | null;
  data: any;
  page: any;
}

const initialState: NewBeeMallProductQaPagingState = {
  loading: true,
  error: null,
  data: null,
  page: 1,
};

export const fetchQaPagingDataActionCreator = createAsyncThunk(
  "qaPageSlice/fetchQaPagingDataActionCreator",
  async (page: number, thunkAPI) => {
    const { data } = await axios.get(
      `http://localhost:8081/qaPaging`,{
        params: {
          page: {page:"2"}
        }
      }
    );
    return data;
  }
);
export const newBeeMallQaPagingSlice = createSlice({
  name: "qaPageSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchQaPagingDataActionCreator.pending.type]: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    [fetchQaPagingDataActionCreator.fulfilled.type]: (state, action) => {
      //debugger;
      state.data = action.payload.data;

      console.log("lllllllQaPaging", state.data);

      // state.page = action.payload.page;

      state.loading = false;
      state.error = null;
    },
    [fetchQaPagingDataActionCreator.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      //   const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
  },
});
