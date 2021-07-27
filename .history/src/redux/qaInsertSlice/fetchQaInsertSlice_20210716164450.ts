import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface NewBeeMallProductQaInsertState {
  loading: boolean;
  error: string | null;
  data: any;

}

const initialState: NewBeeMallProductQaInsertState = {
  loading: true,
  error: null,
  data: null,

};

export const fetchQaInsertDataActionCreator = createAsyncThunk(
  "qaInsertSlice/fetchQaInsertDataActionCreator",
  async (question: any, thunkAPI) => {
    const { data } = await axios.post(`http://localhost:8081/insertQa`, question
    );
    return data;
  }
);
export const newBeeMallQaInsertSlice = createSlice({
  name: "qaInsertSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchQaInsertDataActionCreator.pending.type]: (state) => {
      //debugger;
      state.loading = true;
    },
    [fetchQaInsertDataActionCreator.fulfilled.type]: (state, action) => {
      //debugger;
      console.log("lllllllQaInsert", action.payload);
      state.data = action.payload.data;
      state.loading = false;
      state.error = null;
    },
    [fetchQaInsertDataActionCreator.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});