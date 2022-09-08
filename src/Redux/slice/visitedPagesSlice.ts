import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IVisitedSlice {
  challengePage: any;
}

const initialState: IVisitedSlice = {
  challengePage: {
    visitCount: 0,
  },
};

export const visitedPagesSlice = createSlice({
  name: "visitedPages",
  initialState,
  reducers: {
    setVisitedChallengePage: (state, action) => {
      state.challengePage.visitCount = action.payload;
    },
  },
});

export const { setVisitedChallengePage } = visitedPagesSlice.actions;

//export const selectCount = (state: RootState) => state.app

export default visitedPagesSlice.reducer;
