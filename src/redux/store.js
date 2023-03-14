/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './MissionData/MissionDataSlice';

export const store = configureStore({
  reducer: {
    Missions: missionReducer,
  },
});

export default store;
