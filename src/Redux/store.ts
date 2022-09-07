import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./slice/appSlice";
import { creatingChallengeSlice } from "./slice/creatingChallengeSlice";
import { quizSlice } from "./slice/quizSlice";
import { registrationSlice } from "./slice/registrationSlice";
import { accessRecoverySlice } from "./slice/accessRecoverySlice";
import { visitedPagesSlice } from "./slice/visitedPagesSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["visitedPages"],
};

const reducer = combineReducers({
  app: appSlice.reducer,
  quiz: quizSlice.reducer,
  registration: registrationSlice.reducer,
  creatingChallenge: creatingChallengeSlice.reducer,
  recovery: accessRecoverySlice.reducer,
  visitedPages: visitedPagesSlice.reducer,
});
const persistedReducers = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
