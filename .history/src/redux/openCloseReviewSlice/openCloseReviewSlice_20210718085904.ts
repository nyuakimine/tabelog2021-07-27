import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface NewBeeMallProductOpenAndCloseState {
  loading: boolean;
  error: string | null;
  initialList:  any[] ;
  showMoreList: any[];
}
const initialState: NewBeeMallProductOpenAndCloseState = {
  loading: true,
  error: null,
  initialList:[],
  showMoreList: [],
};


export const fetchOpenAndCloseDataActionCreator = createAsyncThunk(

  "openCloseReviewSlice/fetchOpenAndCloseDataActionCreator",
  async (reviewUserInfo: any, thunkAPI) => {
    const { data } = await axios.post(
      `http://localhost:8081/showAndCloseReview`,reviewUserInfo
    );
    return data;
  }
);

//reviewList
//showAndCloseOpenAndClose
export const newBeeMallOpenAndCloseSlice = createSlice({
  name: "openCloseReviewSlice",
  initialState,
  reducers: {
    closeShowList: (state) => {
       //state.showMoreList = action.payload.data.list;
      //if ( state.showMoreList ) {
        state.showMoreList  = [];
      //}
      // state.loading = true;
    },
  
  },
  extraReducers: {
    [fetchOpenAndCloseDataActionCreator.pending.type]: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    [fetchOpenAndCloseDataActionCreator.fulfilled.type]: (state, action) => {
      debugger;
      // && state.initialList.length === 0
       if(state.initialList != undefined&& state.initialList.length === 0){
        state.initialList = action.payload.data.list; 
      } else {
        state.showMoreList = action.payload.data;
      }
      state.loading = false;
      state.error = null;
    },
    [fetchOpenAndCloseDataActionCreator.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      //   const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { closeShowList } = newBeeMallOpenAndCloseSlice.actions;

export default newBeeMallOpenAndCloseSlice.reducer;