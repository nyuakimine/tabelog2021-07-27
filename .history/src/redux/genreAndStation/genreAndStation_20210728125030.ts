import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface TabelogProductGenreAndStationState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: TabelogProductGenreAndStationState = {
  loading: true,
  error: null,
  data: null,
};
interface GenreAndStation {
  id: any;
}
export const fetchGenreAndStationDataActionCreator = createAsyncThunk(
  "genreAndStationSlice/fetchGenreAndStationDataActionCreator",
  async (genreAndStation: GenreAndStation, thunkAPI) => {
    const { data } = await axios.post(`http://localhost:8081/genreAndStation`, {
      id: genreAndStation.id,
  });
    return data;
  }
);
export const tabelogGenreAndStationSlice = createSlice({
  name: "genreAndStationSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGenreAndStationDataActionCreator.pending.type]: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    [fetchGenreAndStationDataActionCreator.fulfilled.type]: (state, action) => {
      //debugger;
      state.data = action.payload.data;

      console.log("GenreAndStationGenreAndStation", state.data);

      state.loading = false;
      state.error = null;
    },
    [fetchGenreAndStationDataActionCreator.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      //   const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
  },
});
