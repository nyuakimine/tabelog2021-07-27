import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface TabelogProductDetailTitleState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: TabelogProductDetailTitleState = {
  loading: true,
  error: null,
  data: null,
};
interface DetailTitle {
  id: any;
}
export const fetchDetailTitleDataActionCreator = createAsyncThunk(
  "detailTitleListSlice/fetchDetailTitleDataActionCreator",
  async (detailTitle: DetailTitle, thunkAPI) => {
    const { data } = await axios.post(`http://localhost:8081/detailTitle`, {
      id: detailTitle.id,
    });
    return data;
  }
);
export const tabelogDetailTitleSlice = createSlice({
  name: "detailTitleListSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDetailTitleDataActionCreator.pending.type]: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    [fetchDetailTitleDataActionCreator.fulfilled.type]: (state, action) => {
      //debugger;
      state.data = action.payload.data;

      console.log("DetailTitleDetailTitle", state.data);

      state.loading = false;
      state.error = null;
    },
    [fetchDetailTitleDataActionCreator.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      //   const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
  },
});
