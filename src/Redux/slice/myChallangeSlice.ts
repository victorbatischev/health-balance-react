import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IMyChallange } from "../../types/interfaces";

interface IMyChallangeInit {
  myChallanges: IMyChallange[];
}

const initialState: IMyChallangeInit = {
  myChallanges: [],
};

export const myChallangesSlice = createSlice({
  name: "myChallanges",
  initialState,
  reducers: {
    addChallange: (state, action) => {
      state.myChallanges = [...state.myChallanges, action.payload];
    },
  },
});

export const { addChallange } = myChallangesSlice.actions;

//export const selectCount = (state: RootState) => state.app

export default myChallangesSlice.reducer;
