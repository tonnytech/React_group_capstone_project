import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';
export const fetchRocketData = createAsyncThunk(
  'RocketData/fetchRocketData',
  async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
  },
);
const initialState = {
  RocketData: [],
  isLoading: false,
};
const RocketDataSlice = createSlice({
  name: 'RocketData',
  initialState,
  reducers: {
    updateData: (state, action) => {
      const newState = state;
      newState.books = [...state.books, action.payload];
    },
    rocketreserve: (state, action) => ({
      ...state,
      RocketData: state.RocketData.map((rocket) => {
        if (rocket.rocket_id === action.payload) {
          return {
            ...rocket,
            reserved: !rocket.reserved,
          };
        }
        return rocket;
      }),
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocketData.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchRocketData.fulfilled, (state, action) => {
        const newState = { ...state, isLoading: false };
        const responseObject = action.payload;
        const res = responseObject;
        const newArray = [];
        res.map((data) => {
          newArray.push({
            rocket_id: data.rocket_id,
            description: data.description,
            flickr_images: data.flickr_images[0],
            rocket_name: data.rocket_name,
            rocket_type: data.rocket_type,
            reserved: false,
          });
          return newArray;
        });
        newState.RocketData = newArray;
        return newState;
      })
      .addCase(fetchRocketData.rejected, (state, action) => {
        const newState = {
          ...state,
          state: 'failed',
          error: action.error.message,
        };
        return newState;
      });
  },
});
export const { updateData, rocketreserve } = RocketDataSlice.actions;
export default RocketDataSlice.reducer;
