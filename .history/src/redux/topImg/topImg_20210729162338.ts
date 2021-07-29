import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface TabelogProductTopImgState {
  loading: boolean;
  error: string | null;
  data:  { resultCode: number; message: string; data: any[] };
}

const initialState: TabelogProductTopImgState = {
  loading: true,
  error: null,
  data:  { resultCode: 0, message: "", data: [] },
};
};
interface TopImg {
  id: any;
}
export const fetchTopImgDataActionCreator = createAsyncThunk(
  "topImgSlice/fetchTopImgDataActionCreator",
  async (topImg: TopImg, thunkAPI) => {
    const { data } = await axios.post(`http://localhost:8081/topImg`, {
      id: topImg.id,
    });
    return data;
  }
);
export const tabelogTopImgSlice = createSlice({
  name: "topImgSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTopImgDataActionCreator.pending.type]: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    [fetchTopImgDataActionCreator.fulfilled.type]: (state, action) => {
      //debugger;
      state.data = action.payload;

      console.log("TopImgTopImg", state.data);

      state.loading = false;
      state.error = null;
    },
    [fetchTopImgDataActionCreator.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      //   const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
  },
});
