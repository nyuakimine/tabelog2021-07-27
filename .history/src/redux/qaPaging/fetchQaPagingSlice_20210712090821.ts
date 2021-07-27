import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface NewBeeMallProductDescState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: NewBeeMallProductDescState = {
  loading: true,
  error: null,
  data: null,
};

export const fetchDescDataActionCreator = createAsyncThunk(
  "descSlice/fetchDescDataActionCreator",
  async (goodsId: string, thunkAPI) => {
    const { data } = await axios.get(
      `http://localhost:8081/descList/${goodsId}`
    );
    return data;
  }
);
export const newBeeMallDescSlice = createSlice({
  name: "descSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDescDataActionCreator.pending.type]: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    [fetchDescDataActionCreator.fulfilled.type]: (state, action) => {
        //debugger;
      state.data = action.payload.data;

      console.log("aaaaaaaaDesc",state.data)

      state.loading = false;
      state.error = null;
    },
    [fetchDescDataActionCreator.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      //   const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
  },
});
