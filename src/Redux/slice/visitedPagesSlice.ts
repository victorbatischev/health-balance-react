import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IVisitedSlice {
  challengePage: any;
  trackerPage: any;
  newChallengeInfoPage: any;
}

const initialState: IVisitedSlice = {
  challengePage: {
    visitCount: 0,
  },
  trackerPage: {
    visitCount: 0,
  },
  newChallengeInfoPage: {
    firstChallange: true,
  },
};

export const visitedPagesSlice = createSlice({
  name: "visitedPages",
  initialState,
  reducers: {
    setVisitedChallengePage: (state, action) => {
      state.challengePage.visitCount = action.payload;
    },
    setVisitedTrackerPage: (state, action) => {
      state.trackerPage.visitCount = action.payload;
    },
    setStoreFirstChallenge: (state) => {
      state.newChallengeInfoPage.firstChallange = false;
    },
  },
});

export const {
  setVisitedChallengePage,
  setVisitedTrackerPage,
  setStoreFirstChallenge,
} = visitedPagesSlice.actions;

//export const selectCount = (state: RootState) => state.app

export default visitedPagesSlice.reducer;
