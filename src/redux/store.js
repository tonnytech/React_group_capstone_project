import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './MissionData/MissionDataSlice';
import rocketReducer from './Rockets/Rocketslice';

export const store = configureStore({
  reducer: {
    Missions: missionReducer,
    Rockets: rocketReducer,
  },
});
export default store;
