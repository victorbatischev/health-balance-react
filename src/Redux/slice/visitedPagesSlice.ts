import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IVisitedSlice {
  challenge: any;
}

const initialState: IVisitedSlice = {
  challenge: [1, 2, 3],
};

export const visitedPagesSlice = createSlice({
  name: "visitedPages",
  initialState,
  reducers: {},
});

export const {} = visitedPagesSlice.actions;

//export const selectCount = (state: RootState) => state.app

export default visitedPagesSlice.reducer;
