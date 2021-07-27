import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface NewBeeMallProductQaPagingState {
  loading: boolean;
  error: string | null;
  data: {totalCount:number,pageSize:number,totalPage:number,currPage:number,list:any[]};
  page: any;
}

const initialState: NewBeeMallProductQaPagingState = {
  loading: true,
  error: null,
  data:  {totalCount:0,pageSize:3,totalPage:0,currPage:2,list:[]},
  page: 2,
};

export const fetchQaPagingDataActionCreator = createAsyncThunk(
  "qaPageSlice/fetchQaPagingDataActionCreator",
  async (page: number, thunkAPI) => {
    debugger;
    const { data } = await axios.post(`http://localhost:8081/qaPaging`, {
      page: page,
    });
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
     // debugger;
      console.log("lllllllQaPaging", action.payload);
      state.data = action.payload.data;
      state.page = action.payload.data.currPage;
      console.log("wwwwwwwwwwwwwwwwQaPaging",state.page);
       //state.page = action.payload.page;

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