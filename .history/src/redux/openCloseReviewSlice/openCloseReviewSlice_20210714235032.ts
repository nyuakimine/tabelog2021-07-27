import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface NewBeeMallProductOpenAndCloseState {
  loading: boolean;
  error: string | null;
  // data: any;
  //reviewUserInfo: {ids:any[],goodsId:number};
  initialList:{ids:any,id:any,goodsId:any,star:any,commentDate:string,title:string,content:string,nickName:string,goodsName:string,reviewNum:string};
  showMoreList: any;
}
const initialState: NewBeeMallProductOpenAndCloseState = {
  loading: true,
  error: null,
  //data: [],
  //reviewUserInfo: {ids:[],goodsId:10700},
  initialList: {ids:[],id:[],goodsId:[],star:[],commentDate:"",title:"",content:"",nickName:"",goodsName:"",reviewNum:""},
  showMoreList: null,
};

// private Integer[] ids;
// 	private Long id;
// 	private Long goodsId;
// 	private Integer star;
// 	private String commentDate;
// 	private String title;
// 	private String content;
// 	private String picture;
// 	private String nickName;
// 	private String goodsName;
// 	private Long reviewNum;
//     private String page;

export const fetchOpenAndCloseDataActionCreator = createAsyncThunk(
  "openCloseReviewSlice/fetchOpenAndCloseDataActionCreator",
  async (reviewUserInfo: any, thunkAPI) => {
    const { data } = await axios.post(
      `http://localhost:8081/showAndCloseReview`,
      {
        reviewUserInfo: reviewUserInfo,
      }
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
      if (state.initialList.ids = []) {
        state.initialList = action.payload.data.list;
      } else {
        state.showMoreList = action.payload.data.list;
      }
      // if ((state.loading = true)) {
      //   state.data = action.payload.data.list;
      // } else {
      //   state.reviewUserInfo = action.payload.data;
      // }
      //state.reviewUserInfo = action.payload;
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
