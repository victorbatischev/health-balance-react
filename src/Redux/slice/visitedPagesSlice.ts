import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IVisitedSlice {
  challengePage: any;
  trackerPage: any;
  newChallengeInfoPage: any;
  activityPage: any;
}

const initialState: IVisitedSlice = {
  challengePage: {
    visitCount: 0,
    challengeCount: 0,
  },
  trackerPage: {
    visitCount: 0,
  },
  newChallengeInfoPage: {
    firstChallange: true,
  },
  activityPage: {
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
    setVisitedTrackerPage: (state, action) => {
      state.trackerPage.visitCount = action.payload;
    },
    setStoreFirstChallenge: (state) => {
      state.newChallengeInfoPage.firstChallange = false;
    },
    setShowFirstChallengeInstruction: (state, action) => {
      state.challengePage.challengeCount = action.payload;
    },
    setVisitedActivityPage: (state, action) => {
      state.activityPage.visitCount = action.payload;
    },
  },
});

export const {
  setVisitedChallengePage,
  setVisitedTrackerPage,
  setStoreFirstChallenge,
  setShowFirstChallengeInstruction,
  setVisitedActivityPage,
} = visitedPagesSlice.actions;

//export const selectCount = (state: RootState) => state.app

export default visitedPagesSlice.reducer;
