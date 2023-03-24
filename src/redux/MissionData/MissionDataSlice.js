import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

export const fetchData = createAsyncThunk(
  'MissionData/fetchMission',
  async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
  },
);

const initialState = {
  MissionData: [],
  isLoading: false,
};

const MissionDataSlice = createSlice({
  name: 'MissionData',
  initialState,
  reducers: {
    reserveMission: (state, action) => ({
      ...state,
      MissionData: state.MissionData.map((mission) => {
        if (mission.mission_id === action.payload) {
          return {
            ...mission,
            reserved: !mission.reserved,
          };
        }
        return mission;
      }),
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchData.fulfilled, (state, action) => {
        const newState = { ...state, isLoading: false };
        const responseObject = action.payload;
        const res = responseObject;
        const newArray = [];
        res.forEach((data) => (
          newArray.push({
            mission_id: data.mission_id,
            mission_name: data.mission_name,
            description: data.description,
            reserved: false,
          })
        ));
        newState.MissionData = newArray;
        return newState;
      })
      .addCase(fetchData.rejected, (state, action) => {
        const newState = {
          ...state,
          state: 'failed',
          error: action.error.message,
        };
        return newState;
      });
  },
});

export const { reserveMission } = MissionDataSlice.actions;

export default MissionDataSlice.reducer;
