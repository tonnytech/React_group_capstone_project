/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

export const fetchData = createAsyncThunk(
  'MissionData/fetchMission',
  async (_, API) => {
    try {
      const response = await axios(baseUrl);
      return response;
    } catch (error) {
      return API.rejectWithValue(
        error?.data?.message || 'Something went wrong!',
      );
    }
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
    updateData: (state, action) => {
      const newState = state;
      newState.books = [...state.books, action.payload];
    },
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
        const res = responseObject.data;
        let newArray = [];
        let dataObject = {};
        res.map((data)=> {
          newArray.push ({
            mission_id: data.mission_id,
            mission_name: data.mission_name,
            description: data.description,
          })
        })
        newState.MissionData = newArray;
        return newState;
      })
      .addCase(fetchData.rejected, (state, action) => {
        const newState = { ...state, state: 'failed', error: action.error.message };
        return newState;
      });
  },

});

export const { updateData } = MissionDataSlice.actions;

export default MissionDataSlice.reducer;
