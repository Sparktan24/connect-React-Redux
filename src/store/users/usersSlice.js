import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://randomuser.me/api/?results=5';
const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
};

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (_, { rejectWithValue }) => {
    try {
      const resp = await axios(url);
      console.log('call', resp);
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.resp.data);
    }
  },
);

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload.results;
        state.isLoading = false;
        console.log('state users: ', state.users);
        console.log(
          'Printing results of fulfilled promise: ',
          action.payload.results,
        );
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // Error message or object
      });
  },

  /* extraReducers: {
    // () =>
    [getUsers.fulfilled]: (state, action) => {
      console.log(state);
      console.log(action);
    },
  }, */
});

/* builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      }); */

export const { increment, decrement, incrementByAmount } = usersSlice.actions;

export default usersSlice.reducer;
