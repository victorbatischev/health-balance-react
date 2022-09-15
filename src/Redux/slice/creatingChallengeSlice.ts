import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { quizAPI } from "../../API/Api-quiz";
import moment from "moment";

export interface ICreatingChallenge {
  platform: any;
  typeChallenge: string;
  purposeType: string[];
  distance: number;
  reward: number;
  duration: string;
  startRegister: string;
  titleChallenge: string;
  descriptionChallenge: string;
  numberTeams: string;
  participantsTeam: string;
  cover: string;
  disabledButton?: boolean;
}

const initialState: ICreatingChallenge = {
  platform: "",
  typeChallenge: "",
  purposeType: [],
  distance: 0,
  reward: 0,
  duration: "",
  startRegister: moment().year() + "-" + moment().month() + "-1",
  titleChallenge: "",
  descriptionChallenge: "",
  numberTeams: "",
  participantsTeam: "",
  cover: "",
  disabledButton: true,
};

export const creatingChallengeSlice = createSlice({
  name: "creating-challenge",
  initialState,
  reducers: {
    setPlatform: (state, action) => {
      state.platform = action.payload;
    },
    setTypeChallenge: (state, action) => {
      state.typeChallenge = action.payload;
    },
    setPurposeType: (state, action) => {
      if (state.purposeType.includes(action.payload)) {
        state.purposeType = state.purposeType.filter(
          (type: string) => type !== action.payload
        );
      } else {
        state.purposeType = [...state.purposeType, action.payload];
      }
    },
    setDistance: (state, action) => {
      state.distance = action.payload;
    },
    setReward: (state, action) => {
      state.reward = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
    setStartRegister: (state, action) => {
      const startArr = state.startRegister.split("-");
      if (action.payload.essence === "day") {
        state.startRegister =
          startArr[0] + "-" + startArr[1] + "-" + action.payload.value;
      }
      if (action.payload.essence === "month") {
        state.startRegister =
          startArr[0] + "-" + action.payload.value + "-" + startArr[2];
      }
      if (action.payload.essence === "year") {
        state.startRegister =
          action.payload.value + "-" + startArr[1] + "-" + startArr[2];
      }
    },
    setTitleChallenge: (state, action) => {
      if (action.payload.length <= 65) state.titleChallenge = action.payload;
    },
    setDescriptionChallenge: (state, action) => {
      if (action.payload.length <= 180)
        state.descriptionChallenge = action.payload;
    },
    setNumberTeams: (state, action) => {
      state.numberTeams = action.payload;
    },
    setParticipantsTeam: (state, action) => {
      state.participantsTeam = action.payload;
    },
    setCover: (state, action) => {
      state.cover = action.payload;
    },
    setDisabledButton: (state, action) => {
      state.disabledButton = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //     builder.addCase(fetchGetQuestionnaire.fulfilled, (state, action:PayloadAction<QuizState>) => {
  //         state.questions = action.payload.questions
  //     })
  // }
});

export const {
  setCover,
  setDescriptionChallenge,
  setDisabledButton,
  setDuration,
  setNumberTeams,
  setParticipantsTeam,
  setPlatform,
  setReward,
  setTitleChallenge,
  setTypeChallenge,
  setPurposeType,
  setDistance,
  setStartRegister,
} = creatingChallengeSlice.actions;

export const platformChallengeSelector = (state: RootState) =>
  state.creatingChallenge.platform;
export const disableButtonChallengeSelector = (state: RootState) =>
  state.creatingChallenge.disabledButton;
export const typeChallengeSelector = (state: RootState) =>
  state.creatingChallenge.typeChallenge;
export const purposeTypeSelector = (state: RootState) =>
  state.creatingChallenge.purposeType;
export const distanceSelector = (state: RootState) =>
  state.creatingChallenge.distance;
export const rewardSelector = (state: RootState) =>
  state.creatingChallenge.reward;
export const durationSelector = (state: RootState) =>
  state.creatingChallenge.duration;
export const startRegister = (state: RootState) =>
  state.creatingChallenge.startRegister;
export const titleChallengeSelector = (state: RootState) =>
  state.creatingChallenge.titleChallenge;
export const descriptionSelector = (state: RootState) =>
  state.creatingChallenge.descriptionChallenge;
export const numberTeamsSelector = (state: RootState) =>
  state.creatingChallenge.numberTeams;
export const participantsTeamSelector = (state: RootState) =>
  state.creatingChallenge.participantsTeam;
export const coverSelector = (state: RootState) =>
  state.creatingChallenge.cover;

export default creatingChallengeSlice.reducer;
