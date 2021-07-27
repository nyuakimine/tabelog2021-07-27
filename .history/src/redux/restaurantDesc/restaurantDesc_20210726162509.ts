import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface TabelogProductRestaurantDescState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: TabelogProductRestaurantDescState = {
  loading: true,
  error: null,
  data: null,
};
// interface RestaurantDesc {
//   id: any;
// }
export const fetchRestaurantDescDataActionCreator = createAsyncThunk(
  "restaurantDescSlice/fetchRestaurantDescDataActionCreator",
  async (restaurantDesc: any, thunkAPI) => {
    const { data } = await axios.post(`http://localhost:8081/restaurantDesc`,);
    return data;
  }
);
export const tabelogRestaurantDescSlice = createSlice({
  name: "restaurantDescSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRestaurantDescDataActionCreator.pending.type]: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    [fetchRestaurantDescDataActionCreator.fulfilled.type]: (state, action) => {
      //debugger;
      state.data = action.payload.data;

      console.log("RestaurantDescRestaurantDesc", state.data);

      state.loading = false;
      state.error = null;
    },
    [fetchRestaurantDescDataActionCreator.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      //   const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
  },
});
