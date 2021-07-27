import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface NewBeeMallProductOpenAndCloseState {
  loading: boolean;
  error: string | null;
  // data: any;
  //reviewUserInfo: {ids:any[],goodsId:number};
  //initialList:{ids:any,id:any,goodsId:any,star:any,commentDate:string,title:string,content:string,nickName:string,goodsName:string,reviewNum:string};
  initialList:  any[] ;
  showMoreList: any[];
 // ids: number[];
}
const initialState: NewBeeMallProductOpenAndCloseState = {
  loading: true,
  error: null,
  //data: [],
  //reviewUserInfo: {ids:[],goodsId:10700},
  //initialList: {ids:[],id:[],goodsId:[],star:[],commentDate:"",title:"",content:"",nickName:"",goodsName:"",reviewNum:""},
  initialList:[],
  showMoreList: [],
  //ids: [],
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
  reducers: {},
  extraReducers: {
    [fetchOpenAndCloseDataActionCreator.pending.type]: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    [fetchOpenAndCloseDataActionCreator.fulfilled.type]: (state, action) => {
      debugger;
      //if (state.initialList === []) {
        //if (state.loading = true) {
       if(state.initialList != undefined && state.initialList.length === 0){
      //if (action.payload.data.list.ids = []) {
        state.initialList = action.payload.data.list; 
      } else {
        state.showMoreList = action.payload.data;
      }
   
      //console.log("aaaaaaaaOpenAndClose", state.data);

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
