import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface NewBeeMallProductQaInsertState {
  loading: boolean;
  error: string | null;
  data: {totalCount:number,pageSize:number,totalPage:number,currPage:number,list:any[]};
  page: any;
}

const initialState: NewBeeMallProductQaInsertState = {
  loading: true,
  error: null,
  data:  {totalCount:0,pageSize:3,totalPage:0,currPage:1,list:[]},
  page: 1,
};

export const fetchQaInsertDataActionCreator = createAsyncThunk(
  "qaInsertSlice/fetchQaInsertDataActionCreator",
  async (page: number, thunkAPI) => {
    const { data } = await axios.post(`http://localhost:8081/qaPaging`, {
      page: page,
    });
    return data;
  }
);
export const newBeeMallQaInsertSlice = createSlice({
  name: "qaInsertSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchQaInsertDataActionCreator.pending.type]: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    [fetchQaInsertDataActionCreator.fulfilled.type]: (state, action) => {
     // debugger;
      console.log("lllllllQaInsert", action.payload);
      state.data = action.payload.data;
      state.page = action.payload.data.currPage;
      console.log("wwwwwwwwwwwwwwwwQaInsert",state.page);
       //state.page = action.payload.page;

      state.loading = false;
      state.error = null;
    },
    [fetchQaInsertDataActionCreator.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      //   const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
  },
});