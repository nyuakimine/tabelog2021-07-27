import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchQaPagingDataActionCreator } from '../qaPageSlice/fetchQaPageSlice'
import { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
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
// export const fetchQaInsertDataActionCreator = createAsyncThunk(
//   "qaInsertSlice/fetchQaInsertDataActionCreator",
//   async (question: any, thunkAPI) => {
//     const { data } = await axios.post(`http://localhost:8081/insertQa`, question
//     );
//     return data;
//   }
// );
export const fetchQaInsertDataActionCreator = createAsyncThunk(
  "qaInsertSlice/fetchQaInsertDataActionCreator",
  async (question: any, thunkAPI) => {
    const { data } = await axios.post(`http://localhost:8081/insertQa`, question
    );
    //if(data!=null){
      debugger;
      let qaPage = useSelector((state: RootState) => state.qaPageSlice.data);
     
    //  thunkAPI.dispatch(fetchQaPagingDataActionCreator(qaPage))
   // }
   useEffect(() => {
    thunkAPI.dispatch(fetchQaPagingDataActionCreator(qaPage));
  }, [])
    
    return data;
  }
);


// .then(data => this.setState({ users: data.data.data }))
// .catch(err => {
//     console.log(err);
//     return null;
// });
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